/* ============================================================
   CONTENT.FR.JS — French version of the site.
   Anything missing here falls back to the English text in
   content.js (URLs and images are only defined there).
   Lists are matched by position, so keep the same order as
   content.js. "skills" is replaced as a whole.
   ============================================================ */

const UI_STRINGS = {
  en: {
    title: "Zaki Pugh-Fradot — Game Designer & Developer",
    description: "Game design portfolio — card and video game systems design, homebrew D&D encounter design, and tournament software.",
    "nav.about": "About", "nav.games": "Games", "nav.tabletop": "Tabletop", "nav.influences": "Influences",
    "nav.technical": "Technical", "nav.experience": "Experience", "nav.skills": "Skills", "nav.personal": "Personal", "nav.contact": "Contact",
    "h.about": "About", "h.games": "Featured Games", "h.tabletop": "Tabletop & Worldbuilding", "h.influences": "Influences & Reading",
    "h.technical": "Technical Projects", "h.experience": "Experience", "h.education": "Education", "h.skills": "Skills",
    "h.personal": "Personal", "h.links": "Links",
    resume: "Download Résumé",
    play: "Play →", code: "Code →", live: "Live →",
    built: "What I designed", atTable: "At the table", readMore: "Read more →", addImage: "Add image →",
    toggleLabel: "Français", toggleAria: "Voir le site en français", menuAria: "Toggle menu"
  },
  fr: {
    title: "Zaki Pugh-Fradot — Game designer et développeur",
    description: "Portfolio de game design — conception de systèmes de jeux de cartes et de jeux vidéo, design de rencontres D&D maison et logiciels de tournoi.",
    "nav.about": "À propos", "nav.games": "Jeux", "nav.tabletop": "Jeu de rôle", "nav.influences": "Influences",
    "nav.technical": "Technique", "nav.experience": "Expérience", "nav.skills": "Compétences", "nav.personal": "Perso", "nav.contact": "Contact",
    "h.about": "À propos", "h.games": "Jeux à l'honneur", "h.tabletop": "Jeu de rôle & worldbuilding", "h.influences": "Influences & lectures",
    "h.technical": "Projets techniques", "h.experience": "Expérience", "h.education": "Formation", "h.skills": "Compétences",
    "h.personal": "Personnel", "h.links": "Liens",
    resume: "Télécharger le CV",
    play: "Jouer →", code: "Code →", live: "En ligne →",
    built: "Ce que j'ai conçu", atTable: "À la table", readMore: "En savoir plus →", addImage: "Ajouter une image →",
    toggleLabel: "English", toggleAria: "View the site in English", menuAria: "Ouvrir le menu"
  }
};

