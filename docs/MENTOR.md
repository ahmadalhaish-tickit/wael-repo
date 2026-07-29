# Mentor guide

For Ahmad only. The student is not the audience for this file — it is checked in
because it belongs with the project, not because it is secret, but nothing here is
written to him.

The design decision behind all of it: **you are measuring whether he understands
what he built, not how much he built.** Volume is easy to fake now. Explanation is
not.

---

## The 20-minute weekly routine

In this order. The order matters.

**1. Read the pull request descriptions first, before any code.** (5 min)

Every PR answers three questions: what changed, why, what confused him. Read those
for the week's PRs before opening a single diff. If the descriptions are clear and
specific, the code almost always is too. If they are vague, the code is where you
find out why — and you now know what to look for.

Reading code first primes you to judge output. Reading descriptions first keeps you
judging understanding.

**2. Skim the week's `LEARNING.md` entries.** (2 min)

Look for real confusion, named specifically. "I did not understand why the poster
path needed a slash" is a good week. "Worked on week 3" every day is a warning
regardless of how good the code is.

**3. Look at the commit calendar on his GitHub profile.** (1 min)

Four or five days of small commits is healthy. One large commit on Sunday night is
not, even when the code is fine.

**4. Open the diffs.** (8 min)

Skim for shape, not style. Is it organised the way the task asked? Did he do the
thing the task was actually about, or route around it? Nitpicking formatting in
week 2 teaches him that reviews are about commas.

**5. Leave at least one comment that asks *why*.** (3 min)

Not "rename this variable". Something like "why did you choose `filter` here rather
than a loop?" or "what happens if `movies` is empty when this runs?" A question he
has to think about is worth ten corrections, and it is also how you find out whether
he wrote it.

**6. Approve, or request changes with one concrete next action.**

"Request changes" is normal and happens to professionals daily. Give exactly one
thing to fix, not five — five reads as failure, one reads as iteration.

---

## Red flags

For each one, the useful move is a question in the PR, not an accusation. A wrong
accusation costs you the relationship; a question costs nothing and gets the same
answer.

| What you see | What it usually means | Ask this |
|---|---|---|
| Large, flawless PR, vague description | Generated and pasted, not understood | "Walk me through what line 34 does, and what happens if `movies` is empty." |
| One big commit on Sunday night | Cramming to look productive | "How did the week actually go, day by day?" |
| `LEARNING.md` untouched for a week | Disengaged, or embarrassed about being stuck | "What was the most annoying part of this week?" |
| Never asks a question | Stuck and hiding it, or copying wholesale | "What is the part of this you are least sure about?" |
| Same conceptual mistake three weeks after correction | The concept never landed; he is pattern-matching | Go back and re-teach it directly. This is on the teaching, not on him. |
| Code style suddenly changes between PRs | Different source, different author | "What made you switch to this pattern here?" |
| Skips tasks or reorders them | The skipped one is the one he could not do | "What happened with 3.4?" |

The single highest-signal test, usable any week: pick something he wrote **two or
three weeks ago** and ask him to change it. Understanding survives that. Copying
does not.

---

## Green flags

- Asks a specific question that already includes what he tried. This is the biggest
  one — it means he is debugging before asking, which is the actual skill.
- PR descriptions that admit confusion in the middle of working code.
- Goes back and cleans up earlier code without being told.
- Ships something small that was not on the task list.
- Disagrees with a review comment and explains why. Rare, and the best sign there
  is.
- Reports a bug in the curriculum or a broken link. It means he is reading closely.

---

## Per-week review notes

For each week: what to check, and the one concept he must actually hold. If the
concept did not land, another feature on top of it will not fix it.

**Week 1 — Setup and first page**
Check: did he get through setup alone, and did anything take him more than a day?
Concept: the branch-commit-push-PR loop. Everything else this week is decoration.
Watch for: silence. Week 1 is where most people quit, and it is almost always one
specific install error they are embarrassed to mention.

**Week 2 — JavaScript fundamentals**
Check: task 2.3's acceptance criterion — deleting a movie from the array makes the
card disappear with no other change.
Concept: **the array is the source of truth; the page is a picture of it.** If this
did not land, weeks 3 through 8 become copying. This is the most important check in
the first half.

**Week 3 — DOM and events**
Check: task 3.5, search and filter working together.
Concept: the difference between changing the data and changing the page. Ask him
directly: "when you click delete, what changes first?"
Watch for: code that reaches into the page to read state back out of the HTML. It
works, and it is the habit that makes week 6 impossible.

**Week 4 — Persistence and refactoring**
Check: is the refactor in 4.3 genuinely behaviour-preserving? And did he handle the
"no data saved" versus "user deleted everything" distinction in 4.2?
Concept: refactoring changes structure, not behaviour. Also, his file boundaries —
this is the first review where the *shape* of his code is the subject.

