import React from "react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Brain,
  Users,
  Sparkles,
} from "lucide-react";
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    
    {
      title: "Frontend Development",
      icon: Monitor,
      description: "Building responsive and interactive interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "React.js",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "Developing robust backend applications and APIs.",
      skills: [
        "Core Java",
        "Advanced Java",
        "Spring Boot",
        "REST APIs",
      ],
    },
    {
      title: "Database",
      icon: Database,
      description: "Working with relational databases and connectivity.",
      skills: ["MySQL", "JDBC"],
    },
    {
      title: "Tools",
      icon: Wrench,
      description: "Tools I use for development and collaboration.",
      skills: [
        "Git",
        "GitHub",
        "Maven",
        "Postman",
        "VS Code",
        "Eclipse",
      ],
    },
    {
      title: "Core Concepts",
      icon: Brain,
      description: "Strong foundation in software development concepts.",
      skills: [
        "OOP",
        "Data Structures",
        "Collections Framework",
        "Exception Handling",
        "MVC Architecture",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      description: "Professional qualities that help me work effectively.",
      skills: [
        "Teamwork",
        "Collaboration",
        "Problem Solving",
        "Innovation",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section className="skills-section section" id="skills">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-subtitle">
            My Expertise
          </span>

          <h2 className="section-title">
            Skills & <span>Technologies</span>
          </h2>

          <p className="section-description">
            A collection of technologies, development tools and
            professional skills that I use to build reliable and
            engaging digital experiences.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                className="skill-card group"
                key={category.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* CARD NUMBER */}
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* ICON */}
                <div className="skill-icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* TITLE */}
                <h3>{category.title}</h3>

                {/* DESCRIPTION */}
                <p className="skill-description">
                  {category.description}
                </p>

                {/* SKILLS */}
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span
                      className="skill-pill"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* BOTTOM DECORATION */}
                <div className="skill-card-line" />

                {/* GLOW */}
                <div className="skill-glow" />
              </div>
            );
          })}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="skills-footer">
          <div className="skills-footer-icon">
            <Sparkles size={20} />
          </div>

          <div>
            <h3>Always learning. Always improving.</h3>

            <p>
              I continuously explore new technologies and improve
              my development skills by building real-world projects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

