import { Button, Table } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { useTodoListStore } from '../store/TodoList';

const TodoItemsContent = () => {
  const fetchTodoItems = useTodoListStore(state => state.fetchTodoItems);
  const todoItems = useTodoListStore(state => state.todoItems);
  
  useEffect(() => {
    fetchTodoItems()
  }, [])
  
  
  const handleRefreshClick = () => {
    fetchTodoItems()
  }
  
  const handleMarkAsCompleteClick = (item) => {
  
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
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>
              <Button variant="warning" size="sm" onClick={handleMarkAsCompleteClick(item)}>
                Mark as completed
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