import GameDetail from "@/components/gamedetail/GameDetail";
import { data } from '../../../api/data';

const Page = async ({ params }) => {

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
  
  const gameFound = data.find(juego => juego.title === game);

  return (
    <div>
      <GameDetail game={gameFound} />
    </div>
  );
};

export default Page;
