import React from 'react';

function Clients (props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-auto rounded-full" src={process.env.PUBLIC_URL+"/user.png"} alt="usuario" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.total_check}</div>
      </div>
    </div>
  );
};

export default Clients;