import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import Background from '../../pages/Background/Background';

beforeEach(() => {
  cleanup();
});

test('if movies are fetch', async () => {
  const { getByTestId } = render(<Background />);

  const element = await waitForElement(() => getByTestId('Slider__Items'));
  expect(element).toBeDefined();
});

test('if default movie is episode 4', async () => {
  const { getByTestId } = render(<Background />);

  const element = await waitForElement(() => getByTestId('Background-4_bg'));
  expect(element).toBeDefined();
});

