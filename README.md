# Form Guide

Form, cues, common mistakes and warm-ups for every lift in my routine. A small installable web app (PWA) with no build step.

Live at https://joeuk89.github.io/form-guide/ once GitHub Pages is switched on (Settings > Pages > Deploy from a branch > `main`, `/ (root)`).

## Editing

Everything you read in the app lives in `data.js`:

- `EXERCISES`: one entry per movement (cues, picture-this, set-up, the rep, mistakes, warm-up, video).
- `DAYS`: which exercises appear under which session, in order.

After any change, bump `VERSION` in `sw.js` so installed copies refresh their offline cache.

## Install on a phone

Open the live link, then use "Add to Home Screen" (Safari share menu on iPhone, browser menu on Android). It works offline after the first visit; the video links need a connection.
