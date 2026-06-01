#!/usr/bin/env python3
"""
sync-nav.py — Propagates the canonical navbars into every page.

Two variants:
  - common-assets/navbar.html             -> main pages (full menu)
  - common-assets/navbar-case-study.html  -> case-study pages ("Back to work" + actions)

Replaces content between <!-- NAV:START --> and <!-- NAV:END --> markers.
Inline static HTML -> zero FOUC, single source of truth per variant.

Workflow: edit the relevant navbar source, run `python3 scripts/sync-nav.py`, commit, deploy.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NAV_MAIN = ROOT / "common-assets" / "navbar.html"
NAV_CASE = ROOT / "common-assets" / "navbar-case-study.html"

GROUPS = {
    "main": (NAV_MAIN, [
        "index.html",
        "design-system/index.html",
    ]),
    "case-study": (NAV_CASE, [
        "work/feel-check/index.html",
        "work/cuemath-partners/index.html",
        "work/new-trial-experience/index.html",
        "work/tutoring-home-redesign/index.html",
        "work/earlier-work/index.html",
    ]),
}

MARKER_RE = re.compile(r"<!-- NAV:START[^>]*-->.*?<!-- NAV:END -->", re.DOTALL)


def replacement_for(source: Path) -> str:
    nav_html = source.read_text().rstrip()
    return (
        f"<!-- NAV:START - auto-synced from common-assets/{source.name} - "
        "run scripts/sync-nav.py to update -->\n"
        f"{nav_html}\n"
        "<!-- NAV:END -->"
    )


def main() -> int:
    for source, _pages in GROUPS.values():
        if not source.exists():
            print(f"ERROR: source not found at {source}", file=sys.stderr)
            return 1

    updated = 0
    skipped = []
    for group, (source, pages) in GROUPS.items():
        replacement = replacement_for(source)
        for rel in pages:
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
                print(f"OK   [{group}] {rel}")
            else:
                print(f"SAME [{group}] {rel}")

    if skipped:
        print("\nSkipped:")
        for s in skipped:
            print(f"  - {s}")
    print(f"\nDone. {updated} file(s) updated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
