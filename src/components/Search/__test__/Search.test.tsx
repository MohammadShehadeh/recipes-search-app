import renderer from 'react-test-renderer';

import { Search } from '..';

describe('Search', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
