"use client";
import Link from "next/link";
import "./games.css";
import { FaRegEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";

const Games = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL_GAMES =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
            : process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
        const { data } = await axios(API_URL_GAMES);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  if (data.length === 0) return <Loader />;

  return (
    <div>
      <div className="divAddGameToList">
        <Link href={"/panelAdmin/games/create"}>
          <h4 className="addGameToList">+</h4>
        </Link>
      </div>

      <div className="gamesContainer">
        <div className="gridGames">
          {data.length > 0 &&
            data.map((game) => (
              <div className="gameDiv" key={game.id}>
                <p>{game.title}</p>
                <img src={game.image} />
                <Link
                  href={`/panelAdmin/games/${game.title.split(" ").join("-")}`}
                >
                  <span className="eyeGame">
                    <FaRegEye />
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
