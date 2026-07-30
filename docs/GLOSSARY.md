# Glossary

Every technical word used anywhere in this project, in plain English.

These are not textbook definitions. Each one tells you what the thing *is* and why
you care about it. If you meet a word in a task that is not in here, tell Ahmad —
that is a missing entry, not a gap in you.

---

### api

A way for one program to ask another program for information. When your page asks
TMDB "what movies are called Dune?", it is using TMDB's API.

Example: you will use TMDB's API in week 5, then build your own API in week 6.

### argument

The actual value you hand to a [function](#function) when you call it. The
function's own name for that value is its [parameter](#parameter).

Example: in `addMovie("Dune")`, the argument is `"Dune"`.

### array

An ordered list of things. Written with square brackets. The things can be
[strings](#string), numbers, or [objects](#object).

Example: `const movies = ["Dune", "Heat", "Alien"]` — and `movies[0]` is `"Dune"`,
because arrays start counting at zero.

### async

Short for asynchronous: something that does not finish immediately, so your program
carries on and deals with the result later. Anything that talks to the internet is
async, because the internet takes time.

Example: `async function loadMovies()` marks a function that has to wait for
something. You will meet this in week 5.

### attribute

Extra information written inside an HTML [tag](#tag) to configure it.

Example: in `<img src="poster.jpg" alt="Dune poster">`, both `src` and `alt` are
attributes.

### backend

The part of an application that the user never sees: the [server](#server) and the
[database](#database). It runs on a computer somewhere else, not in the visitor's
browser.

Example: you build your backend in weeks 6 and 7. Its main job turns out to be
holding secrets the browser must never see.

### boolean

A value that is either `true` or `false`. Nothing else.

Example: `watched: true` on a movie. Booleans are how code makes decisions.

### branch

A separate line of work in [git](#git). You make a branch, change things on it, and
the main version stays untouched until your work is reviewed.

Example: `git checkout -b week01/css-grid` creates and switches to a branch.

### browser

The program that displays websites: Chrome, Safari, Firefox, Edge. It reads your
[HTML](#html), [CSS](#css) and [JavaScript](#javascript) and turns them into
something a person can look at.

Example: your entire project until week 6 runs only in the browser.

### bug

Code that does something other than what you intended. Not a moral failure — an
ordinary, hourly part of the job.

Example: a card that shows the wrong year is a bug. Professionals write bugs all
day; they are just faster at finding them.

### class

A label you put on an HTML [element](#element) so you can style it with
[CSS](#css). Many elements can share the same class.

Example: `<article class="movie-card">` can be styled by the CSS rule
`.movie-card { padding: 16px; }`. (The word "class" means something different in
some other programming languages. In this project it always means the HTML/CSS
kind.)

### cli

Command-line interface: a program you use by typing commands instead of clicking
buttons. You run it in the [terminal](#terminal).

Example: `git` is a CLI.

### client

Whoever is asking. In web terms, the browser is the client and it asks the
[server](#server) for things.

Example: your page is the client; the Express app you build in week 6 is the
server.

### column

One field of a database [table](#table) — a single piece of information that every
[row](#row) has, with one [type](#type).

Example: your `movies` table has `title`, `year` and `watched` columns. Every movie
in it has all three.

### commit

A saved point in your project's history, with a message describing what changed.
Commits are permanent and you can always go back to one.

Example: `git commit -m "add delete button to movie card"`.

### console

The place where messages from your code appear. In the browser, open it with F12
(or Cmd+Option+I on a Mac) and click "Console". It is also where errors show up.

Example: `console.log(movies)` prints your array there so you can see what is
actually in it. This is the single most useful debugging tool you have.

### css

Cascading Style Sheets: the language that controls how a page looks — colours,
sizes, spacing, layout. [HTML](#html) says what things are; CSS says how they look.

Example: `.movie-card { border-radius: 8px; }` gives cards rounded corners.

### database

A program built for storing data on disk in an organised way, so it survives after
your program stops running.

Example: you add [SQLite](#sqlite) in week 7. Before that, closing the server
loses everything.

### dependency

Code written by someone else that your project needs in order to run. Dependencies
are listed in `package.json` and installed by [npm](#npm) into `node_modules`.

Example: [Express](#express) becomes a dependency of your server in week 6.

### deploy

To put your code on a computer on the internet so other people can use it.

Example: in week 8 you deploy your app and get a link you can send to anyone.

### dom

Document Object Model: the browser's live picture of your page, as a structure your
JavaScript can read and change. When you change the DOM, the page changes
immediately.

Example: `document.querySelector("h1")` reaches into the DOM and finds your
heading. Week 3 is entirely about this.

### element

One thing on a page, created by an HTML [tag](#tag) — a heading, a paragraph, an
image, a button.

Example: `<h2>Dune</h2>` is a heading element.

### endpoint

One specific address on a [server](#server) that does one specific thing.

Example: your server will have a `/movies` endpoint that returns your list, and a
`/search` endpoint that searches TMDB.

### environment variable

A setting stored outside your code, so that the same code can behave differently on
your laptop and on the internet. This is also where secrets go, because these
values are never committed.

Example: your TMDB [key](#key) lives in a `.env` file as an environment variable
from week 6 onwards.

### event

Something that happens in the browser that your code can react to: a click, a key
press, a form being submitted.

Example: `button.addEventListener("click", deleteMovie)` says "when this is
clicked, run `deleteMovie`".

### express

A small, extremely common library for building a [server](#server) in
[Node.js](#nodejs). It handles the boring parts of listening for
[requests](#request).

Example: you build your API with Express in week 6.

### fetch

The built-in JavaScript function for asking another computer for data over the
internet.

Example: `const response = await fetch("/movies")` asks your own server for the
movie list.

### frontend

The part of an application that runs in the visitor's browser and that they
actually see and click: your HTML, CSS and JavaScript.

Example: weeks 1 to 5 are entirely frontend.

### function

A named block of code that does one job, which you can run whenever you want
instead of writing it out again. Some functions hand a value back — see
[return](#return).

Example: `function renderCards(movies) { ... }` draws all the cards. You call it
by writing `renderCards(movies)`.

### git

A program that records the history of your project. It remembers every change, who
made it, and when — and lets you undo, compare, and work on separate
[branches](#branch).

Example: `git` runs on your computer. [GitHub](#github) is a website that stores a
copy online.

### github

A website that stores [git](#git) repositories online, so your work is backed up,
shareable, and reviewable. This is where Ahmad reads your code.

Example: your [pull requests](#pull-request) happen on GitHub.

### html

HyperText Markup Language: the language that describes what is on a page —
headings, paragraphs, images, forms. It is structure, not styling.

Example: `<h1>My Watchlist</h1>` says "this is the main heading".

### http

The set of rules browsers and servers use to talk to each other. Every request has
a method (`GET` to read, `POST` to create, `PATCH` to change, `DELETE` to remove)
and every [response](#response) has a status number.

Example: `200` means it worked, `400` means your request was wrong, `404` means not
found, `500` means the server broke.

### interface

In [TypeScript](#typescript), a description of the shape a piece of data must have.
It is a contract: get the shape wrong and TypeScript tells you before you run the
code.

Example: `interface Movie { title: string; year: number; watched: boolean }`.

### javascript

The programming language that runs in the browser, and the only one that does. It
is what makes a page *do* things rather than just show things. With
[Node.js](#nodejs) it also runs on servers.

Example: everything in weeks 2 to 5 is JavaScript.

### join

A [SQL](#sql) [query](#query) that combines two [tables](#table) by matching a value
they share. It is how a database answers questions that live in more than one place.

Example: your `movies` table stores a director's id, and your `directors` table
stores their name. A join is what lets one query return the film and the name
together.

### json

JavaScript Object Notation: a text format for data, used everywhere on the web
because both humans and programs can read it. It looks almost exactly like a
JavaScript [object](#object).

Example: `{"title": "Dune", "year": 2021}` is JSON. APIs send and receive it.

### key

Short for API key: a long secret string that identifies you to a service like
TMDB. Anyone who has your key can use your account.

Example: a key committed to a public repository has been given away to the entire
internet. This is why week 6 moves it to the [server](#server).

### localstorage

A small amount of storage inside the visitor's own browser. Whatever you put there
survives a page refresh and a computer restart, but it lives only on that one
computer, in that one browser.

Example: week 4 uses `localStorage` so your list survives a refresh. Week 6
replaces it with a real server, because `localStorage` cannot be shared between
devices.

### merge

To bring the changes from one [branch](#branch) into another — usually your
finished work into `main`, after review.

Example: Ahmad merges your [pull request](#pull-request) once he has approved it.

### migration

A recorded change to the shape of your [database](#database) — adding a table,
adding a column. Migrations are files, kept in order, so the same change can be
replayed on any copy of the database.

Example: adding a `rating` column to your movies is a migration. You meet these in
week 7.

### node.js

A program that runs [JavaScript](#javascript) outside the browser — on your
computer, or on a server. It is what lets you use one language for both halves of
this project.

Example: check it is installed with `node -v`.

### npm

Node Package Manager: the tool that installs [dependencies](#dependency) and runs
your project's scripts. It arrives with [Node.js](#nodejs).

Example: `npm install express` downloads Express into your project.

### null

A deliberate "nothing here". Not zero, not an empty string — an intentional
absence of a value.

Example: a movie with no poster might have `poster: null`. Code that forgets to
check for `null` is one of the most common sources of [bugs](#bug) in any language.

### object

A collection of named values, grouped because they describe one thing. Written with
curly brackets. Each name is a property.

Example: `{ title: "Dune", year: 2021, watched: false }` is one movie object, and
`movie.title` reads its title.

### parameter

The name a [function](#function) uses for a value it is given. The value you
actually pass in is the [argument](#argument).

Example: in `function addMovie(title) { ... }`, `title` is the parameter.

### prisma

A tool that lets you read and write a [database](#database) using normal
JavaScript, instead of writing [queries](#query) by hand. It also manages your
[migrations](#migration).

Example: `prisma.movie.findMany()` gets every movie. You add Prisma in week 7.

### promise

JavaScript's way of representing a result that is not ready yet. A promise either
succeeds with a value or fails with an error, later.

Example: [fetch](#fetch) returns a promise. `await` is how you wait for one.

### pull request

A request to [merge](#merge) your [branch](#branch) into `main`, opened on
[GitHub](#github), where someone can read your changes and comment on them before
they go in. Often shortened to PR.

Example: every task in this project ends with one pull request.

### query

A question you ask a [database](#database). Also, the text a user types into a
search box.

Example: "give me every movie where watched is false" is a query.

### repository

A project tracked by [git](#git) — all its files plus its entire history. Often
shortened to repo.

Example: `watchlist` is a repository. It exists on your computer and on
[GitHub](#github).

### request

A message from a [client](#client) asking a [server](#server) for something.

Example: your page sends a request to `/movies` and gets your list back.

### response

What a [server](#server) sends back after a [request](#request). It carries an
[HTTP](#http) status number and usually some data, often as [JSON](#json).

Example: a response with status `200` and a list of six movies.

### return

What a [function](#function) hands back to whoever called it. A function without a
`return` hands back nothing.

Example: `function countWatched(movies) { return movies.filter(m => m.watched).length }`
hands back a number you can then put on the page.

### row

One record in a database [table](#table) — one whole thing, with a value in every
[column](#column).

Example: one film is one row in your `movies` table. Adding a film adds a row;
deleting it removes that row.

### schema

The definition of the shape of your data — which tables exist, which columns they
have, and what type each column is.

Example: `schema.prisma` in week 7 defines your `Movie` table.

### server

A program that waits for [requests](#request) and answers them. Also, loosely, the
computer that program runs on.

Example: you write your first server in week 6. Until then, your project has no
server at all — the browser does everything.

### sql

Structured Query Language: the language databases speak. You ask for what you want
rather than describing how to fetch it, which is why it looks unlike JavaScript.

Example: `SELECT title FROM movies WHERE watched = 0` asks for the titles of every
unwatched film. You write SQL by hand in task 7.0, then [Prisma](#prisma) writes it
for you for the rest of week 7.

### sqlite

A [database](#database) that is just a single file on disk, with nothing to install
and nothing to configure. Ideal for learning, and used in real production software
too.

Example: your whole week-7 database will be one file called `dev.db`.

### state

The data your application currently holds — the truth that the screen is a picture
of. Change the state, redraw the screen.

Example: your `movies` array is your state. The cards on screen are only a picture
of it. Getting this distinction is the main lesson of week 2.

### string

Text, in code. Written inside quotes.

Example: `"Dune"` is a string. `2021` is a number, but `"2021"` is a string — and
that difference will confuse you at least once.

### table

A collection of [rows](#row) of the same kind of thing in a [database](#database),
with named [columns](#column). A spreadsheet is a useful first picture of it.

Example: a `movies` table, where each row is one film.

### tag

The bracketed markers that create HTML [elements](#element). Most come in pairs:
an opening tag and a closing tag.

Example: `<p>` opens a paragraph and `</p>` closes it.

### terminal

A window where you type commands instead of clicking. Called Terminal on a Mac and
Git Bash on Windows.

Example: you type `git status` there. It is far less frightening than it looks —
you will end up using six commands, over and over.

### type

What kind of value something is: a [string](#string), a number, a
[boolean](#boolean), an [array](#array), an [object](#object), or
[null](#null).

Example: `"2021"` and `2021` look similar but have different types, and behave
differently when you add to them.

### typescript

[JavaScript](#javascript) with types added. You say what shape your data should be,
and TypeScript warns you when you break your own rules — before you run the code
instead of after.

Example: `function addMovie(title: string)` means "this must be text". You start
using TypeScript in week 6.

### variable

A name that holds a value, so you can use it later without repeating it.

Example: `const title = "Dune"`. Use `const` by default; use `let` only when the
value genuinely needs to change.
