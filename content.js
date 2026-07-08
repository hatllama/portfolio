/* ============================================================
   CONTENT.JS — Edit this file to update everything on your site.
   You never need to touch index.html, style.css, or app.js
   unless you want to change how the site looks or behaves.

   HOW TO EDIT:
   - Text: change what's between the quotes " " (keep the quotes).
   - Lists: copy an existing { ... } block, paste it, edit it.
     Don't forget the comma between items in a list.
   - Images: put image files in the /images folder, then set
     the "image" field to "images/your-file-name.jpg"
   - To remove something, delete its whole { ... } block
     (including the comma before or after it).
   - Leaving image as "" (empty quotes) shows a placeholder
     instead of breaking the site.
   ============================================================ */

const SITE_CONTENT = {

  // ---------- TOP OF PAGE ----------
  identity: {
    name: "Zaki Pugh-Fradot",
    role: "Game Designer & Developer",
    tagline: "I love making games and worlds and seeing people enjoy them.",
    location: "West Kelowna, BC",
    email: "zakipughfradot@gmail.com",
    phone: "+1 236 457 3069",
    links: [
      { label: "itch.io", url: "https://hatllama.itch.io/" },
      { label: "GitHub", url: "https://github.com/hatllama" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/zaki-pugh-fradot-a3b718262/" }
    ]
  },

  // ---------- ABOUT / SUMMARY ----------
  about: `I am a Computer Science graduate from UBC (High Distinction) who loves making games, telling stories and watching people enjoy them. I have worked across a variety of different fields
  with experience in both backend engineering and community management. I also have many small projects under my belt; the primary game designer on multiple games, the dungeon master for two long form
  homebrew Dungeons&Dragons campaigns. I am proficient in balancing mechanics, creating worlds and everything within and working within teams of peopele to bring these visions to life.`,

  // ---------- FEATURED GAME PROJECTS (itch.io + prototypes) ----------
  // These get the biggest cards. Put your best 3-5 here.
  featuredProjects: [
    {
      title: "Duck Guns",
      type: "Arcade Shooter — Unity",
      blurb: "A round-based Duck Hunt clone with unique AI ducks, an infinite mode, and upgrade progression. Original audio and UI built in-house.",
      designNote: "",
      tags: ["Unity", "C#", "Arcade"],
      image: "images/duck.png",
      playUrl: "https://hatllama.itch.io/ducks-guns",
      codeUrl: ""
    },
    {
      title: "Pablo May Die",
      type: "Roguelike — GMTK Game Jam 2024",
      blurb: "A Vampire Survivors-inspired roguelike built in 48 hours: enemy wave systems, upgrade mechanics, and dynamic weapon combos.",
      designNote: "",
      tags: ["Unity", "Game Jam", "Roguelike"],
      image: "images/pablo.png",
      playUrl: "https://hatllama.itch.io/pablo-may-die",
      codeUrl: ""
    },
    {
      title: "Spaghetti Western",
      type: "Puzzle Game — GMTK Game Jam 2025",
      blurb: "A short narrative puzzle game built around humorous scenarios and comedic problem-solving.",
      designNote: "",
      tags: ["Unity", "Game Jam", "Narrative"],
      image: "",
      playUrl: "https://hatllama.itch.io/",
      codeUrl: ""
    },
    {
      title: "Card Game",
      type: "Card Game Prototype",
      blurb: "A no-turn, continuous-play card game built around a single scaling enemy — Voracis grows hungrier the longer the game runs, forcing players to balance greed against a ticking difficulty curve.",
      designNote: "Design problem: most card games lose tension once players learn the pattern. Removing turns entirely, and tying escalation directly to real elapsed actions rather than rounds, keeps the pressure honest.",
      tags: ["Systems Design", "HTML/JS", "Single-file build"],
      image: "",
      playUrl: "https://hatllama.itch.io/",
      codeUrl: ""
    }
  ],

  // ---------- TABLETOP / WORLDBUILDING SAMPLES ----------
  // Replace these placeholders with 4-8 of your strongest Pinterest statblocks,
  // and one polished writeup pulled from your Google Drive notes or Kanka campaign.
  tabletopWork: {
    intro: `Homebrew D&D design work — monster and encounter design, plus setting and plot
    development for two long-running campaigns.`,
    statblocks: [
      {
        name: "Shun Nonibu",
        role: "Boss fight",
        note: "Fun flavoured version of a dark flame swordsman.",
        image: "images/Shun.jpg"
      },
      {
        name: "Kim Gong-Ja",
        role: "Adapted Character",
        note: "Adaptation of a manga character into a statblock.",
        image: "images/Kim.jpg"
      },
      {
        name: "Chainbinder",
        role: "Support Unit",
        note: "A lower CR support unit.",
        image: "images/Chainbinder.jpg"
      }
    ],
    worldbuildingSample: {
      title: "Ebonthar",
      summary: "A three year long campaign that followed my players from levels 3 to 15. They explored a large expansive kingdom, unraveled a complex conspiracy and battled their way through a variety of different encounters. ",
      link: "" // optional: link to a cleaned-up PDF or doc, or your Kanka page
    },
    worldbuildingSample2: {
      title: "Gods Above, Gods Below",
      summary: "Newer campaign that has my players exploring a world where gods roam the land. Carefully constructed within a complex worldbuilding repository. ",
      link: "https://app.kanka.io/w/390592" // optional: link to a cleaned-up PDF or doc, or your Kanka page
    }
  },

  // ---------- TECHNICAL / SOFTWARE PROJECTS ----------
  technicalProjects: [
    {
      title: "TA Assignment System",
      type: "University Capstone — Full-Stack Web App",
      blurb: "Full-stack TA assignment system built with Python, TypeScript, React, and PostgreSQL. Secure RESTful APIs, Agile sprint planning, strict Git/CI-CD practices, two complete dev-test-feedback cycles deployed to real concurrent users.",
      tags: ["React", "TypeScript", "PostgreSQL", "Python"],
      codeUrl: ""
    },
    {
      title: "Riftbound Tournament Overlay",
      type: "Client Work — Real-Time OBS Overlay",
      blurb: "Real-time tournament standings overlay for a live Riftbound event: Puppeteer-based scraper, Express server, and a one-click START.bat launcher for clean non-technical operation.",
      tags: ["Node.js", "Puppeteer", "Express", "OBS"],
      codeUrl: ""
    },
    {
      title: "Puzzle Website",
      type: "University Project — Social Platform",
      blurb: "Full-stack social puzzle-sharing platform with user profiles, a live comment system, and a comprehensive admin panel for content management.",
      tags: ["Full-Stack", "MySQL"],
      codeUrl: ""
    }
  ],

  // ---------- EXPERIENCE (from resume) ----------
  experience: [
    {
      title: "Backend Developer",
      org: "Lookout",
      dates: "2025–Present",
      points: [
        "Designed the testing suite for the backend system.",
        "Collaborated alongside a team of 8+ people.",
        "Reviewed pull requests and tested team members' code."
      ]
    },
    {
      title: "Community Playtest & Player Support / Contractor",
      org: "Kotoko Inc.",
      dates: "2026–Present",
      points: [
        "Conducted structured gameplay testing and delivered detailed feedback to improve mechanics and identify usability issues.",
        "Supported live-service game features across active playtests.",
        "Managed live playtests, answering player questions and de-escalating conflicts to maintain a constructive testing environment.",
        "Identified recurring gameplay bugs and communicated them clearly between players and the development team."
      ]
    },
    {
      title: "Freelance Game Designer",
      org: "Self-Employed",
      dates: "2023–Present",
      points: [
        "Designed and developed 3+ indie games.",
        "Implemented mechanics, UI, and narrative systems in Unity/C#."
      ]
    },
    {
      title: "Games Club President (Formerly Vice President)",
      org: "UBC Okanagan",
      dates: "Sept 2024–May 2026",
      points: [
        "Organised weekly meet-ups for 20+ students, ensuring smooth operations.",
        "Assisted with special events and public programs."
      ]
    }
  ],

  // ---------- SKILLS ----------
  skills: {
    "Game Dev Tools": ["Unity", "Unreal", "Git", "GitHub", "Android Studio", "Docker"],
    "Programming": ["C#", "Python", "TypeScript", "JavaScript", "Java", "C++", "C", "PHP", "R", "SQL"],
    "Design": ["Game Mechanics", "Narrative Design", "Rapid Prototyping", "D&D Homebrew", "Worldbuilding"],
    "Other": ["Team Leadership", "English / French / Spanish"]
  },

  // ---------- EDUCATION ----------
  education: [
    {
      title: "Bachelor of Science, Computer Science",
      org: "University of British Columbia — High Distinction",
      dates: "",
      points: ["Relevant courses: Deep/Machine Learning, AI, Game Development, Software Engineering, HCI."]
    },
    {
      title: "High School Diploma",
      org: "La Châtaigneraie (Ecolint), Switzerland",
      dates: "2023",
      points: []
    }
  ],

  // ---------- RESUME FILE ----------
  // Put your resume PDF in the /images folder (or make a /files folder) and link it here.
  resumeUrl: "resume.pdf"
};
