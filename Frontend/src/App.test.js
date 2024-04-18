import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the footer text', () => {
  render(<App />);
  const footerElement = screen.getByText(/clearpoint.digital/i);
  expect(footerElement).toBeInTheDocument();
});

test('renders the welcome message', () => {
  render(<App />);
  const welcomeMessageElement = screen.getByText(/Todo List App/i)
  expect(welcomeMessageElement).toBeInTheDocument();
});


test('renders the todo items content', () => {
  render(<App />);
  const todoItemsContentElement = screen.getByText(/Showing \d+ Item\(s\)/i);
  expect(todoItemsContentElement).toBeInTheDocument();
});