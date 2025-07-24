import browser from "webextension-polyfill";
import { UI_IDS } from './constants/ui.js';

document.getElementById(UI_IDS.BUILD_BTN).addEventListener("click", async () => {
	const input = document.getElementById(UI_IDS.INPUT).value;
	let workoutData;
	try {
				console.log("Input received: " + input);
		workoutData = JSON.parse(input);
	} catch (e) {
		alert("Invalid JSON: " + e.message);
		return;
	}

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: buildWorkoutFromJson,
		args: [workoutData]
	});
});

function buildWorkoutFromJson(data) {
	console.log("Received structured workout: " + JSON.stringify(data, null, 2));
	alert("Building workout from JSON...\n(Actual implementation coming soon)");
}

document.getElementById(UI_IDS.TEST_NAMED_BLOCK_BTN).addEventListener("click", async () => {
	const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
	await browser.tabs.sendMessage(tab.id, { action: UI_IDS.TEST_NAMED_BLOCK_BTN });
});

document.getElementById(UI_IDS.CREATE_BASE_WORKOUT_BTN).addEventListener("click", async () => {
	const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
	await browser.tabs.sendMessage(tab.id, { action: UI_IDS.CREATE_BASE_WORKOUT_BTN });
});