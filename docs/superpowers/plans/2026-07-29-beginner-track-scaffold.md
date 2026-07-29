# Watchlist Beginner-Track Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete `watchlist` repository scaffold — curriculum, setup guide, glossary, mentor guide, workflow rules, PR template, and week-1 starter files — so a student with no programming background can start on day one and the mentor can monitor him through pull requests.

**Architecture:** A single public repository holding four kinds of content, each in its own file with one responsibility: **docs for the student** (`SETUP.md`, `GLOSSARY.md`, `CURRICULUM.md`), **docs for the mentor** (`MENTOR.md`), **workflow rules** (`CONTRIBUTING.md`, PR template), and **code the student edits** (`app/`, `week01/`). Nothing generated here is code the student must understand before week 1 — the only executable files are `app/index.html`, `app/styles.css`, and a mentor-only validator script.

**Tech Stack:** Markdown, HTML5, CSS3, Node.js 20 (validator script only, `node:test` + `node:assert`). No dependencies, no build step. Later student work introduces TypeScript, Express, and Prisma, but none of that is created by this plan.

## Global Constraints

- Repository root: `/Users/ahmadalhaich/Documents/Claude/Projects/watchlist`. Git already initialised, default branch `main`, one commit present (the design spec).
- Repository will be **public**. No file created by this plan may contain an API key, token, password, or the mentor's or student's personal contact details.
- All student-facing prose in **simple English**: short sentences, no idioms, no unexplained jargon. Every technical term used in a student-facing doc must have an entry in `docs/GLOSSARY.md`.
- Student-facing docs address the student as "you". `docs/MENTOR.md` is the only file addressed to the mentor.
- Task branch names in the curriculum follow exactly `weekNN/kebab-case-name` where `NN` is `01`–`08`, or `stretch/kebab-case-name`. Every branch name in the repo is unique.
- Every curriculum task has exactly these four labelled parts: `Branch`, `Goal`, `Done when` (a checkbox list of acceptance criteria), `Learn` (one or two named resources with URLs — never "search online").
- The student's own name is never hardcoded. Use the placeholder `<your-name>` where he must fill something in.
- Commit messages: lowercase, present tense, no `feat:`/`chore:` prefixes — the student will copy this style, and conventional-commit prefixes are noise he does not need in week 1.
- Author all commits as `Ahmad Alhaich <ahmad.alhaish@tickit.co>`.
- Do **not** run `gh repo create`, invite collaborators, or set branch protection. Task 9 prepares those commands for the mentor to review and approve; it does not execute them.

---

## File Structure

| File | Responsibility |
|---|---|
| `README.md` | What this repo is, who it is for, where to start. First thing anyone sees. |
| `CONTRIBUTING.md` | The seven working rules: branches, commits, PRs, the AI policy, when to ask for help. |
| `LEARNING.md` | Student's daily log, with one worked example entry to establish the format. |
| `.gitignore` | Blocks `node_modules`, `.env`, `config.js`, `.DS_Store`, editor folders. |
| `docs/CURRICULUM.md` | The eight milestones and all 39 tasks. The spine of the whole project. |
| `docs/SETUP.md` | Zero-to-first-commit: Node, VS Code, Git, GitHub, SSH-free HTTPS auth. |
| `docs/GLOSSARY.md` | Plain-English definition of every term used in student-facing docs. |
| `docs/MENTOR.md` | Mentor-only: weekly 20-minute routine, red/green flags, per-week review notes, week-4 gate script, validator usage. |
| `.github/pull_request_template.md` | Forces the three PR questions: what, why, what confused you. |
| `app/index.html` | Week-1 starter. Two finished movie cards, four to be added by the student. |
| `app/styles.css` | Week-1 starter. Base typography and colours; the grid is deliberately missing. |
| `week01/README.md` | What the numbered exercise files are and how to run them. |
| `week01/01-*.html` … `05-*.html` | Five standalone HTML/CSS exercises. |
| `tools/check-curriculum.mjs` | Mentor-only validator: branch-name format, uniqueness, required task parts, glossary coverage. |
| `tools/check-curriculum.test.mjs` | Tests for the validator. |

Decomposition rationale: the four doc audiences never change together, so they are four files. The validator is separated from the curriculum it checks so the curriculum stays pure prose. `week01/` exercises are standalone files with no shared CSS — a beginner must be able to open any one of them alone and have it work.

---

### Task 1: Repository foundation

Establishes the repo's front door and the rules everything else references. `CONTRIBUTING.md` must exist before the curriculum, because every curriculum task points at its branch and PR rules.

**Files:**
- Create: `README.md`
- Create: `CONTRIBUTING.md`
- Create: `LEARNING.md`
- Create: `.gitignore`

**Interfaces:**
- Consumes: nothing (first task).
- Produces: `CONTRIBUTING.md` anchor headings `## Branches`, `## Commits`, `## Pull requests`, `## Using AI and tutorials`, `## When you are stuck` — later tasks link to these exact anchors as `../CONTRIBUTING.md#branches` etc. `README.md` link targets `docs/SETUP.md`, `docs/CURRICULUM.md`, `CONTRIBUTING.md`.

- [ ] **Step 1: Create `.gitignore`**

```gitignore
# dependencies
node_modules/

# secrets — never commit these
.env
.env.*
config.js

# build output
dist/
*.tsbuildinfo

# database (week 7)
*.db
*.db-journal

# editor and OS
.DS_Store
.vscode/
.idea/
```

- [ ] **Step 2: Create `CONTRIBUTING.md`**

Write the seven rules with these exact headings, in this order: `## Branches`, `## Commits`, `## Pull requests`, `## Using AI and tutorials`, `## Your learning log`, `## When you are stuck`, `## What I will look at`.

Required content per section:

