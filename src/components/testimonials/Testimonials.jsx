import "./testimonials.scss";
import { testimonials } from "../../data.js";

function Testimonials(props) {





  return (
    <div className="testimonials" id="testimonials">
      <h1>Referencias</h1>
      <div className="container">
        {testimonials.map((t) => (
          <div key={t.id} className= {t.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="asset/arrow.svg" alt="" className="left" />
              <img
                className="user"
                src={t.img}
                alt=""
              />
              <a href={t.href}>
              <img
                src="asset/linkedin-svgrepo-com.svg"
                className="right"
                alt=""
              />
              </a>
            </div>
            <div className="center">
              {t.desc}
            </div>
            <div className="bottom">
              <h3>{t.name}</h3>
              <h4>{t.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
