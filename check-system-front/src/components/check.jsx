import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Check(props) {
  const [tip_tot, settip] = useState(0);
  const [tot_tot, settot] = useState(0);

  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
  };

  const updateCli = async () => {
    const tip = (parseInt(props.total_check.replace(/[$,]/g, "")))*(props.tip/100);
    settip(tip)
    const total = (parseInt(props.total_check.replace(/[$,]/g, "")))+tip;
    settot(total.toFixed(2))
    const response = await axios.put(
      "https://dashing-squirrel-63.hasura.app/api/rest/cerrarin",
      {
        _eq: props.id,
        total_tip: tip,
      },
      {
        headers: headers,
      }
    );
    settip(response.data["update_clients"].returning[0].total_tip)
    };
   
  useEffect(() => {
    updateCli();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-2">Check for client {props.name}</h2>
    <p className="text-gray-600 mb-4">Sub-total : {props.total_check}</p>
    <p className="text-gray-600 mb-4">Tip : {tip_tot}</p>
    <p className="text-gray-600 mb-4">Total : ${tot_tot}</p>
  </div>
  );
}

export default Check;
