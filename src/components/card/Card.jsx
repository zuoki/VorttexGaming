import React from 'react'
import './Card.css'
import { isArray } from 'lodash';
import Link from 'next/link';

const Card = ({ data }) => {
  return (
    <div className='default'>
      <div className="gridCards" id='cards'>

        {data.length > 0 ? (
          data.map((game) => (
            <Link href={`/details/${game.id}`}>
              <div className='cardGame' key={game.id}>
                <img src={game.image} alt={game.title} />
                <h5>{game.title}</h5>
                <div className='spans'>
                  <span className='generos'>{game.genre}</span>
                  <span className='precio'>${game.price}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className='notFound'><h1>Lo siento, no tenemos ese juego</h1></div>
        )}

      </div>
    </div>
  )
}
export default Card