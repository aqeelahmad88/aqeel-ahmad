import React from "react";

export default function Services() {
  const services = [
    {
      icon: "bi bi-window-stack",
      title: "Custom Web App Development",
      description:
        "Architecting bespoke, high-performance web applications tailored to your business logic using Laravel, Node.js, React, and Vue with enterprise-grade security.",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud Architecture & DevOps",
      description:
        "AWS cloud infrastructure setup, Docker containerization, automated CI/CD deployment pipelines, server hardening, and 24/7 proactive uptime monitoring.",
    },
    {
      icon: "bi bi-cart3",
      title: "E-Commerce Platforms & Stores",
      description:
        "Developing high-conversion digital storefronts with multi-currency support, custom payment gateway integrations (Stripe/PayPal), inventory sync, and checkout optimizations.",
    },
    {
      icon: "bi bi-kanban",
      title: "Enterprise CRM & ERP Systems",
      description:
        "Custom client relationship platforms and ERP hubs to streamline workflows, sales pipelines, lead management, role-based access control, and executive reporting.",
    },
    {
      icon: "bi bi-phone",
      title: "Cross-Platform Mobile Apps",
      description:
        "Building performant iOS & Android mobile applications using Ionic Framework, React Native, and Expo connected to high-speed backend REST APIs.",
    },
    {
      icon: "bi bi-box-seam",
      title: "Inventory & Order Management",
      description:
        "Robust inventory tracking systems, automated order fulfillment workflows, stock alerts, supplier portals, and multi-warehouse synchronization.",
    },
    {
      icon: "bi bi-hdd-network",
      title: "RESTful API & Microservices",
      description:
        "Designing and documenting scalable, secure RESTful and GraphQL APIs for web, mobile, and third-party partner integrations with token/OAuth authentication.",
    },
    {
      icon: "bi bi-bell",
      title: "Real-Time Notification Systems",
      description:
        "Automated transactional email, SMS, and push notification microservices designed for high deliverability, analytics tracking, and automated customer journeys.",
    },
    {
      icon: "bi bi-wordpress",
      title: "Custom WordPress & CMS Plugins",
      description:
        "Bespoke WordPress plugin development, custom theme architectures, performance speed tuning, database optimizations, and security hardening.",
    },
    {
      icon: "bi bi-cash-coin",
      title: "Financial & Accounting Systems",
      description:
        "Custom bookkeeping, cash flow analytics, invoicing engines, multi-ledger accounting modules, and automated financial reporting portals.",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Booking & Scheduling Portals",
      description:
        "Online reservation and appointment scheduling engines with calendar synchronization, automated reminders, and instant online payment capture.",
    },
    {
      icon: "bi bi-shield-check",
      title: "Infrastructure Support & Maintenance",
      description:
        "Ongoing maintenance, SLA-backed bug fixes, database index tuning, automated backups, security audits, and continuous performance monitoring.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services &amp; Solutions</h2>
          <p>
            Delivering end-to-end full stack software development and cloud
            DevOps consulting designed to accelerate time-to-market, scale
            effortlessly, and drive measurable business results.
          </p>
        </div>

        <div className="row g-4">
          {services.map((s, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <i className={s.icon}></i>
                </div>
                <h4 className="title">
                  <a href="#contact">{s.title}</a>
                </h4>
                <p className="description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
