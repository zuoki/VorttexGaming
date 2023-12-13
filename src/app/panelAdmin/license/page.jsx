"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import './license.css'

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
      <Link href="/panelAdmin/license/postLicense">
       <button className="buttonLicense">+</button>
     </Link>
        <div className="licensesContainer">
      <h1>Licencias Activas</h1>
      <div className="licenseDiv">
      {licenses.map((license) => (
        <div key={license.id} className="license" >
          <h2>License <span> {license.name} </span> </h2>
          <p>Game: {license.game.title}</p>
        </div>
      ))}
      </div>
    </div>
    </div>
    
  );
}

export default LicenseComponent;
