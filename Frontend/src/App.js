import './App.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import AddTodoItemContent from './components/AddTodoItemContent';
import TodoItemsContent from './components/TodoItemsContent';
import WelcomeMessage from './components/WelcomeMessage';
import TodoListFooter from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Image src="clearPointLogo.png" fluid rounded />
          </Col>
        </Row>
        <Row>
          <Col>
            <WelcomeMessage />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTodoItemContent />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TodoItemsContent />
          </Col>
        </Row>
      </Container>
      <TodoListFooter />
    </div>
  );
};

export default App;