- **Branches** — one task, one branch. Branch name is given at the top of every task in the curriculum; use it exactly. Never commit to `main`; you do not have permission to, and that is on purpose. Show the two commands: `git checkout main && git pull`, then `git checkout -b week01/html-skeleton`.
- **Commits** — small and often. Lowercase, present tense, describe the change not the file: `add delete button to movie card`, not `updated app.js`. Aim for a commit every time something new works, not one commit per day.
- **Pull requests** — open one when the task's "Done when" boxes are all ticked. Fill in the template. Then tell Ahmad. Do not merge your own PR until he approves it.
- **Using AI and tutorials** — state verbatim: "You can use ChatGPT, Claude, YouTube, or any tutorial you like. There is one rule: in your pull request, you must explain in your own words what each change does and why. If you cannot explain a line, delete it. This is not a trap — it is the whole point. Code you cannot explain is code you cannot fix."
- **Your learning log** — three lines in `LEARNING.md` every day you work: what you did, what confused you, what you want to ask. Confusion is not weakness; an empty log is the only wrong answer.
- **When you are stuck** — 30 minutes stuck is normal and is where learning happens. Two hours stuck without asking is wasted time. When you ask, say what you expected, what happened, and what you already tried.
- **What I will look at** — honest list: your PR descriptions before your code, your learning log, and which days you committed. Consistency beats speed.

- [ ] **Step 3: Create `LEARNING.md`**

Header explaining the format, then one worked example entry dated `2026-08-03` showing the three lines filled in realistically (including a genuine confusion, e.g. "I do not understand why the poster image did not show until I fixed the file path"), then a `---` and the heading `## Your entries start here`.

- [ ] **Step 4: Create `README.md`**

Sections: what this project is (one paragraph, plain English — you are learning to build a website that keeps a list of movies you want to watch); what you will have at the end (a working app on the internet, a public code history, and JavaScript + TypeScript basics); **Start here** (numbered: 1. read `docs/SETUP.md` and do everything in it, 2. read `CONTRIBUTING.md`, 3. open `docs/CURRICULUM.md` and start Task 1.1); how to run the app (open `app/index.html` in your browser — no build step needed until week 6); a `## Live version` section containing the literal line `Not deployed yet. You will add the link here in Task 1.5.`

