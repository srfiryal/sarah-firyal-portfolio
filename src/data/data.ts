export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image?: string | null;
  link?: string | null;
  roles: string[];
  slug: string;
  expertise: "mobile" | "frontend" | "backend";
  mainFeatures?: string[];
  keyTechnologies?: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Hireka!",
    subtitle: "AI Career Preparation",
    description:
      "Hireka! is an AI-powered career preparation platform offering resume analysis, interview practice, and personalized learning paths for students and job seekers.",
    tags: ["Flutter", "Supabase", "React", "Typescript", "Tailwind", "Figma"],
    image: "/projects/img_hireka.png",
    roles: [
      "Team Lead",
      "Mobile Developer",
      "Full-Stack Developer",
      "UI/UX Designer",
    ],
    slug: "hireka",
    expertise: "mobile",
    mainFeatures: [
      "AI resume analysis",
      "Custom resume builder",
      "Interview simulation tools",
      "Cross-platform user access",
    ],
    keyTechnologies: [
      "Flutter for cross-platform mobile development",
      "React with TypeScript for web app development",
      "Supabase for authentication and database",
      "User-centric UI/UX design principles",
    ],
  },
  {
    title: "AIGRA",
    subtitle: "Smart Warehouse",
    description:
      "AIGRA is a smart warehouse management system designed to optimize logistics operations through real-time tracking and automated inventory handling.",
    tags: ["React", "Typescript", "Firebase", "Tailwind"],
    image: "/projects/img_aigra.png",
    roles: ["Full-Stack Developer"],
    slug: "aigra",
    expertise: "frontend",
    mainFeatures: [
      "Real-time inventory tracking",
      "Warehouse task automation",
      "Dashboard for analytics",
      "Order and stock management",
    ],
    keyTechnologies: [
      "React with TypeScript for UI",
      "Firebase for real-time backend",
      "Tailwind CSS for styling",
      "REST API communication",
    ],
  },
  {
    title: "D-Cows Reog Manager",
    subtitle: "Precision Livestock",
    description:
      "D-Cows Reog Manager is a mobile system built to help farmers monitor livestock conditions, manage data, and streamline farm operations through IoT integration.",
    tags: ["Flutter", "REST API", "Firebase", "Figma"],
    image: "/projects/img_dcowsreog.png",
    roles: ["Mobile Developer"],
    slug: "d-cows-reog",
    expertise: "mobile",
    mainFeatures: [
      "Livestock data monitoring",
      "IoT sensor synchronization",
      "Farm activity management",
      "Interactive data charts",
    ],
    keyTechnologies: [
      "Flutter for mobile interface",
      "REST API for data flow",
      "Firebase for storage",
      "Figma-based UI design",
    ],
  },
  {
    title: "LARE Jatim",
    subtitle: "Child Protection App",
    description:
      "LARE Jatim (Lapor Arek Jawa Timur) is a child protection application developed to provide a safe, anonymous, and supportive platform for children and adolescents in East Java to report issues and share their experiences.",
    tags: ["Flutter", "Firebase"],
    image: "/projects/img_lare.png",
    roles: ["Mobile Developer"],
    slug: "lare",
    expertise: "mobile",
    mainFeatures: [
      "Anonymous reporting system",
      "Secure case management",
      "Support resources and helplines",
      "Multi-language support",
    ],
    keyTechnologies: [
      "Flutter for secure mobile development",
      "Firebase for real-time database",
      "End-to-end encryption",
      "Anonymous authentication",
    ],
  },
  {
    title: "Glamora",
    subtitle: "Virtual Fashion Try-On",
    description:
      "Glamora is a modern fashion web application that enhances the online shopping experience by allowing users to browse and virtually try on various fashion items.",
    tags: ["React", "Typescript", "Tailwind", "Konva"],
    image: "/projects/img_glamora.png",
    roles: ["Front-End Developer"],
    slug: "glamora",
    expertise: "frontend",
    mainFeatures: [
      "Virtual try-on feature using canvas manipulation",
      "Product catalog with advanced filtering",
      "Interactive shopping cart experience",
      "Responsive design for all devices",
    ],
    keyTechnologies: [
      "React with TypeScript for type-safe development",
      "Konva.js for canvas-based virtual try-on",
      "Tailwind CSS for responsive styling",
      "State management for cart functionality",
    ],
  },
  {
    title: "Eco.in",
    subtitle: "AR Environmental Education",
    description:
      "Eco.in is a mobile app designed to make environmental education accessible and enjoyable for children and teenagers.",
    tags: ["Flutter", "Firebase", "Google AR Kit"],
    image: "/projects/img_ecoin.png",
    roles: ["Mobile Developer"],
    slug: "ecoin",
    expertise: "mobile",
    mainFeatures: [
      "Augmented reality environmental learning",
      "Interactive quizzes and challenges",
      "Progress tracking and achievements",
      "Community features for eco-activities",
    ],
    keyTechnologies: [
      "Flutter for cross-platform development",
      "Google AR Kit for immersive experiences",
      "Firebase for real-time data",
      "Gamification system implementation",
    ],
  },
  {
    title: "Hallo 24/7",
    subtitle: "Ticket Booking Platform",
    description:
      "Hallo 24/7 is a booking platform that enables users to browse, reserve, and manage ticket purchases with a seamless and intuitive web experience.",
    tags: ["Vue.js", "Vuetify", "REST API"],
    image: "/projects/img_hallo.png",
    roles: ["Front-End Developer"],
    slug: "hallo-24-7",
    expertise: "frontend",
    mainFeatures: [
      "Ticket search and filtering",
      "Booking and checkout process",
      "Order history tracking",
      "Responsive UI with modern layout",
    ],
    keyTechnologies: [
      "Vue.js for interactive UI",
      "Vuetify component system",
      "REST API data integration",
      "State management for bookings",
    ],
  },
  {
    title: "Kultura",
    subtitle: "Cultural Heritage Platform",
    description:
      "Kultura is a beautifully designed web platform created to celebrate and promote Indonesia's rich cultural heritage.",
    tags: ["Vue.js", "Vuetify"],
    image: "/projects/img_kultura.png",
    roles: ["Front-End Developer"],
    slug: "kultura",
    expertise: "frontend",
    mainFeatures: [
      "Interactive cultural map of Indonesia",
      "Rich media content showcase",
      "Search and filter cultural artifacts",
      "Responsive gallery experience",
    ],
    keyTechnologies: [
      "Vue.js for reactive UI",
      "Vuetify component library",
      "Media optimization",
      "SEO-optimized content structure",
    ],
  },
  {
    title: "HIMIT E-Voting",
    subtitle: "E-Voting System",
    description:
      "HIMIT E-Voting is a secure digital voting platform built to support transparent and efficient organizational elections with a user-friendly experience.",
    tags: ["Laravel", "PHP", "Blade", "Bootstrap"],
    image: "/projects/img_evote.png",
    roles: ["Full-Stack Developer"],
    slug: "himit-e-voting",
    expertise: "frontend",
    mainFeatures: [
      "Secure voter authentication",
      "Real-time vote counting",
      "Candidate profile display",
      "Admin panel for election control",
    ],
    keyTechnologies: [
      "Laravel backend logic",
      "Blade for dynamic UI",
      "Bootstrap styling",
      "Role-based access control",
    ],
  },
  {
    title: "DuitKiddo",
    subtitle: "Kids Financial Literacy",
    description:
      "DuitKiddo is an engaging mobile platform created to teach children the basics of money management and foster healthy saving habits.",
    tags: ["Flutter", "Firebase"],
    image: "/projects/img_duitkiddo.png",
    roles: ["Mobile Developer"],
    slug: "duitkiddo",
    expertise: "mobile",
    mainFeatures: [
      "Child-friendly savings tracker",
      "Interactive financial lessons",
      "Goal setting and rewards",
      "Parental controls and monitoring",
    ],
    keyTechnologies: [
      "Flutter for engaging UI",
      "Firebase for family accounts",
      "Gamification mechanics",
      "Secure parental authentication",
    ],
  },

  {
    title: "Invigo",
    subtitle: "Startup-Investor Ecosystem",
    description:
      "Invigo connects startup founders with investors, provides funding solutions, and offers legal services—all tailored to foster an ecosystem of collaboration and growth.",
    tags: ["Vue.js", "Vuetify", "Firebase"],
    image: "/projects/img_invigo.png",
    roles: ["Full-Stack Developer"],
    slug: "invigo",
    expertise: "backend",
    mainFeatures: [
      "Startup-investor matching algorithm",
      "Investment portfolio management",
      "Legal document automation",
      "Pitch deck analysis",
    ],
    keyTechnologies: [
      "Vue.js with Vuetify frontend",
      "FastAPI backend services",
      "TensorFlow/Keras for ML matching",
      "Firebase for real-time features",
    ],
  },
  {
    title: "Lestari",
    subtitle: "AR Wildlife Education",
    description:
      "Lestari is a mobile application dedicated to the education and conservation of Indonesia's endangered wildlife, fostering awareness and community involvement in preserving native species.",
    tags: ["Flutter", "Firebase", "Google AR Kit"],
    image: "/projects/img_lestari.png",
    roles: ["Mobile Developer"],
    slug: "lestari",
    expertise: "mobile",
    mainFeatures: [
      "AR wildlife viewing experience",
      "Conservation education content",
      "Community reporting features",
      "Donation and support integration",
    ],
    keyTechnologies: [
      "Flutter for cross-platform app",
      "Google AR Kit for immersive AR",
      "Firebase for content management",
      "Location-based services",
    ],
  },
  {
    title: "Glucare",
    subtitle: "Diabetes Checker",
    description:
      "Glucare is a mobile application designed to help users monitor blood glucose levels, track health trends, and receive personalized insights for early diabetes management.",
    tags: ["Flutter", "Firebase"],
    image: "/projects/img_glucare.png",
    roles: ["Mobile Developer"],
    slug: "glucare",
    expertise: "mobile",
    mainFeatures: [
      "Blood glucose logging system",
      "Health insights and recommendations",
      "Daily reminder notifications",
      "Progress charts and history",
    ],
    keyTechnologies: [
      "Flutter for mobile interface",
      "Firebase for real-time data",
      "Secure user authentication",
      "Data visualization components",
    ],
  },
  {
    title: "HIMIT PENS Profile",
    subtitle: "Organization Profile",
    description:
      "The HIMIT PENS Profile website is a dynamic platform built to showcase organizational identity, activities, and achievements through a clean and modern interface.",
    tags: ["Laravel", "PHP", "Blade", "Bootstrap"],
    image: "/projects/img_himitprofile.png",
    roles: ["Full-Stack Developer"],
    slug: "himitpens",
    expertise: "frontend",
    mainFeatures: [
      "Organization introduction pages",
      "Committee and department listings",
      "Event and activity showcases",
      "Responsive layout for all devices",
    ],
    keyTechnologies: [
      "Laravel for backend structure",
      "Blade templating engine",
      "Bootstrap for responsive UI",
      "REST API integration",
    ],
  },
  {
    title: "Yapper",
    subtitle: "Social Media",
    description: "",
    tags: ["Express", "PostgreSQL"],
    image: "/projects/img_yapper.png",
    roles: ["Back-End Developer"],
    slug: "yapper",
    expertise: "frontend",
    mainFeatures: [],
    keyTechnologies: [],
  },
  {
    title: "As-Syifa",
    subtitle: "Mental Health Chat Bot",
    description:
      "An empathy-driven mental health chat bot designed to provide users with immediate, compassionate support for emotional well-being.",
    tags: ["Flutter", "Firebase", "Dialogflow"],
    image: "/projects/img_assyifa.png",
    roles: ["Mobile Developer"],
    slug: "as-syifa",
    expertise: "mobile",
    mainFeatures: [
      "Natural language conversation",
      "Empathetic response generation",
      "Crisis resource referrals",
      "Conversation history and insights",
    ],
    keyTechnologies: [
      "Flutter for mobile interface",
      "Dialogflow for NLP",
      "Firebase for conversation storage",
      "Sentiment analysis integration",
    ],
  },
  {
    title: "Balinesia",
    subtitle: "Bali Cultural Showcase",
    description:
      "Balinesia is a web design project created to highlight the unique beauty and cultural richness of Bali, Indonesia, through a visually captivating and user-friendly design.",
    tags: ["Bootstrap"],
    image: "/projects/img_balinesia.png",
    roles: ["Front-End Developer"],
    slug: "balinesia",
    expertise: "frontend",
    mainFeatures: [
      "Immersive visual storytelling",
      "Responsive image galleries",
      "Cultural information sections",
      "Interactive location guides",
    ],
    keyTechnologies: [
      "Bootstrap for responsive framework",
      "Custom CSS animations",
      "Image lazy loading",
      "Mobile-first design approach",
    ],
  },
  {
    title: "Inclupedia",
    subtitle: "Disability Employment App",
    description:
      "Inclupedia is a comprehensive mobile application designed to empower individuals with disabilities by providing accessible tools to assist them in finding employment, understanding their disabilities, and connecting with professional therapists for consultation.",
    tags: ["Flutter", "Firebase"],
    image: "/projects/img_inclupedia.png",
    roles: ["Mobile Developer"],
    slug: "inclupedia",
    expertise: "mobile",
    mainFeatures: [
      "Accessible job search platform",
      "Disability resource library",
      "Therapist booking system",
      "Accessibility-first design",
    ],
    keyTechnologies: [
      "Flutter with accessibility features",
      "Firebase for user management",
      "Screen reader optimization",
      "Voice command integration",
    ],
  },
];

