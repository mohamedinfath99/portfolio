import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";


const navbar = () => {
  return (

    <div className="n-wrapper" id="Navbar">

      <div className="n-left">
        <div className="n-name">- FULL STACK DEVELOPER 🧑‍💻 -</div>
      </div>


      <div className="n-right">
        <div className="n-list">

          <ul style={{ listStyleType: "none" }}>

            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>

            <li>
              <Link to="skill" spy={true} smooth={true}>
                Skill
              </Link>
            </li>

            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>

            <li>
              <Link to="Education" spy={true} smooth={true}>
                Education
              </Link>
            </li>

            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default navbar;
