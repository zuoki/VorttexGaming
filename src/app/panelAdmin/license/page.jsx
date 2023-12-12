"use client";
import { useState, useEffect } from "react";
import axios from "axios";

function LicenseComponent() {
  const [licenses, setLicenses] = useState([]);
  useEffect(() => {
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_LOCAL
        : process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_DEPLOY;
    axios.get(API_URL).then((response) => {
      setLicenses(response.data.filter((license) => license.active));
    });
  }, []);

  return (
    <div>
      <h1>Licencias Activas</h1>
      {licenses.map((license) => (
        <div key={license.id}>
          <h2>{license.name}</h2>
          <p>{license.game.title}</p>
        </div>
      ))}
    </div>
  );
}

export default LicenseComponent;
