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

   Anything marked TODO needs your real content before you publish.
   ============================================================ */

const SITE_CONTENT = {

  // ---------- TOP OF PAGE ----------
  identity: {
    name: "Zaki Pugh-Fradot",
    role: "Game Designer · Community & Player Experience",
    tagline: "I love making games and worlds and seeing people enjoy them.",
    location: "West Kelowna, BC",
    email: "zakipughfradot@gmail.com",
    phone: "+1 236 457 3069",
    // Shows in the hero, right under your name. This line is doing real
    // work for you — most junior applicants can't say it.
    availability: "Canadian & French citizen — available to relocate within one month",
    links: [
      { label: "itch.io", url: "https://hatllama.itch.io/" },
      { label: "GitHub", url: "https://github.com/hatllama" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/zaki-pugh-fradot-a3b718262/" }
    ]
  },

  // ---------- ABOUT / SUMMARY ----------
  about: `I am a computer science graduate from UBC (high distinction) who loves making games, telling stories, and watching people enjoy them. I have worked across a variety of different fields, with experience in both backend engineering and community management. I also have many small projects under my belt: I was the primary game designer on multiple games and the dungeon master for two long-form homebrew Dungeons & Dragons campaigns. I am proficient in balancing mechanics, creating worlds and everything within, leading teams of people to bring these visions to life.
`,

  // ---------- FEATURED GAME PROJECTS (itch.io + prototypes) ----------
  // These get the biggest entries. Put your best 3-5 here, best first.
  featuredProjects: [
    {
      title: "Voracis",
      type: "Card Game — Lead Designer",
      blurb: "A no-turn, continuous-play deckbuilder where players explore a small world gather cards and take on unique and interesting bosses. Currently in balance iteration with a small team.",
      designNote: "Design problem: most card games lose tension once players learn the pattern. Removing turns entirely, and tying escalation directly to real elapsed actions rather than rounds, keeps the pressure honest.",
      tags: ["Systems Design", "Lead Designer", "In Development"],
      image: "images/cards.png", 
      playUrl: "",
      codeUrl: ""
    },
    {
      title: "Duck Guns",
      type: "Arcade Shooter — Unity",
      blurb: "A round-based Duck Hunt clone with unique AI ducks, an infinite mode, and upgrade progression. Original audio and UI built in-house.",
      designNote: "Figuring out how to turn the ducks from simple targets into varied, challenging enemies was the hard part. That and then balacing the game overall was a fun experience.", 
      tags: ["Unity", "C#", "Arcade"],
      image: "images/Duck.png",
      playUrl: "https://hatllama.itch.io/ducks-guns",
      codeUrl: ""
    },
    {
      title: "Pablo May Die",
      type: "Roguelike — GMTK Game Jam 2024",
      blurb: "A Vampire Survivors-inspired roguelike built in 48 hours: enemy wave systems, upgrade mechanics, and dynamic weapon combos.",
      designNote: "The main design challenge was creating a sense of progression and tension without traditional turn-based mechanics. Balancing the difficulty curve and ensuring each run felt meaningful was the key.",
      tags: ["Unity", "Game Jam", "Roguelike"],
      image: "images/Pablo.png",
      playUrl: "https://hatllama.itch.io/pablo-may-die",
      codeUrl: ""
    },
    {
      title: "Spaghetti Western",
      type: "Puzzle Game — GMTK Game Jam 2025",
      blurb: "A short narrative puzzle game built around humorous scenarios and comedic problem-solving.",
      designNote: "The design challenge here mainly came down to balancing multiple projects at once. I had to manage my time effectively to ensure that the game was completed within the jam's time constraints.",
      tags: ["Unity", "Game Jam", "Narrative"],
      image: "images/Pasta.png",
      playUrl: "https://hatllama.itch.io/spaghetti-western",
      codeUrl: ""
    }
  ],

  // ---------- TABLETOP / WORLDBUILDING ----------
  // Each campaign is its own block: a summary plus any statblocks that
  // belong to it. Add a new campaign by copying a whole { ... } block
  // in the campaigns list below. Add a statblock to a campaign by copying
  // an entry inside that campaign's "statblocks" list.
  tabletopWork: {
    intro: `Two long-form homebrew D&D campaigns and roughly four years of continuous design work:
    settings, pantheons, factions and plot, plus the monster and encounter design underneath them.
    Click any statblock to read it full size.`,
    campaigns: [
      {
        title: "Ebonthar",
        summary: "A three year long campaign that followed my players from levels 3 to 15. They explored a large expansive kingdom, unraveled a complex conspiracy and battled their way through a variety of different encounters.",
        link: "", // optional: link to a cleaned-up PDF, doc, or Kanka page
        statblocks: [
          {
            name: "Shun Nonibu, Patriarch of the Nonibu Family",
            role: "Boss Fight — CR 21",
            note: "A void-flame duelist built to change shape mid-fight. Below half health he channels Blade of Relentless Hunger: more speed, an extra attack, 50 temporary HP on a kill — and disadvantage on Intelligence and Wisdom saves. The party gets a clear tell that the fight has escalated, and a lever to punish it.",
            image: "images/Shun.jpg"
          },
          {
            name: "Kim Gong-Ja, the Undying Sword",
            role: "Boss Fight — CR 20",
            note: "An adaptation of a manga character into a three-phase encounter. He can't die until his spirit is destroyed, reviving twice at full health, and each revival grants a bonus keyed to whichever party member landed the killing blow. The fight rewrites itself around how the table chose to play it.",
            image: "images/Kim.jpg"
          },
          {
            name: "Chainbinder Acolyte",
            role: "Support Unit — CR 5",
            note: "A low-CR support enemy designed to make an encounter harder without adding raw damage. Bloodbond Focus offers a choice of three riders each turn, so the acolyte answers whatever the party is doing instead of repeating itself.",
            image: "images/Chainbinder.jpg"
          }
        ]
      },
      {
        title: "Gods Above, Gods Below",
        summary: "Newer campaign that has my players exploring a world where gods roam the land. Carefully constructed within a complex worldbuilding repository.",
        link: "https://app.kanka.io/w/390592",
        statblocks: []
      }
    ]
  },

  // ---------- TECHNICAL / SOFTWARE PROJECTS ----------
  technicalProjects: [
    {
      title: "Riftbound Tournament Overlay",
      type: "Client Work — Real-Time OBS Overlay",
      blurb: "Real-time standings overlay for a live Riftbound event. Puppeteer-based headless scraper polling the event API, served over Express and consumed by OBS as a browser source. Packaged for a non-technical operator: one config block, a single START.bat launcher, and no manual data entry between rounds.",
      tags: ["Node.js", "Puppeteer", "Express", "OBS"],
      codeUrl: "" // TODO
    },
    {
      title: "BattleSim",
      type: "Tool Suite — D&D Encounter Prep",
      blurb: "A web-based combat simulator for testing encounters before they reach the table, with a statblock-to-JSON converter and an API-backed statblock draft generator alongside it. Built to cut the slowest part of my own DM prep.",
      tags: ["JavaScript", "Tooling", "Game Design"],
      codeUrl: "" // TODO
    },
    {
      title: "TA Assignment System",
      type: "University Capstone — Full-Stack Web App",
      blurb: "Full-stack TA assignment system built with Python, TypeScript, React, and PostgreSQL. Secure RESTful APIs, Agile sprint planning, strict Git/CI-CD practices, two complete dev-test-feedback cycles deployed to real concurrent users.",
      tags: ["React", "TypeScript", "PostgreSQL", "Python"],
      codeUrl: "" // TODO
    },
    {
      title: "Puzzle Website",
      type: "University Project — Social Platform",
      blurb: "Full-stack social puzzle-sharing platform with user profiles, a live comment system, and a comprehensive admin panel for content management.",
      tags: ["Full-Stack", "MySQL"],
      codeUrl: "" // TODO
    }
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      title: "Community Playtest & Player Support (Contract)",
      org: "Kotoko Inc.",
      dates: "2026–Present",
      points: [
        "Run live playtest sessions for a live-service title: field player questions in real time, de-escalate conflicts, and keep the testing environment constructive.",
        "Deliver structured feedback on assigned mechanics, identifying usability problems and balance issues.",
        "Act as the reporting line between players and the development team, isolating recurring bugs and writing them up so they're actionable.",
        "Provide day-to-day operational support for live-service features."
      ]
    },
    {
      title: "Freelance Game Designer",
      org: "Self-Employed",
      dates: "2023–Present",
      points: [
        "Lead designer on Voracis, the Famine King — a no-turn card game built on automatic trigger conditions and a refill-based tension system.",
        "Built and shipped a live standings overlay for a Riftbound tournament organiser, running against the event API with no manual data entry between rounds.",
        "Designed and shipped three Unity games: Duck Guns, Pablo May Die (GMTK 2024), and Spaghetti Western (GMTK 2025).",
        "Own mechanics, UI, and narrative systems end to end in Unity/C#."
      ]
    },
    {
      title: "Games Club President (formerly Vice President)",
      org: "UBC Okanagan",
      dates: "Sept 2024–May 2026",
      points: [
        "Coordinated weekly meet-ups for 20+ students across two academic years, progressing from VP to President.",
        "Organised special events and public programs, handling scheduling, logistics, and turnout."
      ]
    },
    {
      title: "Backend Developer",
      org: "Lookout",
      dates: "2025",
      points: [
        "Designed the testing suite for the backend system on a team of 8+.",
        "Reviewed pull requests and tested team members' code."
      ]
    }
  ],

   // ---------- EDUCATION ----------
  education: [
    {
      title: "Bachelor of Arts, Computer Science",
      org: "UBC Okanagan — High Distinction, 85% overall",
      dates: "2026",
      points: ["Relevant courses: Game Development, Human-Computer Interaction, Narrative Design & Dystopian Fiction, Mythological Worldbuilding, Cultural Studies, Software Engineering, Artificial Intelligence."]
    },
    {
      title: "High School Diploma",
      org: "La Châtaigneraie (Ecolint), Switzerland",
      dates: "2023",
      points: []
    }
  ],

  // ---------- SKILLS ----------
  skills: {
    "Design": ["Systems & Mechanics Balancing", "Narrative Design", "Worldbuilding & Lore Architecture", "Encounter Design", "Rapid Prototyping", "Tabletop & Homebrew Campaign Design"],
    "Community & Player Support": ["Live Playtest Facilitation", "Player Support", "Conflict De-escalation", "Bug Triage & Reporting", "Event Coordination", "Team Leadership"],
    "Tools": ["Unity", "Unreal", "C#", "JavaScript / TypeScript", "Git & GitHub", "Kanka"],
    "Languages": ["English", "French", "Spanish"]
  },


    competitive: {
    intro: `I play Riftbound competitively, and enjoy thinking about and figuring out card games in my spare time.`,
    results: [
      "5–3 at Regional Qualifier Vancouver, a 2,000+ player event, on debut",
      "3rd place at a Showdown Series event",
      "Consistent 3–0 finishes at weekly locals on an Irelia / Blade Dancer list",
      "Matchup analysis and deviation studies against Regional Qualifier top lists"
    ]
  },

  // ---------- RESUME FILE ----------
  // Put your resume PDF in this folder and link it here.
  // The button hides itself automatically if you set this to "".
  resumeUrl: "resume.pdf"
};