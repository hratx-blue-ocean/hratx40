<<<<<<< HEAD
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
=======
import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'
>>>>>>> e4295b61458106a54a3001f3814b218b1faeadbe

// this adds custom jest matchers from jest-dom
import "jest-dom/extend-expect";
import App from "../App";

afterEach(cleanup);

// it("CheckboxWithLabel changes the text after click", async () => {
//   const { getByText } = render(<App />);

// xit('CheckboxWithLabel changes the text after click', async () => {
//     const { getByText } = render(<App/>,);

//     const dolphin = await waitForElement(() => getByText(/dolphin/i),)

//     expect(dolphin).toBeTruthy();
// });

<<<<<<< HEAD
xit("Is a dummy test", async () => {
  expect(true).toBe(true);
=======
xit('Is a dummy test', async () => {
    expect(true).toBe(true);
>>>>>>> e4295b61458106a54a3001f3814b218b1faeadbe
});