- [ ] **Step 5: Verify links resolve**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -oE '\]\([^)#]+\.md[^)]*\)' README.md CONTRIBUTING.md | sed 's/.*](\([^)#]*\).*/\1/' | sort -u
```
Expected: only `docs/SETUP.md`, `docs/CURRICULUM.md`, `CONTRIBUTING.md`, `LEARNING.md`. Files not yet created (`docs/*`) are expected to be missing at this point and are created in Tasks 2–5; the final link check in Task 9 is the gate that they exist.

- [ ] **Step 6: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add README.md CONTRIBUTING.md LEARNING.md .gitignore
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add readme, contributing rules, learning log and gitignore"
```

---

### Task 2: Glossary

Built before the curriculum and setup guide so those two can be written against a known vocabulary, and so the Task 9 coverage check has something to check.

**Files:**
- Create: `docs/GLOSSARY.md`

**Interfaces:**
- Consumes: nothing.
- Produces: every entry is an `### ` heading containing the exact term in lowercase, e.g. `### api`. `tools/check-curriculum.mjs` (Task 8) parses these headings to verify coverage.

- [ ] **Step 1: Create `docs/GLOSSARY.md` with these entries, alphabetically**

One short paragraph each, plus a concrete one-line example. No entry may use an undefined term from this same list without linking to it.

Required terms: `api`, `argument`, `array`, `async`, `attribute`, `backend`, `boolean`, `branch`, `browser`, `bug`, `cli`, `class (css)`, `client`, `commit`, `console`, `css`, `database`, `dependency`, `deploy`, `dom`, `element`, `endpoint`, `environment variable`, `event`, `express`, `fetch`, `frontend`, `function`, `git`, `github`, `html`, `http`, `interface (typescript)`, `javascript`, `json`, `key (api key)`, `localstorage`, `merge`, `migration`, `node.js`, `npm`, `null`, `object`, `parameter`, `prisma`, `promise`, `pull request`, `query`, `repository`, `request`, `response`, `return`, `schema`, `server`, `sqlite`, `state`, `string`, `tag (html)`, `terminal`, `type`, `typescript`, `variable`.

Style rule for this file: explain what it *is* and why he cares, not the textbook definition. Example for `api`: "An API is a way for one program to ask another program for information. When your page asks TMDB 'what movies are called Dune?', it is using TMDB's API. You will use one in week 5 and build your own in week 6."

- [ ] **Step 2: Verify every entry has a heading, a definition, and an example**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && awk '/^### /{t=$0; c=0; next} /^$/{next} {c++} /^### /{if(c<2) print "THIN: " t}' docs/GLOSSARY.md; grep -c '^### ' docs/GLOSSARY.md
```
Expected: no `THIN:` lines, and a count of at least `62`.

- [ ] **Step 3: Verify no entry is defined twice**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep '^### ' docs/GLOSSARY.md | sort | uniq -d
```
Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add docs/GLOSSARY.md
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add plain-english glossary"
```

---

### Task 3: Setup guide

The single highest-risk document in the repo: if the student cannot get through it, nothing else happens. It must assume he has never opened a terminal.

**Files:**
- Create: `docs/SETUP.md`

**Interfaces:**
- Consumes: `CONTRIBUTING.md#branches` (linked at the end), `docs/GLOSSARY.md` (linked on first use of `terminal`, `git`, `repository`, `commit`).
- Produces: the branch name `week01/setup-and-first-commit`, which curriculum Task 1.1 reuses verbatim.

- [ ] **Step 1: Write the guide, macOS and Windows in parallel**

Every step gives both operating systems. Numbered sections:

1. **What you are installing and why** — one line each for VS Code (where you write), Node.js (runs JavaScript outside the browser), Git (saves the history of your work), GitHub (stores that history online so Ahmad can see it).
2. **Install VS Code** — download URL `https://code.visualstudio.com/`, then install the "Live Server" extension by Ritwick Dey with why: it reloads your page automatically when you save.
3. **Install Node.js** — `https://nodejs.org/` LTS version. Explain LTS in one line.
4. **Open the terminal** — macOS: Cmd+Space, type Terminal. Windows: Start, type "Git Bash" (installed with Git in the next step, so read step 5 first). Explain that the terminal is where you type commands instead of clicking.
5. **Install Git** — macOS: `xcode-select --install`, or `https://git-scm.com/downloads`. Windows: `https://git-scm.com/downloads`, and during install accept the default options.
6. **Check everything installed** — `node -v`, `npm -v`, `git --version`, with a note that seeing a version number means it worked and "command not found" means it did not, plus what to do in that case (restart the terminal first; it only reads the list of installed programs when it starts).
7. **Create your GitHub account** — `https://github.com/signup`. Use a professional username; this is a public portfolio a future employer may read. Then send the username to Ahmad so he can invite you.
8. **Tell Git who you are** — `git config --global user.name "<your-name>"` and `git config --global user.email "<your-github-email>"`, and why: every commit is signed with this.
9. **Get the code onto your computer** — `git clone https://github.com/<ahmad-username>/watchlist.git`, then `cd watchlist`. Explain what cloning is. Note that GitHub will ask for a Personal Access Token, not your password, the first time you push, with the URL `https://github.com/settings/tokens` and instructions to create a classic token with the `repo` scope, and the warning: paste it as the password when Git asks, and store it in your password manager — it is shown once and never again.
10. **Open the project in VS Code** — `code .`, or File → Open Folder.
11. **Your first branch, commit, and pull request** — the full sequence with expected output after each command:
```bash
git checkout -b week01/setup-and-first-commit
# edit LEARNING.md — add today's entry
git add LEARNING.md
git commit -m "add my first learning log entry"
git push -u origin week01/setup-and-first-commit
```
Then: open the repo on GitHub, click "Compare & pull request", fill in the template, click "Create pull request", tell Ahmad.
12. **What to do when something goes wrong** — three real failures with fixes: `fatal: not a git repository` (you are in the wrong folder — run `pwd`), `Permission denied` / `Authentication failed` (your token, not your password — see step 9), `Updates were rejected` (someone changed `main`; run `git checkout main && git pull`).

Close with: you have now done the thing every professional developer does every day. Everything after this is the same loop with more interesting code in the middle.

- [ ] **Step 2: Verify every command block is copy-pasteable**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -nE '^\$ |^> ' docs/SETUP.md
```
Expected: no output. A leading `$` or `>` inside a command block breaks copy-paste, which is exactly the failure a beginner cannot diagnose.

- [ ] **Step 3: Verify no unexplained placeholder leaks**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -oE '<[a-z-]+>' docs/SETUP.md | sort -u
```
Expected: only `<your-name>`, `<your-github-email>`, `<ahmad-username>`. Each must be explained in the surrounding text as something to replace.

- [ ] **Step 4: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add docs/SETUP.md
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add setup guide for mac and windows"
```

---

### Task 4: Curriculum, weeks 1–4 (frontend half)

**Files:**
- Create: `docs/CURRICULUM.md`

**Interfaces:**
- Consumes: `CONTRIBUTING.md` anchors, `docs/GLOSSARY.md`, `docs/SETUP.md`.
- Produces: the exact branch names below, referenced by `tools/check-curriculum.mjs` tests in Task 8 and by the student in every PR. File-path decisions here (`app/movies.js`, `app/app.js`, `app/storage.js`, `app/render.js`) are consumed by Task 5's week 6 tasks.

- [ ] **Step 1: Write the file header**

Title, then: how to use this file (one task at a time, top to bottom, tick the boxes as you go, one branch and one pull request per task), a link to `CONTRIBUTING.md`, an estimate note (each task is about 2–4 hours; five tasks a week is the target at 15–20 hours a week), and a visible **Week 4 checkpoint** warning stating plainly: at the end of week 4 Ahmad decides whether to continue to the backend or repeat weeks 3–4. This is not a punishment; the second half only works if the first half is solid.

- [ ] **Step 2: Write milestone 1 — Setup and your first web page**

Milestone intro: by Friday your page is live on the internet at a URL you can send to anyone.

| Task | Branch | Deliverable |
|---|---|---|
| 1.1 | `week01/setup-and-first-commit` | Everything in `docs/SETUP.md` done; first PR opened, containing only a `LEARNING.md` entry |
| 1.2 | `week01/html-skeleton` | `app/index.html`: page title, `<header>` with the app name, `<main>`, `<footer>`; one movie card with title, year, poster `<img>`, and a "watched" badge |
| 1.3 | `week01/six-cards` | Six cards total, six real movies you actually want to watch, each with a working poster image URL |
| 1.4 | `week01/css-grid` | `app/styles.css`: cards look like cards (padding, rounded corners, shadow); one column on a phone, three on a laptop |
| 1.5 | `week01/github-pages` | GitHub Pages enabled; the live URL replaces the placeholder line in `README.md` |

Each task gets the four required parts. Concrete acceptance criteria — for 1.4, `Done when`: cards have space inside them and do not touch each other; the page has three columns when the window is wide and one when it is narrow; you resized the window yourself and watched it change; no CSS is written inside `index.html`. `Learn` for 1.4: MDN "Basic concepts of grid layout" (`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout`) and CSS-Tricks "A Complete Guide to Grid" (`https://css-tricks.com/snippets/css/complete-guide-grid/`).

- [ ] **Step 3: Write milestone 2 — JavaScript fundamentals**

Intro: your page currently repeats itself six times. This week the computer does the repeating.

| Task | Branch | Deliverable |
|---|---|---|
| 2.1 | `week02/exercises-basics` | `week02/01`–`05`: variables and types, a function that returns a value, `if`/`else`, a `for` loop, array methods `push`/`filter`/`map` |
| 2.2 | `week02/movies-array` | `app/movies.js`: `const movies = [...]` — six objects with `title`, `year`, `poster`, `watched` |
| 2.3 | `week02/render-with-loop` | `app/app.js` builds all six cards by looping over `movies`; `index.html` contains zero hardcoded cards |
| 2.4 | `week02/count-summary` | A line reading "3 of 6 watched", calculated from the array — not typed by hand |

`Done when` for 2.3 must include: deleting a movie from the array in `movies.js` makes that card disappear from the page with no other change. That single criterion is what proves he understands data-driven rendering.

- [ ] **Step 4: Write milestone 3 — Making the page respond**

Intro: until now the page only shows things. This week it listens.

| Task | Branch | Deliverable |
|---|---|---|
| 3.1 | `week03/add-form` | A form with title and year; submitting adds a movie and the page updates. Empty title shows a message and adds nothing |
| 3.2 | `week03/delete-button` | Each card has a delete button that removes that movie only |
| 3.3 | `week03/toggle-watched` | Clicking the badge flips watched/unwatched, and the "X of Y" line updates |
| 3.4 | `week03/filter-buttons` | All / Watched / Unwatched buttons; the active one looks active |
| 3.5 | `week03/search-box` | Typing filters by title as you type, case-insensitive, and works together with the filter buttons |

`Done when` for 3.5 must include: search and filter work at the same time — searching while "Unwatched" is selected shows only unwatched movies matching the text. Combining two pieces of state is the real lesson.

State a known limitation explicitly at the end of the milestone: refreshing the page still loses everything. That is expected. Week 4 fixes it. Naming the flaw before he finds it teaches him that "unfinished" and "broken" are different things.

- [ ] **Step 5: Write milestone 4 — Saving data, and cleaning up**

Intro: two jobs this week. Make the list survive a refresh, and make your code readable — because in week 5 you have to work inside it again.

| Task | Branch | Deliverable |
|---|---|---|
| 4.1 | `week04/save-to-localstorage` | Every change writes the list to `localStorage` as JSON |
| 4.2 | `week04/load-from-localstorage` | On load, read from `localStorage`; if nothing is saved, fall back to the six defaults |
| 4.3 | `week04/split-into-functions` | `app.js` split into `app/storage.js` (load/save), `app/render.js` (drawing), `app/app.js` (wiring). No function longer than about 20 lines |
| 4.4 | `week04/empty-state` | Deleting every movie shows a friendly message, not a blank page |

`Done when` for 4.3 must include: the app behaves exactly as it did before — this change adds no features. Explain refactoring in one line: changing how code is organised without changing what it does.

Close the milestone with the **Week 4 checkpoint** block: what Ahmad checks (all four milestones merged, PR descriptions that explain the code in your own words, commits on most days rather than all at once), and what happens either way, stated without threat.

- [ ] **Step 6: Verify branch-name format and uniqueness so far**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -oE '`week0[1-8]/[a-z0-9-]+`' docs/CURRICULUM.md | tr -d '`' | sort | uniq -c | sort -rn | head -5
```
Expected: 18 distinct branch names, every count exactly `1`.

- [ ] **Step 7: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add docs/CURRICULUM.md
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add curriculum milestones 1 to 4"
```

---

### Task 5: Curriculum, weeks 5–8 and the stretch goal (backend half)

Appends to the same file. Split from Task 4 because the frontend half is independently reviewable and shippable: if the mentor rejects the backend pacing, weeks 1–4 still stand.

**Files:**
- Modify: `docs/CURRICULUM.md` (append after milestone 4)

**Interfaces:**
- Consumes: file paths produced by Task 4 (`app/movies.js`, `app/app.js`, `app/storage.js`, `app/render.js`).
- Produces: `server/` layout — `server/src/index.ts`, `server/src/types.ts`, `server/prisma/schema.prisma`, `server/.env`, `server/.env.example` — plus the `Movie` interface shape `{ id: number; title: string; year: number; poster: string; watched: boolean }`, used identically in tasks 6.4, 7.1, and the stretch tasks.

- [ ] **Step 1: Write milestone 5 — Real data from the internet**

| Task | Branch | Deliverable |
|---|---|---|
| 5.1 | `week05/fetch-exercises` | `week05/01`–`04` using a keyless API (`https://api.github.com/users/<your-github-username>`): fetch and log, read one field, `async`/`await`, handle a 404 |
| 5.2 | `week05/tmdb-search` | A search box that queries TMDB and shows the results as a list |
| 5.3 | `week05/add-from-search` | Clicking a search result adds it to your watchlist with its real poster |
| 5.4 | `week05/loading-and-errors` | "Loading…" while waiting; a readable message when the request fails. Test it by turning off your wifi |
| 5.5 | `week05/gitignore-config` | Key lives in `app/config.js`, which is gitignored; `app/config.example.js` is committed with a fake value and a comment explaining what to do |

For 5.2, include getting a free TMDB key (`https://www.themoviedb.org/settings/api`) and this warning verbatim: "This repository is public. Anyone on the internet can read every file in it. A key committed here is a key you have given away. `config.js` is in `.gitignore` for that reason — check with `git status` that it is not listed before you commit. In week 6 you will move the key somewhere it is actually safe."

- [ ] **Step 2: Write milestone 6 — TypeScript and your own server**

Intro, honest: this is the hardest week. Two new things at once — a language that checks your work, and a program that is not a web page. Expect it to take longer than the others.

| Task | Branch | Deliverable |
|---|---|---|
| 6.1 | `week06/npm-and-typescript` | `server/` with `package.json`, `tsconfig.json`, `src/index.ts` that compiles and prints a line |
| 6.2 | `week06/express-get-movies` | `GET /movies` returns the six movies as JSON from an array in memory |
| 6.3 | `week06/express-post-movies` | `POST /movies` adds a movie and returns it; a request with no title returns status 400 |
| 6.4 | `week06/types-for-movie` | `server/src/types.ts` exports `interface Movie { id: number; title: string; year: number; poster: string; watched: boolean }`, used everywhere |
| 6.5 | `week06/frontend-uses-api` | The page loads its list from your server with `fetch`; `storage.js` and `localStorage` are deleted |
| 6.6 | `week06/move-key-server-side` | The server exposes `GET /search?q=`; it calls TMDB with the key from `server/.env`; the frontend never sees the key. `config.js` is deleted, `.env.example` is committed |

`Done when` for 6.6 must include: you searched the whole repository for your key and it appears in no committed file — run `git grep -i <first-6-chars-of-your-key>` and get no results. Then state the lesson in one line: this is why backends exist. Not for speed, and not for tidiness — because some things must never reach the browser.

`Done when` for 6.5 must include: stopping the server makes the page show an error instead of movies, and you understand why. Two programs now, not one.

- [ ] **Step 3: Write milestone 7 — A real database**

| Task | Branch | Deliverable |
|---|---|---|
| 7.1 | `week07/prisma-init` | Prisma + SQLite installed; a `Movie` model matching the `Movie` interface; the first migration runs |
| 7.2 | `week07/read-from-db` | `GET /movies` reads from the database |
| 7.3 | `week07/write-to-db` | `POST /movies` writes to the database; restarting the server keeps your data |
| 7.4 | `week07/delete-and-update` | `DELETE /movies/:id` and `PATCH /movies/:id` for watched; the frontend buttons use them |
| 7.5 | `week07/seed-script` | `npm run seed` fills an empty database with your original six movies |

`Done when` for 7.3 must include: you stopped the server, started it again, refreshed the page, and your movies were still there. Add the one-line contrast: an array lives in memory and dies with the program; a database lives on disk.

- [ ] **Step 4: Write milestone 8 — Put it on the internet**

| Task | Branch | Deliverable |
|---|---|---|
| 8.1 | `week08/env-config` | The API address is read from configuration, not hardcoded as `localhost` |
| 8.2 | `week08/deploy-backend` | Server deployed on Render's free tier with its environment variables set; the live `/movies` URL returns JSON in a browser |
| 8.3 | `week08/deploy-frontend` | GitHub Pages talks to the live server; CORS configured so the browser allows it |
| 8.4 | `week08/readme-screenshots` | `README.md` rewritten: what it does, two screenshots, live link, how to run it locally, what you would build next |
| 8.5 | `week08/retrospective` | `RETROSPECTIVE.md`: hardest week, proudest thing, what you would do differently, what you want to learn next |

For 8.2 include the free-tier gotcha as a `Note`: a free Render server sleeps when nobody uses it, so the first load after a quiet period takes about 30 seconds. That is not your bug.

- [ ] **Step 5: Write the stretch milestone — Accounts**

Open with, plainly: this is optional and not part of the eight weeks. Do it only if weeks 1–8 are finished and merged. Skipping it costs you nothing.

| Task | Branch | Deliverable |
|---|---|---|
| S.1 | `stretch/signup` | `POST /signup` stores an email and a bcrypt-hashed password. Explain in your PR why the plain password is never stored |
| S.2 | `stretch/login-jwt` | `POST /login` returns a JWT; a wrong password returns 401 |
| S.3 | `stretch/per-user-movies` | Movies belong to a user; `GET /movies` returns only the logged-in user's list |

- [ ] **Step 6: Append a resources appendix**

One short list, each entry with a one-line note on when to use it: MDN (`https://developer.mozilla.org/`) for how something officially works; JavaScript.info (`https://javascript.info/`) for learning a concept properly; freeCodeCamp (`https://www.freecodecamp.org/learn`) for practice; the TypeScript handbook (`https://www.typescriptlang.org/docs/handbook/intro.html`) from week 6; Prisma's getting-started guide (`https://www.prisma.io/docs/getting-started`) for week 7.

- [ ] **Step 7: Verify the full task and branch inventory**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -oE '`(week0[1-8]|stretch)/[a-z0-9-]+`' docs/CURRICULUM.md | tr -d '`' | sort -u | wc -l && grep -c '^### Task ' docs/CURRICULUM.md
```
Expected: `39` unique branch names, and a `### Task ` count of `39`.

- [ ] **Step 8: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add docs/CURRICULUM.md
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add curriculum milestones 5 to 8 and stretch goal"
```

---

### Task 6: Mentor guide and pull request template

**Files:**
- Create: `docs/MENTOR.md`
- Create: `.github/pull_request_template.md`

**Interfaces:**
- Consumes: milestone structure and branch names from Tasks 4–5; `tools/check-curriculum.mjs` from Task 8 (documented here, built there).
- Produces: nothing consumed downstream.

- [ ] **Step 1: Create `.github/pull_request_template.md`**

Three headings the student fills in — `## What I changed`, `## Why I did it this way`, `## What confused me` — each with an italic one-line prompt, plus a short checklist: I opened the page and used the feature myself; I ticked every "Done when" box in the task; I can explain every line I wrote; I updated `LEARNING.md`. Add a final italic line: leaving "What confused me" empty is fine only if nothing confused you — which is rare and worth saying out loud.

- [ ] **Step 2: Write `docs/MENTOR.md`**

Sections:

1. **The 20-minute weekly routine** — in order, with rationale: read PR descriptions before any code (you are measuring understanding, not output); skim the week's `LEARNING.md` entries; look at the commit calendar on his GitHub profile; leave at least one comment asking *why* he chose something; approve or request changes with one concrete next action.
2. **Red flags** — large flawless PRs with vague descriptions (generated, not understood); one big commit on Sunday night (cramming); `LEARNING.md` untouched for a week; never asks a question; the same conceptual mistake three weeks after correction. For each, the diagnostic question to ask in the PR rather than the accusation to make — e.g. "walk me through what line 34 does and what happens if `movies` is empty".
3. **Green flags** — specific questions that include what he already tried; PR descriptions that admit confusion; going back to clean up old code unprompted; shipping something small that was not on the list.
4. **Per-week review notes** — for each of the eight milestones, the two or three things worth checking that week and the one concept he must actually hold. Week 2: does he understand that the array is the source of truth and the page is only a picture of it? Week 3: can he explain the difference between changing the array and changing the page? Week 4: is the refactor genuinely behaviour-preserving? Week 5: does he handle the failure case, or only the happy path? Week 6: does he understand *why* the key moved, or did he just follow steps? Week 7: can he say what a migration is? Week 8: can a stranger run it from the README alone?
5. **The week 4 gate** — the go/no-go criteria, and how to deliver a no-go: it is a pacing decision, not a verdict; name the specific gap and repeat weeks 3–4 with different exercises.
6. **If he goes quiet** — 3 days with no commits is normal life; 7 days is a conversation. Ask what is blocking rather than why he is behind. Most beginners stall on one specific error and are embarrassed to say so.
7. **GitHub setup commands** — the exact commands for repo creation, collaborator invite, and branch protection, marked as `run these yourself`, with an explanation of what each flag does. Include the note that branch protection on a public repo is free, and that requiring one approving review is what makes the PR-per-task workflow real rather than optional.
8. **Checking the curriculum after edits** — `node --run check` (or `node tools/check-curriculum.mjs`) validates branch names and glossary coverage after any edit to `docs/CURRICULUM.md`.

- [ ] **Step 3: Verify the mentor guide is not addressed to the student**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -cE '\byou (will|must|should) (write|build|add|create)\b' docs/MENTOR.md
```
Expected: `0`. Student-facing instructions in the mentor guide mean the audiences have blurred; rewrite those sentences to refer to "he".

- [ ] **Step 4: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add docs/MENTOR.md .github/pull_request_template.md
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add mentor guide and pull request template"
```

---

### Task 7: Week-1 starter files and exercises

The only code in this scaffold. `app/` must be deliberately incomplete: the student's first real PR has to be work, not decoration.

**Files:**
- Create: `app/index.html`
- Create: `app/styles.css`
- Create: `week01/README.md`
- Create: `week01/01-headings-and-text.html`
- Create: `week01/02-images-and-links.html`
- Create: `week01/03-colors-and-fonts.html`
- Create: `week01/04-box-model.html`
- Create: `week01/05-your-own-page.html`

**Interfaces:**
- Consumes: curriculum tasks 1.2–1.4, which specify exactly what the student adds to these files.
- Produces: `app/index.html` must contain the element `<div class="movie-grid">` and exactly two `<article class="movie-card">` children — curriculum task 1.3 asks for four more, and task 1.4 styles `.movie-grid`.

- [ ] **Step 1: Create `app/index.html`**

Valid HTML5: `<!doctype html>`, `lang="en"`, charset and viewport meta, `<title>My Watchlist</title>`, link to `styles.css`. Body: `<header>` with `<h1>My Watchlist</h1>`; `<main>` containing `<div class="movie-grid">` with exactly two complete `<article class="movie-card">` elements (poster `<img>` with real `alt` text, `<h2>` title, `<p class="year">`, `<span class="badge">Watched</span>` on one and `Not watched` on the other); `<footer>` with `<p>Built by &lt;your-name&gt; while learning to code.</p>`.

Use two well-known films with stable poster URLs from `https://image.tmdb.org/t/p/w300/...`, and add an HTML comment above the grid: `<!-- Task 1.3: add four more cards here. Copy the pattern above. -->`.

Comment density rule for these files: comment the *why*, never the syntax. `<!-- Task 1.3: ... -->` earns its place; `<!-- this is a heading -->` does not.

- [ ] **Step 2: Create `app/styles.css`**

Base only: a `:root` block with three custom properties (`--bg`, `--text`, `--accent`), a system font stack, `box-sizing: border-box`, body background and colour, and simple `header`/`footer` styling. Then this comment block and nothing after it:

```css
/* Task 1.4: the cards below have no styling yet, and .movie-grid has no layout.
   Give .movie-card padding, rounded corners and a shadow.
   Make .movie-grid one column on a phone and three on a laptop.
   Everything you need: https://css-tricks.com/snippets/css/complete-guide-grid/ */