export const EXPERTISES = [
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with Flutter, delivering seamless user experiences on iOS and Android with native performance.",
    icon: "Smartphone",
    techStack: [
      "Flutter",
      "Firebase",
      "Dart",
      "Java",
      "Kotlin",
      "BLoC",
      "Provider",
      "SQLite",
      "Hive",
    ],
  },
  {
    id: "frontend",
    title: "Front-End Development",
    description:
      "Crafting responsive and interactive web interfaces using modern frameworks and libraries, with a focus on performance and accessibility.",
    icon: "Layout",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Back-End Development",
    description:
      "Designing and implementing scalable server-side solutions, APIs, and database architectures to power robust applications.",
    icon: "Server",
    techStack: [
      "PHP",
      "JavaScript",
      "Laravel",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Firebase",
    ],
  },
];

export const EXPERIENCES = [
  {
    title: "Assistant Product Owner",
    company: "Agile PdBL IT PENS 2025",
    period: "Mar 2025 - Nov 2025",
    description:
      "Leading a team of 7 for a career preparation website and mobile app.",
  },
  {
    title: "Mobile Developer",
    company: "D-Cows Reog Research Team",
    period: "Mar 2025 - Nov 2025",
    description:
      "Developing a precision livestock farming mobile app with IoT and AI integration.",
  },
  {
    title: "Part-Time UI/UX Designer",
    company: "PT Rect Media Komputindo",
    period: "Jun 2022 - Jun 2023",
    description:
      "Designing UI for consultation platforms, company websites, and event apps.",
  },
  {
    title: "Intern Flutter Developer",
    company: "PT Rect Media Komputindo",
    period: "Nov 2021 - Mar 2022",
    description:
      "Developing cross-platform company management and appointment apps.",
  },
  {
    title: "Intern Flutter Developer",
    company: "TeFa RPL RUS",
    period: "Oct 2021 - Mar 2022",
    description:
      "Developing a social forum and business promotion platform for students.",
  },
];

export const COMPANIES = [
  { name: "Telkom Indonesia", logo: "/companies/telkom.svg" },
  { name: "Bangkit Academy", logo: "/companies/bangkit.svg" },
  { name: "Google", logo: "/companies/google.svg" },
];
