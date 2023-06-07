/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Clients from '../clients'

test('renders content', () =>
{
    const component = render( <Clients onUpdate={()=>{}} total_check="$20.0" id="a1" id_table="a1" name="JS"/> );

    expect(component.container).toHaveTextContent("$20.0");
    expect(component.container).toHaveTextContent("JS");
    expect(component.container).toHaveTextContent("Add product");
    expect(component.container).toBeInTheDocument();

})