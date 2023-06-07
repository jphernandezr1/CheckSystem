/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AlertBox from '../AlertBox'

test('renders content', () =>
{
    const component = render( <AlertBox message="message alert box" onClose={()=>{}} /> );
    expect(component.container).toHaveTextContent("message alert box")
    expect(component.container).toBeInTheDocument();

})