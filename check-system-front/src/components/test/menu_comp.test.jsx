/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Menucomp from '../menu_comp'

test('renders content', () =>
{
    const component = render( <Menucomp name="Menu" value="$20.0" id= "a1" id_client="a1" id_table="a1"/> );

    expect(component.container).toHaveTextContent("Menu")
    expect(component.container).toHaveTextContent("$20.0")
    expect(component.container).toBeInTheDocument();
})