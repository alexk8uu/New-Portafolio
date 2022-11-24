import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "Ux / Ui Designer", "Web Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="asset/Fredy Alejandro Carrizo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hola, Soy</h2>
          <h1>Fredy Alejandro Carrizo</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="asset/down-arrow.svg" alt="arrow" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
