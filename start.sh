#!/bin/sh
# Serve the app locally and open it in your browser.
cd "$(dirname "$0")"
PORT=${PORT:-8765}
( sleep 1; open "http://localhost:$PORT" ) &
echo "Drug Target Flashcards running at http://localhost:$PORT (Ctrl+C to stop)"
python3 -m http.server "$PORT" --bind 127.0.0.1
