import React from "react";

export default function Skills() {
  const leftSkills = [
    { name: "PHP & Laravel", val: 95 },
    { name: "JavaScript & TypeScript", val: 88 },
    { name: "React.js & Vue.js", val: 82 },
    { name: "Node.js & Express APIs", val: 80 },
    { name: "HTML5, CSS3 & Bootstrap", val: 95 },
  ];

  const rightSkills = [
    { name: "AWS Cloud & DevOps", val: 85 },
    { name: "MySQL, PostgreSQL & MongoDB", val: 90 },
    { name: "Mobile Apps (Ionic & React Native)", val: 85 },
    { name: "WordPress & Custom Plugins", val: 92 },
    { name: "Symfony & CodeIgniter", val: 80 },
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Tech Stack &amp; Skills</h2>
          <p>
            A comprehensive overview of the modern programming languages,
            frameworks, cloud services, and tools I use to build scalable
            products.
          </p>
        </div>

        {/* Categorized Tech Stack Badges */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="tech-category-card">
              <div className="tech-category-title">
                <i className="bx bx-server"></i> Backend &amp; Architecture
              </div>
              <div className="tech-pills-wrap">
                <span className="tech-pill featured">
                  <i className="bx bxl-php"></i> PHP (OOP)
                </span>
                <span className="tech-pill featured">
                  <i className="bx bx-code-curly"></i> Laravel
                </span>
                <span className="tech-pill featured">
                  <i className="bx bxl-nodejs"></i> Node.js &amp; Express
                </span>
                <span className="tech-pill">
                  <i className="bx bx-terminal"></i> Symfony
                </span>
                <span className="tech-pill">
                  <i className="bx bx-code-block"></i> CodeIgniter
                </span>
                <span className="tech-pill">
                  <i className="bx bx-transfer"></i> RESTful APIs
                </span>
                <span className="tech-pill">
                  <i className="bx bx-data"></i> Microservices
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-wordpress"></i> Custom WP Plugins
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tech-category-card">
              <div className="tech-category-title">
                <i className="bx bx-layout"></i> Frontend &amp; Web UI
              </div>
              <div className="tech-pills-wrap">
                <span className="tech-pill featured">
                  <i className="bx bxl-react"></i> React.js
                </span>
                <span className="tech-pill featured">
                  <i className="bx bxl-vuejs"></i> Vue.js
                </span>
                <span className="tech-pill featured">
                  <i className="bx bxl-javascript"></i> JavaScript (ES6+)
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-angular"></i> AngularJS
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-html5"></i> HTML5 &amp; Semantic Web
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-css3"></i> CSS3 &amp; SASS
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-bootstrap"></i> Bootstrap 5
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-tailwind-css"></i> Responsive UX
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tech-category-card">
              <div className="tech-category-title">
                <i className="bx bx-cloud"></i> Cloud, DevOps &amp; Infrastructure
              </div>
              <div className="tech-pills-wrap">
                <span className="tech-pill featured">
                  <i className="bx bxl-aws"></i> AWS (EC2, S3, RDS, IAM)
                </span>
                <span className="tech-pill featured">
                  <i className="bx bxl-docker"></i> Docker Containerization
                </span>
                <span className="tech-pill featured">
                  <i className="bx bx-git-branch"></i> CI/CD Pipelines
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-tux"></i> Linux System Admin
                </span>
                <span className="tech-pill">
                  <i className="bx bx-server"></i> LAMP &amp; LEMP Stacks
                </span>
                <span className="tech-pill">
                  <i className="bx bx-network-chart"></i> Nginx &amp; Apache
                </span>
                <span className="tech-pill">
                  <i className="bx bxl-git"></i> Git &amp; GitHub
                </span>
                <span className="tech-pill">
                  <i className="bx bx-pulse"></i> 24/7 Server Monitoring
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tech-category-card">
              <div className="tech-category-title">
                <i className="bx bx-mobile-alt"></i> Mobile Apps &amp; Databases
              </div>
              <div className="tech-pills-wrap">
                <span className="tech-pill featured">
                  <i className="bx bx-mobile"></i> Ionic Framework
                </span>
                <span className="tech-pill featured">
                  <i className="bx bxl-react"></i> React Native
                </span>
                <span className="tech-pill">
                  <i className="bx bx-rocket"></i> Expo.dev
                </span>
                <span className="tech-pill featured">
                  <i className="bx bx-data"></i> MySQL &amp; Optimization
                </span>
                <span className="tech-pill featured">
                  <i className="bx bxl-mongodb"></i> MongoDB
                </span>
                <span className="tech-pill">
                  <i className="bx bx-cylinder"></i> PostgreSQL
                </span>
                <span className="tech-pill">
                  <i className="bx bx-shield-quarter"></i> OAuth &amp; JWT Auth
                </span>
                <span className="tech-pill">
                  <i className="bx bx-credit-card"></i> Payment Gateways
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            {leftSkills.map((s) => (
              <div className="progress" key={s.name}>
                <span className="skill">
                  {s.name} <i className="val">{s.val}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={s.val}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${s.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            {rightSkills.map((s) => (
              <div className="progress" key={s.name}>
                <span className="skill">
                  {s.name} <i className="val">{s.val}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={s.val}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${s.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
