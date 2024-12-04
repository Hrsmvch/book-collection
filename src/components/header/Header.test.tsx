// components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from './index';
import '@testing-library/jest-dom'; // Для додаткових матчерів, таких як toBeInTheDocument

describe('Header', () => {
  it('should render the header with text "My books"', () => {
    render(<Header />);

    // Перевіряємо, чи відображається текст "My books"
    expect(screen.getByText('My books')).toBeInTheDocument();
  });

  it('should apply the correct class to the header', () => {
    render(<Header />);

    // Перевіряємо, чи застосовано правильний клас
    const headerElement = screen.getByText('My books');
    expect(headerElement).toHaveClass('header'); // Перевіряємо, чи є клас "header"
  });
});
