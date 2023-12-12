import React from 'react'
import './Card.css'
import { isArray } from 'lodash';
import Image from "next/image";
import robot from './robot.png'
import Link from 'next/link';

const Card = ({ data }) => {
  return (
    <div className='default'>
      <div className="gridCards" id='cards'>

        {data.length > 0 ? (
          data.map((game) => (
            <Link key={game.id} href={`/details/${game.id}`}>
              <div className='cardGame' key={game.id}>
                <img src={game.image} alt={game.title} />
                <h5 className='name-gameC'>{game.title}</h5>
                <div className='spans'>
                  <span className='generos'>{game.genre}</span>
                  <span className='precio'>${game.price}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className='notFound'><h1>Im sorry, we dont have that game.</h1>
          </div>
        )}

      </div>
    </div>
  )
}
export default Card