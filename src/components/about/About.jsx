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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              perferendis quod dolor maiores mollitia qui, sunt, voluptas
              provident veniam odit a cum quibusdam omnis? Officia eaque
              eligendi magni iure exercitationem.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  non quibusdam dolorem eveniet natus, laborum dolores
                  distinctio. Sunt eveniet molestias
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  non quibusdam dolorem eveniet natus, laborum dolores
                  distinctio. Sunt eveniet molestias
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  non quibusdam dolorem eveniet natus, laborum dolores
                  distinctio. Sunt eveniet molestias
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  non quibusdam dolorem eveniet natus, laborum dolores
                  distinctio. Sunt eveniet molestias
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
