"use client"
import React from "react";
import { faGamepad, faGears, faPanorama } from "@fortawesome/free-solid-svg-icons";
import IconCard from "@/components/utils/IconCard/iconos_card";
import "./AdvertisingHandler.css";

const AdvertisingHandler = () => {
  const AdversingHandler = (value) => {
    console.log(value);
  };

  return (
    <section className="AdvertisingHandlerContainer">
      <h1 className="DETALLESH1">DETALLES DEL JUEGO</h1>
      <div
        className="optionContainer"
        style={{ fontSize: "1cm%", color: "#fe21ff" }}
      >
        <div onClick={() => AdversingHandler("INFO")}>
        <IconCard icon={faGamepad} name="INFO" />
        </div> 
        <div onClick={() => AdversingHandler("IMG")}>
        <IconCard icon={faPanorama} name="IMG"/>
        </div>
        <div onClick={() => AdversingHandler("REQ")}>
        <IconCard icon={faGears} name="REQ"/>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingHandler;

