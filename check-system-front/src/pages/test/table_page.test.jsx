/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import axios from "axios";
import Tablepage from '../table_page'

jest.mock("axios");

describe("Tablepage", () => {

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        table: [
          {
            table_clients: [{total_check:"$20.0",id:"a1",name:"Juan" }],
          },
        ],
      },
    });
  });
  test('renders content', () =>
{
    const component = render( <Tablepage/> );

    expect(component.container).toBeInTheDocument();
    expect(component.container).toHaveTextContent("Create check")
    expect(component.container).toHaveTextContent("Back To Tables")
    expect(component.container).toHaveTextContent("New Client")
})
  test("renders Tablepage component", async () => {
    render(
          <Tablepage />
    );

    await screen.findByText("New Client");

    expect(screen.getByText("New Client")).toBeInTheDocument();
    expect(screen.getByText("Create check")).toBeInTheDocument();
    expect(screen.getByText("Back To Tables")).toBeInTheDocument();
  });
});
