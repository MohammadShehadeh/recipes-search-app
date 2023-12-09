import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Hero } from '..';

describe('Hero', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Hero correctly', () => {
    render(<Hero />);
    const heroElement = screen.getByText(
      /Discover Culinary Excellence 🍽️ Your Gateway to Limitless Recipes!/i
    );
    expect(heroElement).toBeInTheDocument();
  });
});
