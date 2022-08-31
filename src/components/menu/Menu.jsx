import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">Sobre mi</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonios</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
