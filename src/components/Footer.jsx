import React from "react";
import { Mail, MapPin, Download, ArrowUpRight } from "lucide-react";
import './Footer.css'
import resume from "../assets/Resume.pdf";
import {FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - BRAND & TAGLINE */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="logo-white">KAVITHA</span>
            <span className="logo-cyan"> GANJI</span>
          </a>

          <p className="footer-tagline">
            Java Full Stack Developer | 
            Collaborative Team Player | 
            Creative Problem Solver.
          </p>

          <p className="footer-description">
            Passionate about turning ideas into 
            innovative digital solutions through teamwork, 
            adaptability, and a commitment to excellence..
          </p>
        </div>

        {/* MIDDLE - QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          
          <nav>
            <a href="#home">
              Home
              <ArrowUpRight size={14} />
            </a>
            <a href="#about">
              About
              <ArrowUpRight size={14} />
            </a>

            <a href="#skills">
              Skills
              <ArrowUpRight size={14} />
            </a>

            <a href="#projects">
              Projects
              <ArrowUpRight size={14} />
            </a>

            <a href="#contact">
              Contact
              <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <Mail size={17} />
            </div>

            <div>
              <span>Email</span>
              <a href="mailto:your-email@example.com">
                ganjikavita@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <MapPin size={17} />
            </div>

            <div>
              <span>Address</span>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>
          {/* Whats APP */}
          <div className="footer-contact-item">
            <a
            href="https://wa.me/919515226546"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
              <FaWhatsapp size={20} />
              
          </a>
            <div>
              <p>Chat on WhatsApp</p>
            </div>
          </div>
          

          {/* RESUME BUTTON */}
          <a
            href={resume}
            download="Resume.pdf"
            className="footer-resume-btn"
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kavitha Ganji. All rights reserved.
        </p>

        <p>
          Designed & Built with <span>♥</span> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;