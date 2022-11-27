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
  const [startedGame, setStartedGame] = useState(false);


  function chooseWord() {
    let underlines = [];
    const randomizeWord = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    const wordArray = [...randomizeWord];
    setSelectedWord(wordArray);
    wordArray.forEach(() => underlines.push("_"));
    setVisibleWordInGame(underlines);
    setStartedGame(true)
  }

  function isRightWord(letra) {
    const arr = visibleWordInGame
    for (let i = 0; i < selectedWord.length; i++) {
      if (letra === selectedWord[i]) {
        arr[i] = selectedWord[i]
      }
    }
}

  return (
    <div className="container">
      <Jogo errorCounter={errorCounter} visibleWordInGame={visibleWordInGame} chooseWord={chooseWord} />
      <Letras
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
        selectedWord={selectedWord}
        errorCounter={errorCounter}
        setErrorCounter={setErrorCounter}
        startedGame={startedGame}
        setStartedGame={setStartedGame}
        isRightWord={isRightWord}
      />
      <Chute />
    </div>
  );
}

export default App;
