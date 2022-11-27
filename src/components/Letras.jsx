const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function Letras(props) {
  const { clickedLetters, setClickedLetters, selectedWord, errorCounter, setErrorCounter, startedGame, setStartedGame, isRightWord } = props;
  let count = 0


  function isClicked(letra) {
    const arrayLettersClicked = [...clickedLetters, letra];
    if (selectedWord.includes(letra)) {
      setClickedLetters(arrayLettersClicked);
      alert("você acertou otario")
      isRightWord(letra)
    } else {
      setClickedLetters(arrayLettersClicked);
      count = errorCounter + 1
      setErrorCounter(errorCounter + 1)
      alert("Você errou otario")
      if (count === 6) {
        setStartedGame(false)
      }
    }
  }


  return (
    <div className="container-letras">
      {alfabeto.map((a) => (
        <button
          key={a}
          className={!startedGame || clickedLetters.includes(a) ? "disable" : null}
          onClick={() => isClicked(a)}
          disabled={!startedGame || clickedLetters.includes(a) ? true : false}
        >
          {a}
        </button>
      ))}
    </div>
  );
}
