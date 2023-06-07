/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Table from '../table'

test('renders content', () =>
{

    const component = render( <Table link="/" table_num={7} total_price= "$20.0"/> );

    expect(component.container).toHaveTextContent("$20.0")
    expect(component.container).toHaveTextContent("7")
    fireEvent.click(component.getByText('7'))
    expect(component.container.querySelector('a').getAttribute('href')).toBe('/');

})