#!/usr/bin/env bash
# Portable Express Cup TV loop builder. Run AFTER render.py has written the frames to out/.
# Produces: out/tv-loop-1920x1080.mp4 (landscape) and out/tv-portrait-loop-ROTATED-1920x1080.mp4 (sideways).
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT/out"
mkdir -p vbuild
CLIP="$ROOT/assets/ctp-clip.mp4"
card(){ # in out w h
 ffmpeg -v error -y -loop 1 -i "$1" -vf "scale=$(($3*2)):$(($4*2)),zoompan=z='1+0.04*on/150':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=$3x$4:fps=30,format=yuv420p" -frames:v 150 -c:v libx264 -crf 18 -preset medium "$2"; }
# landscape
ffmpeg -v error -y -i "$CLIP" -i overlay.png -filter_complex "[0:v]trim=0:10,setpts=PTS-STARTPTS,fps=30,scale=1920:1080[c];[c][1:v]overlay=0:0,format=yuv420p" -an -c:v libx264 -crf 18 vbuild/L0.mp4
card tv1.png vbuild/L1.mp4 1920 1080; card tv2.png vbuild/L2.mp4 1920 1080; card tv3.png vbuild/L3.mp4 1920 1080; card standingsTv.png vbuild/L4.mp4 1920 1080
# portrait
ffmpeg -v error -y -i "$CLIP" -i poverlay.png -filter_complex "color=c=0x01252B:s=1080x1920:r=30:d=10[bg];[0:v]trim=0:10,setpts=PTS-STARTPTS,fps=30,scale=1080:608[c];[bg][c]overlay=0:300[b];[b][1:v]overlay=0:0,format=yuv420p" -an -t 10 -c:v libx264 -crf 18 vbuild/P0.mp4
card p1.png vbuild/P1.mp4 1080 1920; card p2.png vbuild/P2.mp4 1080 1920; card p3.png vbuild/P3.mp4 1080 1920; card p4.png vbuild/P4.mp4 1080 1920
x(){ # prefix out
 ffmpeg -v error -y -i vbuild/${1}0.mp4 -i vbuild/${1}1.mp4 -i vbuild/${1}2.mp4 -i vbuild/${1}3.mp4 -i vbuild/${1}4.mp4 -filter_complex \
 "[0][1]xfade=transition=fade:duration=0.6:offset=9.4[a];[a][2]xfade=transition=fade:duration=0.6:offset=13.8[b];[b][3]xfade=transition=fade:duration=0.6:offset=18.2[c];[c][4]xfade=transition=fade:duration=0.6:offset=22.6,format=yuv420p" \
 -an -c:v libx264 -crf 20 -preset slow -movflags +faststart "$2"; }
x L tv-loop-1920x1080.mp4
x P tv-portrait-loop-1080x1920.mp4
ffmpeg -v error -y -i tv-portrait-loop-1080x1920.mp4 -vf "transpose=1" -an -c:v libx264 -crf 20 -preset slow -movflags +faststart tv-portrait-loop-ROTATED-1920x1080.mp4
for f in tv-loop-1920x1080.mp4 tv-portrait-loop-ROTATED-1920x1080.mp4; do ffprobe -v error -show_entries format=duration,size:stream=width,height -of csv=p=0 "$f"; done
echo "BUILD OK"
