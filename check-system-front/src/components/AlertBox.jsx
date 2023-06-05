import React, { useEffect } from "react";

const AlertBox = ({ message, onClose }) => {
  useEffect(() => {
    const openTimer = setTimeout(() => {
      onClose();
    }, 1000);

    const closeTimer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <img
            src={`${process.env.PUBLIC_URL}/check.png`}
            alt="Imagen"
            className="w-20 h-20 rounded-full mr-2"
          />
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
