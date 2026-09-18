import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume &amp; Career History</h2>
          <p>
            Over a decade of delivering maintainable, scalable, and resilient
            software. Championing best engineering practices including CI/CD,
            test-driven development, automated monitoring, and Agile sprint
            execution.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Summary</h3>
            <div className="resume-item pb-0">
              <h4>Aqeel Ahmad</h4>
              <p>
                <em>
                  Accomplished Senior Full Stack Engineer &amp; Cloud DevOps
                  Specialist with 13+ years of proven success architecting,
                  developing, and operating mission-critical web applications,
                  SaaS platforms, and cloud infrastructure for international
                  clients.
                </em>
              </p>
              <ul>
                <li>Lahore, Pakistan (Available for Global Remote Contracts)</li>
                <li>
                  <a href="tel:+923134292529">+92 313 429 2529</a>
                </li>
                <li>
                  <a href="mailto:comet_nice2@yahoo.com">
                    comet_nice2@yahoo.com
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master in Information Technology (MIT)</h4>
              <h5>2009 - 2011</h5>
              <p>
                <em>
                  <a
                    href="https://www.superior.edu.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Superior, Lahore, Pakistan
                  </a>
                </em>
              </p>
              <p>
                Specialized in Software Engineering, Advanced Database
                Management Systems, System Architecture, and Enterprise Web
                Application Development.
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor in Science (B.Sc.)</h4>
              <h5>2006 - 2008</h5>
              <p>
                <em>
                  <a
                    href="http://www.gctownship.edu.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Government College Township Lahore, Pakistan
                  </a>
                </em>
              </p>
              <p>
                Focused on Mathematics, Statistics, and Computer Science
                foundations with rigorous analytical training.
              </p>
            </div>
            <div className="resume-item">
              <h4>Intermediate in Computer Science (ICS)</h4>
              <h5>2004 - 2006</h5>
              <p>
                <em>
                  <a
                    href="http://mtc.edu.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Government College Model Town Lahore, Pakistan
                  </a>
                </em>
              </p>
              <p>
                Comprehensive foundation in programming logic, algorithms,
                discrete mathematics, and computer architectures.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior Software Engineer</h4>
              <h5>2021 - Present</h5>
              <p>
                <em>
                  <a
                    href="https://www.mygwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TGE Systems (myGwork)
                  </a>
                </em>
              </p>
              <ul>
                <li>
                  Architect and engineer scalable core modules, reporting
                  engines, and customer-facing interfaces for the myGwork global
                  business platform.
                </li>
                <li>
                  Key member of the 24/7 cloud infrastructure monitoring and
                  emergency incident response team on AWS.
                </li>
                <li>
                  Manage AWS EC2 instances, RDS databases, backups, tuning,
                  security policies, and zero-downtime release deployments.
                </li>
                <li>
                  Champion Agile/Scrum best practices and daily stand-up
                  technical alignment across distributed engineering teams.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Principal Software Engineer &amp; Team Lead</h4>
              <h5>2019 - 2021</h5>
              <p>
                <em>
                  <a
                    href="https://richtech.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rich Technologies
                  </a>
                </em>
              </p>
              <ul>
                <li>
                  Led full stack engineering squads delivering complex web
                  applications, RESTful APIs, and custom CRM systems.
                </li>
                <li>
                  Architected scalable Laravel platforms, automated testing
                  workflows, and cross-browser responsive interfaces.
                </li>
                <li>
                  Configured and maintained MongoDB and MySQL clusters on AWS
                  instances with automated backup and disaster recovery.
                </li>
                <li>
                  Mentored junior and mid-level developers on clean code
                  principles, code reviews, and Git flow branching strategies.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>2012 - 2019</h5>
              <p>
                <em>
                  <a
                    href="https://visionplus.com.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vision Plus
                  </a>
                </em>
              </p>
              <ul>
                <li>
                  Developed high-volume eCommerce and CRM applications using PHP,
                  MySQL, Apache, JavaScript, AngularJS, and CSS3.
                </li>
                <li>
                  Built custom WordPress plugins, bespoke themes, and
                  contributed modules for commercial clients.
                </li>
                <li>
                  Integrated external third-party payment gateways, REST/SOAP
                  APIs, and messaging notification systems.
                </li>
                <li>
                  Delivered 50+ end-to-end bespoke client software solutions
                  across diverse global business domains.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
