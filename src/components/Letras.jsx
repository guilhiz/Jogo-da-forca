const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let count = 0

export default function Letras(props) {
  const { clickedLetters, setClickedLetters, selectedWord, setErrorCounter, startedGame } = props;

  function isClicked(letra) {
    const arrayLettersClicked = [...clickedLetters, letra];
    if (selectedWord.includes(letra)) {
      setClickedLetters(arrayLettersClicked);
      alert("você acertou otario")
    } else {
      count = +1
      setClickedLetters(arrayLettersClicked);
      setErrorCounter(count)
      alert("Você errou otario")
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
