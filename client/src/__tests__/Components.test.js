import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import App from '../App';

afterEach(cleanup);

it('Should load the hero banner text', async () => {
  const { getByText } = render(<App />,);
  const hero = await waitForElement(() => getByText(/throw your pebble/i))
  expect(hero).toBeTruthy();
});