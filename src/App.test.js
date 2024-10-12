import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const mockRecipes = {
  recipes: [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      tags: ["Pizza", "Italian"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      tags: ["Pasta", "Italian"],
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4.5,
    },
  ],
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockRecipes),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test('fetches recipes', async () => {
  render(<App />);
  expect(screen.getByTestId('my-recipe')).toBeInTheDocument();
  
  const bannerImage = screen.getByTestId('image-banner');
  expect(bannerImage).toBeInTheDocument();
  expect(bannerImage).toHaveAttribute('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg');

  await waitFor(() => {
    expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();

  });
});

test('search function', async () => {
  render(<App />);
  
  await waitFor(() => {
    expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();

  });
  
  const searchInput = screen.getByPlaceholderText('Recipe Name');
  fireEvent.change(searchInput, { target: { value: 'Classic Margherita Pizza' } });

  const searchForm = screen.getByTestId('form-search');
  fireEvent.submit(searchForm);
  
  await waitFor(() => {
    expect(screen.getByText('Classic Margherita Pizza')).toBeInTheDocument();
  });
});
