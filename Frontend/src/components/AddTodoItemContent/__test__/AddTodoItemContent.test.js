import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddTodoItemContent from '../AddTodoItemContent'
import { useTodoListStore } from '../../../store/TodoListStore'

describe('Add input', () => {
  afterAll(() => {
    const todoListStore = useTodoListStore.getState()
    todoListStore.todoItems = []
  })

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

  test('Should have empty input when add new item button is clicked', async () => {
    render(<AddTodoItemContent />)
    const inputElement = screen.getByPlaceholderText(/Enter description.../i)
    const buttonElement = screen.getByRole('button', { name: /Add new item/i })

    fireEvent.change(inputElement, { target: { value: 'Buy Groceries' } })
    fireEvent.click(buttonElement)

    await waitFor(() => expect(inputElement.value).toBe(''))

    expect(inputElement.value).toBe('')
  })

  test('renders error message when input is empty', async () => {
    render(<AddTodoItemContent />)
    const inputElement = screen.getByPlaceholderText(/Enter description.../i)

    expect(inputElement).toBeInTheDocument()

    const buttonElement = screen.getByRole('button', { name: /Add New Item/i })
    fireEvent.click(buttonElement)

    await expect(inputElement.placeholder).toBe('Please enter something...')
  })

  test('Should clear input when Clear button is clicked', async () => {
    render(<AddTodoItemContent />)
    const inputElement = screen.getByPlaceholderText(/Enter description.../i)
    const clearButtonElement = screen.getByRole('button', { name: /Clear/i })

    fireEvent.change(inputElement, { target: { value: 'Buy Groceries' } })
    fireEvent.click(clearButtonElement)

    await waitFor(() => expect(inputElement.value).toBe(''))

    expect(inputElement.value).toBe('')
  })
})
