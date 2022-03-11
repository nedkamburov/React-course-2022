import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// Suite
describe('Greeting component', () => {
  // Test #1
  test('renders Hello World as a text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders text "it\'s good to see you" if button has not been pressed', () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText('it\'s good to see you', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  })

  test('renders "Changed!" if button has been pressed', () => {
    render(<Greeting />);

    // click button
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText('Changed!');
    expect(paragraphElement).toBeInTheDocument();
  })

  test('doesn\'t render "it\'s good to see you" if button has been pressed', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText('it\'s good to see you', { exact: false });
    expect(paragraphElement).toBeNull();
  })

})