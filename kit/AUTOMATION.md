# Express Cup — weekly TV video automation (runbook)

Rebuilds the in-store Toptracer "Express Cup" TV loops each week and pushes them to the Yodeck screens. Runs unattended every Tuesday afternoon.

## This kit
- `build/template.html` + `build/data.js` + `build/img/*` + `build/fonts/*` — render source.
- `assets/ctp-clip.mp4` — Toptracer gameplay intro clip (reused every week).
- `render_heroes.py` — holds the per-week course/hole/yards/photo/**pin** map for weeks 4–26 (the `W` list). Source of pin coords (not in the sheet).
- `render.py` — renders frames to `out/` (portable; paths relative to this folder).
- `build.sh` — stitches frames + clip into the loop videos (portable).

## Each run
1. **Pick the week.** Next competition Monday = 5 Oct 2026 + (N−1)×7. The run on a Tuesday builds for the *upcoming* Monday (N).
2. **Gather data:**
   - Course / hole / yards / photo slug / **pin**: from `render_heroes.py` `W` list, row with that N.
   - Date: that Monday (e.g. "Monday 26 October", short "Mon 26 Oct"). Time is always "3pm – 9pm".
   - Prize: comp sheet `1DDgqezH1-PEBBPholTa4PskhZEktnbyHaji-oU_wk5Q` → **WEEKLY WINNERS** tab, column "PRIZE (SUBJECT TO STOCK)" for that week (title-case it).
   - Event id: inline JS on https://www.expressgolf.co.uk/express-cup/ → object `EV` → `EV["N"]` = uuid. Join URL = `https://api.toptracer.com/app/event?eventid=<uuid>`.
   - Standings: comp sheet → **STANDINGS** tab (pos, player, points, wins). Use the latest entered (label `results.n` = last *completed+entered* week). Build `results.standings` as `[pos, player, points, "W" if a weekly winner]`.
3. **QR:** `qrcode` (ERROR_CORRECT_M, box 20, border 1, black/white) of the join URL → `build/img/qr_weekNN.png`.
4. **data.js:** update the `week{}` block (n, of:26, day, dayShort, time, course, courseFull, hole, yards, photo:`img/<slug>_inner.jpg`, card same, qr:`img/qr_weekNN.png`, pin, prize, joinUrl) and the `results{}` block (latest standings). Keep the rest.
5. **Build:** `python3 render.py tv1 tv2 tv3 standingsTv overlay p1 p2 p3 p4 poverlay` then `bash build.sh`. Outputs in `out/`.
   - Landscape loop: `out/tv-loop-1920x1080.mp4`
   - Sideways (for the portrait-mounted screen): `out/tv-portrait-loop-ROTATED-1920x1080.mp4`
6. **Host:** copy both to `wkNN/` in this repo's `signage` branch; commit; push. Raw URLs:
   `https://raw.githubusercontent.com/expressgolf/expressgolf-dashboard/signage/wkNN/<file>`
7. **Yodeck** (workspace 257312):
   - `uploadMediaFromUrl` both (media_type video, url_type download). Names: `Express Cup WkNN <Course> - LANDSCAPE screen` / `- SIDEWAYS screen`.
   - Wait `retrieveMediaStatus` = finished.
   - `updateScreenByID` screen_content `{source_type:media, source_id:<id>}`:
     - LANDSCAPE → **RANGE 2 (829778)**, **CAFE (829881)**, **RANGE 3 (830011)**
     - SIDEWAYS → **SHOP ENTRANCE (829764)**
   - `pushToScreens` (all).
8. **Drive copy.** Put the week's assets in Google Drive for Paul + staff. Parent = WEEKLY CONTENT folder id `1iG0O6nykoQlMYSgx5-hDKltOGHewUQwG`.
   - Find or create a folder named `Week NN – <Course> – Monday` under it (native Google_Drive: search_files for the name under that parent; if missing, create_file with mimeType `application/vnd.google-apps.folder`, parentId = WEEKLY CONTENT).
   - Upload the week's hosted files from their raw GitHub URLs into that folder via Composio `GOOGLEDRIVE_UPLOAD_FROM_URL` (account `info`, parent_folder_id = the folder id). Include whatever is in `wkNN/`: the 2 TV videos always; the social pack (feed, teaser, tstory1-3, poster) if present. Use friendly names: `Week NN – TV loop (landscape).mp4` (from `wkNN/tv-loop-1920x1080.mp4`), `Week NN – TV loop (portrait screen).mp4` (from `wkNN/tv-portrait-loop-ROTATED-1920x1080.mp4`), `Week NN – Feed post.png`, `Week NN – Sunday teaser.png`, `Week NN – Story 1/2/3.png`, `Week NN – Poster A4.pdf`.
   - **The 2 TV videos REPLACE, don't skip:** this task rebuilds them every run, so if a same-name TV-loop file already exists in the folder, trash it first (native Google_Drive trash_file), THEN upload — otherwise a corrected rebuild never reaches Drive. For the social pack + poster, skip (don't duplicate) files already there.
9. **Report** to Paul: still preview + which screens, and the reminder: *publish that week's Toptracer event in TRMS or the QR won't resolve*. Note standings reflect the last entered week. Include the Drive folder link.

## Notes
- Screens are often offline outside shop hours; the push queues and applies when they power on.
- git push needs the repo added to the session first: `add_repo expressgolf/expressgolf-dashboard` (push access), then clone.
- Verify the QR decodes to the correct event before pushing (pyzbar, or trust deterministic generation).
