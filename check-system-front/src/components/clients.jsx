import React from "react";

function Clients(props) {
  return (
    <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-10 pl-10">
      <div class="flex flex-col items-center pb-10 pt-8">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`${process.env.PUBLIC_URL}/user.png`}
          alt="Image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.total_check}
        </h5>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add product
          </a>
        </div>
      </div>
    </div>
  );
}

export default Clients;
