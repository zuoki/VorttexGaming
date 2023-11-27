'use client';
import { useEffect, useState } from 'react';
import './SearchBar.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data as games } from '@/app/api/data';

export const SearchBar = ({ handleSearch }) => {
	const [inputName, setInputName] = useState('');
	const [data, setData] = useState(null);

	const handleInputChange = (e) => {
		setInputName(e.target.value);
		handleSearch(e.target.value)
	};

	return (
		<div className="SearchBar-Container">
			<div className="containerN">
				<div className="SearchBar-input">
					<input
						type="text"
						placeholder="The Witcher 3..."
						value={inputName}
						onChange={handleInputChange}
					/>
				</div>

				<div className="SearchIconContainer">
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						style={{ color: '#dedede' }}
					/>
				</div>
				{data && <div>{console.log(data)}</div>}
			</div>
		</div>
	);
};

