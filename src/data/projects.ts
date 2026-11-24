export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  contribution?: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  status: "completed" | "in-development";
  image?: string;
  video?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "perfume-review",
    title: "Perfume Review App",
    category: "Mobile Development",
    type: "Personal Project",
    description:
      "A mobile application focused on fragrance discovery, ratings, and reviews. An independent project combining personal interests with mobile application development.",
    highlights: [
      "Developed the initial mobile application prototype.",
      "Exploring fragrance discovery and review functionality.",
      "Utilizing AI-assisted development tools throughout the development process."
    ],
    technologies: ["React Native", "Claude Code"],
    featured: true,
    status: "in-development"
  },
  {
    id: "runnerz",
    title: "Runnerz",
    category: "Mobile Development",
    type: "Graduate Project",
    description:
      "A mobile application that adapts music selection to a user's walking or running pace through smartphone activity tracking and tempo-based music selection.",
    contribution:
      "Designed and implemented the music selection algorithm responsible for matching physical activity data to the closest available song tempo.",
    highlights: [
      "Organized a curated music library into BPM ranges.",
      "Implemented closest-tempo matching to accommodate variations in running pace.",
      "Synchronized music selection with activity data at five-minute intervals.",
      "Integrated music selection logic into a collaborative mobile prototype."
    ],
    technologies: ["React Native", "Expo", "Sensor Data", "Algorithm Design"],
    featured: true,
    status: "completed"
  },
  {
    id: "apple-watch",
    title: "Apple Watch Activity Redesign",
    category: "Human-Computer Interaction",
    type: "Graduate Research Project",
    description:
      "A redesign of the Apple Watch Activity interface that introduces configurable activity rings, personalized fitness goals, and achievements based on individual health priorities.",
    highlights: [
      "Identified limitations in existing activity ring assignments.",
      "Designed configurable activity metrics and personalized achievements.",
      "Developed three alternative interface prototypes.",
      "Conducted a comparative user study involving 22 participants.",
      "Evaluated user preferences through quantitative research and statistical analysis.",
      "Observed participant preference for the redesigned interface."
    ],
    technologies: ["HCI", "Interface Prototyping", "User Research", "Statistical Analysis"],
    featured: true,
    status: "completed"
  },
  {
    id: "file-versioning",
    title: "File Versioning System",
    category: "Systems Development",
    type: "Undergraduate Project",
    description:
      "A Java-based file versioning system that stores incremental changes between file versions, enabling historical file reconstruction while reducing redundant storage.",
    highlights: [
      "Implemented line-by-line comparison to identify file changes.",
      "Designed a delta-based storage mechanism to minimize data duplication.",
      "Reconstructed historical file versions using stored changes.",
      "Applied object-oriented programming principles to application design."
    ],
    technologies: ["Java", "OOP", "File I/O", "Delta-Based Versioning"],
    featured: true,
    status: "completed"
  },
  {
    id: "flight-booking",
    title: "Flight Booking Application",
    category: "Full-Stack Development",
    type: "Undergraduate Project",
    description:
      "A multi-user flight reservation application with a Java backend, an interactive web interface, and a relational SQL database.",
    highlights: [
      "Developed frontend interfaces using JavaScript and HTML.",
      "Implemented backend business logic in Java.",
      "Designed a relational database for users, flights, and reservations.",
      "Integrated frontend, backend, and database components."
    ],
    technologies: ["Java", "JavaScript", "HTML", "SQL"],
    featured: false,
    status: "completed"
  },
  {
    id: "arduino-led",
    title: "Arduino Interactive LED Controller",
    category: "Embedded Systems",
    type: "Graduate Project",
    description:
      "An interactive Arduino prototype that translates joystick input into real-time LED color changes, exploring physical interfaces and hardware-software integration.",
    highlights: [
      "Processed joystick input to control LED colors.",
      "Designed and assembled a functional breadboard circuit.",
      "Implemented responsive hardware control using Arduino."
    ],
    technologies: ["Arduino", "Embedded Programming", "Circuit Prototyping"],
    featured: false,
    status: "completed"
  },
  {
    id: "fighting-game",
    title: "Two-Player Fighting Game",
    category: "Game Development",
    type: "Undergraduate Project",
    description:
      "A two-player fighting game inspired by traditional arcade games, where players compete in real-time combat until one player is knocked out.",
    highlights: [
      "Implemented two-player combat mechanics.",
      "Developed game state management logic.",
      "Separated game logic from visual rendering.",
      "Applied object-oriented programming principles."
    ],
    technologies: ["Java", "C++", "Unity", "OOP"],
    featured: false,
    status: "completed"
  }
];