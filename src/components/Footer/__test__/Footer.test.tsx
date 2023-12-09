import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Footer } from '..';

jest.useFakeTimers().setSystemTime(new Date('2023-12-10'));

describe('Footer', () => {
  let dateNowSpy: any;

  beforeAll(() => {
    dateNowSpy = jest.spyOn(Date, 'now');
  });

  afterAll(() => {
    dateNowSpy.mockRestore();
  });

  it('should render to match snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Footer correctly', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Copyright © 2023 Mohammad Shehadeh. All rights reserved/i);
    expect(footerElement).toBeInTheDocument();
  });
});
