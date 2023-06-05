import "../index.css";
import axios from "axios";
import AlertBox from "./AlertBox";
import React, { useState } from "react";



function Menucomp(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
  };

  const handleAddProduct = async (idProduct) => {
    try {
      const response = await axios.post(
        "https://dashing-squirrel-63.hasura.app/api/rest/add",
        {
          id_client: props.id_client,
          id_product: idProduct,
        },
        {
          headers: headers,
        }
      );
      const val =
        response.data.insert_client_products.returning[0].products_client.value;
      actExpenses(val);
    } catch (error) {
      alert("Error " + JSON.stringify(error));
    }
  };
  const actExpenses = async (value) => {
    var valtable = parseInt(value.replace(/[$,]/g, ""), 10);
    var valcli = parseInt(value.replace(/[$,]/g, ""), 10);
    const url = `https://dashing-squirrel-63.hasura.app/api/rest/table/${props.id_table}`;
    await axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        valtable += parseInt(
          res.data["table"][0].Total_cuenta.replace(/[$,]/g, ""),
          10
        );
      })
      .catch((err) => {
        alert("Error " + JSON.stringify(err));
      });
    const url1 = `https://dashing-squirrel-63.hasura.app/api/rest/client/${props.id_client}`;
    await axios
      .get(url1, {
        headers: headers,
      })
      .then((res) => {
        valcli += parseInt(
          res.data["clients"][0].total_check.replace(/[$,]/g, ""),
          10
        );
      })
      .catch((err) => {
        alert("Error " + JSON.stringify(err));
      });
    await axios.put(
      "https://dashing-squirrel-63.hasura.app/api/rest/add",
      {
        _eq: props.id_client,
        total_check: valcli,
        Total_cuenta: valtable,
      },
      {
        headers: headers,
      }
    );
    updateAlert();
  };
  const updateAlert=()=>
  {
    setShowSuccess(!showSuccess);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">{props.name}</h2>
      <p className="text-gray-600 mb-4">{props.value}</p>
      <button
        onClick={() => handleAddProduct(props.id)}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Add Product
      </button>
      {showSuccess &&  <AlertBox
          message="Product added succesfully"
          onClose={updateAlert}
        />}
    </div>
  );
}

export default Menucomp;
