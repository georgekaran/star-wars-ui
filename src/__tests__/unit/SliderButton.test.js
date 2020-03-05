import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SliderButton from '../../components/CustomSlider/SliderButton';

beforeEach(() => {
  cleanup();
});

test('renders SliderButton and onClick', async () => {
  const foo = jest.fn();
  const { getByTestId } = render(<SliderButton type="Prev" onClick={foo} />);

  expect(getByTestId('Slider__Button__Prev')).toBeDefined();
  fireEvent.click(getByTestId('Slider__Button__Prev'))
  expect(foo).toHaveBeenCalled();
});

