import React, { useEffect } from "react";

const AlertBox = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="Row flex items-center mb-2">
          <img
            src={`${process.env.PUBLIC_URL}/check.png`}
            alt="Imagen Circular"
            className="w-20 h-20 rounded-full mr-2"
          />
          <p className="Row">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;