import React from "react";

export default function WhyMe() {
  return (
    <section id="why-me" className="why-me section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Why Work With Me</h2>
          <p>
            Delivering enterprise-grade software solutions with engineering
            precision, commercial accountability, and round-the-clock
            reliability.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="value-card">
              <div className="value-icon-box">
                <i className="bx bx-layer"></i>
              </div>
              <h4>Full-Cycle Delivery</h4>
              <p>
                From initial system architecture and schema design to
                responsive UI implementation, API integration, and zero-downtime
                production deployment.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="value-card">
              <div className="value-icon-box">
                <i className="bx bx-cloud"></i>
              </div>
              <h4>Cloud &amp; DevOps Native</h4>
              <p>
                Extensive hands-on AWS infrastructure management, Docker
                containerization, automated CI/CD pipelines, database tuning,
                and proactive 24/7 monitoring.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="value-card">
              <div className="value-icon-box">
                <i className="bx bx-trending-up"></i>
              </div>
              <h4>Proven Track Record</h4>
              <p>
                Successfully delivered over 500 projects for startups, SMBs,
                and international enterprises across the USA, UK, Australia,
                and Middle East.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="value-card">
              <div className="value-icon-box">
                <i className="bx bx-message-rounded-check"></i>
              </div>
              <h4>Agile &amp; Responsive</h4>
              <p>
                Transparent daily/weekly communication, strict deadline
                adherence, test-driven code quality, and rapid response times
                (under 4 hours guaranteed).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
