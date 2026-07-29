# Curriculum

Eight weeks, eight milestones, 39 tasks — plus 3 optional tasks at the end that you
only touch if everything else is finished. Do them in order, top to bottom.

## How to use this file

- **One task at a time.** Each task is one [branch](GLOSSARY.md#branch) and one
  [pull request](GLOSSARY.md#pull-request). The branch name is given at the top of
  the task — use it exactly as written.
- **Tick the boxes as you go.** A task is finished when every "Done when" box is
  genuinely true, not when the code roughly works.
- **Read the rules once** before you start: [CONTRIBUTING.md](../CONTRIBUTING.md).
- **Look words up.** Every technical term in this file is defined in
  [GLOSSARY.md](GLOSSARY.md).

Each task takes about 2 to 4 hours. At 15 to 20 hours a week that is five tasks a
week. If a task takes you twice as long as that, it is not a sign you are slow — it
is a sign you should ask for help sooner.

## Week 4 checkpoint

At the end of week 4, Ahmad decides whether you continue to week 5 or repeat
weeks 3 and 4 with different exercises.

This is not a punishment and it is not a test you can fail once and be finished.
The second half of this project builds directly on the first half. Starting the
backend without solid JavaScript means copying code you do not understand, which
teaches you nothing and wastes both our time. If you need another two weeks on the
basics, taking them is the fast route, not the slow one.

You know the criteria in advance. They are written at the end of milestone 4.

---

# Milestone 1 — Setup, and your first web page

**By the end of this week your page is live on the internet at a URL you can send
to anyone.**

That is unusual — most courses make you wait weeks for that. It is deliberate:
seeing your own work on a real address is the thing that makes the next seven weeks
feel worth it.

### Task 1.1: Set up your computer

**Branch:** `week01/setup-and-first-commit`

**Goal:** Install everything, and go through the whole branch-commit-pull-request
loop once with a change so small that nothing can go wrong with it.

**Done when:**
- [ ] Everything in [SETUP.md](SETUP.md) is done, sections 1 to 11
- [ ] `node -v`, `npm -v` and `git --version` all print version numbers
- [ ] You added an entry to `LEARNING.md` in the same format as the example
- [ ] You opened a pull request containing only that change
- [ ] You told Ahmad

**Learn:** [SETUP.md](SETUP.md) is the only thing you need for this task. Read
[CONTRIBUTING.md](../CONTRIBUTING.md) once as well.

### Task 1.2: Build the page structure

**Branch:** `week01/html-skeleton`

**Goal:** Understand what [HTML](GLOSSARY.md#html) [tags](GLOSSARY.md#tag) are for
by writing the skeleton of the page by hand.

`app/index.html` already has a header, two finished movie cards and a footer. Read
it before you change anything. Then add your own third card by copying the pattern.

**Done when:**
- [ ] You can explain, in your pull request, what `<header>`, `<main>`,
      `<article>` and `<footer>` are for and why they are not all just `<div>`
- [ ] A third movie card exists, with a title, a year, a poster image and a badge
- [ ] The poster image actually loads in the browser — you looked at it
- [ ] Every `<img>` has real `alt` text describing the poster, not `alt=""`
- [ ] The page has no [CSS](GLOSSARY.md#css) written inside it

**Learn:** MDN, [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).
For why the tag names matter: MDN,
[document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

### Task 1.3: Six movies you actually want to watch

**Branch:** `week01/six-cards`

**Goal:** Get repetitive typing out of your system, so that week 2 — where the
computer does the repeating — actually feels like a relief.

**Done when:**
- [ ] Six movie cards in total
- [ ] They are six films or series you genuinely want to watch, not placeholders
- [ ] Every poster URL loads
- [ ] At least two are marked watched and at least two are not
- [ ] The comment `<!-- Task 1.3: add four more cards here -->` is removed, because
      it is done

**Learn:** Nothing new. If you find yourself thinking "there must be a better way
than copying this six times" — yes, there is, and it is week 2.

### Task 1.4: Make it look like something

**Branch:** `week01/css-grid`

**Goal:** Learn what [CSS](GLOSSARY.md#css) does by turning a plain stacked list
into a grid of cards.

`app/styles.css` has the basics done and the card styling deliberately missing.
Read the comment at the bottom of the file.

**Done when:**
- [ ] Cards have space inside them and do not touch each other
- [ ] Cards have rounded corners and a shadow, so they look like cards
- [ ] The grid shows one column on a narrow window and three on a wide one
- [ ] You resized the browser window yourself and watched it change
- [ ] All CSS is in `app/styles.css` — none inside `index.html`
- [ ] Posters are all the same width, so the grid lines up

**Learn:** MDN,
[basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
Keep CSS-Tricks,
[a complete guide to grid](https://css-tricks.com/snippets/css/complete-guide-grid/),
open in a tab — you will use it all week and again in week 8.

### Task 1.5: Put it on the internet

**Branch:** `week01/github-pages`

**Goal:** Have a real URL, in week 1.

GitHub can host any folder of HTML for free. Turn it on in the repository settings,
under Pages, choosing `main` as the source.

**Done when:**
- [ ] GitHub Pages is enabled and the build succeeded (green tick in the Actions
      tab)
- [ ] Opening `https://<ahmad-username>.github.io/watchlist/app/` shows your page
- [ ] The `## Live version` section of `README.md` has the real link, replacing the
      placeholder line
- [ ] You opened the link on your phone
- [ ] You sent it to someone

**Learn:** GitHub,
[getting started with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
Note that a Pages deploy takes a minute or two — if the link 404s immediately,
wait, then reload.

---

# Milestone 2 — Making the computer do the repeating

Your page repeats itself six times. If you want to change how a card looks, you
change it in six places. This week that stops.

**The one idea in this milestone:** the [array](GLOSSARY.md#array) is the truth, and
the page is only a picture of it. Change the array, and the page redraws itself.
Everything in weeks 3 to 8 depends on getting this.

### Task 2.1: JavaScript basics

**Branch:** `week02/exercises-basics`

**Goal:** Practise the five things you will use every day, in small files where
nothing can break.

Create `week02/` with five files, `01-variables.js` through `05-arrays.js`. Run
them with `node week02/01-variables.js`.

**Done when:**
- [ ] `01-variables.js` — a `const`, a `let`, a [string](GLOSSARY.md#string), a
      number, a [boolean](GLOSSARY.md#boolean); each printed with `console.log`
- [ ] `02-functions.js` — a [function](GLOSSARY.md#function) that takes two numbers
      and [returns](GLOSSARY.md#return) their sum, called three times with
      different values
- [ ] `03-conditions.js` — a function that takes a year and returns `"old"` or
      `"new"` using `if`/`else`
- [ ] `04-loops.js` — a `for` loop that prints the numbers 1 to 10, and one that
      prints every item of an array
- [ ] `05-arrays.js` — the same array used with `push`, `filter` and `map`, with a
      `console.log` after each showing what changed
- [ ] You can explain the difference between `const` and `let` in your pull request

**Learn:** [JavaScript.info, the first five chapters of part 1](https://javascript.info/first-steps).
For arrays specifically: MDN,
[array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Task 2.2: Your movies as data

**Branch:** `week02/movies-array`

**Goal:** Separate what your app knows from how it looks.

**Done when:**
- [ ] `app/movies.js` exists and contains `const movies = [ ... ]`
- [ ] Six [objects](GLOSSARY.md#object), each with `title`, `year`, `poster` and
      `watched`
- [ ] `title` is a string, `year` is a number (not `"2021"`), `watched` is a
      boolean (not `"true"`)
- [ ] The same six films as your HTML cards, with the same data
- [ ] `movies.js` is loaded by `index.html` with a `<script>` tag before your other
      scripts
- [ ] `console.log(movies)` in the browser [console](GLOSSARY.md#console) prints the
      six objects

**Learn:** MDN,
[working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

### Task 2.3: Draw the cards from the data

**Branch:** `week02/render-with-loop`

**Goal:** The payoff. Write the card HTML once, and let a loop do it six times.

**Done when:**
- [ ] `app/app.js` has a function that builds all the cards by looping over
      `movies`
- [ ] `index.html` contains zero hardcoded movie cards — the grid starts empty
- [ ] The page looks exactly as it did before, to the eye
- [ ] **Deleting one movie from the array in `movies.js` makes that card disappear,
      with no other change to any file**
- [ ] Changing a title in the array changes it on the page
- [ ] You can explain in your pull request why this is better than six copies

**Learn:** MDN,
[the DOM introduction](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
The bolded box above is the whole point of the task — if that does not work, the
task is not done, however good the page looks.

### Task 2.4: Count them

**Branch:** `week02/count-summary`

**Goal:** Show something the data knows that no single card does.

**Done when:**
- [ ] A line under the header reads like "3 of 6 watched"
- [ ] Both numbers are calculated from the array, not typed
- [ ] Changing a `watched` value in `movies.js` changes the numbers
- [ ] You used `filter` or `reduce`, not a counter you increment by hand — and you
      can say in your PR why that reads better

**Learn:** MDN,
[Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

---

# Milestone 3 — Making the page respond

Until now the page only shows things. This week it listens.

**Known limitation, on purpose:** at the end of this week, refreshing the page will
still lose everything you added. That is expected, not broken. Week 4 fixes it.
Unfinished and broken are different things, and telling them apart is a real skill.

### Task 3.1: Add a movie

**Branch:** `week03/add-form`

**Goal:** Your first [event](GLOSSARY.md#event) — code that runs when the user does
something.

**Done when:**
- [ ] A form with a title field, a year field and an Add button
- [ ] Submitting it adds the movie to the array and the new card appears
- [ ] The page does not reload when you submit — you used `event.preventDefault()`
      and can explain what it prevents
- [ ] The fields are empty again after adding, ready for the next one
- [ ] Submitting with an empty title shows a message and adds nothing
- [ ] New movies start as not watched

**Learn:** MDN,
[introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

### Task 3.2: Delete a movie

**Branch:** `week03/delete-button`

**Goal:** Change the array from a button that belongs to one specific card.

**Done when:**
- [ ] Every card has a delete button
- [ ] Clicking it removes that movie and only that movie
- [ ] Deleting the third card does not delete the wrong one — you tested exactly
      this
- [ ] The "X of Y watched" line updates
- [ ] The array is what changes, and the page redraws from it

**Learn:** MDN,
[Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
again — deleting is filtering out one item. If you reach for `splice`, that also
works; be ready to explain which you chose and why.

### Task 3.3: Mark as watched

**Branch:** `week03/toggle-watched`

**Goal:** Change one property of one object, rather than adding or removing.

**Done when:**
- [ ] Clicking the badge flips `watched` between `true` and `false`
- [ ] The badge text changes to match
- [ ] Watched and unwatched cards look visibly different, not just different text
- [ ] The "X of Y watched" count updates immediately
- [ ] Clicking it twice returns it to where it started

**Learn:** Nothing new. This is the same pattern as delete: change the data, redraw
the page. If it feels repetitive, that is because you now know how this works.

### Task 3.4: Filter the list

**Branch:** `week03/filter-buttons`

**Goal:** Show a subset of your data without destroying the rest of it.

**Done when:**
- [ ] Three buttons: All, Watched, Unwatched
- [ ] Each shows the right cards
- [ ] The selected button looks selected
- [ ] Filtering hides nothing permanently — clicking All brings everything back
- [ ] Adding a movie while a filter is active behaves sensibly, and you decided
      what "sensibly" means and said so in your PR

**Learn:** Nothing new, but this is where you need a second piece of
[state](GLOSSARY.md#state) — the list of movies, plus which filter is active. Keep
the current filter in a variable.

### Task 3.5: Search

**Branch:** `week03/search-box`

**Goal:** Two pieces of state at once. This is the hardest task of the week.

**Done when:**
- [ ] Typing in a search box filters cards as you type, with no button to press
- [ ] Search is case-insensitive — `dune` finds `Dune`
- [ ] **Search and the filter buttons work together: searching while Unwatched is
      selected shows only unwatched movies that match the text**
- [ ] Clearing the box brings back everything the filter allows
- [ ] A search matching nothing shows a message, not an empty page

**Learn:** MDN,
[the input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event),
and MDN,
[String.prototype.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).
The bolded item is the real lesson: combining two conditions instead of fighting
between them.

---

# Milestone 4 — Saving data, and cleaning up

Two jobs. Make the list survive a refresh, and make your code readable — because in
week 5 you have to work inside it again, and in week 6 you have to take parts of it
apart.

### Task 4.1: Save the list

**Branch:** `week04/save-to-localstorage`

**Goal:** Write your data somewhere it outlives the page.

**Done when:**
- [ ] Every change — add, delete, toggle — saves the list to
      [localStorage](GLOSSARY.md#localstorage)
- [ ] It is saved as [JSON](GLOSSARY.md#json) using `JSON.stringify`
- [ ] You found your data in the browser's developer tools, under Application, then
      Local Storage, and looked at it
- [ ] You can explain in your PR why the array has to be converted to text first

**Learn:** MDN,
[Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage),
and MDN,
[JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

### Task 4.2: Load the list

**Branch:** `week04/load-from-localstorage`

**Goal:** Close the loop, and handle the case where there is nothing saved yet.

**Done when:**
- [ ] On load, the list is read from localStorage with `JSON.parse`
- [ ] **You added a movie, refreshed the page, and it was still there**
- [ ] With nothing saved, the six default movies appear instead of an error
- [ ] You tested that second case for real, by clearing localStorage and reloading
- [ ] Deleting everything and refreshing does not bring the defaults back — an
      empty list is a real choice the user made, not missing data

**Learn:** MDN,
[JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
That last box is a genuinely subtle bug, and it catches experienced developers.
Think about how to tell "no data" apart from "empty data".

### Task 4.3: Split the code up

**Branch:** `week04/split-into-functions`

**Goal:** Refactoring: changing how code is organised without changing what it does.

**Done when:**
- [ ] `app/storage.js` — loading and saving only
- [ ] `app/render.js` — drawing the page only
- [ ] `app/app.js` — wiring the two together and handling events
- [ ] No function is longer than about 20 lines
- [ ] Every function name says what it does — `saveMovies`, not `doStuff`
- [ ] **The app behaves exactly as it did before. This task adds no features.**
- [ ] You clicked through every feature afterwards to confirm that

**Learn:** No link. This one is judgement, not knowledge. The test of a good split
is that you can answer "where would I go to change how saving works?" without
thinking. Expect Ahmad to have opinions on your boundaries — that is the review
worth having this week.

### Task 4.4: The empty state

**Branch:** `week04/empty-state`

**Goal:** Handle the case where there is nothing to show. Every real app needs this
and beginner projects always forget it.

**Done when:**
- [ ] Deleting every movie shows a friendly message, not a blank white page
- [ ] The message tells the user what to do next
- [ ] The message disappears as soon as a movie is added
- [ ] The "0 of 0 watched" line does not look broken

**Learn:** No link. Look at an app you use with nothing in it — an empty inbox, an
empty cart — and notice that someone designed that screen on purpose.

---

## Week 4 checkpoint

Stop here. Ahmad reviews the first half before you start the backend.

**What he is checking:**

- Milestones 1 to 4 are merged, all 18 tasks
- Your pull request descriptions explain your code in your own words
- You committed on most days, in small commits, rather than in weekend bursts
- Your learning log has real entries, including things that confused you
- You can answer questions about code you wrote three weeks ago

**If it is a go:** start milestone 5.

**If it is a no-go:** you repeat weeks 3 and 4 with different exercises. This
happens, it is a pacing decision rather than a verdict, and going on without the
basics would waste more of your time than repeating them.

---

# Milestone 5 — Real data from the internet

Your six movies are ones you typed in. This week your app talks to a service that
knows about every film ever made.

### Task 5.1: Talking to a server

**Branch:** `week05/fetch-exercises`

**Goal:** Practise [fetch](GLOSSARY.md#fetch) on something with no
[key](GLOSSARY.md#key) and no setup, before adding it to your real app.

Create `week05/` with four files. Use `https://api.github.com/users/<your-github-username>`
as the [API](GLOSSARY.md#api) — it is public and needs no key. Run them in the
browser [console](GLOSSARY.md#console) or with Node.

**Done when:**
- [ ] `01-fetch-and-log.js` — fetches your GitHub profile and logs the whole
      [response](GLOSSARY.md#response) data
- [ ] `02-read-one-field.js` — logs only your `public_repos` count
- [ ] `03-async-await.js` — the same thing written with `async`/`await` instead of
      `.then()`, and a comment saying which you find easier to read
- [ ] `04-handle-404.js` — fetches a username that does not exist and prints a
      readable message instead of crashing
- [ ] You can explain in your PR what `await` actually waits for

**Learn:** [JavaScript.info, promises and async/await](https://javascript.info/async),
and MDN,
[using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

### Task 5.2: Search real movies

**Branch:** `week05/tmdb-search`

**Goal:** Use a real API with a real key.

Get a free key at `https://www.themoviedb.org/settings/api` — sign up, then request
an API key for personal use.

**This repository is public. Anyone on the internet can read every file in it. A key
committed here is a key you have given away.** Put your key in `app/config.js`,
which is already listed in `.gitignore`. Before every commit this week, run
`git status` and check that `config.js` is not in the list. In week 6 you will move
it somewhere it is actually safe.

**Done when:**
- [ ] A search box queries TMDB's search endpoint and shows the results
- [ ] Each result shows the title, the year and the poster
- [ ] Results with no poster do not show a broken image
- [ ] Your key is in `app/config.js` and `git status` never lists that file
- [ ] The search results area is separate from your watchlist — you have not
      replaced your list, you have added a way to find things

**Learn:** [TMDB search API documentation](https://developer.themoviedb.org/reference/search-movie).
Poster URLs need a size prefix, which the docs explain under images — expect to get
this wrong once.

### Task 5.3: Add from search

**Branch:** `week05/add-from-search`

**Goal:** Join the two halves of your app together.

**Done when:**
- [ ] Clicking a search result adds that movie to your watchlist
- [ ] It arrives with the real title, real year and real poster from TMDB
- [ ] It saves to [localStorage](GLOSSARY.md#localstorage) like any other movie
- [ ] Adding the same film twice either prevents it or warns you — you decided
      which, and said why in your PR
- [ ] Your old manual add form still works, or you removed it deliberately and
      explained why

**Learn:** Nothing new. This task is mostly about shaping data from one place into
the shape your app already expects.

### Task 5.4: When things go wrong

**Branch:** `week05/loading-and-errors`

**Goal:** Handle the unhappy path. Beginner projects assume everything works;
real ones cannot.

**Done when:**
- [ ] A "Loading…" or spinner shows while a search is in flight, and disappears
      after
- [ ] A failed request shows a readable message, not a blank screen and not a
      console error only
- [ ] **You tested it by turning off your wifi and searching**
- [ ] A search with no results says so
- [ ] The app is still usable after an error — you can search again without
      reloading

**Learn:** MDN,
[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).
Note that `fetch` does not throw on a 404 — it only throws when the request could
not be made at all. That surprises everyone, and it is why you check
`response.ok`.

### Task 5.5: Keep the key out of the repository

**Branch:** `week05/gitignore-config`

**Goal:** Make it possible for someone else to run your app without handing them
your key.

**Done when:**
- [ ] `app/config.js` holds your real key and is not committed
- [ ] `app/config.example.js` is committed, with a fake value and a comment saying
      what to do with it
- [ ] `README.md` explains how to get a key and where to put it
- [ ] `git log --all --oneline -- app/config.js` prints nothing, proving the real
      file was never committed at any point
- [ ] You can explain in your PR why this is still not actually secure, and what
      would be

**Learn:** No link needed. The honest answer to that last box: anyone who opens your
deployed site can still read the key out of the browser. `.gitignore` hides it from
your repository, not from your users. Week 6 fixes it properly.

---

# Milestone 6 — TypeScript, and your own server

**This is the hardest week.** Two new things at once: a language that checks your
work, and a program that is not a web page. Expect it to take longer than the
others, and ask for help earlier than you normally would.

### Task 6.1: A project that compiles

**Branch:** `week06/npm-and-typescript`

**Goal:** Get [TypeScript](GLOSSARY.md#typescript) running before writing anything
interesting in it.

**Done when:**
- [ ] `server/` exists with a `package.json` created by `npm init -y`
- [ ] TypeScript is installed as a dev [dependency](GLOSSARY.md#dependency)
- [ ] `server/tsconfig.json` exists
- [ ] `server/src/index.ts` prints one line, and `npm run dev` runs it
- [ ] `node_modules` is not committed — check with `git status`
- [ ] You deliberately assigned a number to a variable typed as a string, saw
      TypeScript complain, and pasted the error into your PR

**Learn:** [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
Use `tsx` or `ts-node` for `npm run dev` so you do not have to compile by hand
every time.

### Task 6.2: Your first endpoint

**Branch:** `week06/express-get-movies`

**Goal:** A [server](GLOSSARY.md#server) that answers a question.

**Done when:**
- [ ] [Express](GLOSSARY.md#express) is installed and the server listens on a port
- [ ] `GET /movies` returns your six movies as [JSON](GLOSSARY.md#json)
- [ ] Opening `http://localhost:3000/movies` in a browser shows the JSON
- [ ] The movies live in an [array](GLOSSARY.md#array) in the server file for now —
      no [database](GLOSSARY.md#database) yet
- [ ] You can explain in your PR what "listening on port 3000" means

**Learn:** [Express, hello world](https://expressjs.com/en/starter/hello-world.html),
and MDN,
[an overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

### Task 6.3: Accept new movies

**Branch:** `week06/express-post-movies`

**Goal:** An [endpoint](GLOSSARY.md#endpoint) that changes something, and that does
not trust what it is given.

**Done when:**
- [ ] `POST /movies` adds a movie to the array and returns the created movie
- [ ] It reads JSON from the request body — you added `express.json()` and know why
- [ ] A request with no title returns status `400` and a message saying what was
      wrong
- [ ] A request with a title that is not text also returns `400`
- [ ] You tested all of this before touching the frontend, with `curl` or Postman or
      the VS Code REST Client extension
- [ ] New movies get an `id`

**Learn:** [Express, routing](https://expressjs.com/en/guide/routing.html). Testing
an endpoint without a UI is a skill worth building now: it separates "my server is
broken" from "my page is broken", and you will otherwise spend hours confusing the
two.

### Task 6.4: Types for your data

**Branch:** `week06/types-for-movie`

**Goal:** Describe the shape of a movie once, and let TypeScript enforce it
everywhere.

**Done when:**
- [ ] `server/src/types.ts` exports exactly this
      [interface](GLOSSARY.md#interface):
      `interface Movie { id: number; title: string; year: number; poster: string; watched: boolean }`
- [ ] Both endpoints use it
- [ ] There is no `any` left in your server code
- [ ] You can explain in your PR the difference between this interface and a check
      you write yourself at runtime — and why you still need the `400` check from
      task 6.3

**Learn:** [TypeScript, object types](https://www.typescriptlang.org/docs/handbook/2/objects.html).
That last box matters: TypeScript checks your code before it runs, and disappears
entirely when it does. It cannot check what a stranger sends your server.

### Task 6.5: The frontend uses your API

**Branch:** `week06/frontend-uses-api`

**Goal:** Two programs talking to each other. This is the moment your project
becomes a real application.

**Done when:**
- [ ] The page loads its list with `fetch` from your own server
- [ ] Adding a movie sends a `POST` to your server
- [ ] `app/storage.js` and every use of localStorage are deleted
- [ ] You handled the CORS error you are about to get, and can explain in your PR
      what CORS is protecting against
- [ ] **Stopping the server makes the page show an error instead of movies, and you
      understand why**
- [ ] Two terminals are now part of your workflow: one for the server, one for
      everything else

**Learn:** MDN,
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) — read the first two
sections only, then use the `cors` package. The bolded box is the lesson: your data
now lives somewhere else, and something else can be down.

### Task 6.6: Move the key to the server

**Branch:** `week06/move-key-server-side`

**Goal:** The reason backends exist.

**Done when:**
- [ ] `GET /search?q=` on your server calls TMDB and returns the results
- [ ] The key is read from an [environment variable](GLOSSARY.md#environment-variable)
      in `server/.env`
- [ ] `server/.env` is not committed; `server/.env.example` is, with a fake value
- [ ] The frontend calls your `/search`, never TMDB directly
- [ ] `app/config.js` and `app/config.example.js` are deleted
- [ ] **You searched the whole repository for your key and found nothing** — run
      `git grep -i <first-6-characters-of-your-key>` and get no results
- [ ] You opened your site's Network tab, searched, and confirmed the key does not
      appear in any request the browser makes

**Learn:** [The dotenv package](https://github.com/motdotla/dotenv#readme).

Then read this once more, now that you have done it: this is why backends exist.
Not for speed, and not for tidiness — because some things must never reach the
browser. Every login system, every payment, every private API key in every company
you will ever work for exists on a server for exactly this reason.

---

# Milestone 7 — A real database

An array in your server lives in memory and dies when the server stops. This week
your data lives on disk.

### Task 7.1: Set up the database

**Branch:** `week07/prisma-init`

**Goal:** A [schema](GLOSSARY.md#schema), a [migration](GLOSSARY.md#migration), and
a real [SQLite](GLOSSARY.md#sqlite) file.

**Done when:**
- [ ] [Prisma](GLOSSARY.md#prisma) is installed and `npx prisma init` has been run
- [ ] `server/prisma/schema.prisma` has a `Movie` model matching your `Movie`
      interface exactly — same field names, same types
- [ ] `npx prisma migrate dev` ran and created a migration file
- [ ] `dev.db` exists and is **not** committed
- [ ] The migration file **is** committed, and you can explain in your PR why the
      migration is committed but the database is not
- [ ] You opened `npx prisma studio` and saw your empty table

**Learn:** [Prisma, start from scratch with SQLite](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-sqlite).

### Task 7.2: Read from the database

**Branch:** `week07/read-from-db`

**Goal:** Replace the array with a real [query](GLOSSARY.md#query).

**Done when:**
- [ ] `GET /movies` reads with `prisma.movie.findMany()`
- [ ] The hardcoded array is gone from your server code
- [ ] With an empty database the endpoint returns `[]`, not an error
- [ ] The frontend shows the empty state you built in task 4.4 — it still works,
      unchanged, against completely different plumbing

**Learn:** [Prisma Client, CRUD](https://www.prisma.io/docs/orm/prisma-client/queries/crud).

### Task 7.3: Write to the database

**Branch:** `week07/write-to-db`

**Goal:** The point of the whole week.

**Done when:**
- [ ] `POST /movies` writes with `prisma.movie.create()`
- [ ] Your `400` validation from task 6.3 still runs before the write
- [ ] **You added a movie, stopped the server, started it again, refreshed the
      page, and your movie was still there**
- [ ] You can explain the difference between memory and disk in your PR, in one
      sentence

**Learn:** No new link. If the bolded box works, you have understood this week.

### Task 7.4: Delete and update

**Branch:** `week07/delete-and-update`

**Goal:** Finish the set of four operations every application performs.

**Done when:**
- [ ] `DELETE /movies/:id` removes one movie
- [ ] `PATCH /movies/:id` changes `watched`
- [ ] Your delete button and watched badge use them
- [ ] Deleting an id that does not exist returns `404`, not a crash
- [ ] You can explain in your PR why `DELETE` and `PATCH` exist as separate methods
      instead of doing everything with `POST`

**Learn:** [Prisma, delete and update](https://www.prisma.io/docs/orm/prisma-client/queries/crud#delete),
and MDN,
[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

### Task 7.5: Seed the database

**Branch:** `week07/seed-script`

**Goal:** Make a fresh copy of the project usable in one command.

**Done when:**
- [ ] `server/prisma/seed.ts` inserts your original six movies
- [ ] `npm run seed` runs it
- [ ] Running it twice does not create twelve movies — you handled that, and said
      how in your PR
- [ ] `README.md` documents the command
- [ ] You deleted `dev.db`, re-ran the migration and the seed, and got a working app
      back

**Learn:** [Prisma, seeding](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding).
This is what lets a new developer — or you, on a new laptop — go from clone to
running in two minutes.

---

# Milestone 8 — Put it on the internet

Your app works on your laptop. This week it works for everyone.

### Task 8.1: Stop hardcoding localhost

**Branch:** `week08/env-config`

**Goal:** Same code, different settings, depending on where it runs.

**Done when:**
- [ ] The frontend reads the API address from one place, not `localhost:3000`
      scattered through the files
- [ ] Changing that one value makes the whole app point somewhere else
- [ ] The server reads its port from an
      [environment variable](GLOSSARY.md#environment-variable), with a sensible
      default
- [ ] The app still works locally after all this

**Learn:** No link. The principle has a name — configuration should live outside
code — and you have already met it twice, with your API key and your `.env`.

### Task 8.2: Deploy the server

**Branch:** `week08/deploy-backend`

**Goal:** Your API on a real address.

**Done when:**
- [ ] The server is deployed on Render's free tier
- [ ] `DATABASE_URL` and your TMDB key are set as environment variables in Render's
      dashboard, not in any committed file
- [ ] Opening `https://<your-app>.onrender.com/movies` in a browser returns JSON
- [ ] Your build and start commands are documented in `README.md`

**Note:** a free Render server goes to sleep when nobody uses it, so the first load
after a quiet period takes about 30 seconds. That is not your bug, and it is worth
knowing before you panic about it.

**Learn:** [Render, deploy a Node Express app](https://render.com/docs/deploy-node-express-app).

### Task 8.3: Deploy the frontend

**Branch:** `week08/deploy-frontend`

**Goal:** The whole thing, live, end to end.

**Done when:**
- [ ] GitHub Pages serves your frontend, pointed at your live API
- [ ] CORS on the server allows your Pages address specifically, not `*` — and you
      can explain in your PR why `*` is worse
- [ ] Adding a movie on the live site persists — you checked from a different device
- [ ] The live link in `README.md` is updated
- [ ] Someone else opened it and it worked for them

**Learn:** [Express CORS options](https://expressjs.com/en/resources/middleware/cors.html#configuration-options).

### Task 8.4: Write the README properly

**Branch:** `week08/readme-screenshots`

**Goal:** This repository is now a portfolio piece. Make it read like one.

**Done when:**
- [ ] `README.md` opens with what the app does and the live link
- [ ] Two screenshots, embedded and actually visible on GitHub
- [ ] A short list of what it is built with
- [ ] Instructions a stranger can follow from clone to running, including the seed
      step and the environment variables
- [ ] A short "what I would build next" section
- [ ] **You followed your own instructions from a fresh clone in a different folder
      and they worked**

**Learn:** No link. Read the README of any project you have used and liked, and
notice what it tells you in the first five lines.

### Task 8.5: Look back

**Branch:** `week08/retrospective`

**Goal:** Notice how far you came, while it is still fresh.

**Done when:**
- [ ] `RETROSPECTIVE.md` exists and answers: which week was hardest and why; what
      you are proudest of; what you would do differently; what you want to learn
      next
- [ ] You read your own `LEARNING.md` from week 1 before writing it
- [ ] It is honest rather than polished

**Learn:** No link. Eight weeks ago you had not opened a terminal. Read your first
log entry, then look at your live site.

---

# Optional — Accounts

**This is not part of the eight weeks.** Do it only if milestones 1 to 8 are
finished and merged. Skipping it costs you nothing, and finishing eight weeks with a
working deployed app is the goal.

### Task S.1: Sign up

**Branch:** `stretch/signup`

**Goal:** Store a password without ever storing the password.

**Done when:**
- [ ] `POST /signup` stores an email and a `bcrypt` hash
- [ ] The plain password is never written to the database or to any log
- [ ] A duplicate email returns `400`
- [ ] You explain in your PR, in your own words, why a hash and not encryption

**Learn:** [The bcrypt package](https://github.com/kelektiv/node.bcrypt.js#readme).

### Task S.2: Log in

**Branch:** `stretch/login-jwt`

**Goal:** Prove who someone is on later requests, without asking again each time.

**Done when:**
- [ ] `POST /login` returns a token when the password is right
- [ ] A wrong password returns `401` — with the same message as an unknown email,
      and you can say why in your PR
- [ ] The token is signed with a secret from `.env`
- [ ] Frontend stores the token and sends it on every request

**Learn:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme).

### Task S.3: Your own list

**Branch:** `stretch/per-user-movies`

**Goal:** Data that belongs to someone.

**Done when:**
- [ ] The `Movie` model has a relation to a `User`, added by a migration
- [ ] `GET /movies` returns only the logged-in user's movies
- [ ] **A request with someone else's id cannot read or delete your movies — you
      tried it**
- [ ] Requests with no token return `401`

**Learn:** [Prisma, relations](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations).
That bolded box is a real vulnerability class with a name — insecure direct object
reference — and it ships in production software constantly. Testing for it yourself
is the habit worth keeping.

---

# Resources

Five places. Use the right one for the job rather than searching blindly.

| Where | When to use it |
|---|---|
| [MDN](https://developer.mozilla.org/) | How something officially works. The reference you will still be using in ten years. |
| [JavaScript.info](https://javascript.info/) | Learning a concept properly, from the start, with exercises. Better than MDN for learning; worse for looking up. |
| [freeCodeCamp](https://www.freecodecamp.org/learn) | Extra practice when a topic has not clicked yet. |
| [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | From week 6 on. |
| [Prisma docs](https://www.prisma.io/docs/getting-started) | Week 7. Unusually good documentation — read it rather than guessing. |

A note on searching: paste the **exact** error message into your search, minus
anything specific to your computer like file paths. Someone has had your error
before. Stack Overflow answers from 2013 are often still correct for HTML and CSS,
and often wrong for JavaScript tooling — check the date.
