import renderer from 'react-test-renderer';

import { Title } from '..';

describe('Title', () => {
  it('should render "primary" to match snapshot', () => {
    const tree = renderer.create(<Title variant="primary">Primary Title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render "secondary" to match snapshot', () => {
    const tree = renderer.create(<Title variant="secondary">Secondary Title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
