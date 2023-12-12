"use client";
import { useEffect, useState } from "react";
import "./creategame.css";
import robotpng from "./robot.png";
import Image from "next/image";
import { validations } from "./validations";

const Page = () => {
  const [gameCreated, setGameCreated] = useState({
    title: "",
    platform: "",
    description: "",
    genre: "",
    releaseDate: "",
    developer: "",
    publishedBy: "",
    size: "",
    price: 0,
  });

  const [gameCreatedError, setGameCreatedError] = useState({
    title: "",
    platform: "",
    description: "",
    genre: "",
    releaseDate: "",
    developer: "",
    publishedBy: "",
    size: "",
    price: 0,
  });

  // useEffect(() => {
  //   setGameCreated(gameCreated)
  // }, [gameCreated])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGameCreated({
      ...gameCreated,
      [name]: value,
    });
    if (validations(name, value)) {
      gameCreatedError(...gameCreatedError);
    }
    console.log(validations(name,value))
  };

  return (
    <div className="createGameContainer">
      <div className="createGameContainerGrid">
        <div className="galerySeccionContainer">
          <div className="galerySeccion">
            <Image className="robotPngCreate" src={robotpng} />
          </div>
        </div>

        <div className="inputsToCreate">
          <input
            value={gameCreated.title}
            name="title"
            type="text"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            value={gameCreated.platform}
            name="platform"
            type="text"
            placeholder="platform"
            onChange={handleChange}
          />
          <input
            value={gameCreated.description}
            name="description"
            type="text"
            placeholder="description"
            onChange={handleChange}
          />
          <input
            value={gameCreated.genre}
            name="genre"
            type="text"
            placeholder="genre"
            onChange={handleChange}
          />
          <input
            value={gameCreated.releaseDate}
            name="releaseDate"
            type="text"
            placeholder="releaseDate"
            onChange={handleChange}
          />
          <input
            value={gameCreated.developer}
            name="developer"
            type="text"
            placeholder="developer"
            onChange={handleChange}
          />
          <input
            value={gameCreated.publishedBy}
            name="publishedBy"
            type="date"
            placeholder="publishedBy"
            onChange={handleChange}
          />
          <input
            value={gameCreated.size}
            name="size"
            type="text"
            placeholder="size"
            onChange={handleChange}
          />
          <input
            value={gameCreated.price}
            name="price"
            type="text"
            placeholder="price"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="createButtons">
        <button className="createButtonsConfirm">Create</button>
        <button className="createButtonsCancel">Cancel</button>
      </div>
    </div>
  );
};

export default Page;
