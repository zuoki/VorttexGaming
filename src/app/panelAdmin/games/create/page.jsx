"use client";

import { useState } from "react";
import "./creategame.css";
import robotpng from "./robot.png";
import Image from "next/image";
import { validations } from "./validations";
import Swal from "sweetalert2";
import axios from "axios";
import { GrCopy } from "react-icons/gr";

const Page = () => {

  const copiarAlPortapapeles = async () => {
    try {
      await navigator.clipboard.writeText(urlIMG);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "link to the image copied successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };


  const [file, setFile] = useState(null);
  const [urlIMG, setUrlIMG] = useState("...");
  const [gameCreated, setGameCreated] = useState({
    title: "",
    platform: "",
    description: "",
    genre: "",
    releaseDate: "",
    developer: "",
    publishedby: "",
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
    publishedby: "",
    video: "",
    image: "",
    wallpaper: "",
    capture: "",
    size: "",
    price: 0,
  });
  const [inputClass, setInputClass] = useState({
    title: "classInputCreate",
    platform: "classInputCreate",
    description: "classInputCreate",
    genre: "classInputCreate",
    releaseDate: "classInputCreate",
    developer: "classInputCreate",
    publishedby: "classInputCreate",
    video: "classInputCreate",
    image: "classInputCreate",
    wallpaper: "classInputCreate",
    capture: "classInputCreate",
    size: "classInputCreate",
    price: "classInputCreate",
  });
  const [currentImg, setCurrentImg] = useState("video");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (
      name === "video" ||
      name === "image" ||
      name === "wallpaper" ||
      name === "capture"
    ) {
      setGameCreated({
        ...gameCreated,
        [name]: value,
      });

      if (validations(name, value)) {
        setGameCreatedError({
          ...gameCreatedError,
          [name]: validations(name, value),
        });
        setInputClass({
          ...inputClass,
          [name]: `classInputCreateError${name}`,
        });
        return;
      }

      setInputClass({
        ...inputClass,
        [name]: "classInputCreate",
      });
      setGameCreatedError({
        ...gameCreatedError,
        [name]: "",
      });
      return;
    }

    if (validations(name, value)) {
      setGameCreatedError({
        ...gameCreatedError,
        [name]: validations(name, value),
      });
      setInputClass({
        ...inputClass,
        [name]: `classInputCreateError${name}`,
      });
      return;
    }

    setGameCreatedError({
      ...gameCreatedError,
      [name]: "",
    });

    setGameCreated({
      ...gameCreated,
      [name]: value,
    });
    setInputClass({
      ...inputClass,
      [name]: "classInputCreate",
    });
  };

  let srcBg = robotpng;
  const handleCurrentImg = () => {
    switch (currentImg) {
      case "video":
        Swal.fire({
          title: `the ${currentImg} has been changed successfully!`,
          imageUrl:
            "https://media3.giphy.com/media/XreQmk7ETCak0/giphy.gif?cid=ecf05e473l7cvg3x9z30e7xo1qz1o9juz3hyh705ovh2a0mo&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          imageWidth: 270,
          imageHeight: 270,
          imageAlt: "Custom image",
        });
        setCurrentImg("image");
        return;
        break;

      case "image":
        setCurrentImg("wallpaper");
        break;

      case "wallpaper":
        setCurrentImg("capture");
        break;

      case "capture":
        setCurrentImg("video");
        break;

      default:
        break;
    }

    Swal.fire({
      title: `the ${currentImg} has been changed successfully!`,
      imageUrl: gameCreated[currentImg],
      imageWidth: 200,
      imageHeight: 270,
      imageAlt: "Custom image",
    });
  };

  const verifyErrors = () => {
    const valuesInputs = Object.values(gameCreated);
    for (let i = 0; i < valuesInputs.length; i++) {
      if (valuesInputs[i].length < 1) return true;
    }

    const valuesErrors = Object.values(gameCreatedError);
    for (let i = 0; i < valuesErrors.length; i++) {
      if (i === 7 || i === 8 || i === 9 || i === 10) return false;
      if (valuesErrors[i].length > 0) return true;
    }

    return false;
  };

  const sendGameToDb = () => {
    gameCreated.price = Number(gameCreated.price);

    const sendData = async () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
          : process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;

      console.log(API_URL)

      try {
        await axios.post(API_URL, gameCreated);
        Swal.fire("Game Created!");
      } catch (error) {
        Swal.fire("Game  Not Created!");
        console.log(error.message)
      }

    }
    sendData();
  };

  return (
    <div className="createGameContainer">
      <div className="createGameContainerGrid">
        <div className="galerySeccionContainer">
          <div className="galerySeccion">
            <Image className="robotPngCreate" src={srcBg} />

            <div className="inputAndInsertCreate">
              <div className="inputCreate">
                <input
                  name={currentImg}
                  type="text"
                  value={gameCreated[currentImg]}
                  placeholder={currentImg}
                  className={inputClass[currentImg]}
                  onChange={handleChange}
                />
              </div>
              <div className="buttonInsertCreate">
                <button
                  onClick={handleCurrentImg}
                  className="insertCreateButton"
                >
                  INSERT
                </button>
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
            type="text"
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
            value={gameCreated.publishedby}
            name="publishedby"
            type="text"
            placeholder="publishedby"
            onChange={handleChange}
            className={inputClass.publishedby}
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

          <div className="cloudinaryimg2">

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData();
                formData.append("file", file);

                const response = await fetch("/api/upload", {
                  method: "POST",
                  body: formData,
                });
                const data = await response.json();
                if (data.url) {
                  Swal.fire({
                    title: "Sweet!",
                    text: " “Image uploaded successfully, proceed to copy the link and you can use it.” 😊",
                    imageUrl: "https://media.giphy.com/media/7YjvlYIMRDcYM/source.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
                }
                setUrlIMG(data.url);
              }}
            >
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <button>set image</button>
            </form>
            <div className="les2323" onClick={copiarAlPortapapeles}><GrCopy /></div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className="createButtons">
        <button
          className="createButtonsConfirm"
          onClick={sendGameToDb}
          disabled={verifyErrors()}
        >
          Create
        </button>
        <button className="createButtonsCancel">Cancel</button>
      </div>
    </div>
  );
};

export default Page;

