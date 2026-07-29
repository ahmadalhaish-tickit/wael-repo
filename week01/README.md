# Week 1 exercises

Practice files. Nothing in this folder is used by the app in `app/` — these exist so
you can try things somewhere that does not matter.

**You cannot break anything important in here.** Each file is completely
self-contained: its own HTML, its own CSS, no shared files. If you destroy
`04-box-model.html`, the other four still work, and you can get the original back
with `git checkout week01/04-box-model.html`.

## How to open one

Two ways:

- **Best:** right-click the file in VS Code and choose **Open with Live Server**. The
  page reloads by itself every time you save.
- **Also fine:** find the file in your file manager and double-click it. You will
  have to press refresh in the browser after each save.

## Do them in this order

| File | What you practise |
|---|---|
| `01-headings-and-text.html` | Headings, paragraphs, bold, italic, lists |
| `02-images-and-links.html` | Images, alt text, links |
| `03-colors-and-fonts.html` | Colours three ways, font size, line height |
| `04-box-model.html` | Margin, padding, border — the most useful thing in CSS |
| `05-your-own-page.html` | All of it, with nothing to copy |

Each one has instructions in a comment at the top of the file. Read the comment
first.

## The habit worth building this week

In every file, break something on purpose and look at what happens. Change a colour
to nonsense. Delete a closing tag. Point an image at a URL that does not exist.

Doing that deliberately, in a file that does not matter, is how you learn what error
messages and broken pages actually look like — so that when it happens by accident in
`app/`, you recognise it instead of panicking.
