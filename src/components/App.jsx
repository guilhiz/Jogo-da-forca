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
  const [wordColor, setWordColor] = useState("#000000");

  function chooseWord() {
    reset()
    let underlines = [];
    const randomizeWord = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    const wordArray = [...randomizeWord];
    setSelectedWord(wordArray);
    wordArray.forEach(() => underlines.push("_"));
    setVisibleWordInGame(underlines);
    setStartedGame(true);
  }

  function isRightLetter(letra) {
    console.log(selectedWord);
    const arr = visibleWordInGame;
    for (let i = 0; i < selectedWord.length; i++) {
      if (letra === selectedWord[i]) {
        arr[i] = selectedWord[i];
        setVisibleWordInGame(arr);
      }
    }
    const currentWord = arr.join("");
    if (!currentWord.includes("_")) {
      setStartedGame(false);
      setWordColor("#27AE60");
    }
  }

  function isWrongLetter() {
    const count = errorCounter + 1;
      setErrorCounter(count);
      if (count === 6) {
        setStartedGame(false);
        setVisibleWordInGame(selectedWord)
        setWordColor("#FF0000")
      }
  }

  function reset() {
    setErrorCounter(0)
    setClickedLetters([])
    setWordColor("#000000")
  }

  return (
    <div className="container">
      <Jogo
        errorCounter={errorCounter}
        visibleWordInGame={visibleWordInGame}
        chooseWord={chooseWord}
        wordColor={wordColor}
      />
      <Letras
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
        selectedWord={selectedWord}
        startedGame={startedGame}
        isRightLetter={isRightLetter}
        isWrongLetter={isWrongLetter}
      />
      <Chute />
    </div>
  );
}

export default App;
