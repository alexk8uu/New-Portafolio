import "./skills.scss";
import { skills } from "../../data.js";

function Skills(props) {
  return (
    <div className="skills" id="skills">
      <h1>Habilidades</h1>
        <div className="container">
      {skills.map((s) => (
          <div className="cardContainer"  key={s.id}>
            <img src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
      ))}
        </div>
    </div>
  );
}

export default Skills;
