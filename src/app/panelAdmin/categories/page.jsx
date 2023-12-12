import { data } from '../../api/data'
import { FaPen } from "react-icons/fa";
import './categories.css'

const Categories = () => {

  let genres = [];


  if(data.length > 0){

    data.forEach(game => genres.push(game.genre))

    genres = [...new Set(genres)]
  }

  return (
    <div className="categContainer" >

      <h1>CATEGORIES</h1>

      <div className='categDiv' >  
        {
          genres.length > 0 &&
             genres.map(genre => (
              <div className='genre' key={genre} >
                <p className='genreP' >{genre}</p>

                <div className='iconContainer' >
                  <FaPen className='pen' />
                </div>
                
              </div>
             ))
          }
        
      </div>

    </div>
  )
}

export default Categories