#!/usr/bin/env bash
# Express Cup TikTok (1080x1920, ~17s). Edit build/data.js week{} first, then:
#   python3 tiktok/render_tt.py && bash tiktok/build_tt.sh
# Output: tiktok/out/express-cup-tiktok-weekNN.mp4 (silent - add a Commercial Music Library track in the TikTok app)
set -e
K="$(cd "$(dirname "$0")/.." && pwd)"; cd "$K/tiktok/out"
N=$(grep -o 'n: *[0-9]*' "$K/build/data.js" | head -1 | grep -o '[0-9]*'); NN=$(printf %02d $N)
ffmpeg -v error -y -ss 0.5 -t 9.5 -i "$K/assets/ctp-clip.mp4" -i o1.png -i o2.png -filter_complex "[0:v]setpts=PTS/1.3,fps=30,crop=608:1080:656:0,scale=1080:1920:flags=lanczos,eq=saturation=1.08[v];[v][1:v]overlay=0:0:enable='lt(t,5.9)'[a];[a][2:v]overlay=0:0:enable='gte(t,5.9)',format=yuv420p" -an -t 7.3 -c:v libx264 -crf 18 A.mp4
card(){ ffmpeg -v error -y -loop 1 -i "$1" -vf "scale=2160:3840,zoompan=z='1+0.035*on/$(( $3*30 ))':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$(( $3*30 )):s=1080x1920:fps=30,format=yuv420p" -frames:v $(( $3*30 )) -c:v libx264 -crf 18 "$2"; }
card c1.png C1.mp4 4; card c2.png C2.mp4 3; card c3.png C3.mp4 3; card c4.png C4.mp4 4
ffmpeg -v error -y -i A.mp4 -i C1.mp4 -i C2.mp4 -i C3.mp4 -i C4.mp4 -f lavfi -t 17.2 -i anullsrc=r=44100:cl=stereo -filter_complex \
"[0][1]xfade=transition=slideleft:duration=0.4:offset=6.9[a];[a][2]xfade=transition=slideleft:duration=0.4:offset=10.5[b];[b][3]xfade=transition=slideleft:duration=0.4:offset=13.1[c];[c][4]xfade=transition=slideleft:duration=0.4:offset=15.7,format=yuv420p[v]" \
-map "[v]" -map 5:a -c:v libx264 -crf 19 -preset slow -r 30 -c:a aac -b:a 128k -shortest -movflags +faststart express-cup-tiktok-week$NN.mp4
rm -f A.mp4 C?.mp4; echo "BUILD OK: express-cup-tiktok-week$NN.mp4"
