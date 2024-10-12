import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the component Card with given props', () => {
  render(<Card el={el} />);

  const image = screen.getByTestId('img-recipe-1');
  expect(image).toHaveAttribute('src', el.image);
  expect(image).toHaveAttribute('alt', el.name);

  const title = screen.getByTestId('title-recipe-1');
  expect(title).toHaveTextContent(el.name);

  const rating = screen.getByTestId('rating-recipe-1');
  expect(rating).toHaveTextContent(el.rating.toString());

  const tag1 = screen.getByTestId('tag-recipe-Tag1');
  const tag2 = screen.getByTestId('tag-recipe-Tag2');
  expect(tag1).toHaveTextContent('Tag1');
  expect(tag2).toHaveTextContent('Tag2');
  
  const tag3 = screen.queryByTestId('tag-recipe-Tag3');
  expect(tag3).not.toBeInTheDocument();

  const link = screen.getByTestId('link-recipe-1');
  expect(link).toHaveAttribute('href', 'https://dummyjson.com/recipes/1');
  expect(link).toHaveTextContent('READ MORE');
});