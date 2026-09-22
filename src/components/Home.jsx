import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ArrowRight,Download,Sparkles,Mail } from "lucide-react";
import resume from "../assets/Resume.pdf";
import profileImage from "../assets/profile.png";
import './Home.css'

const Home = () => {
  return (
    <section className="hero home-section" id="home">

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Main cyan glow */}
        <div
          className="
            absolute
            top-20
            left-1/4
            w-72
            h-72
            rounded-full
            bg-cyan-400/10
            blur-[120px]
            animate-pulse
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            bottom-10
            right-10
            w-96
            h-96
            rounded-full
            bg-cyan-400/5
            blur-[140px]
          "
        />

        {/* Small glowing particles */}
        <span
          className="
            absolute
            top-32
            left-[8%]
            w-1
            h-1
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_#00e5ff]
          "
        />

        <span
          className="
            absolute
            top-[45%]
            left-[4%]
            w-1
            h-1
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_#00e5ff]
          "
        />

        <span
          className="
            absolute
            bottom-32
            right-[12%]
            w-1
            h-1
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_#00e5ff]
          "
        />

      </div>


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className="hero-content">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


          {/* =========================================
              LEFT SIDE - PROFILE IMAGE
          ========================================= */}

          <div className="flex justify-center lg:justify-start">

            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">

              {/* Large glow behind image */}
              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  bg-cyan-400/20
                  blur-[55px]
                  animate-pulse
                "
              />

              {/* Outer rotating circle */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-cyan-400/40
                  animate-[spin_15s_linear_infinite]
                "
              />

              {/* Second orbit */}
              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  border
                  border-cyan-300/20
                  rotate-12
                "
              />

              {/* Orbiting dot */}
              <div
                className="
                  absolute
                  top-1/2
                  -right-2
                  w-4
                  h-4
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_#00e5ff]
                  animate-pulse
                "
              />

              {/* Profile image */}
              <div
                className="
                  absolute
                  inset-8
                  overflow-hidden
                  rounded-full
                  border
                  border-cyan-400/40
                  bg-[#07191b]
                  shadow-[0_0_40px_rgba(0,229,255,0.18)]
                "
              >

                <img
                  src={profileImage}
                  alt="Kavitha Ganji"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#03151a]/50
                    via-transparent
                    to-cyan-400/5
                  "
                />

              </div>


              {/* Sparkle */}
              <Sparkles
                size={22}
                className="
                  absolute
                  top-8
                  right-4
                  text-cyan-400
                  animate-pulse
                "
              />

            </div>

          </div>


          {/* =========================================
              RIGHT SIDE - INTRODUCTION
          ========================================= */}

          <div className="text-center lg:text-left">

            {/* Availability Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                mb-5
                px-4
                py-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/5
                text-cyan-400
                text-sm
                font-semibold
              "
            >
            </div>


            {/* Hello */}
            <p className="text-gray-300 text-lg font-medium mb-2">
              Hello, I'm
            </p>


            {/* Name */}
            <h1 className="hero-title">
              Kavitha <span>Ganji</span>
            </h1>


            {/* Role */}
            <h2
              className="
                mt-5
                text-xl
                sm:text-2xl
                font-bold
                text-white
              "
            ><br/>
              And I'm a{" "}
              <span
                className="
                  text-cyan-400
                  drop-shadow-[0_0_12px_rgba(0,229,255,0.35)]
                "
              >
                Java Full Stack Developer
              </span>
            </h2>


            {/* Description */}
            <p className="hero-description mx-auto lg:mx-0">
              I passionate about technology with a strong foundation in building scalable 
              and user-centric applications.. Driven by curiosity and continuous learning, 
              I constantly explore emerging technologies and sharpen my skills to create 
              innovative software solutions. 
            </p>


            {/* =========================================
                SOCIAL / CONTACT ICONS
            ========================================= */}

            <div
  className="
    flex
    justify-center
    lg:justify-start
    items-center
    gap-3
    mt-7
  "
>
  {/* GitHub */}
  <a
    href="https://github.com/kavithaganjiaja"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="social-link group hover:bg-cyan-400/10"
  >
    <FaGithub
      size={19}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/feed/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="social-link group hover:bg-cyan-400/10"
  >
    <FaLinkedinIn
      size={19}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

  {/* X / Twitter */}
  {/*<a
    href="https://x.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="X / Twitter"
    className="social-link group hover:bg-cyan-400/10"
  >
    <FaXTwitter
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>*/}

  {/* Email */}
  <a
    href="mailto:ganjikavita@gmail.com"
    aria-label="Email"
    className="social-link group hover:bg-cyan-400/10"
  >
    <Mail
      size={19}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>
</div>

            {/* =========================================
                ACTION BUTTONS
            ========================================= */}

            <div
              className="
                hero-buttons
                justify-center
                lg:justify-start
              "
            >

              {/* Hire Me */}
              <a
                href="#contact"
                className="
                  primary-btn
                  group
                  relative
                  overflow-hidden
                "
              >

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                  "
                >
                  Hire Me

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

                {/* Shine animation */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-700
                    bg-white/20
                    skew-x-12
                  "
                />

              </a>


              {/* Resume */}
              <a
                href={resume}
                download="Resume.pdf"
                className="secondary-btn group"
              >

                <Download
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-y-0.5
                  "
                />

                Resume

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;