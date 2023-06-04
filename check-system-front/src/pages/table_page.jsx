import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Clients from "../components/clients";

function Table_page() {
  const { tableId } = useParams();
  const [clients, setUsers] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
  };

  useEffect(() => {
    const gettable = async () => {
      const url = `https://dashing-squirrel-63.hasura.app/api/rest/table/${tableId}`;
      await axios
        .get(url, {
          headers: headers,
        })
        .then((res) => {
          console.log(res.data["table"][0].table_clients);
          setUsers(res.data["table"][0].table_clients);
        })
        .catch((err) => {
          alert("Error " + JSON.stringify(err));
        });
    };
    gettable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateUser = (e) => {};
  const handleCreateCheck = () => {};

  return (
    <div className="flex w-full h-full bg-white">
      <div className="flex flex-col justify-evenly items-center w-3/4 h-full p-6 bg-white">
            <ul className="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
            {clients.map((client) => (
                    <li key={client.id} className="h-full w-full">
                        <div>
                        <Clients total_check={client.total_check} />
                        </div>
                    </li>
                    ))}
            </ul>
      </div>
      <div className="flex flex-col items-center justify-evenly w-1/4 h-full p-6 text-gray-700">
        <ul className="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 text-sm leading-6 w-full h-full">
          <li className="h-fit">
            <button
              onClick={handleCreateUser}
              className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              <svg
                className="group-hover:text-blue-500 mb-1 text-slate-400"
                width="20"
                height="20"
                fillRule="currentColor"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New Client
            </button>
          </li>
          <li className="h-fit">
            <button
              onClick={handleCreateCheck}
              className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              <svg
                className="group-hover:text-blue-500 mb-1 text-slate-400"
                width="20"
                height="20"
                fillRule="currentColor"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Create check
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Table_page;
