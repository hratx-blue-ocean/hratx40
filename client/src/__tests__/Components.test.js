import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import App from '../App';

afterEach(cleanup);

<<<<<<< HEAD

xit('CheckboxWithLabel changes the text after click', async () => {
  const { getByText } = render(<App />);

  const dolphin = await waitForElement(() => getByText(/dolphin/i))

  expect(dolphin).toBeTruthy();
=======
it('Should load the hero banner text', async () => {
  const { getByText } = render(<App />);
  const hero = await waitForElement(() => getByText(/throw your pebble/i))
  expect(hero).toBeTruthy();
});

// xit('CheckboxWithLabel changes the text after click', async () => {
//   const { getByText } = render(<App />);

//   const dolphin = await waitForElement(() => getByText(/dolphin/i))

//   expect(dolphin).toBeTruthy();
// });

it('Is a dummy test', async () => {
  expect(true).toBe(true);
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
});