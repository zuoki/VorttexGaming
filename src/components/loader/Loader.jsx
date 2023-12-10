import './loader.css';
/* import { css } from "@emotion/react"; */
import { PacmanLoader } from "react-spinners";

/* const override = css`
  display: block;
  margin: 0 auto;
`; */

const Loader = () => {
    return (
        <div className='pacmanLoader' >
            <span><PacmanLoader color="#FF9500" size={50} /></span>
        </div>
    )

}

export default Loader
