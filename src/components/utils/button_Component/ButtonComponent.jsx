import React from 'react'
import "./ButtonComponent.css"

const ButtonComponent = ({value}) => {
  return (
      <button type='button'className='ButtonComponent'>{value}</button>
  )
}

export default ButtonComponent