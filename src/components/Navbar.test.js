import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component from './NavBar';

test('renders Component with title "My Recipe"', () => {
  render(<Component search={jest.fn()} />);

  const titleElement = screen.getByTestId('my-recipe');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent('My Recipe');
});

test('renders search form', () => {
  render(<Component search={jest.fn()} />);

  const formElement = screen.getByTestId('form-search');
  expect(formElement).toBeInTheDocument();
});

test('allows user to type in search input', () => {
  render(<Component search={jest.fn()} />);

  const searchInput = screen.getByPlaceholderText('Recipe Name');
  fireEvent.change(searchInput, { target: { value: 'Pasta' } });

  expect(searchInput.value).toBe('Pasta');
});

test('submits search form and calls search function', () => {
  const mockSearch = jest.fn();
  render(<Component search={mockSearch} />);

  const searchInput = screen.getByPlaceholderText('Recipe Name');
  fireEvent.change(searchInput, { target: { value: 'Pasta' } });

  const formElement = screen.getByTestId('form-search');
  fireEvent.submit(formElement);

  expect(mockSearch).toHaveBeenCalledWith('Pasta');
  expect(searchInput.value).toBe(''); 
});
