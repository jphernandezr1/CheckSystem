/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Nav from '../nav'

test('renders content', () =>
{
    const component = render( <Nav/> );

    expect(component.container).toBeInTheDocument();
    expect(component.container).toHaveTextContent("Create Report")
    expect(component.container).toHaveTextContent("SplitMyBill")


})