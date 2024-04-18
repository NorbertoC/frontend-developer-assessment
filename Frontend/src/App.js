import './App.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import React, { useEffect } from 'react';
import AddTodoItemContent from './components/AddTodoItemContent/AddTodoItemContent';
import TodoItemsContent from './components/TodoItemsContent/TodoItemsContent';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import TodoListFooter from './components/Footer/Footer';
import { useTodoListStore } from './store/TodoList';

const App = () => {
  const fetchTodoItems = useTodoListStore(state => state.fetchTodoItems);
  
  useEffect(() => {
    fetchTodoItems()
  }, [])
  
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
