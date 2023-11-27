import './select.css';

import React from 'react'

const Select = ({ options, onChange }) => {
    return (
        <div className='select'>
            <select onChange={onChange}>
                <option value={"All"}>All</option>
                {
                    options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select
