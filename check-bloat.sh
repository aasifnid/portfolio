#!/bin/bash
# Run before deploying: bash check-bloat.sh
# Blocks if any HTML file contains base64-embedded images

FOUND=0
echo "Checking for base64-embedded images..."

for file in $(find . -name "*.html"); do
  count=$(grep -c "data:image" "$file" 2>/dev/null)
  size=$(wc -c < "$file")
  if [ "$count" -gt "0" ] 2>/dev/null; then
    echo "  BLOATED: $file — $count embedded images, size: ${size} bytes"
    FOUND=1
  fi
done

if [ "$FOUND" -eq 1 ]; then
  echo ""
  echo "DEPLOY BLOCKED: Fix base64 embeds before deploying."
  echo "Extract images to /images/ folder and use <img src='images/filename.jpg'>"
  exit 1
else
  echo "  Clean — no base64 embeds found."
  echo "Safe to deploy: vercel --prod"
fi
