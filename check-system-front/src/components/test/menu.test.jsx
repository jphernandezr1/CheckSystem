/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Menu from '../menu'

test('renders content', () =>
{
    const component = render( <Menu id_table="a1" id_client="a1" /> );

    expect(component.container).toBeInTheDocument();
})