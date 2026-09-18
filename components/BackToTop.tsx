"use client";

import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    toggleVisible();
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${
        visible ? "active" : ""
      }`}
      aria-label="Back to Top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
