/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Checkgen from '../checkgen'

test('renders content', () =>
{
    const component = render( <Checkgen num_mesa={7} Total_cuenta={"$20.0"} Total_tip={"$2.0"} Total_paid={"$22.0"}/> );

    expect(component.container).toHaveTextContent("Sub-total : $20.0")
    expect(component.container).toHaveTextContent("Tip : $2.0")
    expect(component.container).toHaveTextContent("Total : $22.0")
    expect(component.container).toHaveTextContent("Check for table 7")
    expect(component.container).toBeInTheDocument();

})