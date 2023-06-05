import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Menucomp from "./menu_comp";

function Menu(props) {
  const [menu, setMenu] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
  };

  const getmenu = async () => {
    const url = `https://dashing-squirrel-63.hasura.app/api/rest/products`;
    await axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        setMenu(res.data["products"]);
      })
      .catch((err) => {
        alert("Error " + JSON.stringify(err));
      });
  };

  useEffect(() => {
    getmenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="h-full bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-sm leading-6 overflow-y-scroll">
      {menu.map((item) => (
        <li key={item.id} className="h-full w-full">
          <Menucomp
            name={item.name}
            value={item.value}
            id={item.id}
            id_table={props.id_table}
            id_client={props.id_client}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
