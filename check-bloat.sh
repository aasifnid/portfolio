#!/bin/bash

# Token bloat checker — run from ~/Desktop/portfolio: bash check-bloat.sh
# Checks portfolio HTML files + folio agent knowledge files

PORTFOLIO="$(cd "$(dirname "$0")" && pwd)"
AGENTS="$PORTFOLIO/.agents/folio"
ABOUT="$PORTFOLIO/about-me.md"

RED='\033[0;31m'
YLW='\033[0;33m'
GRN='\033[0;32m'
NC='\033[0m'
BOLD='\033[1m'

pass=0; warn=0; fail=0

check() {
  local label="$1" status="$2" detail="$3"
  if   [[ "$status" == "FAIL" ]]; then echo -e "  ${RED}✗ FAIL${NC}  $label — $detail"; ((fail++))
  elif [[ "$status" == "WARN" ]]; then echo -e "  ${YLW}⚠ WARN${NC}  $label — $detail"; ((warn++))
  else                                  echo -e "  ${GRN}✓ OK${NC}    $label"; ((pass++))
  fi
}

echo ""
echo -e "${BOLD}── Portfolio HTML ──────────────────────────────────────${NC}"

while IFS= read -r -d '' f; do
  name=$(basename "$(dirname "$f")")/$(basename "$f")
  size=$(wc -c < "$f")
  b64=$(grep -c 'data:image\|data:font\|data:application' "$f" 2>/dev/null | tr -d '[:space:]'); b64=${b64:-0}

  if   [[ "$b64" -gt 0 ]];     then check "$name" "FAIL" "${b64} base64 blob(s) — extract to images/ folder"
  elif [[ "$size" -gt 204800 ]]; then check "$name" "WARN" "$(( size / 1024 ))KB — unusually large, investigate"
  elif [[ "$size" -gt 102400 ]]; then check "$name" "WARN" "$(( size / 1024 ))KB — getting large"
  else check "$name" "OK"
  fi
done < <(find "$PORTFOLIO" -name "*.html" -not -path "*/.git/*" -print0 2>/dev/null)

echo ""
echo -e "${BOLD}── Agent Knowledge Files ───────────────────────────────${NC}"

while IFS= read -r -d '' f; do
  name=$(basename "$f"); lines=$(wc -l < "$f")
  if   [[ "$lines" -gt 250 ]]; then check "$name" "FAIL" "${lines} lines — audit for duplication"
  elif [[ "$lines" -gt 180 ]]; then check "$name" "WARN" "${lines} lines"
  else check "$name" "OK    ($lines lines)"
  fi
done < <(find "$AGENTS/knowledge" -name "*.md" -print0 2>/dev/null)

echo ""
echo -e "${BOLD}── Always-Loaded Files ─────────────────────────────────${NC}"

for f in "$AGENTS/SKILL.md" "$AGENTS/learnings.md" "$ABOUT"; do
  name=$(basename "$f"); lines=$(wc -l < "$f" 2>/dev/null || echo 0)
  if   [[ "$lines" -gt 220 ]]; then check "$name" "FAIL" "${lines} lines — loaded every session, trim aggressively"
  elif [[ "$lines" -gt 150 ]]; then check "$name" "WARN" "${lines} lines"
  else check "$name" "OK    ($lines lines)"
  fi
done

echo ""
echo -e "${BOLD}── Template ────────────────────────────────────────────${NC}"

tmpl="$AGENTS/templates/case-study.html"
if [[ -f "$tmpl" ]]; then
  lines=$(wc -l < "$tmpl")
  b64=$(grep -c 'data:image\|data:font' "$tmpl" 2>/dev/null | tr -d '[:space:]'); b64=${b64:-0}
  if   [[ "$b64" -gt 0 ]];     then check "case-study.html" "FAIL" "${b64} base64 blob(s) in template"
  elif [[ "$lines" -gt 500 ]]; then check "case-study.html" "FAIL" "${lines} lines — inline CSS likely crept back in"
  elif [[ "$lines" -gt 350 ]]; then check "case-study.html" "WARN" "${lines} lines"
  else check "case-study.html" "OK    ($lines lines)"
  fi
fi

echo ""
echo -e "${BOLD}── Stale / Dead Files ──────────────────────────────────${NC}"

dead=0
[[ -d "$PORTFOLIO/portfolio-2026" ]]          && { check "portfolio-2026/" "FAIL" "draft directory — delete"; ((dead++)); }
[[ -d "$PORTFOLIO/leap-sel-tools" ]]          && { check "root /leap-sel-tools/" "FAIL" "duplicate directory — delete"; ((dead++)); }
[[ -f "$AGENTS/knowledge/framer-guide.md" ]]  && { check "framer-guide.md" "FAIL" "Framer no longer used — delete"; ((dead++)); }
[[ "$dead" -eq 0 ]] && check "No dead files found" "OK"

echo ""
echo -e "${BOLD}────────────────────────────────────────────────────────${NC}"
echo -e "  ${GRN}${pass} passed${NC}  ${YLW}${warn} warnings${NC}  ${RED}${fail} failed${NC}  ($(( pass + warn + fail )) checks)"
echo ""
