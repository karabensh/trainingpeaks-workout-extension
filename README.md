# TrainingPeaks Workout Builder Extension (with esbuild)

This extension helps automate structured workout creation in TrainingPeaks.

---

## 🧱 Project Structure

- `src/` — Contains modular JavaScript files
- `popup.html`, `assets/` — Static files
- `manifest.chrome.json` — Chrome-compatible (Manifest V3)
- `manifest.firefox.json` — Firefox-compatible (Manifest V2)
- `esbuild.config.js` — Bundles and builds for the chosen browser
- `package.json` — Defines build scripts
- `dist/` — Generated build output (load this in the browser)

---

## 🚀 Build Instructions

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

## 🔍 Output

The output is written to the `dist/` directory and includes:
- Bundled JS files (`content.js`, `popup.js`, `background.js`)
- `manifest.json` (copied from the appropriate source)
- `popup.html` and icons

---

## 🧪 Firefox Testing Notes

If you'd like to test Manifest V3 in Firefox:

1. Visit `about:config`
2. Enable:
   - `extensions.manifestV3.enabled` → `true`
   - `extensions.backgroundServiceWorker.enabled` → `true`
3. Restart Firefox

Or use the Manifest V2 fallback (`build:firefox`) for full compatibility.
