import "./portafolio.scss";
import { portafolio } from "../../data.js";
import { useState } from "react";

function Portafolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(
          currentSlide < portafolio.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="portafolio" id="portafolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {portafolio.map((p) => (
          <div className="container" key={p.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={p.icon} alt={p.title} />
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <a href={p.link}>
                      <span>Github</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={p.img} alt={p.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="asset/chevron-back.svg"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="asset/chevron-back.svg"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Portafolio;
