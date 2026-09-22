import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";
import './Contact.css'

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      type: "",
      message: "",
    });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });

      return;
    }

    try {
      setIsSubmitting(true);
      await fetch(
        "https://formsubmit.co/ganjikavita@gmail.com", 
        { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json", 
            Accept: "application/json", 
          }, 
          body: JSON.stringify({ 
            name: formData.name, 
            email: formData.email, 
            subject:formData.subject,
            message: formData.message,
             _subject: "New Portfolio Contact", _captcha: "false", 
            }), 
          } 
        ); 
      const data = await response.json(); 
        console.log("FormSubmit response:", data); 
        if (!response.ok || data.success === false) { 
          throw new Error(data.message || "Form submission failed"); 
        }
        setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
          setFormData({ 
            name: "", 
            email: "", 
            subject:"",
            message: "", 
          }); 
         } catch (error) { 
        console.error("Form submission error:", error); 
        setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      }); 
      } finally {
      setIsSubmitting(false);
      }
    };


  return (
    <section className="contact-section section" id="contact">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-subtitle">
            Get In Touch
            </span>

          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>

          <p className="section-description">
            I'm always interested in hearing about new projects,
            creative ideas and opportunities to collaborate. Whether
            you have a question or just want to connect, feel free
            to reach out.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-intro">
             
              <h3>
                Let's build something<span> great together.</span>
                </h3>

              </div>

            {/* CONTACT DETAILS */}
            <div className="contact-details">

              {/* EMAIL */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:ganjikavita@gmail.com">
                    ganjikavita@gmail.com
                  </a>
                </div>
              </div>

               {/* PHONE  */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+910000000000">
                    +91 00000 00000
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="contact-socials">
              <p>Follow me</p>

              <div className="social-links">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub  size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn  size={19} />
                </a>

                <a
                  href="mailto:ganjikavita@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-header">
              <h3><span>Send Me </span>a Message</h3>

              <p>
                Fill out the form below and I'll get back to you as soon
                as possible.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + EMAIL */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  
                />
              </div>

              {status.message && (
              <p
                className={`form-status ${
                  status.type === "success"
                    ? "success"
                    : "error"
                }`}
              >
                {status.message}
              </p>
            )}


              {/* SUBMIT */}
              <button
                type="submit"
                className="form-submit group"
                disabled={isSubmitting}

              >
                {isSubmitting ? (
                "Sending..."
              ) : (
                      <>
                <span>
                  Send Message
                </span>
              
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                </>)}
              </button>

            </form>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="contact-bottom-cta">

          <div>
            <span className="section-subtitle">
              Have an idea?
            </span>

            <h3>
              Let's turn it into reality.
            </h3>
          </div>

          <a
            href="mailto:ganjikavita@gmail.com"
            className="secondary-btn group"
          >
            Let's Talk

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
