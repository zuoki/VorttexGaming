"use client"; 
import GameDetail from "@/components/gamedetail/GameDetail";
import { data } from '../../../api/data';
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
        const { data } = await axios('/api/games');
          setDataa(data);
      } catch (error) {
       
      }
    };

    fetchData();
  }, []);

  let game = [];
  const gameToMap = [...params.game]
  gameToMap.forEach((letter, index) => {
    if(letter === "-") letter = " ";
    if(letter === "%") {
      letter = ":";
      gameToMap[index+1] = "";
      gameToMap[index+2] = "";
    }
    game.push(letter)
  });

  game = game.join('');
  
  const gameFound = dataa.length > 0 && dataa.find(juego => juego.title === game);

  return (
    <div>
      <GameDetail game={gameFound} />
    </div>
  );
};

export default Page;
