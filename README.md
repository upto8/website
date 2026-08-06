# Upto8 website

Plain HTML/CSS/JS static site — no build tools, no framework, free to host on GitHub Pages.

## Files
- `index.html` — the page content
- `style.css` — all styling (colors, fonts, layout, animations)
- `script.js` — rotating headline + footer year (~30 lines, no dependencies)
- `images/upto8-app-preview.png` — the app screens image
- `CNAME` — tells GitHub Pages to serve this site at `upto8.com`

See the chat instructions from Claude for full step-by-step setup on GitHub Pages and connecting your domain. Short version:

1. Put these files in a GitHub repo (e.g. `upto8`).
2. Repo Settings → Pages → deploy from the `main` branch, `/ (root)` folder.
3. In your domain registrar, point `upto8.com` (A records) and `www.upto8.com` (CNAME) at GitHub Pages.
4. Add `upto8.com` as the custom domain in Settings → Pages, and check "Enforce HTTPS".

## To edit later
- Text: open `index.html`, edit the words between tags.
- Colors/fonts/spacing: open `style.css`, edit the `:root` variables at the top for global colors.
- Waitlist form: create a form at tally.so, publish it, and copy its form ID (the part of the URL after `tally.so/r/`). In `index.html`, find-and-replace every instance of `REPLACE_WITH_YOUR_TALLY_FORM_ID` with that ID — it appears in 3 places (nav button, hero button, waitlist section button), each with 2 occurrences (the `href` and the `data-tally-open` attribute).
- Rotating phrases: edit the `<b>...</b>` lines inside `.sp-words-wrapper` in `index.html`.

After editing, upload the changed file(s) to GitHub (or push with `git add . && git commit -m "update" && git push`) — the live site updates in about a minute.
