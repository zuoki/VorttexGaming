import './creategame.css';
import robotpng from './robot.png';
import Image from "next/image";

const page = () => {
  return (
    <div className='createGameContainer' >

      <div className='createGameContainerGrid' >

        <div className='galerySeccionContainer' >
          <div className='galerySeccion' >
            <Image className="robotPngCreate" src={robotpng} />
          </div>
        </div>

        <div className='inputsToCreate' >
          <input type="text" placeholder='title' />
          <input type="text" placeholder='platform' />
          <input type="text" placeholder='description' />
          <input type="text" placeholder='genre' />
          <input type="text" placeholder='releaseDate' />
          <input type="text" placeholder='developer' />
          <input type="text" placeholder='publishedBy' />
          <input type="text" placeholder='size' />
          <input type="text" placeholder='price' />

        </div>

      </div>

    </div>
  )
}

export default page
