export default function Jogo(props) {
  const { errorCounter, visibleWordInGame, chooseWord } = props;
  return (
    <div className="container-jogo">
      <div className="jogo-image">
        <img src={`./assets/forca${errorCounter}.png`} alt="forca" />
      </div>

      <div className="jogo-direito">
        <button className="jogo-button" onClick={() => chooseWord()} >Escolher Palavra</button>
        <p className="jogo-palavra">
          {visibleWordInGame.map((s) => s)}
        </p>
      </div>
    </div>
  );
}
