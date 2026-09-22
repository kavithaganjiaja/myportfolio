import React, { useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import './About.css'

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      title: "Junior Software Engineer",
      company: "AJA Consulting Services PVT",
      date: ["Jan-2026"],
      description:
        "Completed a Frontend Web Developer internship, where I collaborated with a team to build a fully functional e-commerce platform, developing responsive and dynamic interfaces using React.js and Tailwind CSS.",
    },
    {
      title: "Computer Programming Assistant",
      company: "Dr B R Ambedkar Open University",
      date: ["2013 - 2025"],
      description:
        "I involved in academic initiations and data digitalization. I developed Windows Form Applications for result process and generating the report using Visual Basics 6.0",
    },
  ];

  const education = [
    {
      title: "Master in Computer Applications",
      company: "PG",
      date: ["2010 - 2013"],
      description:
        "I pursued Master of Computer Applications (MCA), developing advanced knowledge in software development, programming, databases, and modern application technologies.",
    },
    {
      title: "B.Sc in Computer Science",
      company: "Degree",
      date: ["2007 - 2010"],
      description:
        "Completed Bachelor of Science in Computer Science, building a strong foundation in programming, computer science concepts, databases, and software development.",
    },
    {
      title: "MPCs",
      company: "Diploma",
      date: ["2005 - 2007"],
      description:
        "Completed Diploma in MPCs, developing a strong foundation in mathematics, physics, computer science, and analytical problem-solving.",
    },
    {
      title: "SSC",
      company: "Schooling",
      date: ["2005"],
      description:
        "Completed secondary school education, providing the foundation for higher education and further studies in computer science.",
    },
  ];

  const items =
    activeTab === "experience" ? experience : education;

  return (
    <section className="about-section section" id="about">
      <div className="container">

        {/* section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            About My Journey
          </span>

          <h2 className="section-title">
           <span> Experience &</span> Education
          </h2>

          <p className="section-description">
            My professional experience and academic journey that
            shaped my skills and passion for technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="about-tabs">

          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`about-tab ${
              activeTab === "experience" ? "active" : ""
            }`}
          >
            <BriefcaseBusiness size={20} />
            <span>Experience</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`about-tab ${
              activeTab === "education" ? "active" : ""
            }`}
          >
            <GraduationCap size={21} />
            <span>Education</span>
          </button>

        </div>

        {/* Timeline */}
        <div className="about-timeline">

          {/* Center line */}
          <div className="about-timeline-line">
            <span className="timeline-end-dot"></span>
          </div>

          {items.map((item, index) => (
            <div
              className="about-timeline-item"
              key={`${activeTab}-${index}`}
            >

              {/* LEFT SIDE */}
              <div className="timeline-left">

                <div className="timeline-title-block">
                  <h3>{item.title}</h3>

                  <span className="timeline-company">
                    {item.company}
                  </span>
                </div>

                <div className="timeline-date">
                  {item.date.map((date, dateIndex) => (
                    <span key={dateIndex}>
                      {date}
                    </span>
                  ))}
                </div>

              </div>

              {/* CENTER DOT */}
              <div className="timeline-dot">
                <span></span>
              </div>

              {/* RIGHT SIDE */}
              <div className="timeline-description">
                <p>{item.description}</p>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom message */}
        <div className="about-new-footer">
          <div className="about-footer-icon">
            <Sparkles size={19} />
          </div>

          <p>
            <strong>
              {activeTab === "experience"
                ? "Growing through real-world experience."
                : "Building a strong academic foundation."}
            </strong>{" "}
            I continuously learn, experiment and improve my skills
            through every opportunity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;