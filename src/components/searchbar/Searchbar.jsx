"use client";
import { useEffect, useState } from "react";
import "./Searchbar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ handleSearch, games }) => {
  const [inputName, setInputName] = useState("");
  const [data, setData] = useState(null);

  const handleInputChange = (e) => {
    setInputName(e.target.value);
    handleSearch(e.target.value);
  };

  const randomNumber = Math.floor(Math.random() * 24);
  const placeHolderName = games[randomNumber].title;

  return (
    <div className="SearchBar-Container">
      <div className="containerN">
        <div className="SearchBar-input">
          <input
            type="text"
            placeholder={`${placeHolderName}...`}
            value={inputName}
            onChange={handleInputChange}
          />
        </div>

        <div className="SearchIconContainer">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#dedede" }}
          />
        </div>
        {data && <div></div>}
      </div>
    </div>
  );
};

export default SearchBar;
