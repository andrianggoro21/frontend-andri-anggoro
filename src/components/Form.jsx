import { useState } from "react";
import Negara from "./Negara";
import Pelabuhan from "./Pelabuhan.jsx";
import Barang from "./Barang";

const Form = () => {
  const [negara, setNegara] = useState(null);
  const [pelabuhan, setPelabuhan] = useState(null);
  const [barang, setBarang] = useState(null);

  const handleNegaraSelect = (negara) => {
    setNegara(negara);
    setPelabuhan(null);
    setBarang(null);
  };

  const handlePelabuhanSelect = (pelabuhan) => {
    setPelabuhan(pelabuhan);
    setBarang(null);
  };

  const handleBarangSelect = (barang) => {
    setBarang(barang);
  };

  const calculateTotal = () => {
    if (barang) {
      const discount = barang.diskon / 100;
      const total = barang.harga * (1 - discount);
      return total.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    }
    return "Rp. 0";
  };

  const handleCheckout = () => {
    console.log("Checkout button clicked");
    alert("Checkout or Payment process initiated");
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Card */}
        <div className="flex-1 bg-purple-50 p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <Negara onSelect={handleNegaraSelect} />
          </div>
          <div className="mb-4">
            <Pelabuhan
              negaraId={+negara?.id_negara}
              onSelect={handlePelabuhanSelect}
              disabled={!negara}
            />
          </div>
          <div className="mb-4">
            <Barang
              pelabuhanId={+pelabuhan?.id_pelabuhan}
              onSelect={handleBarangSelect}
              disabled={!pelabuhan}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description:</label>
            <textarea
              value={barang ? barang.description : ""}
              readOnly
              className="border border-gray-300 bg-white p-2 w-full h-24 resize-none"
              disabled={!barang}
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-1/3 bg-purple-100 p-4 rounded-lg shadow-md flex flex-col">
          <div className="mb-4">
            <label className="block mb-2">Discount:</label>
            <input
              type="text"
              value={barang ? `${barang.diskon}%` : ""}
              readOnly
              className="border border-gray-300 bg-white p-2 w-full"
              disabled={!barang}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Harga:</label>
            <input
              type="text"
              value={
                barang ? `Rp. ${barang.harga.toLocaleString("id-ID")}` : ""
              }
              readOnly
              className="border border-gray-300 bg-white p-2 w-full"
              disabled={!barang}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Total:</label>
            <input
              type="text"
              value={calculateTotal()}
              readOnly
              className="border border-gray-300 bg-white p-2 w-full"
              disabled={!barang}
            />
          </div>
          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-auto bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800"
            disabled={!barang}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