```

There must be **no** `.movie-card` or `.movie-grid` rule in the file. The gap is the assignment.

- [ ] **Step 3: Create the five `week01/` exercises**

Each is a single self-contained `.html` file that opens and works on its own — no shared stylesheet, because a beginner who breaks one file must not break the other four. Each starts with a comment block: what you are practising, what to do (3–5 numbered instructions), and one link. Each has visible working example content above the part he must change, so nothing starts from a blank page.

- `01-headings-and-text.html` — h1–h3, paragraphs, `<strong>`, `<em>`, lists. Task: write a short page about a film you like using every tag shown.
- `02-images-and-links.html` — `<img>` with `src`/`alt`/`width`, `<a>` including `target="_blank"`. Task: add three film posters, each linking to its IMDb page. Note in the comment why `alt` matters: it is what a blind visitor's screen reader reads aloud, and what shows when an image fails to load.
- `03-colors-and-fonts.html` — colour by name, hex, and custom property; `font-family`, `font-size`, `font-weight`, `line-height`. Task: restyle the page with your own three-colour palette.
- `04-box-model.html` — margin, padding, border, `box-sizing`, with a diagram-in-HTML showing each layer. Task: make three boxes sit side by side with even space between them.
- `05-your-own-page.html` — near-empty, with only a comment block. Task: build a one-page profile of yourself using everything from 01–04. Note: this one has no right answer.

- [ ] **Step 4: Create `week01/README.md`**

What these files are (practice, thrown away — nothing here is used by the app), how to open one (right-click in VS Code → Open with Live Server, or double-click the file), the order to do them in, and the reassurance that breaking one of these files costs nothing.

- [ ] **Step 5: Verify the starter HTML is valid and structured as specified**

Run:
```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && grep -c '<article class="movie-card">' app/index.html && grep -c 'movie-grid\|movie-card' app/styles.css && for f in week01/*.html app/index.html; do head -1 "$f" | grep -qi '<!doctype html>' || echo "MISSING DOCTYPE: $f"; done
```
Expected: `2` article elements; `0` matches in `styles.css` (proving the grid gap exists); no `MISSING DOCTYPE` lines.

- [ ] **Step 6: Verify the page actually renders**

Open `app/index.html` in a browser and confirm by eye: two cards visible, both posters load, the badges read differently on each card, and the layout is unstyled — a single stacked column. An unstyled page here is correct: it is the "before" the student turns into the "after" in task 1.4.

- [ ] **Step 7: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add app week01
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add week 1 starter app and html css exercises"
```

---

### Task 8: Curriculum validator

Guards the two invariants that break silently and expensively: a duplicated or malformed branch name (the student pushes to the wrong branch and the PR is unreviewable) and a term used in student docs that the glossary never defines (he is stuck with no way out). Mentor-only tooling; the student never runs it.

**Files:**
- Create: `tools/check-curriculum.mjs`
- Create: `tools/check-curriculum.test.mjs`
- Create: `package.json`

**Interfaces:**
- Consumes: `docs/CURRICULUM.md` (task headings `### Task N.N`, branch names in backticks, the four required labels), `docs/GLOSSARY.md` (`### term` headings).
- Produces: `checkCurriculum(curriculumText, glossaryText)` returning `{ errors: string[], taskCount: number, branchCount: number }`. Empty `errors` means valid. Exit code 1 on any error.

- [ ] **Step 1: Write the failing tests**

```javascript
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { checkCurriculum } from './check-curriculum.mjs'

const validTask = (n, branch) => `### Task ${n}: Something\n\n` +
  `**Branch:** \`${branch}\`\n\n**Goal:** Do a thing.\n\n` +
  `**Done when:**\n- [ ] it works\n\n**Learn:** [MDN](https://developer.mozilla.org/)\n`

test('accepts a well-formed curriculum', () => {
  const result = checkCurriculum(validTask('1.1', 'week01/first'), '### html\nThe language of pages.\n')
  assert.deepEqual(result.errors, [])
  assert.equal(result.taskCount, 1)
  assert.equal(result.branchCount, 1)
})

test('rejects a duplicate branch name', () => {
  const text = validTask('1.1', 'week01/same') + validTask('1.2', 'week01/same')
  const { errors } = checkCurriculum(text, '')
  assert.equal(errors.length, 1)
  assert.match(errors[0], /duplicate branch/i)
  assert.match(errors[0], /week01\/same/)
})

test('rejects a malformed branch name', () => {
  const { errors } = checkCurriculum(validTask('1.1', 'Week1/Bad_Name'), '')
  assert.ok(errors.some(e => /branch name/i.test(e)))
})

test('rejects a task missing a required label', () => {
  const text = '### Task 1.1: Something\n\n**Branch:** `week01/x`\n\n**Goal:** Do a thing.\n'
  const { errors } = checkCurriculum(text, '')
  assert.ok(errors.some(e => /Done when/.test(e)))
  assert.ok(errors.some(e => /Learn/.test(e)))
})

test('reports a term used in the curriculum but missing from the glossary', () => {
  const text = validTask('1.1', 'week01/x').replace('Do a thing.', 'Use localStorage here.')
  const { errors } = checkCurriculum(text, '### html\nThe language of pages.\n')
  assert.ok(errors.some(e => /localstorage/i.test(e) && /glossary/i.test(e)))
})

test('is case-insensitive when matching glossary terms', () => {
  const text = validTask('1.1', 'week01/x').replace('Do a thing.', 'Use LocalStorage here.')
  const { errors } = checkCurriculum(text, '### localstorage\nBrowser storage.\n')
  assert.deepEqual(errors, [])
})
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && node --test tools/`
Expected: FAIL — cannot find module `./check-curriculum.mjs`.

- [ ] **Step 3: Write `tools/check-curriculum.mjs`**

Export `checkCurriculum(curriculumText, glossaryText)`:
- Split into task blocks on `/^### Task /m`.
- For each block: require `**Branch:**` with a backticked name matching `/^(week0[1-8]|stretch)\/[a-z0-9]+(-[a-z0-9]+)*$/`; require the literal labels `**Goal:**`, `**Done when:**`, `**Learn:**`. Push one error per missing or malformed part, each naming the task number.
- Collect branch names; push a `duplicate branch` error naming the offender for any seen twice.
- Glossary coverage: build a lowercase `Set` from `### ` headings in `glossaryText`. Check the curriculum for a fixed watchlist of terms that must be defined before use — `localStorage`, `DOM`, `API`, `fetch`, `async`, `JSON`, `endpoint`, `migration`, `schema`, `interface`, `promise`, `environment variable` — and report any that the curriculum uses but the glossary omits. A fixed watchlist, not every capitalised word: an open-ended scan would produce noise the mentor learns to ignore, and a check that is ignored is worse than no check.
- Return `{ errors, taskCount, branchCount }`.
- When run directly (`import.meta.url` matches `process.argv[1]`), read both docs from disk relative to the script, print each error with a leading `✗` or print `✓ curriculum valid — N tasks, N branches`, and `process.exit(errors.length ? 1 : 0)`.

- [ ] **Step 4: Run the tests and confirm they pass**

Run: `cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && node --test tools/`
Expected: PASS, 6/6.

- [ ] **Step 5: Create `package.json`**

```json
{
  "name": "watchlist-track",
  "private": true,
  "type": "module",
  "scripts": {
    "check": "node tools/check-curriculum.mjs",
    "test": "node --test tools/"
  }
}
```

- [ ] **Step 6: Run the validator against the real curriculum**

Run: `cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && node --run check`
Expected: `✓ curriculum valid — 39 tasks, 39 branches`. If it reports errors, the curriculum is wrong, not the validator — fix `docs/CURRICULUM.md` and re-run until clean.

- [ ] **Step 7: Commit**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
git add tools package.json
git -c user.name="Ahmad Alhaich" -c user.email="ahmad.alhaish@tickit.co" commit -m "add curriculum validator with tests"
```

---

### Task 9: Final verification and GitHub handoff

Whole-repo checks that only make sense once every file exists, plus the GitHub commands **written down for the mentor, not executed**.

**Files:**
- Modify: `docs/MENTOR.md` (only if a check reveals a gap)
- Create: nothing

**Interfaces:**
- Consumes: every file from Tasks 1–8.
- Produces: nothing.

- [ ] **Step 1: Verify every internal markdown link resolves**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
for f in $(git ls-files '*.md'); do
  d=$(dirname "$f")
  grep -oE '\]\([^):]+\)' "$f" | sed 's/](\(.*\))/\1/' | grep -v '^#' | while read -r l; do
    t="${l%%#*}"; [ -z "$t" ] && continue
    [ -e "$d/$t" ] || echo "BROKEN: $f -> $l"
  done
done
```
Expected: no `BROKEN:` lines.

- [ ] **Step 2: Verify no secret-shaped string was committed**

```bash
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && git grep -nEi '(api[_-]?key|secret|token|password)\s*[:=]\s*["'"'"'][^"'"'"']{8,}' -- . ':!docs/superpowers'
```
Expected: no output. The repo is public; this check is the last gate before it becomes so.

- [ ] **Step 3: Verify the tree matches the plan**

Run: `cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && git ls-files`
Expected exactly: `.github/pull_request_template.md`, `.gitignore`, `CONTRIBUTING.md`, `LEARNING.md`, `README.md`, `app/index.html`, `app/styles.css`, `docs/CURRICULUM.md`, `docs/GLOSSARY.md`, `docs/MENTOR.md`, `docs/SETUP.md`, `docs/superpowers/plans/2026-07-29-beginner-track-scaffold.md`, `docs/superpowers/specs/2026-07-29-beginner-track-design.md`, `package.json`, `tools/check-curriculum.mjs`, `tools/check-curriculum.test.mjs`, `week01/01-headings-and-text.html` … `week01/05-your-own-page.html`, `week01/README.md`.

- [ ] **Step 4: Run the full check suite**

Run: `cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist && node --run test && node --run check`
Expected: 6/6 tests pass, `✓ curriculum valid — 39 tasks, 39 branches`.

- [ ] **Step 5: Read `docs/SETUP.md` and `docs/CURRICULUM.md` task 1.1 as the student**

Fresh-eyes pass, no tooling: could someone who has never opened a terminal follow these top to bottom without asking a question? Every place the answer is no is a place he stalls in week 1 and possibly quits. Fix inline.

- [ ] **Step 6: Present the GitHub commands to the mentor for approval — do not run them**

```bash
# 1. Create the public repo and push
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
gh repo create watchlist --public --source=. --remote=origin --push

# 2. Invite the student as a collaborator with write access
gh api -X PUT repos/ahmadalhaish-tickit/watchlist/collaborators/<student-github-username> -f permission=push

# 3. Protect main: no direct pushes, one approving review required
gh api -X PUT repos/ahmadalhaish-tickit/watchlist/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  -F "required_pull_request_reviews[required_approving_review_count]=1" \
  -F "required_pull_request_reviews[dismiss_stale_reviews]=true" \
  -F "enforce_admins=false" \
  -F "required_status_checks=null" \
  -F "restrictions=null"

# 4. Enable GitHub Pages from main (needed for task 1.5)
gh api -X POST repos/ahmadalhaish-tickit/watchlist/pages \
  -H "Accept: application/vnd.github+json" \
  -F "source[branch]=main" -F "source[path]=/"
```

State plainly what each does and that step 2 needs the student's GitHub username. `enforce_admins=false` is deliberate: the mentor keeps the ability to push a fix directly while the student does not. Wait for explicit approval before running anything in this step.

---

## Self-Review

**Spec coverage.** Every spec section maps to a task: repo structure → Tasks 1–8; the eight milestones → Tasks 4–5; the week-4 gate → Task 4 step 5 and Task 6 step 2; workflow rules incl. the AI policy → Task 1 step 2; mentor monitoring → Task 6; the ten listed deliverables → Tasks 1–7 (`RETROSPECTIVE.md` is student-authored in curriculum task 8.5, correctly not scaffolded); GitHub setup as a confirmed mentor action → Task 9 step 6; public-repo consequence → `.gitignore` (Task 1), the verbatim warning in curriculum 5.5 (Task 5), and the secret scan (Task 9 step 2).

**Gap found and fixed.** The spec's structure listed `week01/…week05/`, but only `week01/` exercises are scaffolded here — weeks 2 and 5 exercises are created by the student in curriculum tasks 2.1 and 5.1, and weeks 3 and 4 have no exercise folder at all. Task 7's file list and the Task 9 step 3 expected tree now reflect what actually gets built, rather than the spec's aspirational tree.

**Placeholder scan.** No TBD/TODO. Every doc task specifies required headings and content; every code step gives literal content or an exact structural specification; every verification step gives a runnable command and its expected output. The one intentional in-repo placeholder, `<your-name>`, is a Global Constraint with a defined meaning, and `<student-github-username>` in Task 9 is a value only the mentor holds.

**Type consistency.** `checkCurriculum(curriculumText, glossaryText) → { errors, taskCount, branchCount }` is identical in Task 8's tests, implementation, and interface block. The `Movie` shape `{ id, title, year, poster, watched }` is identical in Task 5's interface block, curriculum task 6.4, and 7.1. Branch-name regex `^(week0[1-8]|stretch)/[a-z0-9]+(-[a-z0-9]+)*$` matches the Global Constraint and every branch name in Tasks 4–5. `app/index.html` producing `.movie-grid` + two `.movie-card` elements matches curriculum tasks 1.3 and 1.4 and the Task 7 step 5 assertion. The task and branch count `39` is consistent across Task 5 step 7, Task 8 step 6, and Task 9 step 4.
