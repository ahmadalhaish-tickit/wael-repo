# Curriculum

Eight weeks, eight milestones, 39 tasks. Do them in order, top to bottom.

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
