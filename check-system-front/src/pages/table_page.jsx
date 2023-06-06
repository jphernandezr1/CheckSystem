import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Clients from "../components/clients";
import Checkgen from "../components/checkgen";
import Check from "../components/check";

function Tablepage() {
  const { tableId } = useParams();
  const [tip, setTip] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [checkgen, setcheck] = useState([]);
  const [clients, setUsers] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
  };

  const gettable = async () => {
    const url = `https://dashing-squirrel-63.hasura.app/api/rest/table/${tableId}`;
    await axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        setUsers(res.data["table"][0].table_clients);
      })
      .catch((err) => {
        alert("Error " + JSON.stringify(err));
      });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    var nombre = e.target.elements.client.value;
    if (nombre === "" || nombre === null) {
      nombre = "Client";
    }
    try {
      await axios.post(
        "https://dashing-squirrel-63.hasura.app/api/rest/client",
        {
          id_table: tableId,
          name: nombre,
        },
        {
          headers: headers,
        }
      );
    } catch (error) {
      console.log(error);
    }
    handleClient();
    gettable();
  };
  const handleCreateCheck = async (e) => {
    e.preventDefault();
    const tip_get = parseInt(e.target.elements.tip.value);
    setTip(tip_get);
    var valtable = 0;
    const url = `https://dashing-squirrel-63.hasura.app/api/rest/table/${tableId}`;
    await axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        valtable = parseInt(
          res.data["table"][0].Total_cuenta.replace(/[$,]/g, ""),
          10
        );
      })
      .catch((err) => {
        alert("Error " + JSON.stringify(err));
      });
    const tiptot = valtable * (tip_get / 100);
    const valtotal = valtable + tiptot;

    const response = await axios.put(
      "https://dashing-squirrel-63.hasura.app/api/rest/cerrar",
      {
        _eq: tableId,
        Total_paid: valtotal,
        Total_tip: tiptot,
      },
      {
        headers: headers,
      }
    );
    console.log(response.data["update_table"].returning[0]);
    setcheck(response.data["update_table"].returning[0]);
    gettable();
    handleTip();
    handleCheck();
  };
  const handleTip = () => {
    setShowTip(!showTip);
  };
  const handleClient = () => {
    setShowClient(!showClient);
  };
  const handleCheck = () => {
    setShowCheck(!showCheck);
  };
  const handleCheckClose = () => {
    setShowCheck(!showCheck);
    window.location.href = '/';
    };

  useEffect(() => {
    gettable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full h-full bg-white">
      {showCheck && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
        <div className="w-3/4 h-3/4 bg-white p-4 rounded-lg flex flex-col justify-center items-center">
          <div className="w-[75.0vw] h-[70.0vh] bg-white overflow-auto">
            <ul className="h-[70.0vh] w-[75.0vw] bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-sm leading-6 overflow-y-scroll">
              <li key={tableId} className="h-full w-full">
                <Checkgen
                  num_mesa={checkgen.num_mesa}
                  Total_cuenta={checkgen.Total_cuenta}
                  Total_tip={checkgen.Total_tip}
                  Total_paid={checkgen.Total_paid}
                />
              </li>
              {clients.map((client) => (
                <li key={client.id} className="h-full w-full">
                  <div>
                    <Check
                      tip={tip}
                      total_check={client.total_check}
                      id={client.id}
                      name={client.name}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-2 h-[5.0vh]">
            <button
              type="button"
              onClick={handleCheckClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>      
      )}
      {showTip && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <form onSubmit={handleCreateCheck} className="group relative">
              <label
                htmlFor="tableNumber"
                className="block mb-2 w-fit mr-8 pr-4"
              >
                Please enter the percentage of tip:
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 mt-2 mb-2 w-fit mr-8"
                type="number"
                id="tip"
                aria-label="Tip:"
                placeholder="Percentaje without %"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={handleTip}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showClient && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <form onSubmit={handleCreateUser} className="group relative">
              <label
                htmlFor="tableNumber"
                className="block mb-2 w-fit mr-8 pr-4"
              >
                Please enter the client Intials:
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 mt-2 mb-2 w-fit mr-8"
                type="text"
                id="client"
                aria-label="Client:"
                placeholder="Client initials"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={handleClient}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-evenly items-center w-3/4 h-full p-6 bg-white">
        <ul className="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
          {clients.map((client) => (
            <li key={client.id} className="h-full w-full">
              <div>
                <Clients
                  onUpdate={gettable}
                  total_check={client.total_check}
                  id={client.id}
                  id_table={tableId}
                  name={client.name}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-evenly w-1/4 h-full p-6 text-gray-700">
        <ul className="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 text-sm leading-6 w-full h-full">
          <li className="h-fit">
            <button
              onClick={handleClient}
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
              onClick={handleTip}
              className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              <svg
                className="group-hover:text-blue-500 mb-1 text-slate-400"
                width="20"
                height="20"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h12v2H6V4zm0 7h12v2H6v-2zm0 7h12v2H6v-2z" />
              </svg>
              Create check
            </button>
          </li>
          <li className="h-fit">
            <a
              href="/"
              className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              <svg
                className="group-hover:text-blue-500 mb-1 text-slate-400"
                width="20"
                height="20"
                fillRule="currentColor"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
              Back To Tables
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tablepage;
