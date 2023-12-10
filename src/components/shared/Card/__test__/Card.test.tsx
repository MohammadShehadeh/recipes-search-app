import renderer from 'react-test-renderer';

import { Card } from '..';

const cardMock = {
  image: 'image',
  id: 10,
  title: 'title',
};

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  Link: ({ children }: any) => <a data-mocked-link>{children}</a>,
}));

describe('Card', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Card {...cardMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
