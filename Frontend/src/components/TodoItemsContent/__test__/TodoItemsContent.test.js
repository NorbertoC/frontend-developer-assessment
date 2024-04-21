import React from 'react'
import { render, screen } from '@testing-library/react'
import TodoItemsContent from '../TodoItemsContent'
import { useTodoListStore } from '../../../store/TodoListStore'

describe('Test todo list', () => {
  test('renders the todo items list component', () => {
    render(<TodoItemsContent />)
    const todoItemsContentElement = screen.getByText(/Showing \d+ Item\(s\)/i)

    expect(todoItemsContentElement).toBeInTheDocument()
  })

  test('renders the todo items list with multiple items', () => {
    useTodoListStore.setState({
      todoItems: [
        {
          id: 'asdf',
          description: 'Buy food',
          isCompleted: false
        },
        {
          id: 'qwer',
          description: 'Buy drinks',
          isCompleted: true
        }
      ]
    })

    render(<TodoItemsContent />)

    const tableRows = screen.getAllByRole('row')
    expect(tableRows).toHaveLength(3)
    expect(tableRows[1]).toHaveTextContent('Buy food')
    expect(tableRows[2]).toHaveTextContent('Buy drinks')
  })

  test("Should display 'Mark as completed' if isCompleted is 'false'", () => {
    useTodoListStore.setState({
      todoItems: [
        {
          id: 'asdf',
          description: 'Buy food',
          isCompleted: false
        }
      ]
    })
    render(<TodoItemsContent />)
    const markAsCompletedButton = screen.getByText(/Mark as completed/i)

    expect(markAsCompletedButton).toBeInTheDocument()
  })

  test("Should display 'Mark as not completed' if isCompleted is 'true'", async () => {
    useTodoListStore.setState({
      todoItems: [
        {
          id: 'asdf',
          description: 'Buy food',
          isCompleted: true
        }
      ]
    })
    render(<TodoItemsContent />)
    const markAsCompletedButton = screen.getByText(/Mark as not completed/i)

    expect(markAsCompletedButton).toHaveTextContent(/Mark as not completed/i)
  })
})
