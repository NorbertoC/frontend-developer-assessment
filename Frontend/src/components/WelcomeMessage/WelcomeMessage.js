import React from 'react'
import { Alert } from 'react-bootstrap'

const WelcomeMessage = () => {
  // Strings
  const strings = {
    heading: 'Todo List App',
    message: `Welcome to the ClearPoint frontend technical test. We like to keep things simple, yet clean so your
      task(s) are as follows:`,
    tasks: [
      'Add the ability to add (POST) a Todo Item by calling the backend API',
      'Display (GET) all the current Todo Items in the below grid and display them in any order you wish',
      "Bonus points for completing the 'Mark as completed' button code for allowing users to update and mark a specific Todo Item as completed and for displaying any relevant validation errors/messages from the API in the UI",
      'Feel free to add unit tests and refactor the component(s) as best you see fit'
    ]
  }

  return (
    <Alert variant='success'>
      <Alert.Heading>{strings.heading}</Alert.Heading>
      {strings.message}
      <br />
      <br />
      <ol className='list-left'>
        {strings.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </Alert>
  )
}

export default WelcomeMessage
