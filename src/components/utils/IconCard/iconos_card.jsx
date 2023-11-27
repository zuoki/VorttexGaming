import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconosCard.css"

const IconosCard = ({icon,name}) => {
  return (
    <div className="infoDJ">
    <FontAwesomeIcon className="infoIcoDj" icon={icon} style={{color: "#dedede",}} />
        {name}
      </div>
  )
}

export default IconosCard