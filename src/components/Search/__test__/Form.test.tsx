import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Form } from '..';

const submitHandlerMock = jest.fn();

describe('Form', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Form submitHandler={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle submit button correctly', () => {
    render(<Form submitHandler={submitHandlerMock} />);

    const buttonElement = screen.queryAllByRole('button');
    const inputElement = screen.getByPlaceholderText('Type recipe name...');

    userEvent.type(inputElement, 'value');
    userEvent.click(buttonElement[0]);
    expect(submitHandlerMock).toHaveBeenCalledWith('value');
  });

  it('should handle clear button correctly', () => {
    render(<Form submitHandler={submitHandlerMock} />);

    const buttonElement = screen.queryAllByRole('button');
    const inputElement = screen.getByPlaceholderText('Type recipe name...');

    userEvent.type(inputElement, 'value');
    userEvent.click(buttonElement[1]);
    expect(inputElement).toHaveValue('');
    expect(submitHandlerMock).toHaveBeenCalledWith('');
  });
});
