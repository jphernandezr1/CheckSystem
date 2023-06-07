import Table from "../components/table.jsx";
import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Tablespage() {
  const [tab, setTab] = useState([]);
  const [tables, setTables] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "LOK90YTYrwvGG722wbLUzfFp4G7pXQK7MWqpq8NU5ElsJbHzmO2A96LP1Cb0X1MC",
  };

  const gettables = async () => {
    const url = "https://dashing-squirrel-63.hasura.app/api/rest/tables";
    await axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        setTables(res.data["table"]);
        setTab(res.data["table"]);
      })
      .catch((err) => {
        alert("Error " + JSON.stringify(err));
      });
  };
  useEffect(() => {
    gettables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mesa = e.target.value;
    if (mesa === "") {
      setTables(tab);
    } else {
      setTables(tables.filter((item) => item.num_mesa === parseInt(mesa)));
    }
  };
  const handleForm = () => {
    setShowForm(!showForm);
  };
  const createTable = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://dashing-squirrel-63.hasura.app/api/rest/table",
        {
            num_mesa: parseInt(e.target.elements.tableNumber.value)
        },
        {
            headers: headers,
        }
      );
    } catch (error) {
      console.log(error);
    }
    gettables();
    handleForm();
  };

  return (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <form onSubmit={handleSubmit} className="group relative">
          <svg
            width="20"
            height="20"
            fillRule="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="number"
            aria-label="Find Table"
            placeholder="Find Table"
            onKeyDown={handleKeyDown}
          />
        </form>
      </header>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <form onSubmit={createTable} className="group relative">
              <label
                htmlFor="tableNumber"
                className="block mb-2 w-fit mr-8 pr-4"
              >
                Please enter the table number:
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 mt-2 mb-2 w-fit mr-8"
                type="number"
                id="tableNumber"
                aria-label="Table Number:"
                placeholder="Table Number"
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
                  onClick={handleForm}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ul className="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
        {tables
          .filter((item) => item.active === true)
          .map((table) => (
            <li key={table.id} className="h-fit">
              <div>
                <Table
                  link={`table/${table.id}`}
                  table_num={table.num_mesa}
                  total_price={table.Total_cuenta}
                />
              </div>
            </li>
          ))}
        <li className="h-fit">
          <button
            onClick={handleForm}
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
            New table
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Tablespage;
