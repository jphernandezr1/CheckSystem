/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Check from '../check'
import axios from 'axios';

jest.mock('axios');

test('renders content', async () => {
    const component = render( <Check name={"Juan"} total_check={"$20.0"} tip={10} id="4c098ecb9e9c"/> );
  expect(component.container).toBeInTheDocument();
  expect(component.container).toHaveTextContent("Juan");
  expect(component.container).toHaveTextContent("$20.0");
});