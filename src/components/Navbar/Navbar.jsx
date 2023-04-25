import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <h3>
        <img src="./logo.png" alt="logo" />
        iyush
      </h3>
      <div className={menuOpen ? 'menu-open' : 'menu'}>
          <ul>
            <li data-text="HOME">HOME</li>
            <li data-text="ABOUT">ABOUT</li>
            <li data-text="PROJECTS">PROJECTS</li>
            <li data-text="SERVICES">SERVICES</li>
          </ul>
          <button>Contact Me</button>
      </div>
      <Hamburger onToggle={() => setMenuOpen(!menuOpen)} />
    </div>
  );
};

export default Navbar;
