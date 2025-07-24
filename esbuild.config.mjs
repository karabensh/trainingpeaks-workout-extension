#!/usr/bin/env node

import esbuild from "esbuild";
import fs from "fs";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { UI_IDS } from "./src/constants/ui.js";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine target (chrome or firefox)
const target = process.argv[2] || "chrome";

// Set Outpud directory
const outdir = "dist";

// Step 1: Clean output directory
fs.rmSync(outdir, { recursive: true, force: true });
fs.mkdirSync(outdir, { recursive: true });

// Step 2: Copy static files
const staticFiles = [
	{ src: "assets/icon.png", dest: "assets/icon.png" },
];

staticFiles.forEach(({ src, dest }) => {
	const from = path.join(__dirname, src);
	const to = path.join(__dirname, outdir, dest);
	fs.mkdirSync(path.dirname(to), { recursive: true });
	fs.copyFileSync(from, to);
});

// Step 3: Render popup.html from EJS template
const popupTemplatePath = path.join(__dirname, "src/popup.ejs");
const popupHtmlPath = path.join(__dirname, outdir, "popup.html");

const popupTemplate = fs.readFileSync(popupTemplatePath, "utf-8");
const renderedHtml = ejs.render(popupTemplate, { UI_IDS });

fs.writeFileSync(popupHtmlPath, renderedHtml);
console.log("✅ popup.html rendered");

// Step 4: Copy appropriate manifest
const manifestFile = target === "firefox" ? "manifest.firefox.json" : "manifest.chrome.json";
fs.copyFileSync(path.join(__dirname, manifestFile), path.join(__dirname, outdir, "manifest.json"));

// Step 5: Build all JS entry points
esbuild.buildSync({
	entryPoints: [
		"src/content.js",
		"src/background.js",
		"src/popup.js"
	],
	outdir,
	bundle: true,
	format: target === "firefox" ? "iife" : "esm", // Use ESM for Firefox, IIFE for Chrome
	platform: "browser",
	target: ["chrome58", "firefox57"],
	loader: { ".js": "js" },
	sourcemap: true,
});

console.log(`✅ Build complete for: ${target}`);
