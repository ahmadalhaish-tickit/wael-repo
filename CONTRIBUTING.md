# How we work

These are the rules for this project. They are the same rules real development
teams use. Read this once now, then come back to it whenever you are unsure.

## Branches

One task, one branch.

Every task in [the curriculum](docs/CURRICULUM.md) gives you a branch name at the
top. Use that name exactly.

Before you start a new task, always do this first:

```bash
git checkout main
git pull
```

That gets the latest code, including anything Ahmad changed. Then create your
branch:

```bash
git checkout -b week01/html-skeleton
```

You cannot commit to `main`. GitHub will refuse. That is on purpose, and it
protects you: `main` is always the version that works.

## Commits

Commit small and often. Every time something new works, commit it. Do not save up
a whole week of work into one commit.

Write messages in lowercase, in the present tense, and describe the **change**,
not the file:

```
add delete button to movie card
fix poster image not loading
move movie list into its own file
```

Not this:

```
Updated app.js
changes
week 3 work
```

The reason: in six weeks you will be looking for the moment you broke something.
`add delete button to movie card` tells you where to look. `changes` does not.

## Pull requests

When every "Done when" box in your task is ticked, open a pull request.

```bash
git push -u origin week01/html-skeleton
```

Then go to the repository on GitHub. It will show a button that says
"Compare & pull request". Click it, fill in the template, and click
"Create pull request". Then tell Ahmad.

Do not merge your own pull request. Wait for Ahmad to review it. He may ask for
changes — that is normal, and it happens to everyone at every level. Make the
changes on the same branch, commit, and push again. The pull request updates
itself.

## Using AI and tutorials

You can use ChatGPT, Claude, YouTube, or any tutorial you like.

There is one rule: in your pull request, you must explain in your own words what
each change does and why. If you cannot explain a line, delete it.

This is not a trap — it is the whole point. Code you cannot explain is code you
cannot fix. And you will need to fix it, because in week 6 you will come back to
code you wrote in week 3 and change it.

## Your learning log

Write three lines in [LEARNING.md](LEARNING.md) every day you work:

1. What you did.
2. What confused you.
3. What you want to ask.

Line 2 is the important one. Being confused is not a weakness — it is what
learning feels like from the inside. An empty log is the only wrong answer.

## When you are stuck

Being stuck for 30 minutes is normal. It is where most learning actually happens.
Read the error message. Read it again, slowly. Search for the exact words in it.

Being stuck for two hours without asking is wasted time. Ask.

When you ask, say three things:

1. What you expected to happen.
2. What happened instead.
3. What you already tried.

That turns a five-message conversation into one message. It is also exactly how
you will ask questions for the rest of your career.

## What I will look at

Being honest with you about how this is monitored:

- **Your pull request descriptions**, before your code. I am measuring whether
  you understand what you built, not how much you built.
- **Your learning log.** Consistent entries with real confusion in them are a
  better signal than perfect code.
- **Which days you committed.** Four days of small commits beats one long
  Sunday night.

Consistency beats speed. Someone who does 15 focused hours a week for eight
weeks will finish. Someone who does 40 hours one week and none the next will not.
