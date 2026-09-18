export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string;
  headline: string;
  imgSrc: string;
  thumbnail: string;
  filterClass: string;
  overview: string;
  architecture: string;
  modules: string[];
  roi: string[];
  category: string;
  client: string;
  role: string;
  status: string;
  liveUrl: string;
  liveUrlText: string;
  technologies: string[];
  prevSlug: string;
  prevLabel: string;
  nextSlug: string;
  nextLabel: string;
}

export const projects: Project[] = [
  {
    "slug": "amsons-design",
    "title": "Amsons Design | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Amsons Design",
    "description": "Amsons Design is an Australian architectural design and interior renovation firm crafting luxury residential estates and commercial environments. The firm ...",
    "keywords": "Aqeel Ahmad, Amsons Design, Full Stack Case Study, PHP, Custom CMS, MySQL, JavaScript, GSAP Animations, SEO Architecture, Web Development, Cloud Architecture",
    "headline": "Amsons Design: Architectural & Interior Styling Studio Digital Showcase",
    "imgSrc": "assets/img/portfolio/portfolio-10-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-10.jpg",
    "filterClass": "filter-web",
    "overview": "Amsons Design is an Australian architectural design and interior renovation firm crafting luxury residential estates and commercial environments. The firm required a digital experience that mirrors their refined aesthetic and converts high-net-worth property developers into consulting clients.",
    "architecture": "Developed a bespoke lightweight CMS allowing the Amsons creative team to publish high-resolution project case studies, before/after renovation sliders, and material palette specifications with automated WebP conversion and responsive srcset generation.",
    "modules": [
      "Interactive before/after renovation comparison sliders illustrating structural transformations",
      "Categorized portfolio filtering across Residential, Commercial, Kitchens, and Exterior Masterplans",
      "Private client consultation booking module with initial design questionnaire and budget qualification",
      "Comprehensive technical SEO setup targeting high-intent Australian architectural queries",
      "Ultra-clean typographic layout emphasizing architectural geometry and photography"
    ],
    "roi": [
      "Ranked on Page 1 for multiple targeted Australian architectural and interior design keywords",
      "Client consultation inquiries increased by 60% year-over-year",
      "Seamless CMS updates enabled the design team to publish fresh project photography in minutes"
    ],
    "category": "E-Commerce & Portals",
    "client": "Amsons Design (Australia)",
    "role": "Lead Front & Backend Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://amsonsdesign.au",
    "liveUrlText": "amsonsdesign.au",
    "technologies": [
      "PHP",
      "Custom CMS",
      "MySQL",
      "JavaScript",
      "GSAP Animations",
      "SEO Architecture"
    ],
    "prevSlug": "razab-fashion",
    "prevLabel": "Razab Fashion",
    "nextSlug": "rapfit-clothing",
    "nextLabel": "Rapfit Clothing"
  },
  {
    "slug": "bexley-childcare",
    "title": "Bexley Childcare | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Bexley Childcare",
    "description": "Turtle Tot Childcare Center in Bexley, Australia provides accredited early childhood education, preschool programs, and toddler nurturing. The center neede...",
    "keywords": "Aqeel Ahmad, Bexley Childcare, Full Stack Case Study, PHP, MySQL, Tour Booking Calendar, Parent Portal, Bootstrap, SSL, Web Development, Cloud Architecture",
    "headline": "Bexley Childcare: Early Education Childcare Center Portal & Tour Booking System",
    "imgSrc": "assets/img/portfolio/portfolio-30-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-30.jpg",
    "filterClass": "filter-web",
    "overview": "Turtle Tot Childcare Center in Bexley, Australia provides accredited early childhood education, preschool programs, and toddler nurturing. The center needed an accessible, welcoming portal where parents can explore educational philosophies, book guided center tours, and submit enrollment applications.",
    "architecture": "Built with user-friendly PHP and an intuitive calendar booking integration that prevents overbooking of center visits. Designed to comply with Australian privacy standards and child safety digital guidelines.",
    "modules": [
      "Automated tour booking scheduler allowing working parents to pick morning tour slots with instant SMS confirmation",
      "Comprehensive program breakdowns for Nursery (0-2 yrs), Toddler (2-3 yrs), and Preschool (3-5 yrs)",
      "Online preliminary enrollment application form reducing physical paperwork for center administrators",
      "Parent resource hub featuring weekly organic nutrition menus, educational milestone guides, and policies",
      "Warm, mobile-friendly design showcasing the center's outdoor learning environments and safety certifications"
    ],
    "roi": [
      "Center tour bookings increased by 75% within two months of digital scheduler launch",
      "Achieved full enrollment capacity across all age cohorts ahead of the upcoming academic year",
      "Received glowing feedback from local parents for clarity, warm aesthetics, and scheduling ease"
    ],
    "category": "E-Commerce & Portals",
    "client": "Turtle Tot Childcare Center (Bexley, Australia)",
    "role": "Web Developer & Systems Integrator",
    "status": "Production Deployed",
    "liveUrl": "https://turtletot.com.au",
    "liveUrlText": "turtletot.com.au",
    "technologies": [
      "PHP",
      "MySQL",
      "Tour Booking Calendar",
      "Parent Portal",
      "Bootstrap",
      "SSL"
    ],
    "prevSlug": "realista-quality-real-estate",
    "prevLabel": "Realista Quality Real Estate",
    "nextSlug": "find-book-beauty",
    "nextLabel": "Find Book Beauty"
  },
  {
    "slug": "book-keeping-system",
    "title": "Book Keeping System | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Book Keeping System",
    "description": "A full-featured double-entry bookkeeping and financial accounting application created for multi-branch companies. Replaces error-prone manual spreadsheets ...",
    "keywords": "Aqeel Ahmad, Book Keeping System, Full Stack Case Study, Laravel, Double-Entry Accounting Engine, MySQL, Chart.js, TCPDF, RBAC, Web Development, Cloud Architecture",
    "headline": "Book Keeping System: Multi-Entity Cloud Accounting & Financial Ledger Management System",
    "imgSrc": "assets/img/portfolio/portfolio-5.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-5.jpg",
    "filterClass": "filter-web",
    "overview": "A full-featured double-entry bookkeeping and financial accounting application created for multi-branch companies. Replaces error-prone manual spreadsheets with structured ledgers, automated reconciliations, invoice cycles, and executive profit-loss dashboards.",
    "architecture": "Designed around strict double-entry GAAP principles where every transaction enforces balancing debit and credit entries. Implemented immutable journal logs, automated bank feed reconciliations, and cryptographic verification to prevent tampering.",
    "modules": [
      "Comprehensive General Ledger, Chart of Accounts, and customizable subsidiary sub-accounts",
      "Accounts Payable & Receivable modules with multi-currency vendor invoice processing",
      "Automated recurring invoice generation with automated late payment interest calculations",
      "Interactive financial health dashboards displaying cash flow forecasts, EBITDA, and balance sheets",
      "One-click tax report exports (VAT / GST) ready for certified public accountant filing"
    ],
    "roi": [
      "Shortened end-of-month financial closing from 7 business days to under 4 hours",
      "Saved participating businesses dozens of administrative hours every week in manual data entry",
      "Provided 100% audit trail compliance for financial inspections"
    ],
    "category": "Enterprise CRMs",
    "client": "Vision Plus & Commercial Clients",
    "role": "Lead Software Engineer",
    "status": "Production Deployed",
    "liveUrl": "http://visionplusdev.com/bookkeeping",
    "liveUrlText": "visionplusdev.com/bookkeeping",
    "technologies": [
      "Laravel",
      "Double-Entry Accounting Engine",
      "MySQL",
      "Chart.js",
      "TCPDF",
      "RBAC"
    ],
    "prevSlug": "sms-solutions-australia",
    "prevLabel": "SMS Solutions Australia",
    "nextSlug": "cascada-bathrooms",
    "nextLabel": "Cascada Bathrooms"
  },
  {
    "slug": "cascada-bathrooms",
    "title": "Cascada Bathrooms | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Cascada Bathrooms",
    "description": "Cascada Bathrooms manufactures ultra-modern smart shower systems, luxury thermostatic mixers, and designer bathroom fittings. The brand needed an immersive...",
    "keywords": "Aqeel Ahmad, Cascada Bathrooms, Full Stack Case Study, PHP, WooCommerce Custom Engine, MySQL, Stripe API, JavaScript, Responsive UI, Web Development, Cloud Architecture",
    "headline": "Cascada Bathrooms: Luxury Sanitaryware & Smart Shower E-Commerce Experience",
    "imgSrc": "assets/img/portfolio/portfolio-6-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-6.jpg",
    "filterClass": "filter-app",
    "overview": "Cascada Bathrooms manufactures ultra-modern smart shower systems, luxury thermostatic mixers, and designer bathroom fittings. The brand needed an immersive eCommerce portal highlighting premium product aesthetics, technical installation diagrams, and high-value cart checkout security.",
    "architecture": "Customized an e-commerce architecture optimized for rich high-resolution imagery and complex variation matrices (finishes, sizes, LED shower configurations). Leveraged server-side caching, lazy loading, and CDN distribution to guarantee blazing speed despite heavy visual media.",
    "modules": [
      "Interactive finish switcher allowing customers to visualize chrome, matte black, and brushed nickel hardware",
      "Integrated technical specification tab with downloadable CAD diagrams and plumber installation manuals",
      "High-ticket checkout protection with 3D Secure 2 credit card fraud screening and PayPal integration",
      "Trade discount portal for certified contractors, interior designers, and hospitality developers",
      "Real-time inventory sync preventing backorders on custom-manufactured rain shower heads"
    ],
    "roi": [
      "Boosted high-ticket average order value (AOV) by 38% through bundle upsell recommendations",
      "Maintained sub-2-second page load times across UK, European, and US shoppers",
      "Reduced customer support inquiries by 45% via accessible installation guides"
    ],
    "category": "Web Apps & SaaS",
    "client": "Cascada Luxury Bathrooms (UK & Global)",
    "role": "Full Stack E-Commerce Architect",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Cascada%20Bathrooms%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "WooCommerce Custom Engine",
      "MySQL",
      "Stripe API",
      "JavaScript",
      "Responsive UI"
    ],
    "prevSlug": "book-keeping-system",
    "prevLabel": "Book Keeping System",
    "nextSlug": "sumo-ranking",
    "nextLabel": "SUMO RANKING"
  },
  {
    "slug": "casting-talent",
    "title": "Casting Talent | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Casting Talent",
    "description": "Casting Talent is an entertainment industry casting portal connecting screen actors, commercial models, and voice talent with film production houses, adver...",
    "keywords": "Aqeel Ahmad, Casting Talent, Full Stack Case Study, PHP, AWS S3 Video Vault, MySQL, FFmpeg Transcoding, JavaScript, RBAC, Web Development, Cloud Architecture",
    "headline": "Casting Talent: Digital Casting Network & Media Showreel Streaming Platform",
    "imgSrc": "assets/img/portfolio/portfolio-14-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-14.jpg",
    "filterClass": "filter-web",
    "overview": "Casting Talent is an entertainment industry casting portal connecting screen actors, commercial models, and voice talent with film production houses, advertising agencies, and casting directors across Europe and North America.",
    "architecture": "Designed a secure media storage and streaming pipeline on AWS S3 with automated FFmpeg video transcoding to deliver smooth audition video playback across all devices. Implemented robust talent search indexing based on physical attributes, vocal ranges, union status, and previous credits.",
    "modules": [
      "Interactive talent profiles featuring high-res comp cards, audio reels, and HD video auditions",
      "Casting director search engine with multi-faceted filtering (age, height, accents, dialect, skills)",
      "Private casting project rooms where directors can create audition shortlists and collaborate with producers",
      "Automated digital audition submissions allowing talent to upload self-tapes directly to project briefs",
      "Encrypted messaging and booking negotiation portal with automated callback notifications"
    ],
    "roi": [
      "Facilitated thousands of successful auditions for major commercial and film productions",
      "Processed and streamed over 50,000 video auditions seamlessly with zero buffering complaints",
      "Reduced casting directors' physical sorting time by over 75%"
    ],
    "category": "E-Commerce & Portals",
    "client": "Casting Talent Network",
    "role": "Lead Architect & Full Stack Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://castingt.com",
    "liveUrlText": "castingt.com",
    "technologies": [
      "PHP",
      "AWS S3 Video Vault",
      "MySQL",
      "FFmpeg Transcoding",
      "JavaScript",
      "RBAC"
    ],
    "prevSlug": "route-deliveries",
    "prevLabel": "Route Deliveries",
    "nextSlug": "inky-illustration",
    "nextLabel": "Inky Illustration"
  },
  {
    "slug": "churahi-enterprises",
    "title": "Churahi Enterprises | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Churahi Enterprises",
    "description": "Churahi Enterprises is an international industrial trading and export company supplying manufactured equipment, raw materials, and agricultural commodities...",
    "keywords": "Aqeel Ahmad, Churahi Enterprises, Full Stack Case Study, PHP, MySQL, Bootstrap 5, RFQ Workflow, Security Hardening, SEO, Web Development, Cloud Architecture",
    "headline": "Churahi Enterprises: Corporate Export, Industrial Trading & Commodity Supply Portal",
    "imgSrc": "assets/img/portfolio/portfolio-17-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-17.jpg",
    "filterClass": "filter-web",
    "overview": "Churahi Enterprises is an international industrial trading and export company supplying manufactured equipment, raw materials, and agricultural commodities to overseas markets. Required a professional digital presence to qualify B2B wholesale buyers and handle RFQ inquiries.",
    "architecture": "Built with secure, clean PHP architecture emphasizing corporate credibility, product certification transparency, and frictionless Request for Quotation (RFQ) workflows.",
    "modules": [
      "Structured industrial product catalog with export packaging specs, shipping container capacities, and ISO certifications",
      "Multi-stage RFQ submission form capturing Incoterms (FOB, CIF), port destinations, and volume metrics",
      "Corporate compliance documents and quality assurance testing reports download center",
      "Mobile-responsive corporate interface tailored for international procurement officers",
      "Spam-protected contact channels with automated email routing to regional trade desks"
    ],
    "roi": [
      "Successfully connected with verified commercial buyers across the Middle East, Europe, and Asia",
      "Streamlined international procurement requests, decreasing initial quotation prep time by 50%",
      "Established a reputable digital footprint meeting global enterprise vendor vetting criteria"
    ],
    "category": "E-Commerce & Portals",
    "client": "Churahi Enterprises",
    "role": "Web Developer & Systems Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://churahienterprises.com",
    "liveUrlText": "churahienterprises.com",
    "technologies": [
      "PHP",
      "MySQL",
      "Bootstrap 5",
      "RFQ Workflow",
      "Security Hardening",
      "SEO"
    ],
    "prevSlug": "tyre-point",
    "prevLabel": "Tyre Point",
    "nextSlug": "epcot-pakistan",
    "nextLabel": "Epcot Pakistan"
  },
  {
    "slug": "deluxe-footwear",
    "title": "Deluxe Footwear | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Deluxe Footwear",
    "description": "Deluxe Footwear is a retail and wholesale shoe brand offering handcrafted leather dress shoes, everyday casuals, athletic sneakers, and orthotic footwear. ...",
    "keywords": "Aqeel Ahmad, Deluxe Footwear, Full Stack Case Study, PHP, MySQL, Shoe Size Converter, AJAX Filtering, Bootstrap 5, Stripe, Web Development, Cloud Architecture",
    "headline": "Deluxe Footwear: Multi-Category Footwear & Handcrafted Leather Goods Catalog",
    "imgSrc": "assets/img/portfolio/portfolio-25-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-25.jpg",
    "filterClass": "filter-web",
    "overview": "Deluxe Footwear is a retail and wholesale shoe brand offering handcrafted leather dress shoes, everyday casuals, athletic sneakers, and orthotic footwear. The client needed a store catering to footwear shoppers with size converters, material guides, and easy exchanges.",
    "architecture": "Engineered an e-commerce catalog featuring multi-dimensional faceted filtering (Brand, Size, Width, Sole Material, Color, Occasion). Built an automated UK/US/EU shoe size conversion tool to eliminate customer sizing confusion.",
    "modules": [
      "Faceted AJAX search and filter allowing shoppers to refine hundreds of shoe models in milliseconds",
      "Interactive shoe size recommendation guide with international size conversion charts",
      "High-resolution 360-degree product image galleries showcasing leather grain and stitching details",
      "Automated warehouse inventory tracking with instant backorder notifications",
      "Integrated customer returns and size exchange request portal"
    ],
    "roi": [
      "Reduced return rates due to incorrect sizing by 31% via the interactive size guide",
      "Increased average session duration and product views per visit by 40%",
      "Processed thousands of shoe sales with high customer satisfaction and repeat purchase loyalty"
    ],
    "category": "E-Commerce & Portals",
    "client": "Deluxe Footwear Brand",
    "role": "E-Commerce Full Stack Developer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Deluxe%20Footwear%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "MySQL",
      "Shoe Size Converter",
      "AJAX Filtering",
      "Bootstrap 5",
      "Stripe"
    ],
    "prevSlug": "st-engineering-services",
    "prevLabel": "S. T. Engineering Services",
    "nextSlug": "vj-designs",
    "nextLabel": "VJ Designs"
  },
  {
    "slug": "epcot-pakistan",
    "title": "Epcot Pakistan | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Epcot Pakistan",
    "description": "Epcot Systems provides enterprise-grade IT infrastructure, network security, hardware distribution, and managed support services to corporate organizations...",
    "keywords": "Aqeel Ahmad, Epcot Pakistan, Full Stack Case Study, PHP, MySQL, REST APIs, Bootstrap, Performance Tuning, Web Development, Cloud Architecture",
    "headline": "Epcot Pakistan: Corporate Enterprise IT Solutions & Infrastructure Services Hub",
    "imgSrc": "assets/img/portfolio/portfolio-18-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-18.jpg",
    "filterClass": "filter-web",
    "overview": "Epcot Systems provides enterprise-grade IT infrastructure, network security, hardware distribution, and managed support services to corporate organizations. Needed a portal showcasing enterprise solutions, SLA packages, and customer service desks.",
    "architecture": "Engineered a fast, secure corporate web portal featuring modular service showcases, customer support ticketing endpoints, and responsive technical service breakdowns.",
    "modules": [
      "Enterprise solutions matrix detailing server virtualization, cloud migration, and network monitoring",
      "Interactive SLA tier comparison table helping prospective clients choose managed support plans",
      "Customer support knowledge base and initial emergency dispatch ticket submission form",
      "Corporate case studies detailing successful enterprise infrastructure rollouts",
      "High-security contact handling preventing automated script exploits"
    ],
    "roi": [
      "Positioned Epcot as an authoritative enterprise systems integrator in the region",
      "Facilitated enterprise managed services contract wins across financial and manufacturing sectors",
      "Sub-second load times verified across all modern desktop and mobile browsers"
    ],
    "category": "Web Apps & SaaS",
    "client": "Epcot Systems",
    "role": "Full Stack Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Epcot%20Pakistan%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "MySQL",
      "REST APIs",
      "Bootstrap",
      "Performance Tuning"
    ],
    "prevSlug": "churahi-enterprises",
    "prevLabel": "Churahi Enterprises",
    "nextSlug": "services-of-canada",
    "nextLabel": "Services of Canada"
  },
  {
    "slug": "find-book-beauty",
    "title": "Find Book Beauty | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Find Book Beauty",
    "description": "Find Book Beauty is an appointment scheduling marketplace connecting beauty salons, independent hairstylists, nail technicians, and spas with clients looki...",
    "keywords": "Aqeel Ahmad, Find Book Beauty, Full Stack Case Study, PHP, Google Calendar Sync, MySQL, Stripe Escrow, SMS Reminders, Bootstrap, Web Development, Cloud Architecture",
    "headline": "Find Book Beauty: On-Demand Hair, Beauty & Wellness Appointment Booking Platform",
    "imgSrc": "assets/img/portfolio/portfolio-31-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-31.jpg",
    "filterClass": "filter-web",
    "overview": "Find Book Beauty is an appointment scheduling marketplace connecting beauty salons, independent hairstylists, nail technicians, and spas with clients looking for 24/7 instant booking convenience.",
    "architecture": "Constructed a multi-vendor scheduling architecture featuring two-way Google Calendar synchronization, automated SMS appointment reminders, and upfront deposit authorizations to prevent costly client no-shows.",
    "modules": [
      "Salon discovery engine filtering stylists by neighborhood, treatment type, price range, and verified ratings",
      "Real-time calendar slot reservation preventing double-bookings across individual salon chairs",
      "Stripe payment integration with upfront booking deposits and in-salon balance completion",
      "Automated SMS appointment reminders sent 24 hours and 2 hours prior to scheduled treatments",
      "Salon manager back-office tracking staff commission rates, daily revenue, and client retention rates"
    ],
    "roi": [
      "Drastically lowered salon appointment no-show rates from 18% to under 2% through deposit automation",
      "Enabled salons to capture 40% of their bookings outside of regular business hours",
      "Supported hundreds of beauty professionals in managing their schedules effortlessly"
    ],
    "category": "Web Apps & SaaS",
    "client": "Find Book Beauty Marketplace",
    "role": "Lead Full Stack Developer",
    "status": "Production Deployed",
    "liveUrl": "https://findbookbeauty.com",
    "liveUrlText": "findbookbeauty.com",
    "technologies": [
      "PHP",
      "Google Calendar Sync",
      "MySQL",
      "Stripe Escrow",
      "SMS Reminders",
      "Bootstrap"
    ],
    "prevSlug": "bexley-childcare",
    "prevLabel": "Bexley Childcare",
    "nextSlug": "mygwork",
    "nextLabel": "myGwork - The LGBTQ+ Business Community"
  },
  {
    "slug": "great-fame-clothing-co",
    "title": "Great fame Clothing Co. | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Great fame Clothing Co.",
    "description": "Great Fame Clothing is an urban streetwear label producing high-concept hoodies, graphic tees, headwear, and bespoke denim. Needed a digital home that comm...",
    "keywords": "Aqeel Ahmad, Great fame Clothing Co., Full Stack Case Study, PHP, MySQL, JavaScript, Stripe, Responsive UI, Inventory Tracker, Web Development, Cloud Architecture",
    "headline": "Great fame Clothing Co.: Urban Streetwear & Limited-Drop Apparel Retail Platform",
    "imgSrc": "assets/img/portfolio/portfolio-23-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-23.jpg",
    "filterClass": "filter-web",
    "overview": "Great Fame Clothing is an urban streetwear label producing high-concept hoodies, graphic tees, headwear, and bespoke denim. Needed a digital home that communicates their urban subculture ethos, supports high-speed checkout, and manages seasonal drops.",
    "architecture": "Built with custom lightweight PHP and an optimized product catalog. Incorporates automated queue management for high-demand limited drops, inventory reservations during active checkout, and rapid mobile checkout.",
    "modules": [
      "Limited drop countdown clocks with instant email notifications for upcoming capsule collections",
      "Visual editorial lookbook linking lifestyle photos directly to purchase cards",
      "Variant selector supporting unisex sizing dimensions and detailed fabric weight metrics",
      "Integrated payment gateway supporting credit cards, debit cards, and alternative digital wallets",
      "Customer profile area tracking order statuses, previous receipts, and saved shipping addresses"
    ],
    "roi": [
      "Sold out flagship capsule collections within hours of launch without website slowdowns",
      "Over 65% of total transactions executed on smartphones with zero checkout friction",
      "Earned loyal brand followers with smooth order tracking and instant email updates"
    ],
    "category": "E-Commerce & Portals",
    "client": "Great Fame Clothing",
    "role": "Full Stack E-Commerce Developer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Great%20fame%20Clothing%20Co.%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "MySQL",
      "JavaScript",
      "Stripe",
      "Responsive UI",
      "Inventory Tracker"
    ],
    "prevSlug": "out-of-the-blue-seafood-crm",
    "prevLabel": "Out of the Blue Seafood - CRM",
    "nextSlug": "st-engineering-services",
    "nextLabel": "S. T. Engineering Services"
  },
  {
    "slug": "hash-phone",
    "title": "Hash Phone | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Hash Phone",
    "description": "Hash Phone is a telecommunications SaaS platform enabling remote companies, digital nomads, and global call centers to instantly purchase virtual phone num...",
    "keywords": "Aqeel Ahmad, Hash Phone, Full Stack Case Study, PHP, VoIP Webhooks, MySQL, Stripe Recurring Billing, Real-Time CDR, REST APIs, Web Development, Cloud Architecture",
    "headline": "Hash Phone: Virtual International Phone Numbers & Cloud PBX Management Platform",
    "imgSrc": "assets/img/portfolio/portfolio-21-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-21.jpg",
    "filterClass": "filter-web",
    "overview": "Hash Phone is a telecommunications SaaS platform enabling remote companies, digital nomads, and global call centers to instantly purchase virtual phone numbers across 50+ countries and configure intelligent cloud PBX call forwarding rules.",
    "architecture": "Integrated carrier VoIP APIs and webhook listeners with a responsive customer portal. Built real-time Call Detail Record (CDR) logging, minute usage billing meters, and automated subscription renewal cycles.",
    "modules": [
      "Instant global DID number purchasing with local, national, and toll-free inventory options",
      "Intuitive call routing rules (forward to mobile, ring group, IVR auto-attendant, or voicemail)",
      "Voicemail-to-Email transcription integration delivering audio MP3s directly to client inboxes",
      "Real-time call analytics dashboard tracking inbound volume, call durations, and missed call spikes",
      "Automated subscription recurring billing with credit wallet auto-recharge functionality"
    ],
    "roi": [
      "Provisioned thousands of international virtual numbers with instant sub-10-second activation",
      "Maintained 99.95% telecom platform availability for business communication lines",
      "Automated 100% of recurring invoice generation and failed-payment retry handling"
    ],
    "category": "Web Apps & SaaS",
    "client": "Hash Phone Telecom",
    "role": "Cloud & Telecom Software Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Hash%20Phone%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "VoIP Webhooks",
      "MySQL",
      "Stripe Recurring Billing",
      "Real-Time CDR",
      "REST APIs"
    ],
    "prevSlug": "noor-brands",
    "prevLabel": "Noor Brands",
    "nextSlug": "out-of-the-blue-seafood-crm",
    "nextLabel": "Out of the Blue Seafood - CRM"
  },
  {
    "slug": "health-unity-wealth",
    "title": "Health Unity Wealth | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Health Unity Wealth",
    "description": "Health Unity Wealth is an online wellness and wealth education academy offering guided physical health protocols, mindfulness courses, financial independen...",
    "keywords": "Aqeel Ahmad, Health Unity Wealth, Full Stack Case Study, PHP, MySQL, Stripe Billing, Video Streaming Vault, Interactive Tools, Bootstrap, Web Development, Cloud Architecture",
    "headline": "Health Unity Wealth: Holistic Wellness, Mindset & Financial Literacy Membership Community",
    "imgSrc": "assets/img/portfolio/portfolio-33-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-33.jpg",
    "filterClass": "filter-web",
    "overview": "Health Unity Wealth is an online wellness and wealth education academy offering guided physical health protocols, mindfulness courses, financial independence masterclasses, and private mastermind community access.",
    "architecture": "Built a tiered subscription membership vault with Stripe recurring billing webhooks, video streaming protection preventing unauthorized link sharing, and interactive daily habit tracking modules.",
    "modules": [
      "Tiered membership gating (Bronze, Silver, VIP Mastermind) with automated access provisioning",
      "Protected video masterclass library with progress tracking and downloadable workbook PDFs",
      "Interactive daily wellness habit trackers and financial net worth calculation tools",
      "Private member discussion forum with direct mentor Q&A threads",
      "Automated subscription lifecycle handling upgrades, downgrades, and dunning notifications"
    ],
    "roi": [
      "Scaled to a vibrant paying subscriber community with low member churn",
      "100% automated subscription billing and member provisioning saving hundreds of admin hours",
      "Fast video streaming and responsive user interface across all modern mobile and desktop screens"
    ],
    "category": "Web Apps & SaaS",
    "client": "Health Unity Wealth",
    "role": "Full Stack Engineer & Subscription Architect",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Health%20Unity%20Wealth%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "MySQL",
      "Stripe Billing",
      "Video Streaming Vault",
      "Interactive Tools",
      "Bootstrap"
    ],
    "prevSlug": "mygwork",
    "prevLabel": "myGwork - The LGBTQ+ Business Community",
    "nextSlug": "metal-carports-usa",
    "nextLabel": "Metal Carports USA"
  },
  {
    "slug": "home-auction-mls",
    "title": "Home Auction MLS | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Home Auction MLS",
    "description": "Home Auction MLS is an online real estate auction and investment marketplace in the United States. It connects licensed realtors, foreclosure investors, an...",
    "keywords": "Aqeel Ahmad, Home Auction MLS, Full Stack Case Study, PHP, RETS / RESO Web API, MySQL, WebSocket Bidding, AWS EC2, Cron Daemons, Web Development, Cloud Architecture",
    "headline": "Home Auction MLS: Real Estate Property Auctions & Live Regional MLS Data Ingestion Portal",
    "imgSrc": "assets/img/portfolio/portfolio-28-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-28.jpg",
    "filterClass": "filter-web",
    "overview": "Home Auction MLS is an online real estate auction and investment marketplace in the United States. It connects licensed realtors, foreclosure investors, and homebuyers with timed property auctions synchronized with live regional Multiple Listing Service (MLS) feeds.",
    "architecture": "Engineered automated data ingestion workers parsing RETS / RESO standard MLS real estate feeds every 15 minutes, synchronizing property photos, tax assessments, and listing statuses into a unified database. Implemented a timer-driven bidding engine preventing sniper bids via automated auction clock extensions.",
    "modules": [
      "Live MLS data synchronization maintaining up-to-date property prices, statuses, and agent contacts",
      "Real-time timed auction engine with automatic 2-minute soft-close clock extensions when bids arrive late",
      "Buyer pre-qualification verification gate verifying proof of funds before unlocking live bidding",
      "Comprehensive property due diligence packet downloads (title reports, property inspections, HOA covenants)",
      "Automated escrow and earnest money deposit calculation following winning auction hammer prices"
    ],
    "roi": [
      "Synchronized over 50,000 active real estate listings continuously with zero data corruption",
      "Facilitated millions of dollars in successful residential property auction transactions",
      "Handled simultaneous bidding wars with sub-second bid validation and live screen updates"
    ],
    "category": "Web Apps & SaaS",
    "client": "Home Auction MLS (USA)",
    "role": "Principal Software Engineer & MLS Specialist",
    "status": "Production Deployed",
    "liveUrl": "https://homeauctionmls.com",
    "liveUrlText": "homeauctionmls.com",
    "technologies": [
      "PHP",
      "RETS / RESO Web API",
      "MySQL",
      "WebSocket Bidding",
      "AWS EC2",
      "Cron Daemons"
    ],
    "prevSlug": "rolespot",
    "prevLabel": "RoleSpot",
    "nextSlug": "realista-quality-real-estate",
    "nextLabel": "Realista Quality Real Estate"
  },
  {
    "slug": "idiasporan-platform",
    "title": "IDiasporan Platform | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "IDiasporan Platform",
    "description": "IDiasporan is an international community platform designed to bridge expatriate diaspora communities across North America, Europe, and Asia. It facilitates...",
    "keywords": "Aqeel Ahmad, IDiasporan Platform, Full Stack Case Study, PHP, MySQL, RESTful APIs, jQuery, Bootstrap, Linux / Apache, Web Development, Cloud Architecture",
    "headline": "IDiasporan Platform: Global Diaspora Networking & Professional Mentorship Portal",
    "imgSrc": "assets/img/portfolio/portfolio-2-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-2.jpg",
    "filterClass": "filter-web",
    "overview": "IDiasporan is an international community platform designed to bridge expatriate diaspora communities across North America, Europe, and Asia. It facilitates cross-border mentorship, talent acquisition, diaspora-owned business discovery, and cultural exchange initiatives.",
    "architecture": "Built with an extensible PHP MVC framework and structured relational MySQL database handling comprehensive member profiles, categorized business directories, and discussion message boards. Features robust spam detection, automated onboarding email flows, and fine-grained privacy controls.",
    "modules": [
      "Comprehensive member profile builder with skill verification, industry tags, and geographic location filtering",
      "Geolocated business directory with Google Maps integration and user review moderation",
      "Direct peer-to-peer messaging system with privacy safeguards and instant email alerts",
      "Event aggregation calendar supporting virtual webinars, local cultural summits, and RSVP tracking",
      "Dynamic community bulletin board with threaded discussions and content moderation workflows"
    ],
    "roi": [
      "Scaled from zero to thousands of verified diaspora members across 15+ countries",
      "Facilitated over 300 successful professional mentorship pairings in its first year",
      "Achieved sub-second page loads globally through optimized asset pipelines and MySQL indexing"
    ],
    "category": "E-Commerce & Portals",
    "client": "IDiasporan Global Community",
    "role": "Lead Full Stack Developer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20IDiasporan%20Platform%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "MySQL",
      "RESTful APIs",
      "jQuery",
      "Bootstrap",
      "Linux / Apache"
    ],
    "prevSlug": "metal-carports-usa",
    "prevLabel": "Metal Carports USA",
    "nextSlug": "metal-carports-usa-crm",
    "nextLabel": "Metal Carports USA (CRM)"
  },
  {
    "slug": "inky-illustration",
    "title": "Inky Illustration | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Inky Illustration",
    "description": "Inky Illustration is an established UK creative agency representing award-winning illustrators, digital artists, and storyboard creators for publishing gia...",
    "keywords": "Aqeel Ahmad, Inky Illustration, Full Stack Case Study, PHP, Custom Art CMS, MySQL, JavaScript, Image Optimization, Responsive UI, Web Development, Cloud Architecture",
    "headline": "Inky Illustration: Commercial Illustration Agency & Artist Representation Showcase",
    "imgSrc": "assets/img/portfolio/portfolio-15-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-15.jpg",
    "filterClass": "filter-web",
    "overview": "Inky Illustration is an established UK creative agency representing award-winning illustrators, digital artists, and storyboard creators for publishing giants, branding agencies, and global advertisers.",
    "architecture": "Constructed a visual-first agency platform that balances large, vibrant artwork files with ultra-fast page rendering. Developed custom image resizing algorithms and watermarking security to protect represented artists' intellectual property.",
    "modules": [
      "Artist style tagging system (Editorial, Children's Books, 3D CGI, Fashion, Vector, Concept Art)",
      "Instant PDF portfolio builder allowing art buyers to compile bespoke artist portfolios with one click",
      "Direct project commission briefing form capturing scope, deadlines, licensing rights, and budget",
      "High-definition zoom capability with automatic server-side copyright watermarking",
      "Curated agency blog highlighting international campaign wins and featured artist spotlights"
    ],
    "roi": [
      "Enhanced agency inquiry conversions from premier advertising and publishing creative directors",
      "Maintained pristine image sharpness on Apple Retina displays while keeping page weights lean",
      "Empowered the internal agency team to manage 50+ artist portfolios with zero developer assistance"
    ],
    "category": "E-Commerce & Portals",
    "client": "Inky Illustration Agency (UK)",
    "role": "Full Stack Web Developer",
    "status": "Production Deployed",
    "liveUrl": "https://www.inkyillustration.com",
    "liveUrlText": "www.inkyillustration.com",
    "technologies": [
      "PHP",
      "Custom Art CMS",
      "MySQL",
      "JavaScript",
      "Image Optimization",
      "Responsive UI"
    ],
    "prevSlug": "casting-talent",
    "prevLabel": "Casting Talent",
    "nextSlug": "tyre-point",
    "nextLabel": "Tyre Point"
  },
  {
    "slug": "metal-carports-usa-crm",
    "title": "Metal Carports USA (CRM) | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Metal Carports USA (CRM)",
    "description": "To handle expanding nationwide steel building orders, Metal Carports USA required an enterprise internal CRM. The system coordinates the entire post-sale l...",
    "keywords": "Aqeel Ahmad, Metal Carports USA (CRM), Full Stack Case Study, Laravel, Vue.js, MySQL, AWS RDS, RBAC, REST APIs, PDF Engine, Web Development, Cloud Architecture",
    "headline": "Metal Carports USA (CRM): Manufacturing & Installation Order Management Enterprise Back-Office",
    "imgSrc": "assets/img/portfolio/portfolio-3.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-3.jpg",
    "filterClass": "filter-app",
    "overview": "To handle expanding nationwide steel building orders, Metal Carports USA required an enterprise internal CRM. The system coordinates the entire post-sale lifecycle: technical engineering reviews, manufacturer purchase orders, installation crew scheduling, balance collections, and warranty ticket management.",
    "architecture": "Architected an enterprise Laravel application featuring strict Role-Based Access Control (RBAC) across Sales Agents, Engineers, Dispatch Managers, and Executives. Connected to AWS RDS MySQL with automated read replicas and strict transaction isolation to prevent race conditions during scheduling.",
    "modules": [
      "Centralized customer order hub tracking orders from deposit payment to physical installation",
      "Automated manufacturer purchase order generation and steel delivery timeline tracking",
      "Interactive crew dispatch calendar with route clustering and geographical territory boundaries",
      "Integrated payment balance collections tracking milestone payments, refunds, and bank reconciliations",
      "Custom warranty claim and customer service ticketing system with automated SLA alerts"
    ],
    "roi": [
      "Reduced order fulfillment processing overhead by 65% through automated workflow triggers",
      "Handled millions of dollars in monthly manufacturing orders without a single transaction error",
      "Enabled seamless multi-office collaboration between headquarters and remote installation crews"
    ],
    "category": "Enterprise CRMs",
    "client": "Metal Carports USA (Operations)",
    "role": "Principal Software Engineer & Database Architect",
    "status": "Production Deployed",
    "liveUrl": "https://metalcarportsusa.com/crm",
    "liveUrlText": "metalcarportsusa.com/crm",
    "technologies": [
      "Laravel",
      "Vue.js",
      "MySQL",
      "AWS RDS",
      "RBAC",
      "REST APIs",
      "PDF Engine"
    ],
    "prevSlug": "idiasporan-platform",
    "prevLabel": "IDiasporan Platform",
    "nextSlug": "sms-solutions-australia",
    "nextLabel": "SMS Solutions Australia"
  },
  {
    "slug": "metal-carports-usa",
    "title": "Metal Carports USA | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Metal Carports USA",
    "description": "Metal Carports USA is an American steel manufacturing and installation enterprise providing custom carports, commercial garages, RV covers, and agricultura...",
    "keywords": "Aqeel Ahmad, Metal Carports USA, Full Stack Case Study, PHP, Laravel, JavaScript (ES6+), MySQL, AWS EC2, REST APIs, Bootstrap 5, Web Development, Cloud Architecture",
    "headline": "Metal Carports USA: Interactive Custom Steel Building Estimator & Direct Order Engine",
    "imgSrc": "assets/img/portfolio/portfolio-1-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-1.jpg",
    "filterClass": "filter-app",
    "overview": "Metal Carports USA is an American steel manufacturing and installation enterprise providing custom carports, commercial garages, RV covers, and agricultural barns across multiple US states. The client required a modern digital platform featuring an interactive building configuration tool, real-time regional pricing calculations, and automated deposit checkouts to replace slow manual telephone estimations.",
    "architecture": "Engineered a scalable Laravel backend paired with a custom modular JavaScript visual builder. The pricing calculation engine handles thousands of dimension variables, gauge thicknesses, roof styles, and state-specific building code wind/snow ratings. Deployed on AWS EC2 with automated daily backups, SSL enforcement, and Redis caching for rapid catalog lookups.",
    "modules": [
      "Interactive 2D/3D building configurator allowing custom width, length, height, and color selection",
      "State-specific tax and engineering permit price calculators reflecting dynamic regional labor rates",
      "Integrated payment gateway for instant deposit verification and automated digital contract signing",
      "Automated quote generator delivering instant PDF spec sheets and bill of materials to customer inboxes",
      "Mobile-first responsive interface allowing field sales agents to close contracts directly on mobile tablets"
    ],
    "roi": [
      "Reduced sales consultation turnaround time from 24 hours to instant self-service quotes",
      "Generated a 42% increase in online deposit conversion within the first 90 days of launch",
      "Eliminated pricing discrepancies by centralizing regional steel cost tables in a single database",
      "Maintained 99.9% uptime on AWS during peak nationwide marketing campaigns"
    ],
    "category": "Web Apps & SaaS",
    "client": "Metal Carports USA (USA)",
    "role": "Senior Full Stack Engineer & Cloud Architect",
    "status": "Production Deployed",
    "liveUrl": "http://metalcarportsusa.com/",
    "liveUrlText": "metalcarportsusa.com",
    "technologies": [
      "PHP",
      "Laravel",
      "JavaScript (ES6+)",
      "MySQL",
      "AWS EC2",
      "REST APIs",
      "Bootstrap 5"
    ],
    "prevSlug": "health-unity-wealth",
    "prevLabel": "Health Unity Wealth",
    "nextSlug": "idiasporan-platform",
    "nextLabel": "IDiasporan Platform"
  },
  {
    "slug": "mygwork",
    "title": "myGwork - The LGBTQ+ Business Community | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "myGwork - The LGBTQ+ Business Community",
    "description": "myGwork is the world's leading business community for LGBTQ+ professionals, graduates, and inclusive employers. Partnered with FTSE 100 and Fortune 500 gia...",
    "keywords": "Aqeel Ahmad, myGwork - The LGBTQ+ Business Community, Full Stack Case Study, AWS (EC2, RDS, S3, CloudFront), Laravel, Vue.js, MySQL, Docker, CI/CD, Redis, Web Development, Cloud Architecture",
    "headline": "myGwork - The LGBTQ+ Business Community: Global Enterprise Diversity Networking, Job Board & Corporate Events Platform",
    "imgSrc": "assets/img/portfolio/portfolio-32-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-32.jpg",
    "filterClass": "filter-web",
    "overview": "myGwork is the world's leading business community for LGBTQ+ professionals, graduates, and inclusive employers. Partnered with FTSE 100 and Fortune 500 giants (including Google, Microsoft, Johnson & Johnson, and Barclays), the platform serves hundreds of thousands of members globally.",
    "architecture": "As Senior Full Stack Engineer at TGE Systems, I engineer scalable core modules, enterprise corporate dashboards, high-traffic job boards, and automated reporting systems. Co-manage the AWS cloud infrastructure (EC2 clusters, RDS MySQL, CloudFront CDN, S3, and automated Docker CI/CD pipelines) with 24/7 incident monitoring to guarantee 99.99% availability.",
    "modules": [
      "Enterprise recruitment hub with ATS integrations serving multinational corporate partner job feeds",
      "High-traffic corporate events and annual virtual summits hosting tens of thousands of concurrent attendees",
      "Mentorship and community networking modules connecting junior graduates with corporate executives",
      "Corporate partner analytics portal delivering diversity recruitment ROI and job post telemetry",
      "Zero-downtime automated deployment pipelines and automated database backup verification"
    ],
    "roi": [
      "Maintained rock-solid 99.99% uptime during massive global WorkPride virtual conferences",
      "Handled millions of page views per month across global corporate partners without performance dips",
      "Key engineer ensuring enterprise security, GDPR compliance, and continuous platform innovation"
    ],
    "category": "Web Apps & SaaS",
    "client": "TGE Systems / myGwork (London, UK)",
    "role": "Senior Full Stack Software Engineer & AWS Cloud Specialist",
    "status": "Production Deployed",
    "liveUrl": "https://www.mygwork.com",
    "liveUrlText": "www.mygwork.com",
    "technologies": [
      "AWS (EC2, RDS, S3, CloudFront)",
      "Laravel",
      "Vue.js",
      "MySQL",
      "Docker",
      "CI/CD",
      "Redis"
    ],
    "prevSlug": "find-book-beauty",
    "prevLabel": "Find Book Beauty",
    "nextSlug": "health-unity-wealth",
    "nextLabel": "Health Unity Wealth"
  },
  {
    "slug": "noor-brands",
    "title": "Noor Brands | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Noor Brands",
    "description": "Noor Brands is a major manufacturer and distributor of consumer packaged goods, food commodities, and household essentials. The corporate website serves as...",
    "keywords": "Aqeel Ahmad, Noor Brands, Full Stack Case Study, PHP, MySQL, Interactive Product Grid, Distributor Map API, Bootstrap, CDN, Web Development, Cloud Architecture",
    "headline": "Noor Brands: Fast-Moving Consumer Goods (FMCG) Brand Portfolio & Distributor Hub",
    "imgSrc": "assets/img/portfolio/portfolio-20-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-20.jpg",
    "filterClass": "filter-web",
    "overview": "Noor Brands is a major manufacturer and distributor of consumer packaged goods, food commodities, and household essentials. The corporate website serves as a flagship showcase for their extensive brand lineup, international export certifications, and wholesale partner network.",
    "architecture": "Structured a multi-brand catalog with clean hierarchy, rich nutritional tables, packaging specs, and an interactive geographic distributor locator powered by map APIs.",
    "modules": [
      "Categorized brand portfolio highlighting food items, beverages, and personal care lines",
      "Dynamic nutritional information cards and international Halal/ISO quality certification badges",
      "Interactive retail store and wholesale distributor locator with city and postal code filtering",
      "Wholesale dealership application workflow with automated territory conflict screening",
      "Optimized image delivery pipeline ensuring rapid load times for international visitors"
    ],
    "roi": [
      "Expanded global wholesale distribution reach into multiple overseas retail supermarket chains",
      "Reduced corporate sales inquiry routing latency from 3 days to under 6 hours",
      "Delivered a polished digital presence reflecting a world-class manufacturing conglomerate"
    ],
    "category": "E-Commerce & Portals",
    "client": "Noor Brands Group",
    "role": "Full Stack Web Developer",
    "status": "Production Deployed",
    "liveUrl": "https://noorbrands.com",
    "liveUrlText": "noorbrands.com",
    "technologies": [
      "PHP",
      "MySQL",
      "Interactive Product Grid",
      "Distributor Map API",
      "Bootstrap",
      "CDN"
    ],
    "prevSlug": "services-of-canada",
    "prevLabel": "Services of Canada",
    "nextSlug": "hash-phone",
    "nextLabel": "Hash Phone"
  },
  {
    "slug": "out-of-the-blue-seafood-crm",
    "title": "Out of the Blue Seafood - CRM | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Out of the Blue Seafood - CRM",
    "description": "The operational backbone of Out of the Blue Seafood's distribution division. This dedicated CRM manages restaurant client accounts, bulk fish auctions, pac...",
    "keywords": "Aqeel Ahmad, Out of the Blue Seafood - CRM, Full Stack Case Study, Laravel, MySQL, Role-Based Access Control, Automated Invoicing, AWS RDS, Web Development, Cloud Architecture",
    "headline": "Out of the Blue Seafood - CRM: Cold-Chain Wholesale Order Processing & Logistics Fulfillment CRM",
    "imgSrc": "assets/img/portfolio/portfolio-22-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-22.jpg",
    "filterClass": "filter-web",
    "overview": "The operational backbone of Out of the Blue Seafood's distribution division. This dedicated CRM manages restaurant client accounts, bulk fish auctions, packing weight verifications, cold-storage logistics, and automated commercial billing.",
    "architecture": "Engineered with Laravel and an optimized AWS RDS relational database. Features complex transactional workflows coordinating warehouse packing scales, barcode verification, courier manifest exports, and multi-tier wholesale pricing tiers.",
    "modules": [
      "Wholesale client CRM tracking order histories, credit limits, delivery preferences, and standing weekly orders",
      "Packing station interface integrating digital weight scales for catch-weight pricing reconciliation",
      "Automated commercial PDF invoice generation with automated billing terms (Net 7, Net 30)",
      "Driver dispatch manifest generator organizing cold-chain delivery routes by geographic delivery zones",
      "Real-time inventory ledger automatically tracking fresh catch stock from intake to customer delivery"
    ],
    "roi": [
      "Eliminated manual order re-entry errors between sales reps and warehouse packing stations",
      "Shortened morning packing and dispatch turnaround time by 40 minutes per shift",
      "Accelerated accounts receivable collections through automated invoice delivery and reminder emails"
    ],
    "category": "Enterprise CRMs",
    "client": "Out of the Blue Operations Team",
    "role": "Senior CRM Architect & Backend Lead",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Out%20of%20the%20Blue%20Seafood%20-%20CRM%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "Laravel",
      "MySQL",
      "Role-Based Access Control",
      "Automated Invoicing",
      "AWS RDS"
    ],
    "prevSlug": "hash-phone",
    "prevLabel": "Hash Phone",
    "nextSlug": "great-fame-clothing-co",
    "nextLabel": "Great fame Clothing Co."
  },
  {
    "slug": "out-of-the-blue-seafood",
    "title": "Out of the Blue - Seafood | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Out of the Blue - Seafood",
    "description": "Out of the Blue Seafood is an innovative premium seafood purveyor delivering ocean-fresh catches directly to domestic consumers and upscale dining establis...",
    "keywords": "Aqeel Ahmad, Out of the Blue - Seafood, Full Stack Case Study, PHP, Custom E-Commerce, MySQL, Stripe Checkout, Inventory API, Logistics, Web Development, Cloud Architecture",
    "headline": "Out of the Blue - Seafood: Cold-Chain Direct-to-Consumer & B2B Seafood Delivery Marketplace",
    "imgSrc": "assets/img/portfolio/portfolio-8-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-8.jpg",
    "filterClass": "filter-card",
    "overview": "Out of the Blue Seafood is an innovative premium seafood purveyor delivering ocean-fresh catches directly to domestic consumers and upscale dining establishments. Required a platform accommodating catch-of-the-day fluctuating supplies, temperature-controlled delivery schedules, and weight-based pricing.",
    "architecture": "Architected a custom digital marketplace handling variable catch weights, zip code validation for refrigerated courier delivery zones, and real-time inventory decrementing as fishing boats log incoming catches.",
    "modules": [
      "Zip code delivery checker preventing perishable orders outside guaranteed cold-chain delivery routes",
      "Daily catch inventory feed with dynamic pricing based on seasonal wholesale availability",
      "Automated packaging label printing with thermal barcode integration for refrigerated fulfillment centers",
      "Subscription 'Catch of the Month' membership portal with flexible pause, skip, and billing management",
      "Stripe payment integration with pre-authorization holds for variable catch-weight adjustments"
    ],
    "roi": [
      "Processed over 10,000 fresh seafood orders in its inaugural year with 99.1% on-time delivery",
      "Reduced food waste and unsold spoilage by 32% via real-time flash inventory sales",
      "Awarded 4.9/5 stars for checkout fluidity and transparent delivery tracking"
    ],
    "category": "E-Commerce & Portals",
    "client": "Out of the Blue Seafood",
    "role": "Senior Full Stack Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://www.ootbseafood.com",
    "liveUrlText": "www.ootbseafood.com",
    "technologies": [
      "PHP",
      "Custom E-Commerce",
      "MySQL",
      "Stripe Checkout",
      "Inventory API",
      "Logistics"
    ],
    "prevSlug": "sumo-ranking",
    "prevLabel": "SUMO RANKING",
    "nextSlug": "razab-fashion",
    "nextLabel": "Razab Fashion"
  },
  {
    "slug": "rapfit-clothing",
    "title": "Rapfit Clothing | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Rapfit Clothing",
    "description": "Rapfit Clothing is a modern fitness lifestyle and athletic apparel brand designed for gym enthusiasts, athletes, and fitness influencers. The objective was...",
    "keywords": "Aqeel Ahmad, Rapfit Clothing, Full Stack Case Study, PHP, MySQL, Stripe API, AJAX Shopping Cart, Bootstrap, Responsive UI, Web Development, Cloud Architecture",
    "headline": "Rapfit Clothing: Performance Athleisure & Sportswear E-Commerce Store",
    "imgSrc": "assets/img/portfolio/portfolio-11-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-11.jpg",
    "filterClass": "filter-web",
    "overview": "Rapfit Clothing is a modern fitness lifestyle and athletic apparel brand designed for gym enthusiasts, athletes, and fitness influencers. The objective was to build a fast, visually punchy web store optimized for rapid drop announcements and social media traffic spikes.",
    "architecture": "Engineered a robust shopping cart with AJAX slide-out drawers, eliminating page refreshes during shopping. Structured backend database queries to withstand high-concurrency traffic bursts during limited-edition product drops.",
    "modules": [
      "Slide-out AJAX mini-cart with instant shipping threshold progress bars (e.g. 'Add $10 for Free Shipping')",
      "High-impact video banner integrations showcasing athletic apparel in motion",
      "Influencer discount code tracking module for gym ambassador affiliate campaigns",
      "Product sizing recommendation calculator based on customer height, weight, and fit preference",
      "Automated stock level indicators ('Only 3 left in your size!') driving healthy urgency"
    ],
    "roi": [
      "Handled 5x traffic surges during holiday product launches without server degradation",
      "Achieved an average session duration increase of 1.5 minutes with the interactive visual catalog",
      "Maintained 100% accurate inventory levels across simultaneous checkout sessions"
    ],
    "category": "E-Commerce & Portals",
    "client": "Rapfit Apparel",
    "role": "Full Stack Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Rapfit%20Clothing%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "MySQL",
      "Stripe API",
      "AJAX Shopping Cart",
      "Bootstrap",
      "Responsive UI"
    ],
    "prevSlug": "amsons-design",
    "prevLabel": "Amsons Design",
    "nextSlug": "text2view",
    "nextLabel": "Text2View"
  },
  {
    "slug": "razab-fashion",
    "title": "Razab Fashion | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Razab Fashion",
    "description": "Razab Fashion is a fast-growing contemporary fashion brand retailing designer wear, formal attire, and everyday luxury apparel. They sought an elegant stor...",
    "keywords": "Aqeel Ahmad, Razab Fashion, Full Stack Case Study, PHP, MySQL, JavaScript (ES6+), Stripe, PayPal, Bootstrap 5, Web Development, Cloud Architecture",
    "headline": "Razab Fashion: Contemporary Fashion & Apparel Brand Storefront",
    "imgSrc": "assets/img/portfolio/portfolio-9-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-9.jpg",
    "filterClass": "filter-web",
    "overview": "Razab Fashion is a fast-growing contemporary fashion brand retailing designer wear, formal attire, and everyday luxury apparel. They sought an elegant storefront emphasizing editorial lifestyle photography, frictionless mobile purchases, and global shipping options.",
    "architecture": "Constructed a high-converting storefront with a lightweight custom PHP backend and modular CSS. Minimized JavaScript overhead to ensure lightning-quick initial paint times on 4G/5G mobile devices, paired with full Stripe and PayPal express checkout integrations.",
    "modules": [
      "Dynamic lookbook visual galleries where shoppers can click directly on outfit pieces to add to bag",
      "Color swatch and multi-size matrix selectors with instant out-of-stock notification signups",
      "Frictionless single-page mobile checkout with Apple Pay and Google Pay one-touch payments",
      "Curated customer review section with verified buyer badges and photo uploads",
      "Automated transactional emails with package tracking links via carrier APIs"
    ],
    "roi": [
      "Mobile conversion rate climbed by 48% following the checkout simplification overhaul",
      "Maintained average Google PageSpeed mobile score above 90",
      "Zero abandoned carts caused by payment gateway timeouts"
    ],
    "category": "E-Commerce & Portals",
    "client": "Razab Fashion Brand",
    "role": "Full Stack E-Commerce Developer",
    "status": "Production Deployed",
    "liveUrl": "https://www.razabfashion.com",
    "liveUrlText": "www.razabfashion.com",
    "technologies": [
      "PHP",
      "MySQL",
      "JavaScript (ES6+)",
      "Stripe",
      "PayPal",
      "Bootstrap 5"
    ],
    "prevSlug": "out-of-the-blue-seafood",
    "prevLabel": "Out of the Blue - Seafood",
    "nextSlug": "amsons-design",
    "nextLabel": "Amsons Design"
  },
  {
    "slug": "realista-quality-real-estate",
    "title": "Realista Quality Real Estate | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Realista Quality Real Estate",
    "description": "Realista is a premier luxury real estate agency specializing in high-end villas, penthouses, and golf estates along Spain's Costa del Sol (Marbella, Benaha...",
    "keywords": "Aqeel Ahmad, Realista Quality Real Estate, Full Stack Case Study, PHP, MySQL, Google Maps API, Currency Converter, Multi-Language, SEO, Web Development, Cloud Architecture",
    "headline": "Realista Quality Real Estate: Luxury Mediterranean Villa & Prime Real Estate Portal",
    "imgSrc": "assets/img/portfolio/portfolio-29-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-29.jpg",
    "filterClass": "filter-web",
    "overview": "Realista is a premier luxury real estate agency specializing in high-end villas, penthouses, and golf estates along Spain's Costa del Sol (Marbella, Benahav\u00eds, Estepona). The portal caters to wealthy international buyers searching for luxury second homes and golden visa investments.",
    "architecture": "Engineered a multilingual, multi-currency property search engine with interactive map boundary clustering. Implemented high-performance image optimization for ultra-high-resolution villa photos and localized SEO architectures.",
    "modules": [
      "Interactive map-based property search allowing buyers to draw custom boundaries and filter by sea views",
      "Multi-currency conversion engine displaying villa prices in EUR, USD, GBP, and CHF with live exchange rates",
      "Multilingual content architecture serving English, Spanish, German, French, and Scandinavian buyers",
      "Neighborhood lifestyle guides highlighting local international schools, golf clubs, and marina amenities",
      "Direct WhatsApp and VIP agent consultation triggers for discreet buyer inquiries"
    ],
    "roi": [
      "Ranked on Google Page 1 internationally for prime Costa del Sol real estate keywords",
      "Generated high-intent inquiries resulting in multi-million-euro luxury villa acquisitions",
      "Sub-2-second load times verified across European, North American, and Middle Eastern traffic"
    ],
    "category": "Web Apps & SaaS",
    "client": "Realista Real Estate (Spain)",
    "role": "Senior Full Stack Engineer & Cloud Architect",
    "status": "Production Deployed",
    "liveUrl": "https://www.realista.com",
    "liveUrlText": "www.realista.com",
    "technologies": [
      "PHP",
      "MySQL",
      "Google Maps API",
      "Currency Converter",
      "Multi-Language",
      "SEO"
    ],
    "prevSlug": "home-auction-mls",
    "prevLabel": "Home Auction MLS",
    "nextSlug": "bexley-childcare",
    "nextLabel": "Bexley Childcare"
  },
  {
    "slug": "rolespot",
    "title": "RoleSpot | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "RoleSpot",
    "description": "RoleSpot is an online job board and candidate matching platform designed to streamline tech, marketing, and finance hiring. It allows employers to publish ...",
    "keywords": "Aqeel Ahmad, RoleSpot, Full Stack Case Study, PHP, MySQL, Resume Parser, Email Daemon, Stripe Jobs API, Bootstrap, Web Development, Cloud Architecture",
    "headline": "RoleSpot: Intelligent Talent Recruitment & Employment Job Marketplace SaaS",
    "imgSrc": "assets/img/portfolio/portfolio-27-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-27.jpg",
    "filterClass": "filter-web",
    "overview": "RoleSpot is an online job board and candidate matching platform designed to streamline tech, marketing, and finance hiring. It allows employers to publish verified job openings, screen applicant resumes, and schedule candidate interviews.",
    "architecture": "Engineered a scalable database structure storing millions of candidate skill tags and job listings. Developed a scheduled background worker daemon that matches new candidate resumes against open job descriptions and delivers daily curated job digest emails.",
    "modules": [
      "Employer dashboard for job posting management, candidate pipeline tracking, and resume downloads",
      "Applicant portal with one-click Easy Apply, resume builder, and saved job bookmarks",
      "Automated keyword skill matching scoring candidate resumes against job requirements",
      "Stripe integration for featured job post upgrades and monthly employer hiring subscriptions",
      "Automated email notifications alerting candidates when their application has been viewed"
    ],
    "roi": [
      "Hosted thousands of active professional job listings across software, finance, and creative fields",
      "Processed tens of thousands of job applications with 99.9% uptime",
      "Reduced average time-to-hire for participating startups and recruiting agencies"
    ],
    "category": "Web Apps & SaaS",
    "client": "RoleSpot Careers",
    "role": "Lead Full Stack Developer & Database Architect",
    "status": "Production Deployed",
    "liveUrl": "https://www.rolespot.com",
    "liveUrlText": "www.rolespot.com",
    "technologies": [
      "PHP",
      "MySQL",
      "Resume Parser",
      "Email Daemon",
      "Stripe Jobs API",
      "Bootstrap"
    ],
    "prevSlug": "vj-designs",
    "prevLabel": "VJ Designs",
    "nextSlug": "home-auction-mls",
    "nextLabel": "Home Auction MLS"
  },
  {
    "slug": "route-deliveries",
    "title": "Route Deliveries | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Route Deliveries",
    "description": "Route Deliveries is a commercial delivery logistics management tool built for local courier fleets, freight operators, and distribution warehouses to calcu...",
    "keywords": "Aqeel Ahmad, Route Deliveries, Full Stack Case Study, PHP, Google Maps Platform, Routing Algorithms, MySQL, WebSockets, Bootstrap, Web Development, Cloud Architecture",
    "headline": "Route Deliveries: Multi-Stop Fleet Dispatch & Real-Time Logistics Route Optimization",
    "imgSrc": "assets/img/portfolio/portfolio-13-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-13.jpg",
    "filterClass": "filter-web",
    "overview": "Route Deliveries is a commercial delivery logistics management tool built for local courier fleets, freight operators, and distribution warehouses to calculate optimal multi-stop driver routes and track deliveries in real time.",
    "architecture": "Integrated Google Maps Distance Matrix and Directions APIs with heuristic traveling salesperson algorithms. The backend computes optimal driver route sequences, factoring in delivery time windows, package volume constraints, and traffic conditions.",
    "modules": [
      "Automated multi-stop routing engine ordering up to 100 delivery stops per vehicle in seconds",
      "Live GPS driver tracking dashboard for central dispatchers with automated ETA updates",
      "Driver mobile web view with one-tap Google Maps/Waze navigation and digital signature capture",
      "Automated SMS alerts sent to end recipients as the courier approaches their destination",
      "Comprehensive driver fuel efficiency and delivery completion time analytics"
    ],
    "roi": [
      "Reduced total fleet mileage by an estimated 22%, saving thousands in monthly fuel expenditure",
      "Increased driver daily delivery capacity by 28% without increasing working hours",
      "Dramatically decreased customer 'Where is my order?' phone calls by 70%"
    ],
    "category": "Web Apps & SaaS",
    "client": "Route Deliveries Logistics",
    "role": "Senior Systems Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Route%20Deliveries%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "Google Maps Platform",
      "Routing Algorithms",
      "MySQL",
      "WebSockets",
      "Bootstrap"
    ],
    "prevSlug": "text2view",
    "prevLabel": "Text2View",
    "nextSlug": "casting-talent",
    "nextLabel": "Casting Talent"
  },
  {
    "slug": "services-of-canada",
    "title": "Services of Canada | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Services of Canada",
    "description": "Services of Canada provides professional consultation, documentation assistance, and advisory services for individuals and families navigating Canadian imm...",
    "keywords": "Aqeel Ahmad, Services of Canada, Full Stack Case Study, PHP, Encrypted Document Vault, MySQL, Stripe API, SSL / TLS, Bootstrap, Web Development, Cloud Architecture",
    "headline": "Services of Canada: Immigration & Legal Consultation Portal with Secure Document Processing",
    "imgSrc": "assets/img/portfolio/portfolio-19-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-19.jpg",
    "filterClass": "filter-web",
    "overview": "Services of Canada provides professional consultation, documentation assistance, and advisory services for individuals and families navigating Canadian immigration, study permits, and work visas.",
    "architecture": "Security and strict data privacy were top priorities. Engineered an encrypted document upload pipeline ensuring applicant passports, transcripts, and financial records are protected both in transit and at rest with end-to-end SSL/TLS encryption.",
    "modules": [
      "Intelligent eligibility assessment calculator evaluating Express Entry, Provincial Nominee, and Student streams",
      "Secure document upload vault allowing applicants to submit PDFs, identity proofs, and credentials",
      "Integrated consultation scheduling calendar with instant Stripe payment confirmation",
      "Case progress tracker giving clients real-time visibility into their application filing status",
      "Multilingual information resources covering Canadian settlement guides and regulatory compliance"
    ],
    "roi": [
      "Streamlined thousands of applicant pre-qualifications, filtering out non-eligible inquiries automatically",
      "Zero security breaches or data leaks handling sensitive identity documentation",
      "Client satisfaction rate exceeded 98% with rapid appointment turnaround"
    ],
    "category": "E-Commerce & Portals",
    "client": "Services of Canada Advisory",
    "role": "Senior Full Stack Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://servicesofcanada.help",
    "liveUrlText": "servicesofcanada.help",
    "technologies": [
      "PHP",
      "Encrypted Document Vault",
      "MySQL",
      "Stripe API",
      "SSL / TLS",
      "Bootstrap"
    ],
    "prevSlug": "epcot-pakistan",
    "prevLabel": "Epcot Pakistan",
    "nextSlug": "noor-brands",
    "nextLabel": "Noor Brands"
  },
  {
    "slug": "sms-solutions-australia",
    "title": "SMS Solutions Australia | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "SMS Solutions Australia",
    "description": "SMS Solutions Australia is a premier telecommunications provider serving Australian banks, medical clinics, logistics fleets, and retailers with automated ...",
    "keywords": "Aqeel Ahmad, SMS Solutions Australia, Full Stack Case Study, PHP, Twilio API, Direct Telco Gateways, MySQL, Redis Queue, Linux, Web Development, Cloud Architecture",
    "headline": "SMS Solutions Australia: High-Throughput Enterprise Bulk SMS & Two-Factor Authentication Gateway",
    "imgSrc": "assets/img/portfolio/portfolio-4-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-4.jpg",
    "filterClass": "filter-card",
    "overview": "SMS Solutions Australia is a premier telecommunications provider serving Australian banks, medical clinics, logistics fleets, and retailers with automated SMS broadcasting, transactional OTPs, and appointment reminder infrastructure.",
    "architecture": "Engineered a high-throughput queue processing system using PHP, Redis message brokers, and carrier API webhooks capable of dispatching thousands of messages per minute. Designed database schemas with optimized partitioning to store millions of audit delivery logs with sub-second retrieval.",
    "modules": [
      "Carrier-grade RESTful API allowing enterprise clients to trigger SMS from internal ERPs/CRMs",
      "Web-based campaign manager with contact list segmentation, dynamic placeholders, and scheduled sends",
      "Real-time delivery status callbacks (DLR) with granular network bounce categorizations",
      "Automated Australian Spam Act compliance engine with automated opt-out blacklist processing",
      "Prepaid and postpaid billing wallet module with automated low-balance invoice triggers"
    ],
    "roi": [
      "Delivered over 25 million mission-critical SMS messages with 99.8% on-time delivery rate",
      "Maintained high throughput of up to 400 messages/sec during peak morning broadcast hours",
      "Zero compliance breaches thanks to bulletproof unsubscribe automation logic"
    ],
    "category": "Enterprise CRMs",
    "client": "SMS Solutions Australia (Australia)",
    "role": "Senior Backend Engineer & API Architect",
    "status": "Production Deployed",
    "liveUrl": "https://www.smssolutionsaustralia.com.au",
    "liveUrlText": "www.smssolutionsaustralia.com.au",
    "technologies": [
      "PHP",
      "Twilio API",
      "Direct Telco Gateways",
      "MySQL",
      "Redis Queue",
      "Linux"
    ],
    "prevSlug": "metal-carports-usa-crm",
    "prevLabel": "Metal Carports USA (CRM)",
    "nextSlug": "book-keeping-system",
    "nextLabel": "Book Keeping System"
  },
  {
    "slug": "st-engineering-services",
    "title": "S. T. Engineering Services | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "S. T. Engineering Services",
    "description": "S. T. Engineering Services specializes in heavy industrial manufacturing, precision CNC machining, plant maintenance, and fabrication for energy and automo...",
    "keywords": "Aqeel Ahmad, S. T. Engineering Services, Full Stack Case Study, PHP, MySQL, PDF Spec Generator, Bootstrap, Technical SEO, RFQ Engine, Web Development, Cloud Architecture",
    "headline": "S. T. Engineering Services: Industrial Heavy Machinery & CNC Precision Engineering Portal",
    "imgSrc": "assets/img/portfolio/portfolio-24-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-24.jpg",
    "filterClass": "filter-web",
    "overview": "S. T. Engineering Services specializes in heavy industrial manufacturing, precision CNC machining, plant maintenance, and fabrication for energy and automotive plants. Required a technical corporate portal to showcase engineering capabilities and handle complex industrial project quotes.",
    "architecture": "Built a robust web platform presenting equipment tolerance capabilities, machinery fleets, past engineering installations, and an automated RFQ file upload system for technical blueprint CAD files.",
    "modules": [
      "Detailed machinery catalog detailing CNC milling, lathe tolerances, laser cutting, and welding capacities",
      "Bespoke engineering RFQ system allowing engineers to upload CAD / STEP / PDF drawings securely",
      "Industrial project case study showcase highlighting plant turnkey solutions and maintenance milestones",
      "Automated corporate capability statement PDF download for industrial procurement teams",
      "Hardened form security with CSRF tokens and MIME-type blueprint upload verification"
    ],
    "roi": [
      "Secured long-term precision machining contracts from premier industrial manufacturing plants",
      "Cut preliminary quotation cycles in half by gathering exact engineering specs upfront via the portal",
      "Boosted organic search traffic across regional industrial engineering search terms"
    ],
    "category": "E-Commerce & Portals",
    "client": "S. T. Engineering Services",
    "role": "Web Engineer & Technical Architect",
    "status": "Production Deployed",
    "liveUrl": "https://stengineeringservices.com",
    "liveUrlText": "stengineeringservices.com",
    "technologies": [
      "PHP",
      "MySQL",
      "PDF Spec Generator",
      "Bootstrap",
      "Technical SEO",
      "RFQ Engine"
    ],
    "prevSlug": "great-fame-clothing-co",
    "prevLabel": "Great fame Clothing Co.",
    "nextSlug": "deluxe-footwear",
    "nextLabel": "Deluxe Footwear"
  },
  {
    "slug": "sumo-ranking",
    "title": "SUMO RANKING | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "SUMO RANKING",
    "description": "SUMO RANKING is a digital marketing SaaS platform tracking daily search engine rankings for thousands of enterprise domains, monitoring competitor movement...",
    "keywords": "Aqeel Ahmad, SUMO RANKING, Full Stack Case Study, Node.js, Python Scraping Daemons, PHP, MySQL, Google Search API, DataTables, Web Development, Cloud Architecture",
    "headline": "SUMO RANKING: Automated SERP Keyword Tracking & White-Label SEO Reporting Engine",
    "imgSrc": "assets/img/portfolio/portfolio-7-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-7.jpg",
    "filterClass": "filter-card",
    "overview": "SUMO RANKING is a digital marketing SaaS platform tracking daily search engine rankings for thousands of enterprise domains, monitoring competitor movements, and auto-generating branded PDF audit reports for agency clients.",
    "architecture": "Designed a distributed scraping and API ingestion architecture. Rotating proxies and rate-limited worker pools query global search engines across desktop and mobile user agents, parse structured search results, and stream time-series ranking history into MySQL.",
    "modules": [
      "Automated daily SERP position tracking across Google, Bing, and Yahoo across localized geo-locations",
      "Competitor keyword gap analysis identifying ranking opportunities and market share shifts",
      "White-label PDF reporting engine with agency branding, automated scheduling, and executive summaries",
      "On-page technical SEO audit crawler identifying broken links, missing meta tags, and slow LCP assets",
      "Interactive historical rank trajectory graphs with CSV / Excel data exports"
    ],
    "roi": [
      "Tracked over 100,000 active keyword rankings daily with 99.4% scraping success rate",
      "Automated the production of over 1,200 monthly agency client reports without human intervention",
      "Cut server operational costs by 40% through clever query caching and proxy rotation algorithms"
    ],
    "category": "Enterprise CRMs",
    "client": "Sumo Ranking Digital Agency",
    "role": "Backend Architect & Scraping Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20SUMO%20RANKING%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "Node.js",
      "Python Scraping Daemons",
      "PHP",
      "MySQL",
      "Google Search API",
      "DataTables"
    ],
    "prevSlug": "cascada-bathrooms",
    "prevLabel": "Cascada Bathrooms",
    "nextSlug": "out-of-the-blue-seafood",
    "nextLabel": "Out of the Blue - Seafood"
  },
  {
    "slug": "text2view",
    "title": "Text2View | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Text2View",
    "description": "Text2View is a marketing technology SaaS allowing enterprise sales teams to send rich mobile landing pages, interactive PDF brochures, and video teasers vi...",
    "keywords": "Aqeel Ahmad, Text2View, Full Stack Case Study, PHP, REST APIs, Shortlink Engine, Analytics Tracking, MySQL, Cloudflare, Web Development, Cloud Architecture",
    "headline": "Text2View: Mobile Rich Media & Interactive Brochure SMS Distribution SaaS",
    "imgSrc": "assets/img/portfolio/portfolio-12-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-12.jpg",
    "filterClass": "filter-web",
    "overview": "Text2View is a marketing technology SaaS allowing enterprise sales teams to send rich mobile landing pages, interactive PDF brochures, and video teasers via SMS rather than relying on low-open-rate emails.",
    "architecture": "Engineered a high-performance URL shortening and micro-landing-page rendering engine. When an SMS link is clicked, the system renders a lightweight mobile web view within 200ms and logs recipient engagement telemetry in real time.",
    "modules": [
      "Automated micro-landing page generator converting sales PDFs into swipeable mobile presentations",
      "High-speed URL shortening engine handling millions of unique trackable links",
      "Real-time salesperson notifications when a prospect opens the message or views specific slides",
      "API integration for third-party CRMs (Salesforce, HubSpot) to trigger automatic follow-up tasks",
      "Detailed campaign analytics tracking device types, viewing duration, and click-to-call actions"
    ],
    "roi": [
      "Delivered average link open rates of 85% compared to 20% typical email open benchmarks",
      "Supported over 1 million mobile brochure views with average render latency under 250ms",
      "Increased B2B sales rep demo booking rates by 34%"
    ],
    "category": "Web Apps & SaaS",
    "client": "Text2View Technologies",
    "role": "Cloud Architect & Full Stack Developer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20Text2View%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "REST APIs",
      "Shortlink Engine",
      "Analytics Tracking",
      "MySQL",
      "Cloudflare"
    ],
    "prevSlug": "rapfit-clothing",
    "prevLabel": "Rapfit Clothing",
    "nextSlug": "route-deliveries",
    "nextLabel": "Route Deliveries"
  },
  {
    "slug": "tyre-point",
    "title": "Tyre Point | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "Tyre Point",
    "description": "Tyre Point is a leading automotive tire distribution network and service provider in Pakistan. They needed an intuitive tire finder where car owners can se...",
    "keywords": "Aqeel Ahmad, Tyre Point, Full Stack Case Study, PHP, Vehicle Fitment Database, MySQL, Branch Locator API, Bootstrap, REST API, Web Development, Cloud Architecture",
    "headline": "Tyre Point: Automotive Tire Retail & Nationwide Fitment Service Portal",
    "imgSrc": "assets/img/portfolio/portfolio-16-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-16.jpg",
    "filterClass": "filter-web",
    "overview": "Tyre Point is a leading automotive tire distribution network and service provider in Pakistan. They needed an intuitive tire finder where car owners can search tires by vehicle make/model/year or tire dimensions, view branch inventory, and book fitment appointments.",
    "architecture": "Engineered a comprehensive vehicle fitment database linking thousands of car models to exact OEM and plus-size tire specs. Implemented real-time branch inventory lookups and automated SMS appointment confirmations.",
    "modules": [
      "Two-way tire finder: search by Vehicle Make/Model/Year or by Tire Width/Profile/Rim Size",
      "Multi-branch inventory lookup showing real-time stock levels at nearby fitting centers",
      "Online appointment booking calendar for tire mounting, digital wheel alignment, and balancing",
      "Tire brand catalog featuring Michelin, Bridgestone, Continental, Dunlop, and Yokohama",
      "Customer warranty registration portal with digital invoice storage and tire rotation reminders"
    ],
    "roi": [
      "Generated thousands of monthly retail tire bookings across nationwide fitting branches",
      "Virtually eliminated customer fitment sizing mistakes through the automated vehicle database",
      "Achieved top Google search rankings for regional automotive tire keywords"
    ],
    "category": "E-Commerce & Portals",
    "client": "Tyre Point Pakistan",
    "role": "Full Stack E-Commerce Architect",
    "status": "Production Deployed",
    "liveUrl": "https://tyrepoint.pk",
    "liveUrlText": "tyrepoint.pk",
    "technologies": [
      "PHP",
      "Vehicle Fitment Database",
      "MySQL",
      "Branch Locator API",
      "Bootstrap",
      "REST API"
    ],
    "prevSlug": "inky-illustration",
    "prevLabel": "Inky Illustration",
    "nextSlug": "churahi-enterprises",
    "nextLabel": "Churahi Enterprises"
  },
  {
    "slug": "vj-designs",
    "title": "VJ Designs | Full Stack Case Study | Aqeel Ahmad",
    "shortTitle": "VJ Designs",
    "description": "VJ Designs is an architectural visualization and bespoke interior styling studio working on ultra-luxury penthouses, boutique hotels, and corporate headqua...",
    "keywords": "Aqeel Ahmad, VJ Designs, Full Stack Case Study, PHP, Masonry Grid, JavaScript (ES6+), Image Optimization, Bootstrap, CSS3, Web Development, Cloud Architecture",
    "headline": "VJ Designs: Bespoke Interior Styling & Architectural Visualization Portfolio",
    "imgSrc": "assets/img/portfolio/portfolio-26-large.jpg",
    "thumbnail": "assets/img/portfolio/portfolio-26.jpg",
    "filterClass": "filter-web",
    "overview": "VJ Designs is an architectural visualization and bespoke interior styling studio working on ultra-luxury penthouses, boutique hotels, and corporate headquarters. The website serves as a digital gallery celebrating luxury spatial design and 3D architectural renderings.",
    "architecture": "Constructed with dynamic CSS Masonry layout and asynchronous image preloading. Designed to present rich, full-screen interior photography and 3D architectural renders without compromising mobile responsiveness or load speeds.",
    "modules": [
      "Fluid Masonry visual grid with interactive lightbox zoom for multi-angle project views",
      "Project breakdown pages highlighting materials used, square footage, budget, and design philosophy",
      "Interactive moodboard inquiry form where prospective homeowners can select preferred aesthetics",
      "Client testimonial carousel featuring endorsements from property developers and homeowners",
      "Smooth transition animations delivering an upscale, luxury agency browsing feel"
    ],
    "roi": [
      "Attracted high-value interior renovation contracts from premier property developers",
      "Delivered 60FPS fluid scrolling performance across both high-end desktops and mobile phones",
      "Helped the studio establish international recognition for high-end residential interior projects"
    ],
    "category": "E-Commerce & Portals",
    "client": "VJ Design Studio",
    "role": "Frontend & Full Stack Engineer",
    "status": "Production Deployed",
    "liveUrl": "https://api.whatsapp.com/send/?phone=923134292529&text=Hi%20Aqeel,%20I%20reviewed%20your%20case%20study%20for%20VJ%20Designs%20and%20would%20like%20to%20discuss%20a%20project",
    "liveUrlText": "Chat on WhatsApp",
    "technologies": [
      "PHP",
      "Masonry Grid",
      "JavaScript (ES6+)",
      "Image Optimization",
      "Bootstrap",
      "CSS3"
    ],
    "prevSlug": "deluxe-footwear",
    "prevLabel": "Deluxe Footwear",
    "nextSlug": "rolespot",
    "nextLabel": "RoleSpot"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
