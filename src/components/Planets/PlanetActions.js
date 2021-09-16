import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import Form from "./Form";
export default function PlanetActions({ row }) {
  const getUrlId = (url) => {
    return url.split("/").filter((i) => !isNaN(i) && i !== "");
  };

  return (
    <div className="flex flex-col">
      {!!row.films.length && (
        <Link
          className="hover:text-blue-800 text-blue-600 hover:underline"
          to={`/films/${getUrlId(row.url)}`}
        >
          Go to Films
        </Link>
      )}
      {!!row.residents.length && (
        <Link
          className="hover:text-blue-800 text-blue-600 hover:underline"
          to={`/residents/${getUrlId(row.url)}`}
        >
          Go to Residents
        </Link>
      )}
      <Link
        className="hover:text-blue-800 text-blue-600 hover:underline"
        to={`/details/${getUrlId(row.url)}`}
      >
        Go to Details
      </Link>
      <Modal
        activator={({ setShow }) => (
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-800 active:bg-gray-700"
            onClick={() => setShow(true)}
          >
            open modal
          </button>
        )}
      >
        <Form row={row} />
      </Modal>
    </div>
  );
}
