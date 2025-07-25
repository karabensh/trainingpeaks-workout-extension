import ejs from "ejs";
import fs from "fs";
import path from "path";
import { UI_IDS } from "./src/constants/ui";

const templatePath = path.resolve(__dirname, '../src/popup.ejs');
const outputPath = path.resolve(__dirname, '../dist/popup.html');

(async () => {
	const template = fs.readFileSync(templatePath, 'utf-8');
	const html = ejs.render(template, { UI_IDS });
	fs.writeFileSync(outputPath, html);
	console.log('✅ popup.html rendered with injected constants');
})();
