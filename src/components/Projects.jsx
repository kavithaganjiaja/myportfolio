import React from "react";
import {
  Landmark,
  ShoppingCart,
  Code2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Smart Banking Application",
      description:
        "Designed and developed a banking management system using Core Java that enables account management, deposits, withdrawals, fund transfers, and balance tracking. Leveraged OOP concepts, collections, and exception handling to create a secure and user-friendly solution.",

      icon: Landmark,

      technologies: [
        "Core Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
      ],

      category: "Console Application",

      liveLink: "#",
      githubLink: "#",
    },

    {
      number: "02",
      title: "My Portfolio Website",
      description:
        "A responsive personal portfolio website created to showcase my skills, projects, experience and professional profile with a modern dark-themed user interface.",

      icon: Code2,

      technologies: [
        "React",
        "JavaScript",
        "Vite",
        "CSS",
        "React Router",
      ],

      category: "Portfolio",

      liveLink: "#",
      githubLink: "#",
    },

    {
      number: "03",
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website featuring product browsing, product details, shopping cart functionality and a clean user-friendly interface designed for an engaging online shopping experience.",

      icon: ShoppingCart,

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
      ],

      category: "Web Application",

      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="projects-section section" id="projects">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-subtitle">
            My Recent Work
          </span>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            Here are some of the projects I have built while developing
            my skills in frontend development and Backend technologies.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="project-card"
                key={project.number}
              >
                {/* TOP AREA */}
                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-icon">
                    <Icon size={26} />
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                {/* PROJECT CONTENT */}
                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span
                        className="project-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                   {/* PROJECT LINKS 
                  <div className="project-links">

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-btn"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a> 

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-btn"
                      aria-label={`View ${project.title} source code`}
                    >
                      <FaGithub size={18} />
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-arrow"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>

                  </div> */}
                </div> 

                {/* HOVER EFFECT */}
                <div className="project-glow" /> 
              </article>
            );
          })}

        </div>

        {/* BOTTOM MESSAGE */}
    {/*    <div className="projects-bottom">

          <div>
            <span>
              More projects coming soon
            </span>

            <p>
              I'm continuously learning and building new experiences.
            </p>
          </div>

          <Code2 size={25} />

        </div> */}

      </div> 
    </section>
  );
};

export default Projects;