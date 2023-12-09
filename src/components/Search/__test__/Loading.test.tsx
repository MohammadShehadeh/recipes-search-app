import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Loading } from '..';

describe('Loading', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Loading correctly', () => {
    render(<Loading length={6} data-testid="loading"  />);

    const LoadingElements = screen.queryAllByTestId("loading");
    expect(LoadingElements.length).toBe(6);
  });
});
