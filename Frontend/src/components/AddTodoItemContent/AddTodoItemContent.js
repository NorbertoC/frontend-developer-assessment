import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { useTodoListStore } from '../../store/TodoListStore'
import './AddTodoItemContent.css'
import ErrorModal from '../ErrorModal'

const AddTodoItemContent = () => {
  const [description, setDescription] = useState('') // todo item description
  const [isEmpty, setIsEmpty] = useState(false) // whether the description is empty
  const [isSubmitted, setIsSubmitted] = useState(false) // whether the form has been submitted

  const errorMessage = useTodoListStore(state => state.errorMessage) // error message from the store
  const createTodoItem = useTodoListStore(state => state.createTodoItem) // function to create a new todo item

  // Strings
  const strings = {
    addItem: 'Add Item',
    descriptionLabel: 'Description',
    enterDescription: 'Enter description...',
    pleaseEnter: 'Please enter something...',
    addNewItem: 'Add New Item',
    clear: 'Clear'
  }

  // Handle description change event
  const handleDescriptionChange = event => {
    setDescription(event.target.value)
    setIsEmpty(event.target.value === '')
  }

  // Handle Add new item button click
  const handleAddNewItem = async () => {
    if (!description) {
      setIsEmpty(true)
      setIsSubmitted(true)
      return
    }

    await createTodoItem({ description, isCompleted: false })
    setDescription('')
    setIsEmpty(false)
    setIsSubmitted(false)
  }

  // Handle clear description button click
  const handleClearDescription = () => {
    setDescription('')
    setIsEmpty(false)
    setIsSubmitted(false)
  }

  return (
    <Container>
      <h1>{strings.addItem}</h1>
      <Form.Group as={Row} className={`${isEmpty && isSubmitted ? 'empty' : ''}`} controlId='formAddTodoItem'>
        <Form.Label column sm='2'>
          {strings.descriptionLabel}
        </Form.Label>
        <Col md='6'>
          <Form.Control
            type='text'
            placeholder={isEmpty && isSubmitted ? strings.pleaseEnter : strings.enterDescription}
            value={description}
            onChange={handleDescriptionChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3 offset-md-2 mt-3' controlId='formAddTodoItem'>
        <Stack direction='horizontal' gap={2}>
          <Button variant='primary' onClick={handleAddNewItem}>
            {strings.addNewItem}
          </Button>
          <Button variant='secondary' onClick={handleClearDescription}>
            {strings.clear}
          </Button>
        </Stack>
      </Form.Group>
      <ErrorModal show={!!errorMessage} errorMessage={errorMessage} />
    </Container>
  )
}

export default AddTodoItemContent
