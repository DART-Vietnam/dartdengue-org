import { useState } from "react";

export default function UnderDevelopmentPopup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 ${
        showPopup ? "" : "hidden"
      }`}
    >
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          Page is under active development
        </h2>
        <p className="text-gray-700">
          We apologize for the inconvenience. This page is currently under
          active development. <br />
          Any information here does not reflect the final edit.
        </p>
        <button
          className="px-4 py-2 mt-4 text-white bg-gray-800 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
