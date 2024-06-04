import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "../CSS/Navbar.css";

const Navbar = () => {
  const handleSidebarClose = () => {
    document.getElementById("sidebar-active").checked = false;
  };

  return (
    <nav>
      <ScrollLink
        className="home-link"
        to="home"
        smooth={true}
        duration={500}
        onClick={handleSidebarClose}
        style={{ background: "transparent" }}
      >
        <h3 style={{ color: "#6f2dbd" }}>
          Riket <span style={{ color: "#000" }}>Interior</span>
        </h3>
      </ScrollLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>

        <ScrollLink
          className="home-link"
          to="home"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          Contact
        </ScrollLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
