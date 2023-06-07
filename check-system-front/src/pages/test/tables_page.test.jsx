/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tablespage from '../tables_page'

test('renders content', () =>
{
    const component = render( <Tablespage/> );

    expect(component.container).toBeInTheDocument();
    expect(component.container).toHaveTextContent("New table")
})