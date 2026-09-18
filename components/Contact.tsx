"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection or contact via WhatsApp/Email directly.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch &amp; Let&apos;s Work Together</h2>
          <p>
            Have an upcoming project, need architectural guidance, or want to
            hire a seasoned Full Stack / DevOps engineer? Let&apos;s connect.
          </p>
        </div>

        {/* Quick Connect Channels */}
        <div className="quick-connect-grid">
          <a
            href="https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-connect-card"
          >
            <div className="quick-connect-icon whatsapp">
              <i className="bi bi-whatsapp"></i>
            </div>
            <div className="quick-connect-content">
              <h5>Chat on WhatsApp</h5>
              <span>Instant Response &bull; Direct Chat</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/aqeelahmad88"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-connect-card"
          >
            <div className="quick-connect-icon linkedin">
              <i className="bi bi-linkedin"></i>
            </div>
            <div className="quick-connect-content">
              <h5>Connect on LinkedIn</h5>
              <span>Professional Network &bull; InMail</span>
            </div>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~0110d79914014918a1"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-connect-card"
          >
            <div className="quick-connect-icon upwork">
              <i className="bx bxl-upwork"></i>
            </div>
            <div className="quick-connect-content">
              <h5>Hire on Upwork</h5>
              <span>Top Rated &bull; Verified Escrow</span>
            </div>
          </a>

          <a href="mailto:comet_nice2@yahoo.com" className="quick-connect-card">
            <div className="quick-connect-icon email">
              <i className="bi bi-envelope"></i>
            </div>
            <div className="quick-connect-content">
              <h5>Direct Email</h5>
              <span>comet_nice2@yahoo.com</span>
            </div>
          </a>
        </div>

        <div className="text-center mb-4">
          <div className="response-guarantee-badge">
            <i className="bi bi-lightning-charge-fill"></i> Average Response
            Time: Under 4 Hours &bull; Available for Global Remote Contracts
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  2nd Floor, Alhayat Center, Lahore, Pakistan (Available
                  Worldwide)
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a href="mailto:comet_nice2@yahoo.com">
                    comet_nice2@yahoo.com
                  </a>
                </p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call / WhatsApp:</h4>
                <p>
                  <a href="tel:+923134292529">+92 313 429 2529</a>
                </p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.722300975407!2d74.27782177562906!3d31.44931117424664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016c27bfb77b%3A0x2c4bf7ac69ceef26!2sAl%20Hayat%20Center!5e0!3m2!1sen!2s!4v1708429232271!5m2!1sen!2s"
                style={{
                  border: 0,
                  width: "100%",
                  height: "260px",
                  borderRadius: "10px",
                }}
                allowFullScreen
                loading="lazy"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="e.g. John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="e.g. john@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject / Project Scope</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="e.g. Full Stack Web Application / DevOps Consulting"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details / Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows={8}
                  placeholder="Tell me about your project, timeline, tech stack, and goals..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="my-3">
                {status === "loading" && (
                  <div className="loading d-block">Sending message...</div>
                )}
                {status === "error" && (
                  <div className="error-message d-block">{errorMessage}</div>
                )}
                {status === "success" && (
                  <div className="sent-message d-block">
                    Your message has been sent successfully. I will get back to
                    you shortly!
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" disabled={status === "loading"}>
                  <i className="bi bi-send-fill me-2"></i> Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
