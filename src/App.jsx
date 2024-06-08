import React, { useState } from "react";
import QRCode from "qrcode.react";
import { saveAs } from 'file-saver';
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrCode");
    canvas.toBlob(function (blob) {
      saveAs(blob, "qrcode.png");
    });
  };

  return (
    <div className="app bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">QR Code Generator</h1>
      <input
        type="text"
        className="input mb-4 p-2 border rounded w-11/12 max-w-md"
        placeholder="Type in your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      {url && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Generated QR Code:</h2>
          <QRCode id="qrCode" value={url} size={256} />
          <button
            onClick={downloadQRCode}
            className="download-button mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
