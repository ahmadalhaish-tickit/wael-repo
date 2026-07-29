# Setup

Everything you need installed, and your first [pull request](GLOSSARY.md#pull-request)
opened, in one sitting. It takes about two hours the first time.

Do the steps in order. Do not skip any. If something fails, jump to
[section 12](#12-when-something-goes-wrong) — the three most common failures are
there with fixes.

Every step gives the commands for both Mac and Windows. Use the ones for your
computer and ignore the others.

---

## 1. What you are installing, and why

Four things. It is worth knowing what each one is for, so that when something
breaks you know which one is broken.

| Tool | What it is for |
|---|---|
| **VS Code** | The program where you write code. Like Word, but for code. |
| **Node.js** | Runs JavaScript outside the browser. Needed from week 6, installed now so it is out of the way. |
| **Git** | Records the history of your work on your own computer. |
| **GitHub** | A website that stores a copy of that history online, so Ahmad can read it. |

Git and GitHub are two different things with confusingly similar names. Git is the
program on your laptop. GitHub is the website. You will use both every day.

---

## 2. Install VS Code

Download it from `https://code.visualstudio.com/` and install it.

Then install one extension, because it will save you thousands of clicks:

1. Open VS Code.
2. Click the Extensions icon in the left sidebar (four squares, one detached).
3. Search for **Live Server** by Ritwick Dey.
4. Click Install.

Live Server reloads your page in the browser automatically every time you save a
file. Without it you save, switch to the browser, and press refresh — a few hundred
times a week.

---

## 3. Install Node.js

Go to `https://nodejs.org/` and download the version marked **LTS**.

LTS means Long Term Support: the boring, stable version that companies actually
use. The other one is newer and occasionally broken. Always choose LTS.

Install it with all the default options.

---

## 4. Install Git

**On Mac**, you need the Terminal for this one. Press Cmd+Space, type `Terminal`,
press Enter. A window with text in it opens. Type this and press Enter:

```bash
xcode-select --install
```

A dialog box appears. Click Install and wait. If it says the tools are already
installed, that is fine — you already have Git.

**On Windows**, download Git from `https://git-scm.com/downloads` and install it.
Accept every default option. One of the things it installs is a program called
**Git Bash**, which is the terminal you will use from now on.

---

## 5. Open the terminal

The [terminal](GLOSSARY.md#terminal) is a window where you type commands instead of
clicking buttons. It looks intimidating. In practice you will use about six
commands, over and over, for the rest of your career.

**On Mac:** press Cmd+Space, type `Terminal`, press Enter. You already did this in
step 4 — this is the same window.

**On Windows:** click Start, type `Git Bash`, press Enter. Use Git Bash, not the
Command Prompt and not PowerShell — the commands in these documents are written for
Git Bash, and some of them behave differently elsewhere.

Keep this window open. You will need it for the rest of the setup.

---

## 6. Check that everything installed

Type each of these and press Enter after each one:

```bash
node -v
npm -v
git --version
```

You should see three version numbers, something like `v20.17.0`. The exact numbers
do not matter.

If you see `command not found`, **close the terminal completely and open a new
one**, then try again. The terminal reads the list of installed programs only when
it starts, so a program installed five minutes ago is invisible to a terminal that
was already open. This confuses everyone once.

If it still says `command not found` after a fresh terminal, that program did not
install. Go back and install it again.

---

## 7. Create your GitHub account

Go to `https://github.com/signup` and create an account.

Choose your username carefully. This is a public portfolio that future employers
may read. `ali-hassan-dev` is good. `xX_gamer_2010_Xx` is not.

Then send your username to Ahmad, so he can give you access to the project. Send it
now, before you carry on.

You do not have to wait for him to reply. The project is public, so you can
download it and work on it straight away. His invitation is what lets you *send*
your work back — you will need it by step 11, not before.

---

## 8. Tell Git who you are

Every [commit](GLOSSARY.md#commit) you make is signed with a name and an email.
Set them once:

```bash
git config --global user.name "<your-name>"
git config --global user.email "<your-github-email>"
```

Replace `<your-name>` with your real name in quotes, for example `"Ali Hassan"`,
and `<your-github-email>` with the email address you just signed up to GitHub
with. The quotes stay; the angle brackets do not.

Use the same email as your GitHub account. If you use a different one, GitHub will
not realise the commits are yours and your contribution history will look empty.

---

## 9. Get the code onto your computer

Cloning means downloading a copy of the project, including its whole history, and
connecting that copy to GitHub so you can send changes back.

Pick a folder where you keep your work, move into it, and clone. For example:

```bash
cd ~/Documents
git clone https://github.com/<ahmad-username>/watchlist.git
cd watchlist
```

Replace `<ahmad-username>` with the username Ahmad gives you. `cd` means "change
directory" — it is how you move between folders in the terminal.

**About the password.** The first time you send work to GitHub, it will ask for a
username and password. Your GitHub password will not work — GitHub stopped
accepting it years ago. You need a Personal Access Token instead, which is just a
very long password made for programs rather than people.

To create one:

1. Go to `https://github.com/settings/tokens`.
2. Click **Generate new token**, then **Generate new token (classic)**.
3. Give it a note like `watchlist laptop`.
4. Set an expiry of 90 days.
5. Tick the **repo** checkbox. That is the only one you need.
6. Click Generate token at the bottom.
7. Copy the token.

**Save it in your password manager immediately.** GitHub shows it exactly once and
never again. If you lose it, you cannot recover it — you have to delete it and
make a new one.

When Git asks for your password, paste the token. Never paste it into a file in
this project, or into a chat message, or into a website. It is a password.

---

## 10. Open the project in VS Code

```bash
code .
```

The `.` means "this folder". If `code` is not found, open VS Code manually and use
File, then Open Folder, then choose the `watchlist` folder.

Have a look around. Open `app/index.html`. You are not expected to understand it
yet.

---

## 11. Your first branch, commit and pull request

This is the loop you will repeat about 39 times over the next two months. It is
worth doing slowly once.

**Step 1 — make a branch.**

```bash
git checkout -b week01/setup-and-first-commit
```

Expected output: `Switched to a new branch 'week01/setup-and-first-commit'`.

**Step 2 — make a change.** Open `LEARNING.md` in VS Code. Under
`## Your entries start here`, add today's entry in the same format as the example.
Write what you did today (this setup), what confused you, and what you want to ask.
Be honest — "everything confused me" is a real and useful answer. Save the file
with Cmd+S or Ctrl+S.

**Step 3 — check what Git noticed.**

```bash
git status
```

Expected output: it lists `LEARNING.md` as modified. `git status` is the command
you will run most often. It answers "what have I changed, and what have I not saved
yet".

**Step 4 — stage and commit.**

```bash
git add LEARNING.md
git commit -m "add my first learning log entry"
```

Expected output: a line saying `1 file changed`. Two commands, because Git
separates choosing what to save from actually saving it. That feels like a pointless
extra step now, and becomes useful when you have changed six files and only want to
commit two of them.

**Step 5 — send it to GitHub.**

```bash
git push -u origin week01/setup-and-first-commit
```

This is where it asks for your username and your token. See section 9.

**Step 6 — open the pull request.** Go to the project page on GitHub in your
browser. There will be a yellow banner with a button that says
**Compare & pull request**. Click it. A form appears, already filled with a
template. Answer its three questions. Click **Create pull request**.

**Step 7 — tell Ahmad.** He reviews it and either approves it or asks a question.
Do not merge it yourself.

That is the entire workflow. Everything from here is this same loop, with more
interesting code in the middle.

---

## 12. When something goes wrong

Three failures you will almost certainly hit. Not signs you are doing badly —
everyone hits all three.

**`fatal: not a git repository`**

You are in the wrong folder. Git commands only work inside the project. Check where
you are:

```bash
pwd
```

That prints your current folder. It should end in `/watchlist`. If not, `cd` into
it.

**`Authentication failed` or `Permission denied`**

Almost always the token. GitHub wants your Personal Access Token, not your
password. See section 9. If you are certain the token is right, check that Ahmad
has actually added you to the project — until he does, you can read it but not push
to it.

**`Updates were rejected` or `failed to push some refs`**

`main` changed since you started. Get the latest version and start your branch
again from it:

```bash
git checkout main
git pull
```

Then make your branch fresh. This is why the rules say to pull before starting
every task.

**Anything else:** copy the *entire* error message, including the parts that look
like noise, and send it to Ahmad. Say what you were trying to do and what you
already tried. A screenshot of the whole terminal window is perfect.

---

## You are done

You just did the thing every professional developer does every single day:
branched, changed something, committed it, pushed it, and opened it for review.

Now open [CONTRIBUTING.md](../CONTRIBUTING.md) and read the rules, then go to
[CURRICULUM.md](CURRICULUM.md) and start Task 1.2.
