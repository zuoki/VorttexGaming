"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "./license.css";

function LicenseComponent() {
  const [licenses, setLicenses] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("Todos");

  useEffect(() => {
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_LOCAL
        : process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_DEPLOY;
    axios.get(API_URL).then((response) => {
      setLicenses(response.data.filter((license) => license.active));
    });

    const API_GAMES =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
        : process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
    axios
      .get(API_GAMES)
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error(error + "esta license ya esta creada");
      });
  }, []);

  const filteredLicenses = licenses.filter(
    (license) => selectedGame === "Todos" || license.game.title === selectedGame
  );

  return (
    <div>
      <Link href="/panelAdmin/license/postLicense">
        <button className="buttonLicense">+</button>
      </Link>
      <Link href={"/panelAdmin"}>
        <button className="button">⬅ BACK</button>
      </Link>
      <div className="licensesContainer">
        <h1>Active Licenses ({filteredLicenses.length})</h1>
        <div className="selectContainer">
          <label htmlFor="gameSelect">Select Game</label>
          <select
            id="gameSelect"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="Todos">all</option>
            {games.map((game) => (
              <option key={game.id} value={game.title}>
                {game.title}
              </option>
            ))}
          </select>
        </div>
        <div className="licenseDiv">
          {filteredLicenses.map((license) => (
            <div key={license.id} className="license">
              <h2>
                License <span> {license.name} </span>{" "}
              </h2>
              <p>Game: {license.game.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LicenseComponent;
