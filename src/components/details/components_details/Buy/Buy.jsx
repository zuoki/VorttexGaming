import React from 'react'
import "./Buy.css"
import ButtonComponent from '@/components/utils/button_Component/ButtonComponent'

const Buy = ({game}) => {
  return (
    <section className='Dbuy'>
        
         <div className='Dbuy2'>
        <h2 className='DBof'> CURRENT OFFER</h2>
        <div className='priceContainerD'>
          <h1 className='DBPRC'>BUY FOR : ${game.price}</h1>
        </div>
        <div className='butonDBJContainer'>
          <button type='button'className='ADC'>  ADD TO CART</button>
          <button type='button' className='IAC'>GO TO CART</button> 
        </div>
        </div>
            
        </section>
  )
}

export default Buy