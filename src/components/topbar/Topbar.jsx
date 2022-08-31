import "./topbar.scss";
import { Phone, Email } from "@mui/icons-material";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            FC
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span> +54 387 442 9868</span>
          </div>
          <div className="itemContainer">
            <a href="#contact">
              <Email className="icon" />
            </a>
            <span>fredyalejandrocarrizo@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
