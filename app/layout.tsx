import type { Metadata } from "next";
import Script from "next/script";
import HeaderSidebar from "@/components/HeaderSidebar";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aqeel-ahmad.info"),
  title:
    "Aqeel Ahmad | Senior Full Stack Software Engineer & Cloud DevOps Specialist (13+ Yrs Exp)",
  description:
    "Aqeel Ahmad is a Senior Full Stack Software Engineer and Cloud DevOps Specialist with 13+ years of experience architecting high-performance web applications, mobile apps, and scalable AWS cloud solutions. Available for freelance & consulting.",
  keywords:
    "Aqeel Ahmad, Full Stack Engineer, Senior Software Engineer, DevOps Specialist, AWS Cloud Architect, Laravel Developer, React Developer, Vue.js Developer, Mobile App Developer, Node.js, Freelance Software Engineer, Hire Full Stack Developer",
  authors: [{ name: "Aqeel Ahmad" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://aqeel-ahmad.info/",
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
  },
  openGraph: {
    title:
      "Aqeel Ahmad | Senior Full Stack Software Engineer & Cloud DevOps Specialist",
    description:
      "13+ years of proven expertise in scalable web architectures, AWS cloud infrastructure, Laravel, React, Vue, and mobile applications. Available for high-impact projects.",
    url: "https://aqeel-ahmad.info/",
    siteName: "Aqeel Ahmad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aqeel-ahmad.info/assets/img/profile-img.jpg",
        width: 600,
        height: 600,
        alt: "Aqeel Ahmad - Senior Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aqeel Ahmad | Senior Full Stack Software Engineer & DevOps Specialist",
    description:
      "13+ years architecting robust web apps, mobile systems, and scalable AWS cloud infrastructure. Available for freelance & contracts.",
    images: ["https://aqeel-ahmad.info/assets/img/profile-img.jpg"],
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700;800&family=Raleway:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
      </head>
      <body>
        <HeaderSidebar />
        {children}
        <BackToTop />

        {/* Google Analytics Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N7DXBXNEQP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N7DXBXNEQP');
            gtag('config', 'G-WHSBLEM2L6');
          `}
        </Script>
      </body>
    </html>
  );
}
