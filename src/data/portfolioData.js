export const portfolioData = {
  personal: {
    name: "Aakash S",
    title: "Senior Flutter & Mobile Developer",
    experienceYears: "3.5+",
    email: "aakash97512@gmail.com",
    phone: "+91 8525964980",
    location: "Chennai, Tamil Nadu, India",
    github: "https://github.com/aakash-s-dev",
    linkedin: "https://linkedin.com/in/aakash-s-flutter",
    availability: "Available for Immediate / Short Notice Join",
    languages: ["English (Professional)", "Tamil (Native)"],
    avatar: "./avatar.png",
    summary:
      "Results-oriented Flutter Developer with 3.5+ years of hands-on experience building scalable, high-performance cross-platform mobile applications for Android and iOS. Expert in Riverpod, BLoC, Clean Architecture, RESTful APIs, Firebase ecosystems, and Bluetooth Low Energy (BLE) hardware integrations. Demonstrated track record of delivering 4+ production apps, optimizing application load speeds by 25%, and maintaining 60 FPS smooth animations in Agile environments.",
    metrics: [
      { label: "Years Experience", value: "3.5+", highlight: "Proven Mobile Track Record" },
      { label: "Production Apps Deployed", value: "4+", highlight: "Google Play & App Store" },
      { label: "Performance Optimization", value: "25%", highlight: "App Load Speed Reduction" },
      { label: "State Management", value: "100%", highlight: "Riverpod & BLoC Expert" },
    ],
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "mobile", label: "Mobile & Frameworks" },
      { id: "state", label: "State Management" },
      { id: "architecture", label: "Architecture & DB" },
      { id: "hardware", label: "Hardware & Protocols" },
      { id: "devops", label: "Tools & Testing" },
    ],
    items: [
      { name: "Flutter SDK", category: "mobile", proficiency: 95, level: "Expert", icon: "Smartphone" },
      { name: "Dart", category: "mobile", proficiency: 95, level: "Expert", icon: "Code2" },
      { name: "Kotlin", category: "mobile", proficiency: 80, level: "Advanced", icon: "Cpu" },
      { name: "iOS & Xcode", category: "mobile", proficiency: 82, level: "Advanced", icon: "Apple" },

      { name: "Riverpod", category: "state", proficiency: 95, level: "Expert", icon: "Zap" },
      { name: "BLoC / Cubit", category: "state", proficiency: 92, level: "Expert", icon: "Layers" },
      { name: "Provider", category: "state", proficiency: 90, level: "Expert", icon: "Boxes" },
      { name: "GetX", category: "state", proficiency: 85, level: "Advanced", icon: "Activity" },

      { name: "Clean Architecture & MVVM", category: "architecture", proficiency: 92, level: "Expert", icon: "GitFork" },
      { name: "Modularization & DI (get_it)", category: "architecture", proficiency: 88, level: "Advanced", icon: "Workflow" },
      { name: "SQLite & SharedPreferences", category: "architecture", proficiency: 90, level: "Expert", icon: "Database" },
      { name: "Firebase Firestore & Auth", category: "architecture", proficiency: 92, level: "Expert", icon: "Flame" },

      { name: "Bluetooth Low Energy (BLE)", category: "hardware", proficiency: 88, level: "Specialist", icon: "Bluetooth" },
      { name: "RESTful APIs & JSON Parsing", category: "hardware", proficiency: 95, level: "Expert", icon: "Globe" },
      { name: "Google Maps API & Geolocation", category: "hardware", proficiency: 90, level: "Expert", icon: "MapPin" },
      { name: "Push Notifications (FCM)", category: "hardware", proficiency: 92, level: "Expert", icon: "Bell" },

      { name: "Unit, Widget & Integration Testing", category: "devops", proficiency: 85, level: "Advanced", icon: "CheckCircle2" },
      { name: "Sentry & Crashlytics Monitoring", category: "devops", proficiency: 88, level: "Advanced", icon: "ShieldAlert" },
      { name: "Git, GitHub & CI/CD Pipelines", category: "devops", proficiency: 90, level: "Expert", icon: "GitBranch" },
      { name: "Performance Profiling", category: "devops", proficiency: 88, level: "Advanced", icon: "Gauge" },
    ],
  },

  experience: [
    {
      company: "Medapps Dynamics Pvt Ltd",
      role: "Flutter Developer",
      period: "December 2022 – Present",
      duration: "3+ Years",
      location: "Chennai, Tamil Nadu, India",
      type: "Full-Time",
      description:
        "Leading cross-platform mobile development using Flutter and Dart. Responsible for architecture design, complex state management, REST API synchronization, and hardware device integrations across multiple production applications.",
      highlights: [
        "Developed, tested, and successfully deployed 4+ production-ready cross-platform mobile applications for Android & iOS onto Google Play Console and Apple App Store.",
        "Engineered robust local data architectures and predictable state management solutions leveraging Riverpod, BLoC, and Provider.",
        "Integrated comprehensive Firebase ecosystems including secure Authentication, real-time Cloud Firestore, and automated Cloud Push Notifications (FCM).",
        "Designed and implemented highly responsive custom UI components and smooth 60 FPS animations adhering strictly to Material Design & Cupertino guidelines.",
        "Optimized application performance and memory usage, effectively reducing app load times by 25% and completely eliminating frame drops.",
        "Architected clean data-parsing layers for complex RESTful APIs, ensuring flawless synchronization between client-side applications and backend microservices.",
        "Collaborated closely with UI/UX designers, backend engineers, and product managers in an Agile/Scrum environment to align feature delivery with product roadmaps.",
      ],
      skillsUsed: ["Flutter", "Dart", "Riverpod", "BLoC", "Firebase", "SQLite", "BLE", "REST APIs", "Sentry", "Material & Cupertino"],
    },
  ],

  projects: [
    {
      id: "ev-charging",
      title: "EV Charger Locator & Station Management App",
      category: "IoT & Smart Mobility",
      subtitle: "End-to-end electric vehicle charging infrastructure app with real-time station status and map integration.",
      image: "./projects/ev_charging.png",
      featured: true,
      tags: ["Flutter", "Dart", "Google Maps API", "Geolocation", "Riverpod", "REST APIs"],
      impact: "Seamless tracking of 100+ charging stations with live availability & station booking flow.",
      overview:
        "Built a production-grade EV charging locator application utilizing Google Maps API and custom geolocation engines. Allows EV drivers to discover nearby chargers, check real-time connector status (Available, In Use, Maintenance), authenticate sessions, and initiate vehicle charging.",
      keyFeatures: [
        "Interactive Map View with live clustering of EV charging stations based on proximity.",
        "Real-time connector status polling (175kW fast chargers, Type 2, CCS2 compatibility).",
        "Multi-step authentication and wallet session initialization for vehicle charging.",
        "Turn-by-turn navigation routing integrated with native Google Maps.",
      ],
      architectureNotes:
        "Utilized Riverpod for reactive state management of map viewport state and charger WebSocket/REST updates. Clean Architecture layer separates Map API data services from business domain models.",
    },

    {
      id: "pet-peer",
      title: "PetPeer: BLE-Based Pet Health Monitoring App",
      category: "Medical IoT & Wearables",
      subtitle: "Specialized health telemetry app interfacing with Bluetooth Low Energy (BLE) medical IoT hardware.",
      image: "./projects/pet_peer.png",
      featured: true,
      tags: ["Flutter", "Bluetooth BLE", "SQLite", "Provider", "Custom Canvas", "IoT"],
      impact: "Real-time visualization of high-frequency ECG/PCG metrics with offline data logging.",
      overview:
        "Designed and developed a specialized health monitoring application that interfaces with wearable IoT pet health sensors via Bluetooth Low Energy (BLE). Renders continuous real-time ECG and heart sound telemetry graphs on custom mobile canvas widgets.",
      keyFeatures: [
        "Low-latency BLE device discovery, pairing, and packet stream decoding.",
        "Real-time ECG and PCG waveform visualization using Flutter CustomPainter for high 60fps rendering performance.",
        "Offline-first data persistence layer using SQLite database to store local health records.",
        "Synchronized state distribution via Provider ensuring reactive UI updates when vitals fluctuate.",
      ],
      architectureNotes:
        "Implemented custom native platform channels for BLE connection lifecycle handling. Offline synchronization queue uploads stored SQLite packets to Cloud when network connection resumes.",
    },

    {
      id: "nexhealth",
      title: "NexHealth Patient Healthcare Application",
      category: "Healthcare & Telemedicine",
      subtitle: "Comprehensive patient consultation booking, vital sign tracking, and video healthcare app.",
      image: "./projects/nexhealth.png",
      featured: true,
      tags: ["Flutter", "Riverpod", "WebRTC", "Razorpay Payment", "OCR", "Internationalization"],
      impact: "Streamlined consultation booking flow with instant payment verification and vital charting.",
      overview:
        "A feature-rich healthcare app empowering patients to search specialists, book hospital/online appointments, track historical vital signs (Blood Pressure, Heart Rate, SpO2), view medical timeline, and participate in tele-consultations.",
      keyFeatures: [
        "Synchronized appointment booking provider with payment gateway integration.",
        "Dynamic Vital Signs charting with auto-scaling parameter Y-axis ranges and PDF export support.",
        "Medical document upload with OCR support and multi-language localization (EN/TA).",
        "Jitsi / WebRTC video consultation integration for live online doctor chats.",
      ],
      architectureNotes:
        "Built using Riverpod StateNotifier pattern for bulletproof state isolation during checkout and payment callback loops. Ensures zero race conditions when creating appointment records.",
    },
  ],

  architecture: {
    title: "Production Flutter Architecture Blueprint",
    subtitle: "How I design scalable, maintainable, and bulletproof cross-platform mobile apps.",
    layers: [
      {
        step: "01",
        name: "Presentation Layer",
        tech: "Flutter UI, CustomPainter, Material Design, Cupertino",
        desc: "Declarative, reactive UI components with 60 FPS animations, strict responsive layout rules, and modularized widget trees.",
      },
      {
        step: "02",
        name: "State & Logic Layer",
        tech: "Riverpod, BLoC / Cubit, Provider",
        desc: "Predictable state management with unidirectional data flow, immutability, state notifier patterns, and zero UI side-effects.",
      },
      {
        step: "03",
        name: "Domain & Repository Layer",
        tech: "Clean Architecture, Dependency Injection (get_it)",
        desc: "Decoupled business rules, data mappers, repository interfaces, and isolated entities ensuring ease of Unit Testing.",
      },
      {
        step: "04",
        name: "Data & Hardware Layer",
        tech: "RESTful APIs, Firebase Firestore, SQLite, BLE Protocols",
        desc: "Robust API client parsing, offline-first SQLite cache, Bluetooth Low Energy packet stream handling, and secure storage.",
      },
    ],
  },

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Electronics & Communication Engineering",
      institution: "Anna University",
      period: "2016 – 2020",
      location: "Tamil Nadu, India",
      highlights:
        "Gained a strong foundation in embedded systems, signal processing, data structures, digital communication, and microcontrollers. Completed project on IoT signal processing.",
    },
    {
      degree: "Higher Secondary School Certificate (HSC - 12th Standard)",
      institution: "Town Higher Secondary School",
      period: "2014 – 2016",
      location: "Tamil Nadu, India",
      highlights: "Focus on Mathematics, Physics, Chemistry, and Computer Science.",
    },
  ],

  certifications: [
    { title: "Production Mobile Developer Specialist", issuer: "Medapps Dynamics", year: "2023" },
    { title: "Bluetooth Low Energy (BLE) IoT Integration", issuer: "Mobile Architecture Systems", year: "2023" },
    { title: "Riverpod & Clean Architecture Mastery", issuer: "Flutter Advanced Developers", year: "2022" },
  ],

  recruiterFaq: [
    {
      q: "What is your current notice period?",
      a: "Available for immediate / short notice joining upon discussion.",
    },
    {
      q: "Are you open to relocate or work remotely?",
      a: "Yes! Currently based in Chennai, Tamil Nadu, India. Open to On-site roles in Chennai, Hybrid, or Remote roles globally.",
    },
    {
      q: "What Flutter state management frameworks do you specialize in?",
      a: "I have extensive production experience in Riverpod, BLoC / Cubit, Provider, and GetX. I choose the best tool based on team architectural requirements.",
    },
    {
      q: "Do you handle native platform integration (iOS/Android)?",
      a: "Yes. I work with Kotlin for Android, Xcode/Swift for iOS configurations, and implement custom Platform Channels for hardware like BLE and background services.",
    },
  ],
};
