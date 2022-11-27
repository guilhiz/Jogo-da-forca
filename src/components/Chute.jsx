export default function Chute(props) {
  const { startedGame, labelText, guessWord, setInputText, inputText } = props;
  function standardizeWords(text) {
    const newText = text
      .normalize("NFD")
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
      .toUpperCase();
    setInputText(newText);
  }

  return (
    <div className="container-chute">
      <label htmlFor="input">{labelText}</label>
      <input
        type="text"
        disabled={!startedGame ? true : false}
        id="input"
        value={inputText}
        onChange={(e) => standardizeWords(e.target.value)}
        data-test="guess-input"
      />
      <button
        disabled={!startedGame ? true : false}
        className={!startedGame ? "disable" : null}
        onClick={() => guessWord()}
        data-test="guess-button"
      >
        Chutar
      </button>
    </div>
  );
}
