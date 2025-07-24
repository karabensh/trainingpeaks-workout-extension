# TrainingPeaks Workout Builder Extension

This extension helps automate structured workout creation in TrainingPeaks.

---

## 🧱 Project Structure
trainingpeaks-workout-extension/  
├── assets/ # Static assets like icons  
├── dist/ # Build output (ignored in Git)  
├── scripts/ # Utility scripts (e.g., template renderer)  
├── src/ # Extension source code  
│ ├── constants/ # Shared constants  
│ ├── background.js # Background script  
│ ├── content.js # Content script injected into TrainingPeaks  
│ ├── popup.js # Popup behavior  
│ ├── popup.ejs # EJS template for popup.html  
│ ├── message-handler.js # Handles messaging between scripts  
│ └── workout*.js # Workout logic  
├── tests/ # Jest unit tests  
├── esbuild.config.mjs # ESM-based build script using esbuild  
├── manifest.chrome.json # Chrome-specific manifest template  
├── manifest.firefox.json # Firefox-specific manifest template  
└── package.json  

- `src/` — Contains modular JavaScript files
- `src/popup.html`, `assets/` — Static files
- `manifest.chrome.json` — Chrome-compatible (Manifest V3)
- `manifest.firefox.json` — Firefox-compatible (Manifest V2)
- `esbuild.config.js` — Bundles and builds for the chosen browser
- `package.json` — Defines build scripts
- `dist/` — Generated build output (load this in the browser)

---

## 🚀 Build Instructions
This will
- Clean the dist/ directory
- Copy static assets
- Render popup.html using EJS
- Bundle JS with esbuild
- Copy the appropriate manifest.json

### 1. Install dependencies
```bash
npm install
```

### 2. Build for Chrome (Manifest V3 with ES modules)
```bash
npm run build:chrome
```

### 3. Build for Firefox (Manifest V2 fallback, no modules)
```bash
npm run build:firefox
```

---

## 📦 Output

The output is written to the `dist/` directory and includes:
- background.js, content.js, popup.js – bundled JS
- popup.html – rendered from EJS
- manifest.json – dynamically chosen
- assets/ – icons and other static files

---

## 🧪 Firefox Testing Notes

If you'd like to test Manifest V3 in Firefox:

1. Visit `about:config`
2. Enable:
	 - `extensions.manifestV3.enabled` → `true`
	 - `extensions.backgroundServiceWorker.enabled` → `true`
3. Restart Firefox

Or use the Manifest V2 fallback (`build:firefox`) for full compatibility.

---

## 🖥️ Technologies Used
- esbuild – fast JavaScript bundler
- EJS – for generating popup HTML
- Jest – unit testing
- Modern JavaScript (ES Modules)

## ✨ Plans
- Support structured workout import from text or CSV