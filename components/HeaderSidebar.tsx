"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderSidebar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMobileNav = () => {
    setMobileNavActive((prev) => !prev);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [mobileNavActive]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("portfolio");
      return;
    }

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "why-me",
        "facts",
        "skills",
        "resume",
        "portfolio",
        "services",
        "contact",
      ];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    closeMobileNav();
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <>
      <i
        className={`bi ${
          mobileNavActive ? "bi-x" : "bi-list"
        } mobile-nav-toggle d-xl-none`}
        aria-label="Toggle Navigation Menu"
        onClick={toggleMobileNav}
      ></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile text-center">
            <img
              src="/assets/img/profile-img.jpg"
              alt="Aqeel Ahmad - Senior Full Stack Software Engineer & Cloud DevOps Specialist"
              className="img-fluid rounded-circle"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <div className="profile-name">
              <Link href="/" onClick={closeMobileNav}>
                Aqeel Ahmad
              </Link>
            </div>
            <span className="profile-badge">Senior Full Stack & DevOps</span>
            <div className="social-links mt-3 text-center">
              <a
                href="https://www.linkedin.com/in/aqeelahmad88"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/aqeelahmad88"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0110d79914014918a1"
                className="upwork"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork Freelancer Profile"
              >
                <i className="bx bxl-upwork"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20would%20like%20to%20discuss%20a%20project"
                className="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://join.skype.com/invite/neyrTHeYxz2m"
                className="google-plus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skype Chat"
              >
                <i className="bx bxl-skype"></i>
              </a>
              <a
                href="https://www.facebook.com/aqeelahmad88"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </div>
          </div>

          <nav
            id="navbar"
            className="nav-menu navbar"
            aria-label="Primary Navigation"
          >
            <ul>
              <li>
                <Link
                  href="/#hero"
                  onClick={(e) => handleNavClick(e, "hero")}
                  className={`nav-link scrollto ${
                    activeSection === "hero" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-home"></i> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className={`nav-link scrollto ${
                    activeSection === "about" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-user"></i> <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-me"
                  onClick={(e) => handleNavClick(e, "why-me")}
                  className={`nav-link scrollto ${
                    activeSection === "why-me" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check-shield"></i> <span>Why Me</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#facts"
                  onClick={(e) => handleNavClick(e, "facts")}
                  className={`nav-link scrollto ${
                    activeSection === "facts" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-line-chart"></i> <span>Impact</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  onClick={(e) => handleNavClick(e, "skills")}
                  className={`nav-link scrollto ${
                    activeSection === "skills" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-code-alt"></i> <span>Tech Stack</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#resume"
                  onClick={(e) => handleNavClick(e, "resume")}
                  className={`nav-link scrollto ${
                    activeSection === "resume" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  onClick={(e) => handleNavClick(e, "portfolio")}
                  className={`nav-link scrollto ${
                    activeSection === "portfolio" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className={`nav-link scrollto ${
                    activeSection === "services" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-server"></i> <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className={`nav-link scrollto ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                >
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
