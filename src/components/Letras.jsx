const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export default function Letras(props) {
  const { clickedLetters, setClickedLetters, selectedWord, startedGame, isRightLetter, isWrongLetter } = props;
  const alfabetoUpperCase = alfabeto.map((a) => a.toUpperCase());

  function isClicked(letra) {
    const arrayLettersClicked = [...clickedLetters, letra];
    setClickedLetters(arrayLettersClicked);
    if (selectedWord.includes(letra)) {
      isRightLetter(letra);
    } else {
      isWrongLetter();
    }
  }

  return (
    <div className="container-letras">
      {alfabetoUpperCase.map((a) => (
        <button
          key={a}
          className={!startedGame || clickedLetters.includes(a) ? "disable" : null}
          onClick={() => isClicked(a)}
          disabled={!startedGame || clickedLetters.includes(a) ? true : false}
          data-test="letter"
        >
          {a}
        </button>
      ))}
    </div>
  );
}
