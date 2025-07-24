#!/usr/bin/env node

const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const target = process.argv[2] || "chrome";
const outdir = "dist";

// Clean and recreate dist
fs.rmSync(outdir, { recursive: true, force: true });
fs.mkdirSync(outdir, { recursive: true });

// Copy static files
["popup.html", "assets/icon.png"].forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(__dirname, outdir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
});

// Copy appropriate manifest
const manifestFile = target === "firefox" ? "manifest.firefox.json" : "manifest.chrome.json";
fs.copyFileSync(path.join(__dirname, manifestFile), path.join(__dirname, outdir, "manifest.json"));

// Build scripts
esbuild.buildSync({
  entryPoints: [
    "src/content.js",
    "src/background.js",
    "src/popup.js"
  ],
  outdir,
  bundle: true,
  format: "iife",
  target: ["chrome58", "firefox57"],
  loader: { ".js": "js" },
  sourcemap: true,
});

console.log(`✅ Build complete for target: ${target}`);
