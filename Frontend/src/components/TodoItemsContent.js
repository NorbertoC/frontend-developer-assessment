import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useTodoListStore } from '../store/TodoList';
import './TodoItemsContent.css';

const TodoItemsContent = () => {
  const fetchTodoItems = useTodoListStore(state => state.fetchTodoItems);
  const todoItems = useTodoListStore(state => state.todoItems);
  const updateTodoItem = useTodoListStore(state => state.updateTodoItem);
  const removeTodoItem = useTodoListStore(state => state.removeTodoItem);
  
  const handleRefreshClick = () => {
    fetchTodoItems();
  }
  
  const handleMarkAsCompleteClick = (item) => {
    updateTodoItem(item.id, { ...item, isCompleted: !item.isCompleted });
  }
  
  const handleDeleteItem = (item) => {
    removeTodoItem(item.id);
  }
  
  return (
    <>
      <h1>
        Showing {todoItems.length} Item(s){' '}
        <Button variant="primary" className="pull-right" onClick={handleRefreshClick}>
          Refresh
        </Button>
      </h1>
      
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {todoItems.map((item) => (
          <tr key={item.id} style={{ backgroundColor: item.isCompleted ? 'green' : 'inherit' }}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td className="action">
              <Button variant="warning" size="sm" className="action-button" onClick={() => handleMarkAsCompleteClick(item)}>
                {item.isCompleted ? 'Mark as not completed' : 'Mark as completed' }
              </Button>
              <Button variant="warning" size="sm" onClick={() => handleDeleteItem(item)}>
                Delete item
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
};

export default TodoItemsContent;