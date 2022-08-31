import "./portafolio.scss";

function Portafolio() {
  return (
    <div className="portafolio" id="portafolio">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="asset/dvPc.svg" alt="mobil" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, labore! Reprehenderit, vel sit inventore ea
                  aspernatur eveniet fuga.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
                <img src="asset/VIDEOGAMES.gif" alt="videogames" />
            </div>
          </div>
        </div>
      </div>
      <img src="asset/chevron-back.svg" className="arrow left" alt="arrow" />
      <img src="asset/chevron-back.svg" className="arrow right" alt="arrow" />
    </div>
  );
}

export default Portafolio;
