// All user-facing text, keyed by language. Proper nouns (names, tech, brands)
// stay literal across languages and live in content.js instead.

const translations = {
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', neural: 'Neural Map', contact: 'Contact', resume: 'Résumé' },
    hero: {
      badge: 'Available for full-time & freelance',
      role: 'Full-Stack Developer · ML / Data Science',
      headlinePre: 'I build',
      headlineHighlight: 'data-driven web & mobile',
      headlinePost: 'applications.',
      subtitle:
        "Data Science Master's graduate · Full-stack & ML engineer · Based in Algeria. I turn complex data problems into clean, reliable products.",
      ctaWork: 'View My Work',
      ctaContact: 'Get in Touch',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    about: {
      label: 'About',
      heading: 'Engineer at the intersection of software & data.',
      p1pre: 'I hold a ',
      p1strong: "Master's degree in Data Science & Intelligent Systems",
      p1post: ' from University of Constantine 2 (Abdelhamid Mehri), with a deep passion for software engineering and AI.',
      p2: 'I design and build full-stack web and mobile applications with a strong data and machine-learning angle — from real-time platforms and role-based dashboards to ML microservices that score risk and explain their predictions. I care about clean architecture, reliable systems, and shipping things people actually use.',
      p3pre: 'Currently ',
      p3strong: 'available for full-time roles and freelance projects',
      p3post: " — let's build something solid together.",
      facts: {
        location: { label: 'Location', value: 'Constantine, Algeria' },
        languages: { label: 'Languages', value: 'EN · FR · AR' },
        openTo: { label: 'Open to', value: 'Full-time & Freelance' },
        focus: { label: 'Focus', value: 'Full-stack + ML' },
      },
      stats: { projects: 'projects built', tech: 'technologies', langs: 'languages' },
      languagesHeading: 'Languages',
      langNames: { arabic: 'Arabic', english: 'English', french: 'French' },
      langLevels: { native: 'Native', englishLevel: 'Advanced · C1', frenchLevel: 'B2 · TCF 431 / 699' },
      viewCert: 'Certificate',
    },
    experience: {
      label: 'Experience',
      heading: 'Professional experience',
      present: 'Present',
      current: 'Current',
      freelance: {
        role: 'Freelance Full-Stack & ML Developer',
        org: 'Self-employed · Remote',
        desc: 'Built Merdaci Menswear, a full-stack e-commerce store for a menswear brand — product catalog, product detail pages and a shopping cart, with a React storefront on a Node / Express back end. Alongside it, delivered smaller web and data builds for other clients, owning each project from design through deployment.',
      },
    },
    education: {
      label: 'Education',
      heading: 'Academic background',
      graduated: 'Graduated',
      master: {
        degree: "Master's Degree in Data Science & Intelligent Systems (SDSI)",
        school: 'University of Constantine 2 (Abdelhamid Mehri)',
        desc: 'Graduate program covering machine learning, deep learning, big data & NoSQL, optimization techniques, cloud computing & IoT.',
      },
      licence: {
        degree: "Bachelor's Degree in Information Technology",
        school: 'University of Constantine 2 (Abdelhamid Mehri)',
        desc: 'Foundations in programming & data structures, operating systems, networks, OOP, software engineering, databases and web development.',
      },
      bac: {
        degree: 'Baccalaureate in Mathematics (Honors)',
        school: 'Raïd Chemmam Ammar High School, Algeria',
        desc: 'Scientific track focused on mathematics — graduated with honors (Mention Bien).',
      },
      certsHeading: 'Certifications',
      certView: 'View',
      certs: {
        tcf: { title: 'TCF — Test de Connaissance du Français', issuer: 'France Éducation International · B2 · valid to 2027' },
        awscf: { title: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services · AWS Academy' },
      },
    },
    projects: {
      label: 'Projects',
      heading: 'Selected work',
      subtitle: 'Production-minded full-stack builds, each with a real data or machine-learning core.',
      flagship: 'Flagship',
      meta: 'Full ecosystem · web + mobile + ML',
      cta: { liveDemo: 'Live Demo', mobileBuild: 'Mobile Build', github: 'GitHub' },
      siara: {
        tagline: 'Road-safety & accident-reporting platform for Algeria.',
        description:
          'A full-stack ecosystem — web app, mobile app, ML service and data pipeline — that lets citizens report road accidents and helps police and admins respond, powered by machine-learning risk analysis.',
      },
      merdaci: {
        tagline: 'E-commerce storefront for a menswear brand.',
        description:
          'A storefront I built as a freelance project for Merdaci Menswear (“La qualité”), a men’s clothing brand. Shoppers browse the catalog, open product detail pages and build a cart with a live item count, with customer accounts and a clean, modern dark UI. Deployed live on Vercel.',
      },
      tajmall: {
        tagline: 'Multi-vendor e-commerce marketplace.',
        description:
          'An online shopping-center connecting multiple independent shops with centralized product management — catalog with category filters, shop directory, cart, reviews & ratings, product comparison and discount handling.',
      },
      areyouaddicted: {
        tagline: 'Online psychological support platform.',
        description:
          'A telemedicine-style platform connecting psychologists with people struggling with video-game addiction. 36-question self-assessment quiz, doctor & patient dashboards with charts, appointment booking, real-time messaging and recovery tracking.',
      },
      amazon: {
        tagline: 'Big-data ML sentiment classifier.',
        description:
          'A machine-learning pipeline that analyzes and classifies sentiment in Amazon customer reviews, processing large-scale data with Big Data tooling and containerized for portable deployment.',
      },
      qa: {
        tagline: 'Multilingual Q&A assistant for course materials.',
        description:
          'A deep-learning question-answering assistant for university course materials, built with PyTorch. Students can ask questions about their courses and get answers across multiple languages.',
      },
      iot: {
        tagline: 'Smart-home intrusion detection on AWS.',
        description:
          'An IoT smart-home security system that detects intrusions with ESP32 and PIR sensors over an event-driven AWS pipeline — real-time alerts, event storage and dashboard visualization.',
      },
    },
    studies: {
      builtHeading: 'What I built',
      highlightsHeading: 'Highlights',
      stackHeading: 'Tech stack',
      viewCase: 'View case study',
      close: 'Close',
      merdaci: {
        built: [
          'Designed a modern dark storefront for the Merdaci Menswear brand, with a product catalog and individual product detail pages.',
          'Built a shopping cart with a live item count, plus customer login and accounts.',
          'Developed a React front end on a Node / Express back end and deployed it live on Vercel.',
        ],
        highlights: [
          { value: 'Live', label: 'deployed on Vercel' },
          { value: 'Cart', label: 'live item count' },
          { value: 'Auth', label: 'customer accounts' },
        ],
      },
      siara: {
        built: [
          'Built a React web app and a React Native mobile app sharing one Node / Express + PostgreSQL / PostGIS backend.',
          'Implemented a Python / Flask ML microservice (LightGBM, PyTorch, scikit-learn) that scores accident risk and explains its predictions.',
          'Wired real-time reporting and role-based dashboards for citizens, police and admins over Socket.IO, all containerized with Docker.',
        ],
        highlights: [
          { value: '4', label: 'integrated services' },
          { value: 'Real-time', label: 'incident reporting' },
          { value: 'PostGIS', label: 'geospatial data' },
        ],
      },
      tajmall: {
        built: [
          'Developed a multi-vendor marketplace on React + Node / Express with a MySQL schema modeled from UML.',
          'Built catalog browsing with category filters, a shop directory, cart and discount handling.',
          'Added product reviews & ratings and side-by-side product comparison.',
        ],
        highlights: [
          { value: 'Multi-vendor', label: 'marketplace' },
          { value: 'Reviews', label: '& ratings' },
          { value: 'UML', label: 'modeled schema' },
        ],
      },
      areyouaddicted: {
        built: [
          'Built a telemedicine-style platform on React + Node / Express + MySQL with Redux Toolkit and MUI.',
          'Created a 36-question self-assessment quiz with scored results and recovery tracking.',
          'Added doctor and patient dashboards with charts, appointment booking and real-time messaging.',
        ],
        highlights: [
          { value: '36', label: 'question assessment' },
          { value: 'Real-time', label: 'messaging' },
          { value: '2', label: 'role dashboards' },
        ],
      },
      amazon: {
        built: [
          'Built a sentiment-classification pipeline over large-scale Amazon review data.',
          'Processed data at scale with PySpark and Hadoop, with feature engineering in Pandas + scikit-learn.',
          'Containerized the pipeline with Docker for portable, repeatable runs.',
        ],
        highlights: [
          { value: 'Big Data', label: 'PySpark + Hadoop' },
          { value: 'Sentiment', label: 'classification' },
          { value: 'Docker', label: 'containerized' },
        ],
      },
      qa: {
        built: [
          'Implemented a multilingual question-answering assistant over university course materials.',
          'Built the NLP / deep-learning models in PyTorch.',
          'Designed it to understand questions and return answers across multiple languages.',
        ],
        highlights: [
          { value: 'PyTorch', label: 'deep learning' },
          { value: 'Multilingual', label: 'Q&A' },
          { value: 'NLP', label: 'course materials' },
        ],
      },
      iot: {
        built: [
          'Designed and implemented a smart-home intrusion-detection system using ESP32, PIR sensors, MQTT and AWS Cloud services.',
          'Built a complete event-driven pipeline with AWS IoT Core, Lambda, SNS, DynamoDB, CloudWatch and Grafana.',
          'Developed real-time intrusion monitoring, automated alerting, event storage and dashboard visualization.',
          'Simulated IoT devices and network infrastructure using Wokwi and Cisco Packet Tracer.',
        ],
        highlights: [
          { value: 'Real-time', label: 'intrusion alerts' },
          { value: 'Event-driven', label: 'AWS pipeline' },
          { value: 'Grafana', label: 'dashboards' },
        ],
      },
    },
    skills: {
      label: 'Skills',
      heading: 'Tech stack & tooling',
      groups: { frontend: 'Frontend', backend: 'Backend', dataml: 'Data & ML', databases: 'Databases', cloudiot: 'Cloud & IoT', devops: 'DevOps & Tools' },
    },
    neural: {
      label: 'About Me',
      heading: 'Me, as a network.',
      subtitle:
        'An interactive neural map of my skills, background and interests. Drag the nodes around, or tap one to dive in.',
      hint: 'Drag to explore · tap a node',
      recenter: 'Recenter',
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      defaultTitle: 'Explore the map',
      defaultBody: 'Each node is a piece of who I am. Tap one to read more, or drag it to untangle the web.',
      groups: { self: 'Me', skills: 'Skills', education: 'Education', interests: 'Interests', languages: 'Languages', now: 'Now' },
      nodes: {
        me: { label: 'Mohamed', detail: 'Full-stack & ML engineer based in Algeria. I connect software craft with data science to ship products people rely on.' },
        skills: { label: 'Skills', detail: 'What I build with — across the full stack and the data/ML pipeline.' },
        education: { label: 'Education', detail: "A Data Science master's built on a computer-science foundation." },
        interests: { label: 'Interests', detail: "What pulls my curiosity when I'm not shipping features." },
        languages: { label: 'Languages', detail: 'I work and communicate across three languages.' },
        now: { label: 'Now', detail: "Where I am and what I'm focused on right now." },
        fullstack: { label: 'Full-Stack', detail: 'React & React Native front ends on Node, Express, Spring & Django back ends.' },
        ml: { label: 'Machine Learning', detail: 'Training, evaluating and serving models — from LightGBM to PyTorch.' },
        dataeng: { label: 'Data Engineering', detail: 'Pipelines and big-data tooling: PySpark, Hadoop, Pandas.' },
        systems: { label: 'System Design', detail: 'Clean architecture, real-time systems and containerized deployments.' },
        master: { label: "Master's — SDSI", detail: 'Data Science & Intelligent Systems, University of Constantine 2.' },
        licence: { label: 'BSc — CS', detail: 'Computer-science foundations: algorithms, OS, networks, databases.' },
        bac: { label: 'Baccalaureate', detail: 'Mathematics track, graduated with honors.' },
        ai: { label: 'AI & Deep Learning', detail: 'Following research and building things that learn.' },
        oss: { label: 'Open Source', detail: 'Sharing code and learning in the open on GitHub.' },
        products: { label: 'Building Products', detail: 'Turning ideas into things people actually use.' },
        learning: { label: 'Always Learning', detail: 'New tools, new domains — staying curious by default.' },
        arabic: { label: 'Arabic', detail: 'Native language.' },
        english: { label: 'English', detail: 'Advanced — C1.' },
        french: { label: 'French', detail: 'Upper-intermediate — B2.' },
        available: { label: 'Open to Work', detail: 'Available for full-time roles and freelance projects.' },
        location: { label: 'Constantine, DZ', detail: 'Based in Constantine, Algeria — open to remote.' },
        siara: { label: 'Building Siara', detail: 'My flagship: a road-safety platform with an ML risk core.' },
      },
    },
    contact: {
      label: 'Contact',
      heading: "Let's build something.",
      textpre: 'Open to ',
      textstrong: 'full-time roles and freelance projects',
      textpost: '. Drop me a line — I usually reply within a day.',
      emailBtn: 'Email me',
      resumeBtn: 'Download Résumé',
    },
    footer: { built: 'Built with React' },
  },

  fr: {
    nav: { about: 'À propos', experience: 'Expérience', projects: 'Projets', skills: 'Compétences', education: 'Formation', neural: 'Carte neuronale', contact: 'Contact', resume: 'CV' },
    hero: {
      badge: 'Disponible pour CDI & freelance',
      role: 'Développeur Full-Stack · ML / Data Science',
      headlinePre: 'Je crée des',
      headlineHighlight: 'applications web & mobiles',
      headlinePost: 'axées sur les données.',
      subtitle:
        "Diplômé d'un Master en Science des Données · Ingénieur full-stack & ML · Basé en Algérie. Je transforme des problèmes de données complexes en produits clairs et fiables.",
      ctaWork: 'Voir mes projets',
      ctaContact: 'Me contacter',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail',
    },
    about: {
      label: 'À propos',
      heading: "Ingénieur à l'intersection du logiciel et de la donnée.",
      p1pre: "Je suis titulaire d'un ",
      p1strong: 'Master en Science des Données et Systèmes Intelligents',
      p1post: " de l'Université de Constantine 2 (Abdelhamid Mehri), passionné par le génie logiciel et l'IA.",
      p2: "Je conçois et développe des applications web et mobiles full-stack à forte dimension données et machine learning — des plateformes temps réel et tableaux de bord par rôle aux microservices ML qui évaluent le risque et expliquent leurs prédictions. J'attache de l'importance à une architecture propre, à des systèmes fiables et à livrer des produits réellement utilisés.",
      p3pre: 'Actuellement ',
      p3strong: 'disponible pour des postes en CDI et des projets freelance',
      p3post: ' — construisons quelque chose de solide ensemble.',
      facts: {
        location: { label: 'Localisation', value: 'Constantine, Algérie' },
        languages: { label: 'Langues', value: 'EN · FR · AR' },
        openTo: { label: 'Ouvert à', value: 'CDI & Freelance' },
        focus: { label: 'Spécialité', value: 'Full-stack + ML' },
      },
      stats: { projects: 'projets réalisés', tech: 'technologies', langs: 'langues' },
      languagesHeading: 'Langues',
      langNames: { arabic: 'Arabe', english: 'Anglais', french: 'Français' },
      langLevels: { native: 'Natif', englishLevel: 'Avancé · C1', frenchLevel: 'B2 · TCF 431 / 699' },
      viewCert: 'Certificat',
    },
    experience: {
      label: 'Expérience',
      heading: 'Expérience professionnelle',
      present: 'Présent',
      current: 'En cours',
      freelance: {
        role: 'Développeur Full-Stack & ML freelance',
        org: 'Indépendant · À distance',
        desc: 'Réalisé Merdaci Menswear, une boutique e-commerce full-stack pour une marque de vêtements pour homme — catalogue de produits, pages produit et panier, avec une vitrine React sur un back-end Node / Express. En parallèle, livré des projets web et data plus modestes pour d’autres clients, en assurant chacun de la conception au déploiement.',
      },
    },
    education: {
      label: 'Formation',
      heading: 'Parcours académique',
      graduated: 'Diplômé',
      master: {
        degree: 'Master — Science des Données et Systèmes Intelligents (SDSI)',
        school: 'Université de Constantine 2 (Abdelhamid Mehri)',
        desc: "Cursus couvrant le machine learning, le deep learning, le big data & NoSQL, les techniques d'optimisation, le cloud & l'IoT.",
      },
      licence: {
        degree: 'Licence — Informatique',
        school: 'Université de Constantine 2 (Abdelhamid Mehri)',
        desc: 'Fondamentaux : programmation et structures de données, systèmes d’exploitation, réseaux, POO, génie logiciel, bases de données et développement web.',
      },
      bac: {
        degree: 'Baccalauréat — Mathématiques (Mention Bien)',
        school: 'Lycée Raïd Chemmam Ammar, Algérie',
        desc: 'Filière scientifique axée sur les mathématiques — obtenu avec mention Bien.',
      },
      certsHeading: 'Certifications',
      certView: 'Voir',
      certs: {
        tcf: { title: 'TCF — Test de Connaissance du Français', issuer: 'France Éducation International · B2 · valide jusqu’en 2027' },
        awscf: { title: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services · AWS Academy' },
      },
    },
    projects: {
      label: 'Projets',
      heading: 'Projets sélectionnés',
      subtitle: 'Des réalisations full-stack pensées pour la production, chacune avec un véritable cœur data ou machine learning.',
      flagship: 'Projet phare',
      meta: 'Écosystème complet · web + mobile + ML',
      cta: { liveDemo: 'Démo en ligne', mobileBuild: 'Build mobile', github: 'GitHub' },
      siara: {
        tagline: "Plateforme de sécurité routière et de signalement d'accidents pour l'Algérie.",
        description:
          "Un écosystème full-stack — application web, application mobile, service ML et pipeline de données — qui permet aux citoyens de signaler les accidents de la route et aide la police et les administrateurs à réagir, propulsé par l'analyse de risque par machine learning.",
      },
      merdaci: {
        tagline: 'Boutique e-commerce pour une marque de vêtements homme.',
        description:
          'Une boutique réalisée en freelance pour Merdaci Menswear (« La qualité »), une marque de vêtements pour homme. Les clients parcourent le catalogue, ouvrent les pages produit et remplissent un panier avec un compteur d’articles en direct, avec comptes clients et une interface sombre, moderne et soignée. Déployée en ligne sur Vercel.',
      },
      tajmall: {
        tagline: 'Marketplace e-commerce multi-vendeurs.',
        description:
          'Un centre commercial en ligne reliant plusieurs boutiques indépendantes avec une gestion centralisée des produits — catalogue avec filtres par catégorie, annuaire de boutiques, panier, avis & notes, comparaison de produits et gestion des remises.',
      },
      areyouaddicted: {
        tagline: 'Plateforme de soutien psychologique en ligne.',
        description:
          "Une plateforme de type télémédecine reliant des psychologues à des personnes souffrant d'addiction aux jeux vidéo. Quiz d'auto-évaluation de 36 questions, tableaux de bord médecin & patient avec graphiques, prise de rendez-vous, messagerie en temps réel et suivi de la guérison.",
      },
      amazon: {
        tagline: 'Classifieur de sentiments ML big data.',
        description:
          'Un pipeline de machine learning qui analyse et classe les sentiments des avis clients Amazon, traitant des données à grande échelle avec des outils Big Data et conteneurisé pour un déploiement portable.',
      },
      qa: {
        tagline: 'Assistant Q&R multilingue pour supports de cours.',
        description:
          'Un assistant de questions-réponses par deep learning pour les supports de cours universitaires, développé avec PyTorch. Les étudiants posent des questions sur leurs cours et obtiennent des réponses dans plusieurs langues.',
      },
      iot: {
        tagline: 'Détection d’intrusion domotique sur AWS.',
        description:
          'Un système de sécurité domotique IoT qui détecte les intrusions avec ESP32 et capteurs PIR sur un pipeline AWS événementiel — alertes en temps réel, stockage des événements et visualisation sur tableau de bord.',
      },
    },
    studies: {
      builtHeading: 'Ce que j’ai construit',
      highlightsHeading: 'Points clés',
      stackHeading: 'Stack technique',
      viewCase: 'Voir l’étude de cas',
      close: 'Fermer',
      merdaci: {
        built: [
          'Conçu une vitrine sombre et moderne pour la marque Merdaci Menswear, avec un catalogue de produits et des pages produit dédiées.',
          'Construit un panier avec un compteur d’articles en direct, ainsi que la connexion et les comptes clients.',
          'Développé un front-end React sur un back-end Node / Express, déployé en ligne sur Vercel.',
        ],
        highlights: [
          { value: 'En ligne', label: 'déployé sur Vercel' },
          { value: 'Panier', label: 'compteur en direct' },
          { value: 'Comptes', label: 'clients' },
        ],
      },
      siara: {
        built: [
          'Développé une application web React et une application mobile React Native partageant un même backend Node / Express + PostgreSQL / PostGIS.',
          'Implémenté un microservice ML Python / Flask (LightGBM, PyTorch, scikit-learn) qui évalue le risque d’accident et explique ses prédictions.',
          'Mis en place le signalement en temps réel et des tableaux de bord par rôle (citoyens, police, admins) via Socket.IO, le tout conteneurisé avec Docker.',
        ],
        highlights: [
          { value: '4', label: 'services intégrés' },
          { value: 'Temps réel', label: 'signalement' },
          { value: 'PostGIS', label: 'données géospatiales' },
        ],
      },
      tajmall: {
        built: [
          'Développé une marketplace multi-vendeurs sur React + Node / Express avec un schéma MySQL modélisé en UML.',
          'Construit la navigation du catalogue avec filtres par catégorie, annuaire de boutiques, panier et gestion des remises.',
          'Ajouté les avis & notes et la comparaison de produits côte à côte.',
        ],
        highlights: [
          { value: 'Multi-vendeurs', label: 'marketplace' },
          { value: 'Avis', label: '& notes' },
          { value: 'UML', label: 'schéma modélisé' },
        ],
      },
      areyouaddicted: {
        built: [
          'Développé une plateforme de type télémédecine sur React + Node / Express + MySQL avec Redux Toolkit et MUI.',
          'Créé un quiz d’auto-évaluation de 36 questions avec résultats notés et suivi de la guérison.',
          'Ajouté des tableaux de bord médecin et patient avec graphiques, prise de rendez-vous et messagerie en temps réel.',
        ],
        highlights: [
          { value: '36', label: 'questions d’évaluation' },
          { value: 'Temps réel', label: 'messagerie' },
          { value: '2', label: 'tableaux de bord' },
        ],
      },
      amazon: {
        built: [
          'Construit un pipeline de classification de sentiments sur des données d’avis Amazon à grande échelle.',
          'Traité les données à grande échelle avec PySpark et Hadoop, avec ingénierie de variables en Pandas + scikit-learn.',
          'Conteneurisé le pipeline avec Docker pour des exécutions portables et reproductibles.',
        ],
        highlights: [
          { value: 'Big Data', label: 'PySpark + Hadoop' },
          { value: 'Sentiment', label: 'classification' },
          { value: 'Docker', label: 'conteneurisé' },
        ],
      },
      qa: {
        built: [
          'Implémenté un assistant de questions-réponses multilingue sur des supports de cours universitaires.',
          'Construit les modèles NLP / deep learning avec PyTorch.',
          'Conçu pour comprendre les questions et fournir des réponses dans plusieurs langues.',
        ],
        highlights: [
          { value: 'PyTorch', label: 'deep learning' },
          { value: 'Multilingue', label: 'Q&R' },
          { value: 'NLP', label: 'supports de cours' },
        ],
      },
      iot: {
        built: [
          'Conçu et implémenté un système de détection d’intrusion domotique avec ESP32, capteurs PIR, MQTT et services AWS Cloud.',
          'Construit un pipeline événementiel complet avec AWS IoT Core, Lambda, SNS, DynamoDB, CloudWatch et Grafana.',
          'Développé la surveillance d’intrusion en temps réel, les alertes automatiques, le stockage des événements et la visualisation sur tableau de bord.',
          'Simulé les appareils IoT et l’infrastructure réseau avec Wokwi et Cisco Packet Tracer.',
        ],
        highlights: [
          { value: 'Temps réel', label: 'alertes d’intrusion' },
          { value: 'Événementiel', label: 'pipeline AWS' },
          { value: 'Grafana', label: 'tableaux de bord' },
        ],
      },
    },
    skills: {
      label: 'Compétences',
      heading: 'Stack technique & outils',
      groups: { frontend: 'Frontend', backend: 'Backend', dataml: 'Data & ML', databases: 'Bases de données', cloudiot: 'Cloud & IoT', devops: 'DevOps & Outils' },
    },
    neural: {
      label: 'À propos de moi',
      heading: 'Moi, sous forme de réseau.',
      subtitle:
        'Une carte neuronale interactive de mes compétences, mon parcours et mes centres d’intérêt. Déplacez les nœuds, ou touchez-en un pour explorer.',
      hint: 'Déplacez pour explorer · touchez un nœud',
      recenter: 'Recentrer',
      zoomIn: 'Zoom avant',
      zoomOut: 'Zoom arrière',
      defaultTitle: 'Explorez la carte',
      defaultBody: 'Chaque nœud est une facette de qui je suis. Touchez-en un pour en savoir plus, ou déplacez-le pour démêler la toile.',
      groups: { self: 'Moi', skills: 'Compétences', education: 'Formation', interests: 'Intérêts', languages: 'Langues', now: 'En ce moment' },
      nodes: {
        me: { label: 'Mohamed', detail: 'Ingénieur full-stack & ML basé en Algérie. Je relie l’artisanat logiciel à la science des données pour livrer des produits fiables.' },
        skills: { label: 'Compétences', detail: 'Ce avec quoi je construis — du full-stack au pipeline data/ML.' },
        education: { label: 'Formation', detail: 'Un master en science des données bâti sur des fondations en informatique.' },
        interests: { label: 'Intérêts', detail: 'Ce qui attise ma curiosité en dehors du code.' },
        languages: { label: 'Langues', detail: 'Je travaille et communique en trois langues.' },
        now: { label: 'En ce moment', detail: 'Où j’en suis et ce sur quoi je me concentre.' },
        fullstack: { label: 'Full-Stack', detail: 'Front-ends React & React Native sur des back-ends Node, Express, Spring & Django.' },
        ml: { label: 'Machine Learning', detail: 'Entraîner, évaluer et déployer des modèles — de LightGBM à PyTorch.' },
        dataeng: { label: 'Data Engineering', detail: 'Pipelines et outils big data : PySpark, Hadoop, Pandas.' },
        systems: { label: 'Architecture', detail: 'Architecture propre, systèmes temps réel et déploiements conteneurisés.' },
        master: { label: 'Master — SDSI', detail: 'Science des données et systèmes intelligents, Université de Constantine 2.' },
        licence: { label: 'Licence — Info', detail: 'Fondamentaux en informatique : algorithmes, SE, réseaux, bases de données.' },
        bac: { label: 'Baccalauréat', detail: 'Filière mathématiques, obtenu avec mention.' },
        ai: { label: 'IA & Deep Learning', detail: 'Suivre la recherche et créer des choses qui apprennent.' },
        oss: { label: 'Open Source', detail: 'Partager du code et apprendre au grand jour sur GitHub.' },
        products: { label: 'Créer des produits', detail: 'Transformer des idées en produits réellement utilisés.' },
        learning: { label: 'Toujours apprendre', detail: 'Nouveaux outils, nouveaux domaines — curieux par défaut.' },
        arabic: { label: 'Arabe', detail: 'Langue maternelle.' },
        english: { label: 'Anglais', detail: 'Avancé — C1.' },
        french: { label: 'Français', detail: 'Intermédiaire supérieur — B2.' },
        available: { label: 'Disponible', detail: 'Disponible pour des postes en CDI et des projets freelance.' },
        location: { label: 'Constantine, DZ', detail: 'Basé à Constantine, Algérie — ouvert au télétravail.' },
        siara: { label: 'Projet Siara', detail: 'Mon projet phare : une plateforme de sécurité routière avec un cœur ML.' },
      },
    },
    contact: {
      label: 'Contact',
      heading: 'Construisons quelque chose.',
      textpre: 'Ouvert aux ',
      textstrong: 'postes en CDI et projets freelance',
      textpost: '. Écrivez-moi — je réponds généralement sous 24 h.',
      emailBtn: 'M’écrire',
      resumeBtn: 'Télécharger le CV',
    },
    footer: { built: 'Conçu avec React' },
  },

  ar: {
    nav: { about: 'نبذة', experience: 'الخبرة', projects: 'المشاريع', skills: 'المهارات', education: 'التعليم', neural: 'الخريطة العصبية', contact: 'تواصل', resume: 'السيرة الذاتية' },
    hero: {
      badge: 'متاح للعمل بدوام كامل والعمل الحر',
      role: 'مطوّر Full-Stack · تعلُّم آلي / علم البيانات',
      headlinePre: 'أبني',
      headlineHighlight: 'تطبيقات ويب وجوال',
      headlinePost: 'قائمة على البيانات.',
      subtitle:
        'حاصل على ماجستير في علم البيانات · مهندس full-stack وتعلُّم آلي · مقيم في الجزائر. أُحوّل مشكلات البيانات المعقّدة إلى منتجات واضحة وموثوقة.',
      ctaWork: 'شاهد أعمالي',
      ctaContact: 'تواصل معي',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'البريد',
    },
    about: {
      label: 'نبذة',
      heading: 'مهندس عند تقاطع البرمجيات والبيانات.',
      p1pre: 'أحمل ',
      p1strong: 'شهادة ماجستير في علم البيانات والأنظمة الذكية',
      p1post: ' من جامعة قسنطينة 2 (عبد الحميد مهري)، وأنا شغوف بهندسة البرمجيات والذكاء الاصطناعي.',
      p2: 'أُصمّم وأُطوّر تطبيقات ويب وجوال متكاملة ذات بُعد قوي في البيانات والتعلُّم الآلي — من المنصّات الفورية ولوحات التحكم حسب الأدوار إلى خدمات تعلُّم آلي مصغّرة تُقيّم المخاطر وتشرح تنبؤاتها. أهتمّ بالبنية النظيفة والأنظمة الموثوقة وإطلاق منتجات يستخدمها الناس فعلاً.',
      p3pre: 'أنا حاليًا ',
      p3strong: 'متاح لوظائف بدوام كامل ومشاريع حرة',
      p3post: ' — لنبنِ شيئًا متينًا معًا.',
      facts: {
        location: { label: 'الموقع', value: 'قسنطينة، الجزائر' },
        languages: { label: 'اللغات', value: 'EN · FR · AR' },
        openTo: { label: 'متاح لـ', value: 'دوام كامل وعمل حر' },
        focus: { label: 'التخصص', value: 'Full-stack + ML' },
      },
      stats: { projects: 'مشاريع منجزة', tech: 'تقنيات', langs: 'لغات' },
      languagesHeading: 'اللغات',
      langNames: { arabic: 'العربية', english: 'الإنجليزية', french: 'الفرنسية' },
      langLevels: { native: 'اللغة الأم', englishLevel: 'متقدّم · C1', frenchLevel: 'B2 · TCF 431 / 699' },
      viewCert: 'الشهادة',
    },
    experience: {
      label: 'الخبرة',
      heading: 'الخبرة المهنية',
      present: 'حتى الآن',
      current: 'حالي',
      freelance: {
        role: 'مطوّر Full-Stack وتعلُّم آلي (عمل حر)',
        org: 'عمل حر · عن بُعد',
        desc: 'أنجزت Merdaci Menswear، متجرًا إلكترونيًا متكاملًا لعلامة ملابس رجالية — كتالوج منتجات وصفحات منتج وسلة شراء، بواجهة React على خادم Node / Express. وإلى جانبه، نفّذت مشاريع ويب وبيانات أصغر لعملاء آخرين، مع متابعة كل مشروع من التصميم حتى النشر.',
      },
    },
    education: {
      label: 'التعليم',
      heading: 'المسيرة الأكاديمية',
      graduated: 'متخرّج',
      master: {
        degree: 'ماجستير — علم البيانات والأنظمة الذكية (SDSI)',
        school: 'جامعة قسنطينة 2 (عبد الحميد مهري)',
        desc: 'برنامج دراسات عليا يغطّي التعلُّم الآلي والتعلُّم العميق والبيانات الضخمة وNoSQL وتقنيات التحسين والحوسبة السحابية وإنترنت الأشياء.',
      },
      licence: {
        degree: 'ليسانس — إعلام آلي (علوم الحاسوب)',
        school: 'جامعة قسنطينة 2 (عبد الحميد مهري)',
        desc: 'أساسيات البرمجة وهياكل البيانات، أنظمة التشغيل، الشبكات، البرمجة الكائنية، هندسة البرمجيات، قواعد البيانات وتطوير الويب.',
      },
      bac: {
        degree: 'بكالوريا — رياضيات (بميزة)',
        school: 'ثانوية رائد شمام عمار، الجزائر',
        desc: 'شعبة علمية بتركيز على الرياضيات — مُتحصَّل عليها بميزة حسن.',
      },
      certsHeading: 'الشهادات',
      certView: 'عرض',
      certs: {
        tcf: { title: 'TCF — اختبار معرفة اللغة الفرنسية', issuer: 'France Éducation International · B2 · صالحة حتى 2027' },
        awscf: { title: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services · AWS Academy' },
      },
    },
    projects: {
      label: 'المشاريع',
      heading: 'أعمال مختارة',
      subtitle: 'مشاريع full-stack جاهزة للإنتاج، لكلٍّ منها جوهر حقيقي في البيانات أو التعلُّم الآلي.',
      flagship: 'المشروع الرئيسي',
      meta: 'منظومة كاملة · ويب + جوال + ML',
      cta: { liveDemo: 'عرض مباشر', mobileBuild: 'نسخة الجوال', github: 'GitHub' },
      siara: {
        tagline: 'منصّة للسلامة المرورية والإبلاغ عن الحوادث في الجزائر.',
        description:
          'منظومة متكاملة — تطبيق ويب وتطبيق جوال وخدمة تعلُّم آلي وخط معالجة بيانات — تتيح للمواطنين الإبلاغ عن حوادث الطرق وتساعد الشرطة والإداريين على الاستجابة، مدعومة بتحليل المخاطر عبر التعلُّم الآلي.',
      },
      merdaci: {
        tagline: 'متجر إلكتروني لعلامة ملابس رجالية.',
        description:
          'متجر أنجزته كعمل حر لعلامة Merdaci Menswear («La qualité») للملابس الرجالية. يتصفّح الزبائن الكتالوج ويفتحون صفحات المنتجات ويملؤون سلة شراء بعدّاد عناصر فوري، مع حسابات للعملاء وواجهة داكنة عصرية وأنيقة. منشور مباشرةً على Vercel.',
      },
      tajmall: {
        tagline: 'سوق إلكتروني متعدّد البائعين.',
        description:
          'مركز تسوّق إلكتروني يربط عدّة متاجر مستقلّة مع إدارة مركزية للمنتجات — كتالوج مع تصفية حسب الفئة، دليل متاجر، سلة شراء، تقييمات ومراجعات، مقارنة المنتجات وإدارة الخصومات.',
      },
      areyouaddicted: {
        tagline: 'منصّة دعم نفسي عبر الإنترنت.',
        description:
          'منصّة شبيهة بالتطبيب عن بُعد تربط الأخصائيين النفسيين بالأشخاص الذين يعانون من إدمان ألعاب الفيديو. اختبار ذاتي من 36 سؤالًا، لوحات تحكم للطبيب والمريض مع رسوم بيانية، حجز المواعيد، مراسلة فورية وتتبّع التعافي.',
      },
      amazon: {
        tagline: 'مصنّف مشاعر بالتعلُّم الآلي والبيانات الضخمة.',
        description:
          'خط معالجة بالتعلُّم الآلي يحلّل ويصنّف المشاعر في مراجعات عملاء أمازون، ويعالج بيانات واسعة النطاق بأدوات البيانات الضخمة، ومُحزَّم في حاويات لنشر محمول.',
      },
      qa: {
        tagline: 'مساعد أسئلة وأجوبة متعدّد اللغات لمواد المقرّرات.',
        description:
          'مساعد أسئلة وأجوبة بالتعلُّم العميق لمواد المقرّرات الجامعية، مبنيّ بـPyTorch. يطرح الطلاب أسئلة حول مقرّراتهم ويحصلون على إجابات بعدّة لغات.',
      },
      iot: {
        tagline: 'كشف اقتحام المنزل الذكي عبر AWS.',
        description:
          'نظام أمان منزلي ذكي يعتمد على إنترنت الأشياء يكتشف الاقتحامات باستخدام ESP32 وحسّاسات PIR عبر خط معالجة حدثي على AWS — تنبيهات فورية وتخزين للأحداث وعرض على لوحة معلومات.',
      },
    },
    studies: {
      builtHeading: 'ما الذي بنيته',
      highlightsHeading: 'أبرز النقاط',
      stackHeading: 'الحزمة التقنية',
      viewCase: 'عرض دراسة الحالة',
      close: 'إغلاق',
      merdaci: {
        built: [
          'صمّمت واجهة متجر داكنة وعصرية لعلامة Merdaci Menswear، مع كتالوج منتجات وصفحات منتج مخصّصة.',
          'بنيت سلة شراء بعدّاد عناصر فوري، إضافةً إلى تسجيل الدخول وحسابات العملاء.',
          'طوّرت واجهة React على خادم Node / Express، ونشرتها مباشرةً على Vercel.',
        ],
        highlights: [
          { value: 'مباشر', label: 'منشور على Vercel' },
          { value: 'سلة', label: 'عدّاد فوري' },
          { value: 'حسابات', label: 'للعملاء' },
        ],
      },
      siara: {
        built: [
          'بنيت تطبيق ويب بReact وتطبيق جوال بReact Native يتشاركان خادمًا واحدًا Node / Express + PostgreSQL / PostGIS.',
          'طوّرت خدمة تعلُّم آلي مصغّرة بPython / Flask (LightGBM وPyTorch وscikit-learn) تُقيّم خطر الحوادث وتشرح تنبؤاتها.',
          'أضفت الإبلاغ الفوري ولوحات تحكم حسب الدور (المواطنون والشرطة والإداريون) عبر Socket.IO، وكل ذلك مُحزَّم بDocker.',
        ],
        highlights: [
          { value: '4', label: 'خدمات متكاملة' },
          { value: 'فوري', label: 'الإبلاغ عن الحوادث' },
          { value: 'PostGIS', label: 'بيانات جغرافية' },
        ],
      },
      tajmall: {
        built: [
          'طوّرت سوقًا متعدّد البائعين على React + Node / Express مع مخطّط MySQL مُصمَّم بUML.',
          'بنيت تصفّح الكتالوج مع تصفية حسب الفئة، ودليل متاجر، وسلة شراء، وإدارة الخصومات.',
          'أضفت التقييمات والمراجعات ومقارنة المنتجات جنبًا إلى جنب.',
        ],
        highlights: [
          { value: 'متعدّد البائعين', label: 'سوق إلكتروني' },
          { value: 'تقييمات', label: 'ومراجعات' },
          { value: 'UML', label: 'مخطّط مُصمَّم' },
        ],
      },
      areyouaddicted: {
        built: [
          'بنيت منصّة شبيهة بالتطبيب عن بُعد على React + Node / Express + MySQL مع Redux Toolkit وMUI.',
          'أنشأت اختبارًا ذاتيًا من 36 سؤالًا بنتائج مُسجَّلة وتتبّع للتعافي.',
          'أضفت لوحات تحكم للطبيب والمريض مع رسوم بيانية، وحجز المواعيد، ومراسلة فورية.',
        ],
        highlights: [
          { value: '36', label: 'سؤال تقييم' },
          { value: 'فوري', label: 'مراسلة' },
          { value: '2', label: 'لوحتا تحكم' },
        ],
      },
      amazon: {
        built: [
          'بنيت خط معالجة لتصنيف المشاعر على بيانات مراجعات أمازون واسعة النطاق.',
          'عالجت البيانات على نطاق واسع بPySpark وHadoop، مع هندسة الميزات في Pandas + scikit-learn.',
          'حزّمت الخط بDocker لتشغيل محمول وقابل للتكرار.',
        ],
        highlights: [
          { value: 'بيانات ضخمة', label: 'PySpark + Hadoop' },
          { value: 'المشاعر', label: 'تصنيف' },
          { value: 'Docker', label: 'مُحزَّم في حاويات' },
        ],
      },
      qa: {
        built: [
          'نفّذت مساعد أسئلة وأجوبة متعدّد اللغات على مواد المقرّرات الجامعية.',
          'بنيت نماذج معالجة اللغة الطبيعية / التعلُّم العميق بـPyTorch.',
          'صمّمته لفهم الأسئلة وإرجاع الإجابات بعدّة لغات.',
        ],
        highlights: [
          { value: 'PyTorch', label: 'تعلُّم عميق' },
          { value: 'متعدّد اللغات', label: 'أسئلة وأجوبة' },
          { value: 'NLP', label: 'مواد المقرّرات' },
        ],
      },
      iot: {
        built: [
          'صمّمت ونفّذت نظام كشف اقتحام منزلي ذكي باستخدام ESP32 وحسّاسات PIR وMQTT وخدمات AWS السحابية.',
          'بنيت خط معالجة حدثيًا متكاملًا باستخدام AWS IoT Core وLambda وSNS وDynamoDB وCloudWatch وGrafana.',
          'طوّرت مراقبة الاقتحام الفورية والتنبيه التلقائي وتخزين الأحداث والعرض على لوحة المعلومات.',
          'حاكيت أجهزة إنترنت الأشياء والبنية الشبكية باستخدام Wokwi وCisco Packet Tracer.',
        ],
        highlights: [
          { value: 'فوري', label: 'تنبيهات الاقتحام' },
          { value: 'حدثي', label: 'خط AWS' },
          { value: 'Grafana', label: 'لوحات معلومات' },
        ],
      },
    },
    skills: {
      label: 'المهارات',
      heading: 'الحزمة التقنية والأدوات',
      groups: { frontend: 'الواجهة الأمامية', backend: 'الواجهة الخلفية', dataml: 'البيانات والتعلُّم الآلي', databases: 'قواعد البيانات', cloudiot: 'الحوسبة السحابية وإنترنت الأشياء', devops: 'DevOps والأدوات' },
    },
    neural: {
      label: 'نبذة عني',
      heading: 'أنا، على هيئة شبكة.',
      subtitle: 'خريطة عصبية تفاعلية لمهاراتي ومسيرتي واهتماماتي. حرّك العُقد أو انقر إحداها للاستكشاف.',
      hint: 'اسحب للاستكشاف · انقر عقدة',
      recenter: 'إعادة التوسيط',
      zoomIn: 'تكبير',
      zoomOut: 'تصغير',
      defaultTitle: 'استكشف الخريطة',
      defaultBody: 'كل عقدة جزء مني. انقر إحداها لقراءة المزيد، أو اسحبها لفكّ خيوط الشبكة.',
      groups: { self: 'أنا', skills: 'المهارات', education: 'التعليم', interests: 'الاهتمامات', languages: 'اللغات', now: 'حاليًا' },
      nodes: {
        me: { label: 'محمد', detail: 'مهندس full-stack وتعلُّم آلي مقيم في الجزائر. أربط حرفة البرمجة بعلم البيانات لإطلاق منتجات موثوقة.' },
        skills: { label: 'المهارات', detail: 'ما أبني به — من الـ full-stack إلى خط البيانات والتعلُّم الآلي.' },
        education: { label: 'التعليم', detail: 'ماجستير في علم البيانات على أساس متين في علوم الحاسوب.' },
        interests: { label: 'الاهتمامات', detail: 'ما يثير فضولي خارج كتابة الشيفرة.' },
        languages: { label: 'اللغات', detail: 'أعمل وأتواصل بثلاث لغات.' },
        now: { label: 'حاليًا', detail: 'أين أنا وما الذي أركّز عليه الآن.' },
        fullstack: { label: 'Full-Stack', detail: 'واجهات React وReact Native على خوادم Node وExpress وSpring وDjango.' },
        ml: { label: 'التعلُّم الآلي', detail: 'تدريب النماذج وتقييمها ونشرها — من LightGBM إلى PyTorch.' },
        dataeng: { label: 'هندسة البيانات', detail: 'خطوط معالجة وأدوات بيانات ضخمة: PySpark وHadoop وPandas.' },
        systems: { label: 'تصميم الأنظمة', detail: 'بنية نظيفة وأنظمة فورية ونشر بالحاويات.' },
        master: { label: 'ماجستير — SDSI', detail: 'علم البيانات والأنظمة الذكية، جامعة قسنطينة 2.' },
        licence: { label: 'ليسانس — حاسوب', detail: 'أساسيات علوم الحاسوب: الخوارزميات وأنظمة التشغيل والشبكات وقواعد البيانات.' },
        bac: { label: 'بكالوريا', detail: 'شعبة رياضيات، مُتحصَّل عليها بميزة.' },
        ai: { label: 'الذكاء الاصطناعي', detail: 'متابعة الأبحاث وبناء أنظمة تتعلّم.' },
        oss: { label: 'المصادر المفتوحة', detail: 'مشاركة الشيفرة والتعلُّم علنًا على GitHub.' },
        products: { label: 'بناء المنتجات', detail: 'تحويل الأفكار إلى منتجات تُستخدم فعلاً.' },
        learning: { label: 'تعلُّم مستمر', detail: 'أدوات جديدة ومجالات جديدة — فضولي بطبعي.' },
        arabic: { label: 'العربية', detail: 'اللغة الأم.' },
        english: { label: 'الإنجليزية', detail: 'متقدّم — C1.' },
        french: { label: 'الفرنسية', detail: 'فوق المتوسط — B2.' },
        available: { label: 'متاح للعمل', detail: 'متاح لوظائف بدوام كامل ومشاريع حرة.' },
        location: { label: 'قسنطينة، الجزائر', detail: 'مقيم في قسنطينة، الجزائر — منفتح على العمل عن بُعد.' },
        siara: { label: 'مشروع Siara', detail: 'مشروعي الرئيسي: منصّة سلامة مرورية بجوهر تعلُّم آلي.' },
      },
    },
    contact: {
      label: 'تواصل',
      heading: 'لنصنع شيئًا معًا.',
      textpre: 'متاح لـ',
      textstrong: 'وظائف بدوام كامل ومشاريع حرة',
      textpost: '. راسلني — عادةً أردّ خلال يوم.',
      emailBtn: 'راسلني',
      resumeBtn: 'تحميل السيرة الذاتية',
    },
    footer: { built: 'صُنع باستخدام React' },
  },
}

export default translations
