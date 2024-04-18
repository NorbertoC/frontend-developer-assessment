import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import AddTodoItemContent from '../AddTodoItemContent'

describe('Add input', () => {
  test('renders the add item component', () => {
    render(<AddTodoItemContent />)
    const addButton = screen.getByText(/Add New Item/i)

    expect(addButton).toBeInTheDocument()
  })

  test('Should render input element', () => {
    render(<AddTodoItemContent />)
    const inputElement = screen.getByPlaceholderText(/Enter description.../i)

    fireEvent.change(inputElement, { target: { value: 'Buy Groceries' } })

    expect(inputElement.value).toBe('Buy Groceries')
  })

  test('Should have empty input when add new item button is clicked', () => {
    render(<AddTodoItemContent />)
    const inputElement = screen.getByPlaceholderText(/Enter description.../i)
    const buttonElement = screen.getByRole('button', { name: /Add new item/i })

    fireEvent.change(inputElement, { target: { value: 'Buy Groceries' } })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('')
  })
})
