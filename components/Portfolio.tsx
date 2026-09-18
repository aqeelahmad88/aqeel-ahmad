"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  const filters = [
    { label: "All Projects", filter: "*" },
    { label: "Web Apps & SaaS", filter: "filter-app" },
    { label: "Enterprise CRMs", filter: "filter-card" },
    { label: "E-Commerce & Portals", filter: "filter-web" },
  ];

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((p) => p.filterClass === activeFilter);

  const openLightbox = (imgSrc: string, alt: string) => {
    setLightboxImage(`/${imgSrc}`);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Featured Portfolio &amp; Projects</h2>
            <p>
              A curated showcase of high-impact web applications, scalable SaaS
              portals, e-commerce engines, and CRM systems engineered and
              delivered for international clients.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                {filters.map((f) => (
                  <li
                    key={f.filter}
                    className={activeFilter === f.filter ? "filter-active" : ""}
                    onClick={() => setActiveFilter(f.filter)}
                    role="button"
                    tabIndex={0}
                  >
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            {filteredProjects.map((p) => (
              <div
                key={p.slug}
                className={`col-lg-4 col-md-6 portfolio-item ${p.filterClass}`}
                style={{ marginBottom: "30px" }}
              >
                <div className="portfolio-wrap">
                  <img
                    src={`/${p.thumbnail}`}
                    className="img-fluid"
                    alt={`${p.shortTitle} - Web Application Project`}
                    loading="lazy"
                  />
                  <div className="portfolio-links">
                    <button
                      type="button"
                      className="portfolio-lightbox-btn"
                      onClick={() =>
                        openLightbox(p.imgSrc, p.shortTitle)
                      }
                      title={`Preview ${p.shortTitle}`}
                      aria-label={`Preview ${p.shortTitle}`}
                    >
                      <i className="bx bx-plus"></i>
                    </button>
                    <Link
                      href={`/${p.slug}`}
                      title="View Project Case Study &amp; Architecture Details"
                    >
                      <i className="bx bx-file"></i>
                    </Link>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Live Site"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="portfolio-title-caption mt-2 text-center">
                  <h6 className="mb-0 fw-bold">
                    <Link href={`/${p.slug}`} className="text-dark">
                      {p.shortTitle}
                    </Link>
                  </h6>
                  <small className="text-muted">{p.category}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        isOpen={lightboxOpen}
        imageSrc={lightboxImage}
        imageAlt={lightboxAlt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
