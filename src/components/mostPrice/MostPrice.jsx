import './mostprice.css';
import React from 'react'

const MostPrice = ({ mostPrice }) => {
    const handleClick = () => {
        const element = document.getElementById('cards');
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='section'>
            <div className="sectionDetails">
                <h1>BIG SALE</h1>
                <p>The best market prices</p>
                <button onClick={handleClick}>SHOP NOW</button>
            </div>
        </div>
    )
}

export default MostPrice
