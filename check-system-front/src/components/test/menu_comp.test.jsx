/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Menucomp from "../menu_comp";
// Mock axios post and get methods
jest.mock("axios");

describe("Menucomp", () => {
  const props = {
    id_client: "123",
    id_table: "456",
    name: "Menu Item",
    value: "Item Value",
    id: "789",
  };
  test("renders content", () => {
    const component = render(
      <Menucomp
        name="Menu"
        value="$20.0"
        id="a1"
        id_client="a1"
        id_table="a1"
      />
    );
    const button = screen.getByText("Add Product");

    expect(component.container).toHaveTextContent("Menu");
    expect(component.container).toHaveTextContent("$20.0");
    expect(component.container).toBeInTheDocument();
    fireEvent.click(button);
  });

  test("add product button", async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        insert_client_products: {
          returning: [
            {
              products_client: {
                value: "$10",
              },
            },
          ],
        },
      },
    });

    axios.get.mockResolvedValueOnce({
      data: {
        table: [
          {
            Total_cuenta: "$20",
          },
        ],
      },
    });
    axios.get.mockResolvedValueOnce({
      data: {
        clients: [
          {
            total_check: "$30",
          },
        ],
      },
    });

    render(<Menucomp {...props} />);

    const addProductButton = screen.getByText("Add Product");
    fireEvent.click(addProductButton);
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "https://dashing-squirrel-63.hasura.app/api/rest/add",
        {
          id_client: "123",
          id_product: "789",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
          },
        }
      );
      expect(axios.get).toHaveBeenCalledWith(
        "https://dashing-squirrel-63.hasura.app/api/rest/table/456",
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
          },
        }
      );
      expect(axios.get).toHaveBeenCalledWith(
        "https://dashing-squirrel-63.hasura.app/api/rest/client/123",
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
          },
        }
      );
      expect(axios.put).toHaveBeenCalledWith(
        "https://dashing-squirrel-63.hasura.app/api/rest/add",
        {
          _eq: "123",
          total_check: 40,
          Total_cuenta: 30,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
          },
        }
      );
    });

    expect(screen.getByText("Menu Item")).toBeInTheDocument();
  });
});
