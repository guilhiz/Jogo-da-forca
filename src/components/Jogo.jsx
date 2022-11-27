export default function Jogo(props) {
  const { errorCounter, visibleWordInGame, chooseWord, wordColor } = props;
  return (
    <div className="container-jogo">
      <div className="jogo-image">
        <img src={`./assets/forca${errorCounter}.png`} alt="forca" />
      </div>

      <div className="jogo-direito">
        <button className="jogo-button" onClick={() => chooseWord()} >Escolher Palavra</button>
        <p className="jogo-palavra" style={{color: wordColor}}>
          {visibleWordInGame}
        </p>
      </div>
    </div>
  );
}
