import React, { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";

function App() {
  const [clickedLetters, setClickedLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState([]);
  const [visibleWordInGame, setVisibleWordInGame] = useState([]);
  const [errorCounter, setErrorCounter] = useState(0);
  console.log(errorCounter)

  function chooseWord() {
    let underlines = [];
    const randomizeWord = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    const wordArray = [...randomizeWord];
    setSelectedWord(wordArray);
    wordArray.forEach((w) => underlines.push("_"));
    setVisibleWordInGame(underlines);
    console.log(wordArray);
  }

  return (
    <div className="container">
      <Jogo errorCounter={errorCounter} visibleWordInGame={visibleWordInGame} chooseWord={chooseWord} />
      <Letras clickedLetters={clickedLetters} setClickedLetters={setClickedLetters} selectedWord={selectedWord} setErrorCounter={setErrorCounter} />
      <Chute />
    </div>
  );
}

export default App;
