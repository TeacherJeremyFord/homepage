#!/usr/bin/env bash
# Push this showcase copy to TeacherJeremyFord/homepage (GitHub Pages serves main /).
set -euo pipefail
cd "$(dirname "$0")"
git add -A && git commit -qm "Update showcase" || true
git push -q teacher main
echo "Published: https://teacherjeremyford.github.io/homepage/ (live in ~1 minute)"
