# 0DTE Options Scanner

AI-powered 0DTE options scanner. Pulls live price, VWAP, relative volume,
and MA data from Yahoo Finance, then uses Google Gemini AI to score
call/put setups 0–100 for every ticker you scan.

---

## SETUP — ONE TIME ONLY

### 1. Get your free Gemini API key
- Go to: https://aistudio.google.com/app/apikey
- Sign in with Google
- Click "Create API key"
- Copy it — looks like: AIzaSy...
- FREE. No credit card. 1,500 requests/day.

### 2. Create a GitHub account (if you don't have one)
- Go to: https://github.com
- Sign up free

### 3. Create a new repository
- Click the + icon top right → New repository
- Name: 0dte-scanner
- Set to Public
- Click "Create repository"

### 4. Upload all files
- On your new repo page, click "uploading an existing file"
- Drag and drop ALL 6 files:
    index.html
    manifest.json
    sw.js
    icon-192.png
    icon-512.png
    README.md
- Click "Commit changes"

### 5. Turn on GitHub Pages
- Go to repo Settings tab
- Click Pages in the left sidebar
- Source: Deploy from a branch
- Branch: main | Folder: / (root)
- Click Save
- Wait 60 seconds

### 6. Your app is live at:
https://YOUR-GITHUB-USERNAME.github.io/0dte-scanner

---

## INSTALL ON YOUR PHONE

### iPhone (Safari only — must use Safari):
1. Open your app URL in Safari
2. Tap the Share button (box with arrow pointing up)
3. Scroll down → tap "Add to Home Screen"
4. Tap Add
5. App icon appears on home screen, opens full screen

### Android (Chrome):
1. Open your app URL in Chrome
2. Tap the 3-dot menu
3. Tap "Add to Home screen"
4. Tap Add

---

## HOW TO USE

1. Open the app — first time it asks for your Gemini API key (paste it once)
2. Pick a preset (Mag 7, Indexes, Hot Tech, ETFs) or type your own tickers
3. Hit SCAN
4. Each card shows:
   - Live price and % change
   - Real VWAP with above/below indicator
   - Time-adjusted relative volume
   - Day range position
   - MA50 relationship
   - Call score 0–100 and Put score 0–100
   - Signal pills and plain-english callout
5. Tap any card for full deep-dive breakdown with specific strike, entry, target, stop

---

## HOW TO UPDATE THE APP

Whenever you want new features, come to Claude, ask for an update,
get a new index.html, then:

1. Go to your GitHub repo: github.com/YOUR-USERNAME/0dte-scanner
2. Click index.html in the file list
3. Click the pencil icon (Edit this file)
4. Select all (Ctrl+A or Cmd+A), delete, paste the new code
5. Click "Commit changes"
6. Live in about 30 seconds

---

## HOW IT WORKS

1. You enter tickers or pick a preset
2. App fetches from Yahoo Finance (free, no key needed):
   - Real-time price + % change
   - 5-minute intraday bars → calculates true VWAP
   - Time-adjusted relative volume vs 3-month average
   - Day high/low range position
   - 50-day and 200-day moving averages
   - 5-bar price momentum direction
3. All real numbers go into a detailed prompt to Gemini AI
4. Gemini scores each ticker 0–100 for call and put setup quality
5. Results sorted best setup first
6. Tap any card for full breakdown with specific trade instructions

---

## COST BREAKDOWN

| Service         | Cost     |
|-----------------|----------|
| GitHub Pages    | FREE     |
| Yahoo Finance   | FREE     |
| Google Gemini   | FREE     |
| Total           | $0.00    |

