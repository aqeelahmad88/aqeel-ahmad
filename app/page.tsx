import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyMe from "@/components/WhyMe";
import Facts from "@/components/Facts";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aqeel-ahmad.info/#person",
      name: "Aqeel Ahmad",
      jobTitle: "Senior Full Stack Software Engineer & Cloud DevOps Specialist",
      description:
        "Senior Full Stack Software Engineer & DevOps Specialist with 13+ years of hands-on experience in full-cycle web development, AWS cloud infrastructure, microservices, and mobile applications.",
      url: "https://aqeel-ahmad.info/",
      image: "https://aqeel-ahmad.info/assets/img/profile-img.jpg",
      email: "comet_nice2@yahoo.com",
      telephone: "+923134292529",
      sameAs: [
        "https://www.linkedin.com/in/aqeelahmad88",
        "https://github.com/aqeelahmad88",
        "https://www.upwork.com/freelancers/~0110d79914014918a1",
        "https://www.facebook.com/aqeelahmad88",
      ],
      worksFor: {
        "@type": "Organization",
        name: "TGE Systems (myGwork)",
        url: "https://www.mygwork.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Superior, Lahore",
        url: "https://www.superior.edu.pk",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      knowsAbout: [
        "Full Stack Development",
        "DevOps & CI/CD",
        "Amazon Web Services (AWS)",
        "Docker",
        "PHP",
        "Laravel",
        "React.js",
        "Vue.js",
        "Node.js",
        "RESTful APIs",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Mobile App Development",
        "Ionic Framework",
        "System Architecture",
        "WordPress Custom Plugins",
        "Performance Optimization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://aqeel-ahmad.info/#website",
      url: "https://aqeel-ahmad.info/",
      name: "Aqeel Ahmad - Senior Full Stack Engineer & DevOps Portfolio",
      description:
        "Official portfolio of Aqeel Ahmad showcasing 13+ years of full stack software engineering, cloud solutions, and client projects.",
      publisher: {
        "@id": "https://aqeel-ahmad.info/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://aqeel-ahmad.info/#service",
      name: "Aqeel Ahmad - Software Engineering & DevOps Consulting",
      url: "https://aqeel-ahmad.info/",
      image: "https://aqeel-ahmad.info/assets/img/profile-img.jpg",
      priceRange: "$$",
      telephone: "+923134292529",
      email: "comet_nice2@yahoo.com",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Application Development",
              description:
                "End-to-end custom web applications built with Laravel, React, Vue.js, Node.js, and modern relational databases.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud DevOps & AWS Infrastructure Consulting",
              description:
                "AWS cloud deployment, Docker containerization, CI/CD automated deployment pipelines, and 24/7 server monitoring.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Application Engineering",
              description:
                "Cross-platform mobile applications with Ionic, React Native, and Expo connected to secure backend REST APIs.",
            },
          },
        ],
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero />

      <main id="main">
        <About />
        <WhyMe />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; <strong><span>Aqeel Ahmad</span></strong> &bull; Senior Full Stack
            Engineer &amp; DevOps Specialist
          </div>
          <div className="credits">
            All rights reserved &bull; Available for Global Remote Contracts
          </div>
        </div>
      </footer>
    </>
  );
}
