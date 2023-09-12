import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test('renders add to list button', () => {
    render(<App />);
    const helloElement = screen.getByText(/Add to list/i);
    expect(helloElement).toBeInTheDocument();
});