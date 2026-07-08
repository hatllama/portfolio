# Zaki's Portfolio Site

A single site that pulls together your games, tabletop design work, technical
projects, and resume — built so you only ever have to edit **one file** to
update it.

## How it's built

- `index.html` — page structure (you shouldn't need to touch this)
- `style.css` — the visual design (you shouldn't need to touch this)
- `app.js` — reads content.js and builds the page (you shouldn't need to touch this)
- **`content.js`** — **this is the only file you edit.** All your text, links, and image paths live here.
- `images/` — put your screenshots, statblock images, and any other pictures here
- `resume.pdf` — your resume, linked from the "Download Résumé" button

## How to update your content (the 90% case)

1. Open `content.js` in any text editor (even Notepad/TextEdit works, though
   something like VS Code is nicer).
2. Find the section you want to change — it's labeled with a comment like
   `// ---------- FEATURED GAME PROJECTS ----------`.
3. Edit the text between the quotes. Keep the quotes and commas exactly where
   they are.
4. To add a new project/statblock/job, copy an existing `{ ... }` block in
   that list, paste it right after, and edit the copy. Don't forget the comma
   between blocks.
5. To remove one, delete its whole `{ ... }` block (and the comma next to it).
6. Save the file, refresh the page — that's it, no rebuild step.

## Adding images

1. Drop your image file into the `images/` folder (e.g. `images/voracis-card.png`).
2. In `content.js`, find the matching `image: ""` field and change it to
   `image: "images/voracis-card.png"`.
3. Leave `image: ""` empty and the site will just show a clean placeholder
   instead of breaking — so you can fill these in gradually.

Recommended image sizes: project screenshots ~1200×750px, statblock images
~800×600px. Doesn't need to be exact — the site will crop to fit.

## Filling in the placeholders that are still empty

A few things in `content.js` are marked with placeholder text and need your
real content:

- **`tabletopWork.campaigns`** — each campaign is its own block with a
  summary and its own `statblocks` list. Add a new campaign by copying a
  whole campaign block; add a statblock to a campaign by copying an entry
  inside that campaign's `statblocks` list. Statblock images render at the
  same large size as your game screenshots, so use a clean, cropped image
  per statblock rather than a full stat-sheet screenshot.
- **`identity.links`** — put your real GitHub profile URL in
- **`technicalProjects[].codeUrl`** and **`featuredProjects[].codeUrl`** —
  link to the relevant GitHub repos once they're public and have README files
  (see below)

## Before you publish: clean up your GitHub repos

Recruiters will click through from this site into your GitHub. For each
repo you're linking to (TA Assignment System, Puzzle Website, your game
prototypes):

1. Make sure the repo is **public**.
2. Add a short `README.md` to each repo: what it does, the tech stack, a
   screenshot if you have one, and how to run it.
3. Pin your best 3-4 repos on your GitHub profile page (Profile → Customize
   your pins).

## How to publish the site so recruiters can see it (GitHub Pages — free)

This is the easiest option since you already have GitHub, and it gives you a
permanent public URL like `https://yourusername.github.io/portfolio`.

1. Create a new repository on GitHub — call it `portfolio` (or anything you
   like). Make it **public**.
2. Upload all the files in this folder to that repo (drag-and-drop on
   GitHub's web UI works fine, or use `git push` if you're comfortable with
   git).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Click **Save**.
5. Wait about a minute, then refresh that Settings → Pages screen — it'll
   show your live URL at the top (something like
   `https://yourusername.github.io/portfolio/`).
6. That URL is what you put on your resume, LinkedIn, and cover letters.

**Optional — custom domain:** if you buy a domain later (e.g.
`zakipughfradot.com`), you can point it at this same GitHub Pages site under
Settings → Pages → Custom domain. Not necessary to get started.

## Future additions

Because everything is driven by `content.js`, adding a new game, project, or
job later is always the same three steps: copy a block, edit it, save. No
redesign needed — the layout adapts automatically. If you eventually want a
different visual style, that all lives in `style.css` under the `:root`
section at the top (colors and fonts are named variables there).