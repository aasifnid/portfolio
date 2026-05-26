#!/usr/bin/env python3
"""
sync-nav.py — Propagates common-assets/navbar.html into every page.

Reads the canonical navbar markup from common-assets/navbar.html and replaces
the content between <!-- NAV:START --> and <!-- NAV:END --> markers in every
known page. Each page keeps the nav as inline static HTML — zero FOUC,
single source of truth.

Workflow:
    1. Edit common-assets/navbar.html
    2. Run: python3 scripts/sync-nav.py
    3. Commit + deploy
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NAVBAR_SOURCE = ROOT / "common-assets" / "navbar.html"

PAGES = [
    "index.html",
    "design-system/index.html",
    "work/affiliate-partnership/index.html",
    "work/new-trial-experience/index.html",
    "work/earlier-work/index.html",
    "work/feel-check/index.html",
    "work/tutoring-home-redesign/index.html",
]

MARKER_RE = re.compile(
    r"<!-- NAV:START[^>]*-->.*?<!-- NAV:END -->",
    re.DOTALL,
)


def main() -> int:
    if not NAVBAR_SOURCE.exists():
        print(f"ERROR: source not found at {NAVBAR_SOURCE}", file=sys.stderr)
        return 1

    nav_html = NAVBAR_SOURCE.read_text().rstrip()
    replacement = (
        "<!-- NAV:START — auto-synced from common-assets/navbar.html · "
        "run scripts/sync-nav.py to update -->\n"
        f"{nav_html}\n"
        "<!-- NAV:END -->"
    )

    updated = 0
    skipped = []
    for rel in PAGES:
        page = ROOT / rel
        if not page.exists():
            skipped.append(f"{rel} (missing)")
            continue
        text = page.read_text()
        if not MARKER_RE.search(text):
            skipped.append(f"{rel} (no NAV markers)")
            continue
        new_text = MARKER_RE.sub(replacement, text)
        if new_text != text:
            page.write_text(new_text)
            updated += 1
            print(f"OK   {rel}")
        else:
            print(f"SAME {rel}")

    if skipped:
        print("\nSkipped:")
        for s in skipped:
            print(f"  - {s}")

    print(f"\nDone. {updated} file(s) updated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
