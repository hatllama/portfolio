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
    tagline: "I design systems that bite back — adaptive AI, escalating mechanics, and worlds built to be played in.",
    location: "West Kelowna, BC",
    email: "zakipughfradot@gmail.com",
    phone: "+1 236 457 3069",
    links: [
      { label: "itch.io", url: "https://hatllama.itch.io/" },
      { label: "GitHub", url: "https://github.com/" }, // <-- put your real GitHub profile URL here
      { label: "LinkedIn", url: "https://www.linkedin.com/in/zaki-pugh-fradot-a3b718262/" }
    ]
  },

  // ---------- ABOUT / SUMMARY ----------
  about: `Computer Science graduate (UBC, High Distinction) working across backend engineering
  and hands-on game design. I build playable prototypes fast, test them against real players,
  and iterate — recent work spans a roguelite boss-combat simulator, a continuous-play card game
  with a scaling final-boss enemy, and a live client-facing tournament overlay built under deadline.
  Equally comfortable writing the mechanics as I am worldbuilding the setting they live in.`,

  // ---------- FEATURED GAME PROJECTS (itch.io + prototypes) ----------
  // These get the biggest cards. Put your best 3-5 here.
  featuredProjects: [
    {
      title: "Voracis, the Famine King",
      type: "Card Game Prototype",
      blurb: "A no-turn, continuous-play card game built around a single scaling enemy — Voracis grows hungrier the longer the game runs, forcing players to balance greed against a ticking difficulty curve.",
      designNote: "Design problem: most card games lose tension once players learn the pattern. Removing turns entirely, and tying escalation directly to real elapsed actions rather than rounds, keeps the pressure honest.",
      tags: ["Systems Design", "HTML/JS", "Single-file build"],
      image: "",
      playUrl: "https://hatllama.itch.io/",
      codeUrl: ""
    },
    {
      title: "Boss Combat Simulator",
      type: "Roguelite RPG",
      blurb: "You play the boss. A roguelite combat simulator where the player controls an encounter-ending monster fighting an adapting hero party that learns and counters your patterns over time.",
      designNote: "Design problem: boss fights are usually one-sided authorship. Flipping control to the boss and making the hero party adaptive turns it into a real two-way system.",
      tags: ["AI/Adaptive Systems", "HTML/JS", "Single-file build"],
      image: "",
      playUrl: "https://hatllama.itch.io/",
      codeUrl: ""
    },
    {
      title: "Duck Guns",
      type: "Arcade Shooter — Unity",
      blurb: "A round-based Duck Hunt clone with unique AI ducks, an infinite mode, and upgrade progression. Original audio and UI built in-house.",
      designNote: "",
      tags: ["Unity", "C#", "Arcade"],
      image: "",
      playUrl: "https://hatllama.itch.io/",
      codeUrl: ""
    },
    {
      title: "Pablo May Die",
      type: "Roguelike — GMTK Game Jam 2024",
      blurb: "A Vampire Survivors-inspired roguelike built in 48 hours: enemy wave systems, upgrade mechanics, and dynamic weapon combos.",
      designNote: "",
      tags: ["Unity", "Game Jam", "Roguelike"],
      image: "",
      playUrl: "https://hatllama.itch.io/",
      codeUrl: ""
    },
    {
      title: "John Spaghetti",
      type: "Puzzle Game — GMTK Game Jam 2025",
      blurb: "A short narrative puzzle game built around humorous scenarios and comedic problem-solving.",
      designNote: "",
      tags: ["Unity", "Game Jam", "Narrative"],
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
        name: "Statblock name",
        role: "e.g. Swarm-type mini-boss",
        note: "One line on the mechanical niche this fills or the player experience it creates.",
        image: ""
      },
      {
        name: "Statblock name",
        role: "",
        note: "",
        image: ""
      },
      {
        name: "Statblock name",
        role: "",
        note: "",
        image: ""
      }
    ],
    worldbuildingSample: {
      title: "Campaign / setting title",
      summary: "A short 2-4 sentence pitch of the setting, its central tension, and one faction or plot hook that shows how you structure long-form narrative design. Pull this from your Google Drive notes or Kanka campaign — write it fresh rather than pasting raw notes.",
      link: "" // optional: link to a cleaned-up PDF or doc, or your Kanka page
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
