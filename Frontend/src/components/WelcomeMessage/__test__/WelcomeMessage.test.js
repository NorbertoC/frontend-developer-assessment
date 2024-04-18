import { render, screen } from '@testing-library/react'
import WelcomeMessage from '../WelcomeMessage'

describe('Display all components', () => {
  test('renders the welcome message', () => {
    render(<WelcomeMessage />)
    const welcomeMessageElement = screen.getByText(/Todo List App/i)
    expect(welcomeMessageElement).toBeInTheDocument()
  })
})
