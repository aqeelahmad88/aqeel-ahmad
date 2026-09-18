import React from "react";

export default function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Proven Impact</h2>
          <p>
            Tangible results and metrics achieved across 13+ years of building
            software for clients worldwide.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">230+</span>
              <p>Happy Global Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">520+</span>
              <p>Web &amp; Cloud Projects Delivered</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span className="purecounter">14,500+</span>
              <p>Production Support Hours</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span className="purecounter">13+</span>
              <p>Years of Professional Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
