import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Header correctly', () => {
    render(<App />);
    const headerElement = screen.getByText(/Search Recipes/i);
    expect(headerElement).toBeInTheDocument();
  });
});
