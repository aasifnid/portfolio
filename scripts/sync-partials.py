#!/usr/bin/env python3
"""
sync-partials.py — Propagates canonical shared partials into every page.

Single source of truth per partial; inlined static HTML -> zero FOUC.

  NAV     common-assets/navbar.html             -> main pages (full menu)
          common-assets/navbar-case-study.html  -> case-study pages
  FOOTER  common-assets/footer.html             -> all pages + the case-study template

Each partial is written between <!-- X:START --> and <!-- X:END --> markers.
A page with no markers for a partial is skipped (reported), not silently changed.

Workflow: edit the relevant source in common-assets/, run
`python3 scripts/sync-partials.py`, commit, deploy.

(Replaces the old sync-nav.py — now covers the footer too so nav and footer
follow the same one-source rule.)
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CA = ROOT / "common-assets"

MAIN_PAGES = [
    "index.html",
]
CASE_PAGES = [
    "projects/feel-check/index.html",
    "projects/cuemath-partners/index.html",
    "projects/new-trial-experience/index.html",
    "projects/tutoring-home-redesign/index.html",
]
TEMPLATE = [
    ".agents/folio/templates/case-study.html",
]

# (marker, source file, pages it lands on)
PARTIALS = [
    ("NAV",    CA / "navbar.html",             MAIN_PAGES),
    ("NAV",    CA / "navbar-case-study.html",  CASE_PAGES + TEMPLATE),
    ("FOOTER", CA / "footer.html",             MAIN_PAGES + CASE_PAGES + TEMPLATE),
]


def replacement_for(marker: str, source: Path) -> str:
    html = source.read_text().rstrip()
    return (
        f"<!-- {marker}:START - auto-synced from common-assets/{source.name} - "
        "run scripts/sync-partials.py to update -->\n"
        f"{html}\n"
        f"<!-- {marker}:END -->"
    )


def main() -> int:
    for marker, source, _pages in PARTIALS:
        if not source.exists():
            print(f"ERROR: source not found at {source}", file=sys.stderr)
            return 1

    updated = 0
    skipped = []
    for marker, source, pages in PARTIALS:
        marker_re = re.compile(
            rf"<!-- {marker}:START[^>]*-->.*?<!-- {marker}:END -->", re.DOTALL
        )
        replacement = replacement_for(marker, source)
        for rel in pages:
            page = ROOT / rel
            if not page.exists():
                skipped.append(f"{rel} (missing)")
                continue
            text = page.read_text()
            if not marker_re.search(text):
                skipped.append(f"{rel} (no {marker} markers)")
                continue
            # function replacement -> treat HTML literally (no \1 backref surprises)
            new_text = marker_re.sub(lambda _m: replacement, text)
            if new_text != text:
                page.write_text(new_text)
                updated += 1
                print(f"OK   [{marker}] {rel}")
            else:
                print(f"SAME [{marker}] {rel}")

    if skipped:
        print("\nSkipped:")
        for s in skipped:
            print(f"  - {s}")
    print(f"\nDone. {updated} file(s) updated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
