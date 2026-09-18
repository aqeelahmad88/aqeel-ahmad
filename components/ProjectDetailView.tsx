"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";

interface ProjectDetailViewProps {
  project: Project;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>{project.shortTitle}</h2>
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#portfolio">Portfolio</Link>
                </li>
                <li>{project.shortTitle}</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ======= Portfolio Details Section ======= */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              {/* Left Column: Image Showcase & Deep Case Study */}
              <div className="col-lg-8">
                <div className="portfolio-main-img-card">
                  <div
                    onClick={() => setLightboxOpen(true)}
                    style={{ cursor: "pointer" }}
                    title={`Click to preview ${project.shortTitle}`}
                  >
                    <img
                      src={`/${project.imgSrc}`}
                      alt={`${project.shortTitle} - Full Stack Project Case Study`}
                      className="img-fluid"
                    />
                  </div>
                </div>

                {/* Inter-project Navigation Bar */}
                <div className="project-nav-bar">
                  {project.prevSlug ? (
                    <Link
                      href={`/${project.prevSlug}`}
                      className="project-nav-btn"
                      title={`View Previous: ${project.prevLabel}`}
                    >
                      <i className="bx bx-chevron-left"></i> Prev:{" "}
                      {project.prevLabel.slice(0, 20)}...
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  <Link
                    href="/#portfolio"
                    className="project-nav-btn"
                    title="Return to All Projects"
                  >
                    <i className="bx bx-grid-alt"></i> All Projects
                  </Link>

                  {project.nextSlug ? (
                    <Link
                      href={`/${project.nextSlug}`}
                      className="project-nav-btn"
                      title={`View Next: ${project.nextLabel}`}
                    >
                      Next: {project.nextLabel.slice(0, 20)}...{" "}
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>

                {/* Case Study Content */}
                <div className="portfolio-description">
                  <h2>{project.headline}</h2>

                  {project.overview && (
                    <>
                      <h4>
                        <i className="bi bi-info-circle"></i> Project Overview
                        &amp; Business Context
                      </h4>
                      <p>{project.overview}</p>
                    </>
                  )}

                  {project.architecture && (
                    <>
                      <h4>
                        <i className="bi bi-cpu"></i> Engineering Architecture
                        &amp; Technical Execution
                      </h4>
                      <p>{project.architecture}</p>
                    </>
                  )}

                  {project.modules && project.modules.length > 0 && (
                    <>
                      <h4>
                        <i className="bi bi-check-circle"></i> Key Functional
                        Modules Delivered
                      </h4>
                      <ul className="list-unstyled">
                        {project.modules.map((mod, idx) => (
                          <li key={idx}>
                            <i className="bi bi-check2-circle text-primary me-2"></i>
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {project.roi && project.roi.length > 0 && (
                    <>
                      <h4>
                        <i className="bi bi-trophy"></i> Measurable Business
                        ROI &amp; Outcomes
                      </h4>
                      <ul className="list-unstyled">
                        {project.roi.map((r, idx) => (
                          <li key={idx}>
                            <i className="bi bi-graph-up-arrow text-success me-2"></i>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Project Meta Sidebar & Conversion Card */}
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>
                    <i className="bx bx-slider-alt"></i> Project Details
                  </h3>
                  <ul>
                    <li>
                      <strong>Category</strong>
                      <span>{project.category}</span>
                    </li>
                    <li>
                      <strong>Client / Organization</strong>
                      <span>{project.client}</span>
                    </li>
                    <li>
                      <strong>My Role</strong>
                      <span>{project.role}</span>
                    </li>
                    <li>
                      <strong>Status</strong>
                      <span className="text-success">
                        <i className="bi bi-check-circle-fill"></i>{" "}
                        {project.status || "Production Deployed"}
                      </span>
                    </li>
                    {project.liveUrl && (
                      <li>
                        <strong>Live Project URL</strong>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bx-link-external"></i>{" "}
                          {project.liveUrlText || project.liveUrl}
                        </a>
                      </li>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
                      <li>
                        <strong>Technologies Used</strong>
                        <div className="mt-2">
                          {project.technologies.map((t, idx) => (
                            <span key={idx} className="badge-tech">
                              {t}
                            </span>
                          ))}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Conversion Callout Box */}
                <div className="project-cta-card">
                  <h4>Need a Similar Solution?</h4>
                  <p>
                    Let&apos;s architect and build a high-performance web
                    application, custom CRM, or scalable cloud infrastructure
                    tailored to your business goals.
                  </p>

                  <a
                    href={`https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20${encodeURIComponent(
                      project.shortTitle
                    )}%20and%20would%20like%20to%20discuss%20a%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-cta whatsapp"
                  >
                    <i className="bx bxl-whatsapp"></i> Chat on WhatsApp
                  </a>

                  <Link href="/#contact" className="btn-project-cta outline">
                    <i className="bx bx-envelope"></i> Send Project Inquiry
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-cta outline"
                    >
                      <i className="bx bx-link-external"></i> Visit Live Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; 2026 <strong><span>Aqeel Ahmad</span></strong>. Senior Full Stack
            Software Engineer &amp; Cloud DevOps Specialist (13+ Yrs Experience).
          </div>
          <div className="credits">
            Available for Worldwide Consulting &amp; Contract Engagements &bull;{" "}
            <Link href="/#contact">Hire Aqeel</Link>
          </div>
        </div>
      </footer>

      <ImageLightbox
        isOpen={lightboxOpen}
        imageSrc={`/${project.imgSrc}`}
        imageAlt={project.shortTitle}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
