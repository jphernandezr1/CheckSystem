/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tablepage from '../table_page'

test('renders content', () =>
{
    const component = render( <Tablepage/> );

    expect(component.container).toBeInTheDocument();
    expect(component.container).toHaveTextContent("Create check")
    expect(component.container).toHaveTextContent("Back To Tables")
    expect(component.container).toHaveTextContent("New Client")
})