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
  const [labelText, setLabelText] = useState("Escolha uma palavra!");
  const [inputText, setInputText] = useState("");
  const maxErrorsAllowed = 6;

  function chooseWord() {
    reset();
    const underlines = [];
    const randomizeWord = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    const wordArray = [...randomizeWord];
    setSelectedWord(wordArray);
    wordArray.forEach(() => underlines.push("_"));
    setVisibleWordInGame(underlines);
    setStartedGame(true);
  }

  function isRightLetter(letra) {
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
      setLabelText("Parabéns, você ganhou!");
    }
  }

  function isWrongLetter() {
    const count = errorCounter + 1;
    setErrorCounter(count);
    if (count === maxErrorsAllowed) {
      setStartedGame(false);
      setLabelText("Lamento, você perdeu!");
      setVisibleWordInGame(selectedWord);
      setWordColor("#FF0000");
    }
  }

  function guessWord() {
    if (inputText === selectedWord.join("")) {
      setStartedGame(false);
      setVisibleWordInGame(selectedWord);
      setWordColor("#27AE60");
      setLabelText("Parabéns, você acertou!");
    } else {
      setErrorCounter(maxErrorsAllowed);
      setStartedGame(false);
      setLabelText("Lamento, você errou!");
      setVisibleWordInGame(selectedWord);
      setWordColor("#FF0000");
    }
  }

  function reset() {
    setErrorCounter(0);
    setClickedLetters([]);
    setWordColor("#000000");
    setLabelText("Já sei a palavra!");
    setInputText("");
  }

  return (
    <div className="container">
      <Jogo
        errorCounter={errorCounter}
        visibleWordInGame={visibleWordInGame}
        chooseWord={chooseWord}
        wordColor={wordColor}
        selectedWord={selectedWord}
      />
      <Letras
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
        selectedWord={selectedWord}
        startedGame={startedGame}
        isRightLetter={isRightLetter}
        isWrongLetter={isWrongLetter}
      />
      <Chute
        startedGame={startedGame}
        labelText={labelText}
        guessWord={guessWord}
        setInputText={setInputText}
        inputText={inputText}
      />
    </div>
  );
}

export default App;
