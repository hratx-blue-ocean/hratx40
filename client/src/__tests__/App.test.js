import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import App from '../App';

afterEach(cleanup);

<<<<<<< HEAD
it('Should pass', async () => {
    const { getByText } = render(<App />,);
    const hero = await waitForElement(() => getByText(/Welcome/i))
    expect(hero).toBeTruthy();
=======

xit('CheckboxWithLabel changes the text after click', async () => {
    const { getByText } = render(<App/>,);

    const dolphin = await waitForElement(() => getByText(/dolphin/i),)

    expect(dolphin).toBeTruthy();
>>>>>>> b9763b34138a325bae22f615a5e0056e24775b1b
});