#!/usr/bin/env bash
# Copies the media referenced by src/lib/projectMedia.ts out of the raw
# `elegent-glass-film/` drop and into `public/gallery/media/` under the slug
# filenames the data file expects, then extracts a poster frame for each video.
#
# Requires: node, ffmpeg. Safe to re-run — existing files are overwritten.
#
#   ./scripts/import-project-media.sh

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$ROOT/elegent-glass-film"
OUT_DIR="$ROOT/public/gallery/media"

[ -d "$SRC_DIR" ] || { echo "Source directory not found: $SRC_DIR" >&2; exit 1; }
command -v ffmpeg >/dev/null || { echo "ffmpeg is required for poster frames" >&2; exit 1; }

mkdir -p "$OUT_DIR"

# Emit "<sourceFile>\t<src>\t<poster>" for every entry in the data file.
node -e '
const fs = require("fs");
const ts = fs.readFileSync("src/lib/projectMedia.ts", "utf8");
const body = ts.slice(ts.indexOf("export const projectMedia"), ts.indexOf("export const unclassifiedMedia"));
const entry = /src: "([^"]+)",\n(?:\s*poster: "([^"]+)",\n)?[\s\S]*?sourceFile: "([^"]+)",/g;
let m;
while ((m = entry.exec(body)) !== null) {
  process.stdout.write([m[3], m[1], m[2] || ""].join("\t") + "\n");
}
' | while IFS=$'\t' read -r source target poster; do
  in="$SRC_DIR/$source"
  out="$ROOT/public$target"

  if [ ! -f "$in" ]; then
    echo "MISSING  $source" >&2
    continue
  fi

  cp "$in" "$out"
  echo "copied   $(basename "$out")"

  if [ -n "$poster" ]; then
    # Poster is pulled from the midpoint so it is not a fade-in frame.
    dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in")
    mid=$(awk -v d="$dur" 'BEGIN { printf "%.2f", d / 2 }')
    ffmpeg -v error -ss "$mid" -i "$in" -frames:v 1 -vf "scale=1280:-2" -y "$ROOT/public$poster" </dev/null
    echo "poster   $(basename "$poster")"
  fi
done

echo
echo "Done. Output in public/gallery/media/"