const SITE_CONTENT_FR = {

  identity: {
    role: "Game designer — systèmes et narration",
    tagline: "J'adore créer des jeux et des mondes, et voir les gens s'y amuser.",
    location: "West Kelowna (C.-B.), Canada",
    availability: "Nationalités canadienne et française — disponible pour déménager sous un mois"
  },

  about: `Titulaire d'un diplôme en informatique de l'UBC (mention très honorable), j'aime créer des jeux,
  raconter des histoires et regarder les gens s'y amuser. J'ai travaillé dans des domaines variés,
  avec de l'expérience en ingénierie backend comme en gestion de communauté.
  J'ai aussi de nombreux petits projets à mon actif : j'ai été le principal game designer de plusieurs jeux et le maître du donjon de deux longues campagnes maison de Donjons & Dragons.
  Je sais équilibrer des mécaniques, créer des mondes et tout ce qu'ils contiennent, et diriger des équipes pour donner vie à ces visions.`,

  featuredProjects: [
    {
      title: "Voracis",
      type: "Jeu de cartes — Unity",
      role: "Équipe de 3 · Lead designer — systèmes, équilibrage, conception des cartes",
      blurb: "Un deckbuilder en continu, sans tours, où les joueurs explorent un petit monde, collectent des cartes et affrontent des boss uniques et intéressants. Actuellement en phase d'itération sur l'équilibrage avec une petite équipe.",
      built: [
        "Économie d'actions sans tours : des conditions de déclenchement automatiques remplacent l'ordre de jeu",
        "Système de tension par recharge : l'escalade dépend des actions écoulées plutôt que des tours",
        "Design des boss — chaque combat repose sur une pression distincte à laquelle le deck doit répondre",
        "Passes de lisibilité sur les conditions des cartes pour que les déclencheurs se résolvent sans disputes à la table"
      ],
      designNote: "Problème de design : la plupart des jeux de cartes perdent leur tension dès que les joueurs maîtrisent le schéma. Supprimer complètement les tours, et lier l'escalade aux actions réellement effectuées plutôt qu'aux tours, garde la pression honnête.",
      tags: ["Design de systèmes", "Lead designer", "En développement"]
    },
    {
      title: "Duck Guns",
      type: "Jeu d'arcade (tir) — Unity",
      role: "Équipe de 3 · Lead designer — ennemis, améliorations, équilibrage, interface, mode infini",
      blurb: "Un clone de Duck Hunt par manches, avec des canards pilotés par IA, un mode infini et une progression par améliorations.",
      built: [
        "Comportements de vol IA distincts pour chaque type de canard",
        "Mode infini et progression d'améliorations qui s'y superpose",
        "Implémentation de l'interface et optimisation du système de collisions"
      ],
      designNote: "Le plus difficile a été de transformer les canards, de simples cibles, en ennemis variés et exigeants. Équilibrer ensuite l'ensemble du jeu a été une expérience passionnante.",
      tags: ["Unity", "C#", "Arcade"]
    },
    {
      title: "Pablo May Die",
      type: "Roguelike — GMTK Game Jam 2024",
      role: "Équipe de 8 · Chef de projet et lead designer — mécaniques, direction, système d'améliorations, audio, équilibrage",
      blurb: "Un roguelike inspiré de Vampire Survivors, réalisé en 48 heures.",
      built: [
        "Système de vagues d'ennemis et rythme des parties",
        "Mécaniques d'amélioration et combinaisons d'armes dynamiques",
        "Menus, écrans de victoire et de défaite, intégration audio"
      ],
      designNote: "Le principal défi de design était de créer un sentiment de progression et de tension sans mécaniques au tour par tour. Équilibrer la courbe de difficulté et donner du sens à chaque partie était la clé.",
      tags: ["Unity", "Game jam", "Roguelike"]
    },
    {
      title: "Spaghetti Western",
      type: "Jeu de réflexion — GMTK Game Jam 2025",
      role: "Équipe de 8 · Chef de projet et lead designer — histoire, mécaniques, direction, équilibrage",
      blurb: "Un court jeu de réflexion narratif construit autour de scénarios humoristiques et de résolution de problèmes comique.",
      built: [
        "Conception des énigmes narratives et des jeux de mots.",
        "Organisation et gestion de l'équipe pour terminer le jeu dans les délais de la jam."
      ],
      designNote: "Le défi de design tenait surtout à la gestion de plusieurs projets en parallèle. J'ai dû organiser mon temps efficacement pour que le jeu soit terminé dans les délais de la jam.",
      tags: ["Unity", "Game jam", "Narration"]
    }
  ],

  tabletopWork: {
    intro: `Deux longues campagnes maison de D&D et environ quatre ans de travail de conception continu :
    cadres de jeu, panthéons, factions et intrigues, ainsi que le design des monstres et des rencontres qui les sous-tendent.
    Cliquez sur un bloc de statistiques pour le lire en grand.`,
    campaigns: [
      {
        title: "Ebonthar",
        summary: "Une campagne de trois ans qui a mené mes joueurs du niveau 3 au niveau 15. Ils ont exploré un vaste royaume, démêlé une conspiration complexe et affronté une grande variété de rencontres.",
        statblocks: [
          {
            name: "Shun Nonibu, patriarche de la famille Nonibu",
            role: "Combat de boss — FP 21",
            note: "Un duelliste à la flamme du vide capable de changer de forme en plein combat. Sous la moitié de ses points de vie, il canalise la Lame de la faim implacable : plus de vitesse, une attaque supplémentaire, 50 PV temporaires à chaque mise à mort — et un désavantage aux jets de sauvegarde d'Intelligence et de Sagesse. Le groupe reçoit un signal clair que le combat s'est intensifié, et un levier pour le punir.",
            outcome: "Mis en place très tôt pour que le groupe puisse l'affronter plus tard, il a donné un combat final mémorable, avec une escalade claire et un levier pour le groupe. Le groupe a réussi à le tuer, mais le combat a été long et difficile."
          },
          {
            name: "Kim Gong-Ja, l'Épée immortelle",
            role: "Combat de boss — FP 20",
            note: "Une adaptation d'un personnage de manga en rencontre à trois phases. Il ne peut pas mourir tant que son esprit n'est pas détruit : il ressuscite deux fois avec tous ses points de vie, et chaque résurrection accorde un bonus lié au membre du groupe qui a porté le coup fatal. Le combat se réécrit selon la façon dont la table a choisi de jouer.",
            outcome: "Le groupe a aimé percer à jour le système de résurrection. Le combat était amusant et le groupe a su s'adapter aux conditions changeantes pour finalement l'emporter."
          },
          {
            name: "Acolyte du Lieur de chaînes",
            role: "Unité de soutien — FP 5",
            note: "Un ennemi de soutien de faible FP conçu pour rendre une rencontre plus difficile sans ajouter de dégâts bruts. Le Focus du lien de sang propose chaque tour un choix de trois effets, de sorte que l'acolyte s'adapte à ce que fait le groupe au lieu de se répéter.",
            outcome: "Le groupe a appris à éliminer l'acolyte en priorité, car sa capacité à s'adapter à leurs actions en faisait une menace sérieuse."
          }
        ]
      },
      {
        title: "Gods Above, Gods Below",
        summary: "Une campagne en cours dans un monde où les dieux marchent directement parmi les mortels. Elle est en cours d'adaptation en module D&D pour une publication publique ; Kanka contient des notes et un travail en cours, pas des résultats finaux.",
        linkLabel: "Ouvrir la bible du monde sur Kanka →"
      }
    ]
  },

  influences: {
    intro: `Je consacre mon temps libre à consommer beaucoup de contenu d'analyse, sous forme d'articles comme d'essais vidéo sur le design et le développement.`,
    items: [
      { title: "Curious Archive", note: "M'a fait découvrir diverses formes de worldbuilding et leur impact sur le game design." },
      { title: "Masahiro Sakurai on Creating Games", note: "M'a appris presque tout ce qu'il y a à savoir sur le game design et le développement." },
      { title: "The Art of Game Design", note: "M'a donné un cadre complet pour comprendre les mécaniques de jeu et l'engagement des joueurs." }
    ]
  },

  technicalProjects: [
    {
      title: "Riftbound AI",
      type: "Moteur de règles et IA de playtest",
      blurb: "Un moteur de règles sur mesure pour le jeu de cartes Riftbound (format Duel), surmonté de joueurs IA en auto-apprentissage, utilisé pour trouver des decks atypiques et efficaces et tester l'effet des nouvelles cartes sur le jeu. J'ai dirigé le design, tranché les interactions entre cartes et fixé les critères de taux de victoire que chaque version de l'IA devait atteindre.",
      disclaimer: "Projet de fan non officiel. Non affilié à Riot Games et non approuvé par Riot Games.",
      sections: [
        {
          label: "Points forts",
          items: [
            "~290 cartes implémentées, avec information cachée et matchs au meilleur des trois.",
            "La dernière IA gagne 85 à 96 % des parties contre un joueur de référence sur dix decks."
          ]
        }
      ],
      tags: ["Python", "Moteur de règles sur mesure", "Apprentissage par renforcement (PPO)", "MCTS à ensembles d'information", "Réalisé avec Claude Code"]
    },
    {
      title: "Statblock Forge & War Table",
      type: "Boîte à outils de préparation D&D — simulateur de combat tactique",
      blurb: "Les MJ doivent souvent deviner si une rencontre est trop facile ou trop mortelle. Statblock Forge construit la rencontre, et War Table la rejoue des milliers de fois sur une grille, puis affiche les probabilités et un replay qui explique pourquoi chaque créature a agi ainsi.",
      sections: [
        {
          label: "Points forts",
          items: [
            "Importe des blocs de statistiques, des monstres du SRD et des personnages de joueurs ; simule déplacements, terrain, sorts et ressources limitées.",
            "Chaque décision de l'IA est accompagnée d'une ligne « pourquoi », ce qui rend le replay lisible.",
            "Site statique, plus de 230 vérifications automatisées, utilisé par mon propre groupe de joueurs."
          ]
        }
      ],
      tags: ["JavaScript", "Outillage", "Simulation", "Comportement d'IA", "Game design"]
    },
    {
      title: "Riftbound Tournament Overlay",
      type: "Travail pour client — overlay OBS en temps réel",
      blurb: "Overlay de classement en temps réel pour un événement Riftbound en direct. Un scraper headless basé sur Puppeteer interroge l'API de l'événement, servi via Express et consommé par OBS comme source navigateur. Conçu pour un opérateur non technique : un seul bloc de configuration, un lanceur START.bat unique et aucune saisie manuelle entre les rondes.",
      tags: ["Node.js", "Puppeteer", "Express", "OBS"]
    },
    {
      title: "TA Assignment System",
      type: "Projet de fin d'études — application web full-stack",
      blurb: "Système d'affectation des assistants d'enseignement full-stack, réalisé avec Python, TypeScript, React et PostgreSQL. API RESTful sécurisées, planification de sprints Agile, pratiques Git/CI-CD strictes, deux cycles complets de développement, test et retours déployés auprès d'utilisateurs réels simultanés.",
      tags: ["React", "TypeScript", "PostgreSQL", "Python"]
    },
    {
      title: "Puzzle Website",
      type: "Projet universitaire — plateforme sociale",
      blurb: "Plateforme sociale full-stack de partage d'énigmes avec profils d'utilisateurs, système de commentaires en direct et panneau d'administration complet pour la gestion du contenu.",
      tags: ["Full-stack", "MySQL"]
    }
  ],

  experience: [
    {
      title: "Playtest communautaire et support joueurs (contrat)",
      org: "Kotoko Inc.",
      dates: "2026–aujourd'hui",
      points: [
        "Animation de sessions de playtest en direct pour un jeu-service : réponses en temps réel aux questions des joueurs, désamorçage des conflits et maintien d'un environnement de test constructif.",
        "Retours structurés sur les mécaniques assignées, avec identification des problèmes d'ergonomie et d'équilibrage.",
        "Interface entre les joueurs et l'équipe de développement : isolation des bugs récurrents et rédaction de rapports exploitables.",
        "Support opérationnel quotidien pour les fonctionnalités du jeu-service."
      ]
    },
    {
      title: "Game designer en freelance",
      org: "Travail autonome",
      dates: "2023–aujourd'hui",
      points: [
        "Lead designer sur Voracis — un deckbuilder sans tours reposant sur des conditions de déclenchement automatiques et un système de tension par recharge.",
        "Conception et livraison d'un overlay de classement en direct pour un organisateur de tournois Riftbound, branché sur l'API de l'événement sans saisie manuelle entre les rondes.",
        "Conception et livraison de trois jeux Unity : Duck Guns, Pablo May Die (GMTK 2024) et Spaghetti Western (GMTK 2025).",
        "Responsable de bout en bout des mécaniques, de l'interface et des systèmes narratifs sous Unity/C#."
      ]
    },
    {
      title: "Présidence du club de jeux (auparavant vice-présidence)",
      org: "UBC Okanagan",
      dates: "sept. 2024–mai 2026",
      points: [
        "Coordination de rencontres hebdomadaires pour plus de 20 étudiants sur deux années universitaires, de la vice-présidence à la présidence.",
        "Organisation d'événements spéciaux et de programmes publics : planification, logistique et fréquentation."
      ]
    },
    {
      title: "Développement backend",
      org: "Lookout",
      dates: "2025",
      points: [
        "Conception de la suite de tests du système backend au sein d'une équipe de plus de 8 personnes.",
        "Relecture des pull requests et test du code des coéquipiers."
      ]
    }
  ],

  education: [
    {
      title: "Baccalauréat ès arts, informatique",
      org: "UBC Okanagan — mention très honorable, 85 % de moyenne générale",
      dates: "2026",
      points: ["Cours pertinents : développement de jeux, interaction humain-machine, design narratif et fiction dystopique, worldbuilding mythologique, études culturelles, génie logiciel, intelligence artificielle."]
    },
    {
      title: "Diplôme d'études secondaires",
      org: "La Châtaigneraie (Ecolint), Suisse",
      dates: "2023"
    }
  ],

  skills: {
    "Design": ["Équilibrage de systèmes et de mécaniques", "Design de rencontres", "Prototypage rapide", "Playtests et itération", "Conception de campagnes maison et de jeu de rôle"],
    "Narration et worldbuilding": ["Worldbuilding et architecture du lore", "Design narratif", "Conception de panthéons et de factions", "Structure d'arcs sur plusieurs sessions"],
    "Moteurs et outils": ["Unity", "C#", "JavaScript / TypeScript", "Git et GitHub", "Kanka", "Unreal Engine", "Blueprints", "C++"],
    "Playtests et retours joueurs": ["Animation de playtests en direct", "Rapports de retours structurés", "Tri des bugs", "Désamorçage des conflits"],
    "Langues": ["Anglais", "Français", "Espagnol"]
  },

  personal: {
    intro: `Ce qui me concerne et ne trouve pas sa place ailleurs.`,
    items: [
      "Je lis constamment, et je préfère de loin qu'on me demande ce que je lis plutôt que de parler de mon CV.",
      "J'ai vécu dans plus de huit pays, et j'ai fait mes études en Suisse avant le Canada.",
      "Je joue à des jeux de cartes à collectionner en compétition : actuellement Riftbound, où j'ai passé un temps déraisonnable sur des tableurs de matchups.",
      "Je me déplace à vélo électrique par tous les temps, ce qui devient un vrai défi en hiver."
    ]
  }
};
