import Link from "next/link";
import { data } from "../../app/api/data";
import './games.css';
import { FaRegEye } from "react-icons/fa";

const Games = () => {

    return (
        <div className='gamesContainer' >

            <div className="gridGames" >
                {data.length > 0 &&
                    data.map(game => (
                        <div className="gameDiv" >
                            <p>{game.title}</p>
                            <img src={game.image} />
                            <Link href={`/panelAdmin/games/${game.title.split(' ').join('-')}`}><span className="eyeGame" ><FaRegEye /></span></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Games
