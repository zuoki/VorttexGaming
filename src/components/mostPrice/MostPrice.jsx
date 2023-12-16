import "./mostprice.css";
import React, { useState, useEffect } from "react";

const MostPrice = () => {
  const [text, setText] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const fullText = "BIG SALE";

  useEffect(() => {
    const timer = setInterval(() => {
      if (isAdding) {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
        } else {
          setIsAdding(false);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, text.length - 1));
        } else {
          setIsAdding(true);
        }
      }
    }, 250);
    return () => clearInterval(timer);
  }, [text, isAdding]);

  const handleClick = () => {
    const element = document.getElementById("cards");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="section">
      <div className="sectionDetails">
        <h1>{text}</h1>
        <p>The best market prices</p>
        <button onClick={handleClick}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default MostPrice;
