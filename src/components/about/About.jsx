import "./about.scss";

function About(props) {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="top">
          <div className="containerText">
            <h2>SOBRE MI</h2>
            <div className="line"></div>
            <span>
              Soy de la ciudad de Salta, Argentina 🌍 me cruce con la
              programacion durante la pandemia y en ella encontre la
              oportunidad de explotar todas mis habilidades a través de la tecnología, donde
              aún tengo mucho que aprender y conocer pero estoy dispuesto a
              tomar este camino.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="containerBottom">
            <div className="containerInfo">
              <div className="circle">
                <img src="asset/finger-print.svg" alt="personal" />
              </div>
              <div className="textContainer">
                <h3>Perfil</h3>
                <span>
                  Adquirí estas habilidades en un bootcamp de Soy Henry de más
                  de 800 hrs. Me caracterizo por la capacidad que tengo para la
                  adaptacion y resolución de problema
                </span>
              </div>
            </div>
            <div className="containerInfo">
              <div className="circle">
                <img src="asset/construct-sharp.svg" alt="skills" />
              </div>
              <div className="textContainer">
                <h3>Skills</h3>
                <span>
                  Cuento con amplios conocimientos en Javascript, React, React
                  Native, Redux, Figma, Photoshop, HTML, Css, entre muchos otros
                </span>
              </div>
            </div>
            <div className="containerInfo">
              <div className="circle">
                <img src="asset/game-controller.svg" alt="hobbies" />
              </div>
              <div className="textContainer">
                <h3>Hobbies</h3>
                <span>
                 Me gusta mucho viajar, pasar el dia con mis amigos y jugar videojuegos.
                </span> 
              </div>
            </div>
            <div className="containerInfo">
              <div className="circle">
                <img src="asset/phone-portrait.svg" alt="music" />
              </div>
              <div className="textContainer">
                <h3>Music</h3>
                <span>
                  Soy fanatico de la musica me acompaña todo los dias. Podria decir que mis generos favoritos son la Electronica y el Hip-Hop.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="containerImg">
          <img src="asset/Developer activity-bro.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