**Week 5 — Async and real data**
Check: does he handle failure, or only the happy path? Task 5.4 asks him to test
with wifi off — ask whether he actually did.
Concept: some things take time, and the program continues meanwhile.
Watch for: `.then()` and `await` mixed in the same function without understanding
either.

**Week 6 — TypeScript and the backend**
Check: 6.6, and specifically *why* the key moved. This is the week where following
steps and understanding diverge most visibly.
Concept: some things must never reach the browser. If he can explain that, he has
the foundation of every security conversation he will ever have.
Watch for: `any` everywhere, which is TypeScript with the safety turned off. Also
expect this week to take longer than a week; that is normal, not a red flag.

**Week 7 — Database**
Check: can he say what a migration is and why it is committed while `dev.db` is not?
Concept: memory versus disk.
Watch for: Prisma doing enough magic that he never notices a database exists. Have
him open Prisma Studio and change a row by hand.

**Week 8 — Deploy and polish**
Check: follow his README from a fresh clone yourself. Do not skip this — it is the
only test that matters, and it will find something.
Concept: code runs in more than one place, and configuration is what differs.

---

## The week 4 gate

At the end of week 4, decide explicitly. Not deciding is the failure mode.

**Go** — all 18 tasks merged; PR descriptions explain the code in his own words; he
committed on most days rather than in bursts; `LEARNING.md` has real entries; he can
answer a question about week-2 code.

**No-go** — repeat weeks 3 and 4 with different exercises. Same concepts, different
project, so he cannot lean on the previous solution.

**How to deliver a no-go.** Frame it as pacing, name the specific gap, and give the
concrete plan. Something like: "You are moving faster than the concepts are landing.
Task 3.5 and 4.3 both got there in a way you could not explain afterwards. Two more
weeks on this, then we go on — the backend half will not work without it." Then give
him a different small app with the same shape.

The gate is in the curriculum where he can read it, on purpose. A checkpoint he
knows about is a target. A secret one is a trap, and he will find out it was secret.

---

## If he goes quiet

Three days with no commits is ordinary life. Seven days is a conversation.

Ask what is blocking, not why he is behind. In nearly every case a beginner who
disappears is stuck on one specific error, has been stuck for days, and is
embarrassed that it is "something basic". The question "what is the error message?"
resolves most of these in one exchange.

If it happens twice, the honest conversation is about whether the time commitment is
real, not about the code.

---

## GitHub setup — run these yourself

These are not run automatically. Review each one before running it. Step 2 needs the
student's GitHub username.

```bash
# 1. Create the public repository and push everything
cd /Users/ahmadalhaich/Documents/Claude/Projects/watchlist
gh repo create watchlist --public --source=. --remote=origin --push
```

Public is required, not just preferred: GitHub Pages needs a public repo on a free
plan, and Pages is the week-1 live URL. The consequence is that no secret can ever
be committed, which is why the API key lesson appears twice in the curriculum.

```bash
# 2. Invite the student with write access
gh api -X PUT repos/ahmadalhaish-tickit/watchlist/collaborators/<student-github-username> \
  -f permission=push
```

`push` means he can create branches and push to them. It does not let him past
branch protection.

```bash
# 3. Protect main
gh api -X PUT repos/ahmadalhaish-tickit/watchlist/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  -F "required_pull_request_reviews[required_approving_review_count]=1" \
  -F "required_pull_request_reviews[dismiss_stale_reviews]=true" \
  -F "enforce_admins=false" \
  -F "required_status_checks=null" \
  -F "restrictions=null"
```

This is what makes the whole workflow real rather than optional. Without it he can
push straight to `main` and the review step becomes advisory.

- `required_approving_review_count=1` — one approval needed, which will be yours.
- `dismiss_stale_reviews=true` — a new push after approval needs re-approval, so he
  cannot slip a change in after the fact.
- `enforce_admins=false` — deliberate. It leaves you able to push a fix directly
  while he cannot. Set it to `true` only if you want to hold yourself to the same
  rule.

```bash
# 4. Enable GitHub Pages from main, needed for task 1.5
gh api -X POST repos/ahmadalhaish-tickit/watchlist/pages \
  -H "Accept: application/vnd.github+json" \
  -F "source[branch]=main" -F "source[path]=/"
```

Task 1.5 asks him to enable this himself through the settings UI, which is the
better learning experience. Run this only if he cannot get it working — enabling it
for him removes the task.

---

## Checking the curriculum after edits

There is a validator for the curriculum. It is not for the student.

```bash
node --run check
```

It verifies that every task has all four required parts, that every branch name is
correctly formatted and unique, and that no watchlisted technical term appears in
the curriculum without a glossary entry. Run it after any edit to
`docs/CURRICULUM.md` or `docs/GLOSSARY.md`.

```bash
node --run test
```

Tests for the validator itself.
