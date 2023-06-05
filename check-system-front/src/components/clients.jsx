import React from "react";
import { useState } from "react";
import Menu from "./menu";


function Clients({ onUpdate,total_check, id, id_table, name}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
    onUpdate();
  };
  return (
    <section>
      {showMenu && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
        <div className="w-3/4 h-3/4 bg-white p-4 rounded-lg relative">
            <div className="py-2">
            <button
                className="absolute top-2 right-2 text-gray-700"
                onClick={handleMenu}
            >
              <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                  d="M6.707 6.293a1 1 0 010-1.414 1 1 0 011.414 0L12 10.586l3.879-3.879a1 1 0 011.414 1.414L13.414 12l3.879 3.879a1 1 0 11-1.414 1.414L12 13.414l-3.879 3.879a1 1 0 01-1.414-1.414L10.586 12 6.707 8.121a1 1 0 010-1.414z"
              />
              </svg>
            </button>
        </div>
          <div className="fixed w-[73.0vw] h-[70.0vh] bg-white overflow-auto">
            <Menu id_client= {id} id_table= {id_table}/>
            </div>          
        </div>
      </div>      
      )}
      <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow pr-10 pl-10">
        <div className="flex flex-col items-center pb-10 pt-8">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`${process.env.PUBLIC_URL}/user.png`}
            alt="im"
          />
          <h4 className="mb-1 text-xl font-medium text-gray-900">
            {name}
          </h4>
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {total_check}
          </h5>
          <div className="flex mt-4 space-x-1 md:mt-6">
            <button
              onClick={handleMenu}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
