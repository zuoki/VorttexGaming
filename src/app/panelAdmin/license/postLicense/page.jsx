"use client";
import { useState } from "react";
import axios from "axios";
import "./postLicense.css";

function LicenseComponent() {
  const [licenses, setLicenses] = useState([]);
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [titleGame, setTitleGame] = useState("");

  const createLicense = () => {
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_LOCAL
        : process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_DEPLOY;
    axios.post(API_URL, { name, active, titleGame }).then((response) => {
      setLicenses([...licenses, response.data]);
    });
  };

  return (
    <div className="contenedorLicense">
      <h1>Crear Licencia</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="checkbox"
        checked={active}
        onChange={(e) => setActive(e.target.checked)}
      />
      <input
        type="text"
        value={titleGame}
        onChange={(e) => setTitleGame(e.target.value)}
        placeholder="Título del Juego"
      />
      <button onClick={createLicense}>Crear Licencia</button>
    </div>
  );
}

export default LicenseComponent;
