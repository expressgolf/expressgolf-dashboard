# Express Cup — weekly winner social automation (runbook)

Posts the previous Monday's Express Cup winner to Instagram (@expressgolf) each Tuesday:
a winner feed post and a winner story. Runs unattended after the TV-loop task.

## Hard rules
- Post to **@expressgolf only** (Composio connection `instagram_donga-woons`, ig_user_id `27408982492130673`). **NEVER** @gracieandthemarshmallow.
- **Never invent a winner, prize or standings.** If the winner for the week just gone is not entered in the sheet yet, STOP, post nothing, and message Paul that the winner isn't in the sheet so there's nothing to post.
- The winner story needs **no link sticker**, so it CAN be posted fully via the API (media_type STORIES). (Only the Sunday teaser stories need a manual link sticker.)

## This run
1. **Pick the week just completed.** Competition Mondays start 5 Oct 2026; week N Monday = 5 Oct + (N−1)×7. On a Tuesday, the Monday just gone is the week to report (N_done = that week).
2. **Gather results** from comp sheet `1DDgqezH1-PEBBPholTa4PskhZEktnbyHaji-oU_wk5Q`:
   - **WEEKLY WINNERS** tab → the winner name, entries count and "PRIZE (SUBJECT TO STOCK)" for N_done. If the winner cell for N_done is blank → STOP (see hard rules).
   - **STANDINGS** tab → full standings after N_done: `[pos, player, points, "W" if a weekly winner / qualified]`.
   - Course / hole / yards for N_done: from `render_heroes.py` `W` list (the row with that N), or the WEEKLY WINNERS tab.
3. **data.js:** update the `results{}` block — n, course, hole, yards, day, entries, prize (title-cased), top5 (winner first, then 2nd–5th on points), standings. Leave the `week{}` block alone (that's the TV/Monday task's upcoming week).
4. **Render:** `python3 render.py r1 r2 r3 rstory` → `out/r1.png` (winner feed), `out/r2.png` (top 5), `out/r3.png` (standings), `out/rstory.png` (winner story).
5. **Host:** copy to `wkNN/results/` on the `signage` branch; commit; push. Raw URLs:
   `https://raw.githubusercontent.com/expressgolf/expressgolf-dashboard/signage/wkNN/results/<file>`
6. **Post to Instagram** (Composio, @expressgolf):
   - Import `r1.png` (and optionally `r2.png`, `r3.png`) to WP Media Library via `upsolution-upload-media` from the raw URL → gives a public wp-content URL.
   - Winner **feed post**: `INSTAGRAM_CREATE_POST` / `INSTAGRAM_POST_IG_USER_MEDIA` (image_url = the WP URL, caption below) → `INSTAGRAM_PUBLISH_IG_MEDIA`.
   - Winner **story**: same import for `rstory.png` → create media with **media_type = STORIES** → publish. No link sticker.
7. **Drive copy.** Parent = WEEKLY CONTENT folder id `1iG0O6nykoQlMYSgx5-hDKltOGHewUQwG`. Find or create a folder `Week NN – <Course> – Results` under it (native Google_Drive search_files / create_file, mimeType `application/vnd.google-apps.folder`). Upload r1 (winner feed), r3 (standings), rstory (winner story) from their raw GitHub URLs via Composio `GOOGLEDRIVE_UPLOAD_FROM_URL` (account `info`, parent_folder_id = the folder id). Friendly names: `Week NN – Winner post.png`, `Week NN – Standings.png`, `Week NN – Winner story.png`. Skip files already there.
8. **Report** to Paul: the two Instagram permalinks + note which week, the Drive folder link, and that the TV standings slide refreshes on the next TV-loop run.

## Caption (feed)
Winner announcement, plain text. Template:

> 🏆 Express Cup week {N} winner: {Winner}!
>
> Closest to the pin at {Course}, hole {Hole} — out of {entries} players. {Winner first name} wins {prize} and a place in the semi-final.
>
> The Express Cup runs every Monday, 3–9pm, free to enter on the Toptracer Range. Full standings and next week's hole: link in bio.
>
> Express Golf, powered by Toptracer Range.
> #ToptracerRange #ExpressCup #ClosestToThePin #Bradford #Leeds

## Notes
- Winner story is auto-posted (no sticker). If Paul later wants a "swipe up / link" on the winner story, that part is manual like the Sunday teaser.
- Clone/host setup identical to the TV task: `add_repo expressgolf/expressgolf-dashboard` (push), clone, work in `kit/`.
