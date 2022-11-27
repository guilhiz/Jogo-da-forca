export default function Jogo(props) {
  const { errorCounter, visibleWordInGame, chooseWord, wordColor, selectedWord } = props;
  return (
    <div className="container-jogo">
      <div className="jogo-image">
        <img src={`./assets/forca${errorCounter}.png`} alt="forca" data-test="game-image" />
      </div>

      <div className="jogo-direito">
        <button className="jogo-button" onClick={() => chooseWord()} data-test="choose-word">
          Escolher Palavra
        </button>
        <p className="jogo-palavra" style={{ color: wordColor }} data-test="word" data-answer={selectedWord.join("")}>
          {visibleWordInGame}
        </p>
      </div>
    </div>
  );
}
