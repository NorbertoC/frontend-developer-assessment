import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import React, { useState } from 'react';
import { useTodoListStore } from '../../store/TodoListStore';

const AddTodoItemContent = () => {
  const [description, setDescription] = useState('');
  const createTodoItem = useTodoListStore(state => state.createTodoItem);
  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  const handleAdd = () => {
      if (!description) return;
      createTodoItem({ description });
      setDescription('');
  }
  
  function handleClear() {
    setDescription('');
  }
  
  return (
    <Container>
      <h1>Add Item</h1>
      <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col md="6">
          <Form.Control
            type="text"
            placeholder="Enter description..."
            value={description}
            onChange={handleDescriptionChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" onClick={() => handleAdd()}>
            Add New Item
          </Button>
          <Button variant="secondary" onClick={() => handleClear()}>
            Clear
          </Button>
        </Stack>
      </Form.Group>
    </Container>
  );
};

export default AddTodoItemContent;