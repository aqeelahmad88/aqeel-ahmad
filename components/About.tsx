import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>
            With over 13 years of hands-on software engineering experience, I
            architect, build, and scale end-to-end web applications,
            cross-platform mobile systems, and resilient cloud architectures. I
            bridge the gap between high-level business vision and bulletproof
            technical execution.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="/assets/img/profile-img.jpg"
              className="img-fluid rounded-4 shadow-sm"
              alt="Aqeel Ahmad - Senior Full Stack Software Engineer & Cloud DevOps Specialist"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Senior Full Stack Software Engineer &amp; DevOps Specialist</h3>
            <p className="fst-italic text-secondary">
              Master&apos;s in Information Technology (MIT) with deep expertise
              in enterprise architectures, full stack software development, and
              AWS cloud management. Currently engineering scalable solutions at
              TGE Systems.
            </p>
            <div className="row my-3">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Experience:</strong> <span>13+ Years</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>
                      <a
                        href="https://aqeel-ahmad.info"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        aqeel-ahmad.info
                      </a>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone / WhatsApp:</strong>{" "}
                    <span>
                      <a href="tel:+923134292529">+92 313 429 2529</a>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Location:</strong>{" "}
                    <span>Lahore, Pakistan (Available Globally)</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Education:</strong>{" "}
                    <span>Master in Information Technology (MIT)</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:comet_nice2@yahoo.com">
                        comet_nice2@yahoo.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance / Contract:</strong>{" "}
                    <span className="badge bg-success text-white px-2 py-1">
                      Available Immediately
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Work Authorization:</strong>{" "}
                    <span>Remote / Worldwide Contracts</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Throughout my 13+ year career, I have navigated complex technical
              challenges spanning multi-tenant SaaS architecture, cloud
              migrations, performance optimization, and mission-critical 24/7
              reliability. My methodology blends clean modular code, automated
              CI/CD pipelines, and business-focused problem solving to ensure each
              deliverable drives measurable ROI for clients and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
