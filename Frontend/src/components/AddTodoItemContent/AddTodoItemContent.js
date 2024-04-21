import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { useTodoListStore } from '../../store/TodoListStore'
import './AddTodoItemContent.css'
import ErrorModal from '../ErrorModal'

const AddTodoItemContent = () => {
  const [description, setDescription] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const errorMessage = useTodoListStore((state) => state.errorMessage)
  const createTodoItem = useTodoListStore((state) => state.createTodoItem)

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
    setIsEmpty(event.target.value === '')
  }

  const handleAdd = () => {
    if (!description) {
      setIsEmpty(true)
      setIsSubmitted(true)
      return
    }

    createTodoItem({ description, isCompleted: false })
    setDescription('')
    setIsEmpty(false)
    setIsSubmitted(false)
  }

  const handleClear = () => {
    setDescription('')
    setIsEmpty(false)
    setIsSubmitted(false)
  }

  return (
    <Container>
      <h1>Add Item</h1>
      <Form.Group as={Row} className={`${isEmpty && isSubmitted ? 'empty' : ''}`} controlId='formAddTodoItem'>
        <Form.Label column sm='2'>
          Description
        </Form.Label>
        <Col md='6'>
          <Form.Control
            type='text'
            placeholder={isEmpty && isSubmitted ? 'Please enter something...' : 'Enter description...'}
            value={description}
            onChange={handleDescriptionChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3 offset-md-2 mt-3' controlId='formAddTodoItem'>
        <Stack direction='horizontal' gap={2}>
          <Button variant='primary' onClick={handleAdd}>
            Add New Item
          </Button>
          <Button variant='secondary' onClick={handleClear}>
            Clear
          </Button>
        </Stack>
      </Form.Group>
      <ErrorModal show={!!errorMessage} errorMessage={errorMessage} />
    </Container>
  )
}

export default AddTodoItemContent
