/* eslint-disable jsx-a11y/anchor-is-valid */
import renderer from 'react-test-renderer';
import { Results } from '..';

const recipesMock = [
  {
    image: 'image',
    id: 10,
    title: 'title',
  },
];

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  Link: ({ children }: any) => <a data-mocked-link>{children}</a>,
}));

describe('Results', () => {
  it('should render "Loading" to match snapshot', () => {
    const tree = renderer.create(<Results isLoading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render "Results" to match snapshot', () => {
    const tree = renderer.create(<Results recipes={recipesMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
