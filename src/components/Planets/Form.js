import React from "react";
import { planetHeader } from "../../constants/headers";
const POPULATION = "population";

export default function Form({ setShow, row }) {
  const inputs = planetHeader.filter((i) => i !== POPULATION);

  return (
    <div className="p-2 bg-white lg:p-4 overflow-auto max-h-screen">
      <div className="pb-2">
        <h1 className="mb-2 text-2xl">Form modal</h1>
        <form className="relative w-full mb-3">
          {inputs.map((item, index) => {
            return (
              <div key={index}>
                <label
                  htmlFor={item}
                  className="block mb-2 text-xs font-bold text-gray-600 uppercase"
                >
                  {item}
                </label>
                <input
                  className="w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:shadow-outline"
                  defaultValue={row[item]}
                />
              </div>
            );
          })}
        </form>
      </div>
      <button
        className="text-sm font-semibold bg-blue-800 px-4 py-2 text-white hover:bg-gray-400 mr-0"
        onClick={() => setShow(false)}
      >
        Close
      </button>
    </div>
  );
}
