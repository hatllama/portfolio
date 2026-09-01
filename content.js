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
    role: "Game Designer — Systems & Narrative",
    tagline: "I love making games and worlds and seeing people enjoy them.",
    location: "West Kelowna, BC",
    email: "zakipughfradot@gmail.com",
    phone: "+1 236 457 3069",
    availability: "Canadian & French citizen — available to relocate within one month",
    links: [
      { label: "itch.io", url: "https://hatllama.itch.io/" },
      { label: "GitHub", url: "https://github.com/hatllama" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/zaki-pugh-fradot-a3b718262/" }

    ]
  },

  // ---------- ABOUT / SUMMARY ----------
  about: `I am a computer science graduate from UBC (high distinction) who loves making games, 
  telling stories, and watching people enjoy them. I have worked across a variety of different fields, 
  with experience in both backend engineering and community management. 
  I also have many small projects under my belt: I was the primary game designer on multiple games and the dungeon master for two long-form homebrew Dungeons & Dragons campaigns. 
  I am proficient in balancing mechanics, creating worlds and everything within, leading teams of people to bring these visions to life.`,

  // ---------- FEATURED GAME PROJECTS ----------
  // "role" answers the reviewer's question: solo or team, and what you owned.
  // "built" is the list of mechanics and features YOU designed — this is the
  // part he said was missing. Keep each line to one concrete thing.
  featuredProjects: [
    {
      title: "Voracis",
      type: "Card Game — Unity",
      role: "Team of 3 · Lead designer — systems, balance, card design",
      blurb: "A no-turn, continuous-play deckbuilder where players explore a small world, gather cards, and take on unique and interesting bosses. Currently in balance iteration with a small team.",
      built: [
        "No-turn action economy: automatic trigger conditions in place of turn order",
        "Refill-based tension system driving escalation off elapsed actions rather than rounds",
        "Boss encounter design — each fight built around a distinct pressure the deck has to answer",
        "Card-condition readability passes so triggers resolve without table arguments"
      ],
      designNote: "Design problem: most card games lose tension once players learn the pattern. Removing turns entirely, and tying escalation directly to real elapsed actions rather than rounds, keeps the pressure honest.",
      tags: ["Systems Design", "Lead Designer", "In Development"],
      image: "images/cards.png",
      playUrl: "",
      codeUrl: ""
    },
    {
      title: "Duck Guns",
      type: "Arcade Shooter — Unity",
      role: "Team of 3 · Lead designer — enemies, upgrades, balance, UI, infinite mode",
      blurb: "A round-based Duck Hunt clone with unique AI ducks, an infinite mode, and upgrade progression.",
      built: [
        "Distinct AI flight behaviours per duck type",
        "Infinite mode and the upgrade progression layered over it",
        "UI implementation and collision system optimisation"
      ],
      designNote: "Figuring out how to turn the ducks from simple targets into varied, challenging enemies was the hard part. That, and then balancing the game overall, was a fun experience.",
      tags: ["Unity", "C#", "Arcade"],
      image: "images/Duck.png",
      playUrl: "https://hatllama.itch.io/ducks-guns",
      codeUrl: ""
    },
    {
      title: "Pablo May Die",
      type: "Roguelike — GMTK Game Jam 2024",
      role: "Team of 8 · Project lead & lead designer — mechanics, direction, upgrade system, audio setup, balance",
      blurb: "A Vampire Survivors-inspired roguelike built in 48 hours.",
      built: [
        "Enemy wave system and run pacing",
        "Upgrade mechanics and dynamic weapon combos",
        "Menus, success and death states, audio integration"
      ],
      designNote: "The main design challenge was creating a sense of progression and tension without traditional turn-based mechanics. Balancing the difficulty curve and making each run feel meaningful was the key.",
      tags: ["Unity", "Game Jam", "Roguelike"],
      image: "images/Pablo.png",
      playUrl: "https://hatllama.itch.io/pablo-may-die",
      codeUrl: ""
    },
    {
      title: "Spaghetti Western",
      type: "Puzzle Game — GMTK Game Jam 2025",
      role: "Team of 8 · Project lead & lead designer — story, mechanics, direction, balance",
      blurb: "A short narrative puzzle game built around humorous scenarios and comedic problem-solving.",
      built: [
        "TODO: name two or three actual puzzles or systems you designed here",
        "TODO: what carried the comedy — timing? failure states? dialogue?"
      ],
      designNote: "The design challenge here mainly came down to balancing multiple projects at once. I had to manage my time effectively to ensure the game was completed within the jam's time constraints.",
      tags: ["Unity", "Game Jam", "Narrative"],
      image: "images/Pasta.png",
      playUrl: "https://hatllama.itch.io/spaghetti-western",
      codeUrl: ""
    }
  ],

  // ---------- TABLETOP / WORLDBUILDING ----------
  // "outcome" is where you say how the design actually went at the table —
  // including what didn't work. That's the part that shows you understood it.
  tabletopWork: {
    intro: `Two long-form homebrew D&D campaigns and roughly four years of continuous design work:
    settings, pantheons, factions and plot, plus the monster and encounter design underneath them.
    Click any statblock to read it full size.`,
    campaigns: [
      {
        title: "Ebonthar",
        summary: "A three year long campaign that followed my players from levels 3 to 15. They explored a large expansive kingdom, unraveled a complex conspiracy and battled their way through a variety of different encounters.",
        link: "",
        linkLabel: "",
        statblocks: [
          {
            name: "Shun Nonibu, Patriarch of the Nonibu Family",
            role: "Boss Fight — CR 21",
            note: "A void-flame duelist built to change shape mid-fight. Below half health he channels Blade of Relentless Hunger: more speed, an extra attack, 50 temporary HP on a kill — and disadvantage on Intelligence and Wisdom saves. The party gets a clear tell that the fight has escalated, and a lever to punish it.",
            outcome: "Set up early to allow the party to fight him later, created a momentous final boss fight with a clear escalation and a lever for the party to punish it. The party was able to kill him, but the fight was long and difficult.",
            image: "images/Shun.jpg"
          },
          {
            name: "Kim Gong-Ja, the Undying Sword",
            role: "Boss Fight — CR 20",
            note: "An adaptation of a manga character into a three-phase encounter. He can't die until his spirit is destroyed, reviving twice at full health, and each revival grants a bonus keyed to whichever party member landed the killing blow. The fight rewrites itself around how the table chose to play it.",
            outcome: "Party enjoyed figuring out the revival system. The fight was fun and the party was able to adapt to the changing conditions and ultimately succeed.",
            image: "images/Kim.jpg"
          },
          {
            name: "Chainbinder Acolyte",
            role: "Support Unit — CR 5",
            note: "A low-CR support enemy designed to make an encounter harder without adding raw damage. Bloodbond Focus offers a choice of three riders each turn, so the acolyte answers whatever the party is doing instead of repeating itself.",
            outcome: "The party learned to prioritize killing the Chainbinder Acolyte early on, as it posed a significant threat with its ability to adapt to their actions.",
            image: "images/Chainbinder.jpg"
          }
        ]
      },
      {
        title: "Gods Above, Gods Below",
        summary: "An in-progress campaign set in a world where the gods walk it directly. Currently being adapted into a D&D module for public release, Kanka is notes and a work in progress, not final results.",
        linkLabel: "Open the world bible in Kanka →",
        statblocks: []
      }
    ]
  },

  // ---------- INFLUENCES / READING ----------
  // The reviewer suggested showing what you've read and studied. Fill in
  // three or four real ones — a book, a GDC talk, a designer's blog, a game
  // you took apart. One line each on what you took from it, not a summary
  // of the thing itself. The section hides automatically while it's empty.
  influences: {
    intro: `I spend my free time consuming a lot of analysis content both from articles and video essays on design and development.`,
    items: [
      { title: "Curious Archive", note: "Learned about various forms of worldbuilding and how they impact game design." },
      { title: "Masahiro Sakurai on Creating Games", note: "Taught me nearly everything there is to know about game design and development." },
      { title: "The Art of Game Design", note: "Provided a comprehensive framework for understanding game mechanics and player engagement." }
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
        "Lead designer on Voracis — a no-turn deckbuilder built on automatic trigger conditions and a refill-based tension system.",
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
  // Unreal was removed — the reviewer flagged that it was listed with no
  // Unreal project to back it. Put it back only alongside something shown.
  skills: {
    "Design": ["Systems & Mechanics Balancing", "Encounter Design", "Rapid Prototyping", "Playtesting & Iteration", "Tabletop & Homebrew Campaign Design"],
    "Narrative & Worldbuilding": ["Worldbuilding & Lore Architecture", "Narrative Design", "Pantheon & Faction Design", "Multi-Session Arc Structure"],
    "Engines & Tools": ["Unity", "C#", "JavaScript / TypeScript", "Git & GitHub", "Kanka"],
    "Adjacent Disciplines": ["UI Implementation", "Original Audio Composition", "TODO: add art/modelling/writing tools you actually use"],
    "Playtesting & Player Feedback": ["Live Playtest Facilitation", "Structured Feedback Reporting", "Bug Triage", "Conflict De-escalation"],
    "Languages": ["English", "French", "Spanish"]
  },

  // ---------- PERSONAL ----------
  // The last thing a reader sees. Keep the lines short and specific — this is
  // the section that gives an interviewer something easy to open with.
  // Delete any line you don't want; the section hides itself if all are gone.
  personal: {
    intro: `The parts about me that don't fit anywhere else.`,
    items: [
      "I read constantly, and I'd genuinely rather be asked about what I'm reading than about my CV.",
      "I've lived in more than eight countries, and went to school in Switzerland before Canada.",
      "I play trading card games competitively: currently Riftbound, where I've spent an unreasonable amount of time on matchup spreadsheets.",
      "I get around by ebike in all weather which in the winter ends up being a real challenge."
    ]
  },

  // ---------- RESUME FILE ----------
  resumeUrl: "resume.pdf"
};