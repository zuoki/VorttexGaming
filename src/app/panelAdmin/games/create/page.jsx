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
    video: "",
    image: "",
    wallpaper: "",
    capture: "",
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
  const [inputClass, setInputClass] = useState(
    {
      title: "classInputCreate",
      platform: "classInputCreate",
      description: "classInputCreate",
      genre: "classInputCreate",
      releaseDate: "classInputCreate",
      developer: "classInputCreate",
      publishedBy: "classInputCreate",
      size: "classInputCreate",
      price: "classInputCreate",
    }
  );
  const [currentImg, setCurrentImg] = useState('image');


  // useEffect(() => {
  //   setGameCreated(gameCreated)
  // }, [gameCreated])

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (validations(name, value)) {
      setGameCreatedError(
        {
          ...gameCreatedError,
          [name]: value
        }
      );
      setInputClass(
        {
          ...inputClass,
          [name]: `classInputCreateError${name}`
        }
      );
      return;
    }

    setGameCreated({
      ...gameCreated,
      [name]: value,
    });

    validations(name, value)
    setInputClass(
      {
        ...inputClass,
        [name]: "classInputCreate"
      }
    );
  };

  console.log(gameCreated[currentImg]);

  return (
    <div className="createGameContainer">
      <div className="createGameContainerGrid">
        <div className="galerySeccionContainer">
          <div className="galerySeccion">
            <Image className="robotPngCreate" src={robotpng} />

            <div className="inputAndInsertCreate"  >
              <div className="inputCreate" >
                <input type="text" value={gameCreated[currentImg]} />
              </div>
              <div className="buttonInsertCreate" >
                <button>INSERT</button>
              </div>
            </div>

          </div>
        </div>

        <div className="inputsToCreate">
          <input
            value={gameCreated.title}
            name="title"
            type="text"
            placeholder="title"
            onChange={handleChange}
            className={inputClass.title}
          />
          <input
            value={gameCreated.platform}
            name="platform"
            type="text"
            placeholder="platform"
            onChange={handleChange}
            className={inputClass.platform}
          />
          <input
            value={gameCreated.description}
            name="description"
            type="text"
            placeholder="description"
            onChange={handleChange}
            className={inputClass.description}
          />
          <input
            value={gameCreated.genre}
            name="genre"
            type="text"
            placeholder="genre"
            onChange={handleChange}
            className={inputClass.genre}
          />
          <input
            value={gameCreated.releaseDate}
            name="releaseDate"
            type="date"
            placeholder="releaseDate"
            onChange={handleChange}
            className={inputClass.releaseDate}
          />
          <input
            value={gameCreated.developer}
            name="developer"
            type="text"
            placeholder="developer"
            onChange={handleChange}
            className={inputClass.developer}
          />
          <input
            value={gameCreated.publishedBy}
            name="publishedBy"
            type="text"
            placeholder="publishedBy"
            onChange={handleChange}
            className={inputClass.publishedBy}
          />
          <input
            value={gameCreated.size}
            name="size"
            type="text"
            placeholder="size (GB)"
            onChange={handleChange}
            className={inputClass.size}
          />
          <input
            value={gameCreated.price}
            name="price"
            type="text"
            placeholder="price"
            onChange={handleChange}
            className={inputClass.price}
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
