"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Senior Full Stack Engineer",
        "Cloud & DevOps Specialist",
        "Mobile App Architect",
        "Enterprise Solutions Consultant",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="hero-container">
        <div className="status-badge">
          <span className="status-dot"></span> Available for Freelance & Contract Projects
        </div>
        <h1>
          <span className="hero-gradient-text">Aqeel Ahmad</span>
        </h1>
        <div className="hero-role">
          I&apos;m a <span ref={el} className="typed"></span>
        </div>
        <p className="hero-tagline">
          Transforming complex ideas into high-performance web applications,
          scalable cloud infrastructure, and enterprise mobile solutions with
          over 13 years of proven delivery for global businesses.
        </p>

        <div className="hero-ctas">
          <a
            href="#portfolio"
            onClick={(e) => scrollTo(e, "portfolio")}
            className="btn-hero-primary scrollto"
          >
            <i className="bx bx-grid-alt"></i> Explore Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="btn-hero-outline scrollto"
          >
            <i className="bx bx-chat"></i> Hire Me / Let&apos;s Talk
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-whatsapp"
          >
            <i className="bx bxl-whatsapp"></i> WhatsApp Chat
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-num">
              13<span>+</span>
            </span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">
              500<span>+</span>
            </span>
            <span className="hero-stat-label">Projects Delivered</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">
              100<span>%</span>
            </span>
            <span className="hero-stat-label">Client Satisfaction</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">
              AWS<span>&amp;</span>
            </span>
            <span className="hero-stat-label">Cloud Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
