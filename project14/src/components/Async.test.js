import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }]
    });
    render(<Async />);

    // findAllByRole() used for async operations, because it tries to get those elements multiple times
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
