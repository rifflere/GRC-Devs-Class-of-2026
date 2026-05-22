# GRC Software Devs — Class of 2026

A yearbook-style farewell site for our teachers, built collaboratively by the graduating cohort.

**Live site:** https://rifflere.github.io/GRC-Devs-Class-of-2026/

---

## Getting started

You need collaborator access to push directly — ping Rebecca and she will add you. Then:

```bash
git clone https://github.com/rifflere/GRC-Devs-Class-of-2026.git
cd GRC-Devs-Class-of-2026/thanks-app
npm install
npm run dev   # → http://localhost:5173
```

To contribute: edit a data file, commit, and push to `main`. The site redeploys automatically via GitHub Actions (takes ~60 seconds).

> **If you get a merge conflict on push** — someone else pushed while you were working. Just run `git pull --rebase` and push again.

---

## Contributing

All content lives in `thanks-app/src/data/`. You do not need to touch any components.

### Add a sticky note → `src/data/notes.js`

Each teacher has a keyed array. Push a new object into the right one:

```js
{ from: 'Your Name', message: 'Your message.' },
```

`from` is optional — omit it or set it to `'Anonymous'`.

### Add yourself to the students page → `src/data/students.js`

```js
{
  name: 'Your Name',
  blurb: 'One or two sentences about you.',
  linkedin: 'https://linkedin.com/in/your-handle',
  photo: null,
},
```

Optional photo: drop a square image in `public/photos/students/yourname.jpg` and change `photo: null` to `photo: '/photos/students/yourname.jpg'`.

### Update a teacher's info → `src/data/teachers.js`

Set `linkedin`, update the `thankYou` blurb, or add a `photo`. Teacher photos go in `public/photos/teachers/`.

---

## Deployment

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`. No manual step needed.

One-time repo owner setup: **Settings → Pages → Source → GitHub Actions**.

---

## Project structure

```
thanks-app/src/data/
  notes.js      ← sticky notes  ← start here
  students.js   ← student profiles
  teachers.js   ← teacher info, linkedin, thank-you copy

thanks-app/public/photos/
  teachers/
  students/
```
