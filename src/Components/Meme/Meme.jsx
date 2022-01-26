import React, { useState } from "react";
import memesData from "../memesData.js";
import "./meme.css";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((meme) => {
      return {
        ...meme,
        randomImage: url
      };
    });
  }
  return (
    <main className="py-5">
      <div className="container">
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="img py-2">
          <img src={meme.randomImage} alt="newImg" className="w-100" />
        </div>
      </div>
    </main>
  );
};

export default Meme;
