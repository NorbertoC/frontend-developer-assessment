import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Add item to the list', () => {
  test('Add item to the list and check if the item is visible', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter description.../i);
    const buttonElement = screen.getByRole('button', { name: /Add new item/i });
    
    fireEvent.change(inputElement, { target: { value: "Go Grocery shopping" } });
    fireEvent.click(buttonElement);
    
    const tdElement = await screen.findByText("Go Grocery shopping")
    
    expect(tdElement).toBeInTheDocument();
  });
})