import React from "react";
import { Download } from "lucide-react";
import resume from "../assets/Resume.pdf";
import "./Header.css";

const Header = ({activeSection,setActiveSection}) => {
  const navLinks = [
   
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <button
          type="button"
          className="logo"
          onClick={() => handleNavigation("home")}
        >
          <span className="logo-white">KAVITHA&nbsp;</span>
          <span className="logo-cyan">GANJI</span>
        </button>

        {/* Navigation */}
        <nav className="navbar">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              className={`nav-link ${
                activeSection === link.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavigation(link.id)
              }
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Resume */}
        <a
          href={resume}
          download="Resume.pdf"
          className="resume-btn"
        >
          <Download size={17} />
          <span>Resume</span>
        </a>

      </div>
    </header>
  );
};

export default Header;