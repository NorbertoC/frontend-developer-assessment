import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useTodoListStore } from '../../store/TodoListStore'
import './TodoItemsContent.css'

const TodoItemsContent = () => {
  // Retrieve todo items and store functions from Zustand store
  const todoItems = useTodoListStore(state => state.todoItems)
  const fetchTodoItems = useTodoListStore(state => state.fetchTodoItems)
  const updateTodoItem = useTodoListStore(state => state.updateTodoItem)
  const removeTodoItem = useTodoListStore(state => state.removeTodoItem)

  // Strings
  const strings = {
    showingItems: 'Showing',
    item: 'item(s)',
    refresh: 'Refresh',
    id: 'Id',
    description: 'Description',
    action: 'Action',
    markNotCompleted: 'Mark as not completed',
    markCompleted: 'Mark as completed',
    deleteItem: 'Delete item'
  }

  // Refresh todo items
  const handleRefreshClick = async () => {
    await fetchTodoItems()
  }

  // Mark an item as complete or not complete
  const handleMarkAsCompleteClick = async item => {
    await updateTodoItem(item)
  }

  // Delete a todo item
  const handleDeleteItem = async item => {
    await removeTodoItem(item.id)
  }

  return (
    <>
      <h1>
        {strings.showingItems} {todoItems.length} {strings.item}{' '}
        <Button variant='primary' className='pull-right' onClick={handleRefreshClick}>
          {strings.refresh}
        </Button>
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{strings.id}</th>
            <th>{strings.description}</th>
            <th>{strings.action}</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td style={{ textDecoration: item.isCompleted ? 'line-through' : 'inherit' }}>{item.description}</td>
              <td className='action'>
                <Button
                  variant='warning'
                  size='sm'
                  className='action-button'
                  onClick={() => handleMarkAsCompleteClick(item)}
                >
                  {item.isCompleted ? strings.markNotCompleted : strings.markCompleted}
                </Button>
                <Button variant='danger' size='sm' onClick={() => handleDeleteItem(item)}>
                  {strings.deleteItem}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TodoItemsContent
