"use client";
import GameDetail from "@/components/gamedetail/GameDetail";
import { data } from "../../../api/data";
import { useState, useEffect } from "react";
import { useStoreCart } from "@/zustand/store";
import axios from "axios";

const Page = ({ params }) => {
  const [dataa, setDataa] = useState([]);

  const store = useStoreCart();

  let getGames;
  if (store) getGames = store.getGames;

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const { data } = await axios('/api/games');
          setDataa(data);
      } catch (error) {
       
=======
        const API_URL =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
            : process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
        const { data } = await axios(API_URL);
        setDataa(data);
      } catch (error) {
        console.log("Error: ", error.message);
>>>>>>> cdbd93a4a1b8653c75c024c352938aa793d108ea
      }
    };

    fetchData();
  }, []);

  let game = [];
  const gameToMap = [...params.game];
  gameToMap.forEach((letter, index) => {
    if (letter === "-") letter = " ";
    if (letter === "%") {
      letter = ":";
      gameToMap[index + 1] = "";
      gameToMap[index + 2] = "";
    }
    game.push(letter);
  });

  game = game.join("");

  const gameFound =
    dataa.length > 0 && dataa.find((juego) => juego.title === game);

  return (
    <div>
      <GameDetail game={gameFound} />
    </div>
  );
};

export default Page;
