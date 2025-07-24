import browser from "webextension-polyfill";
import { ID_NAMES } from './constants/ui.js';

document.getElementById(ID_NAMES.BUILD_BTN).addEventListener("click", async () => {
	const input = document.getElementById(ID_NAMES.INPUT).value;
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

document.getElementById(ID_NAMES.TEST_NAMED_BLOCK_BTN).addEventListener("click", async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  await browser.tabs.sendMessage(tab.id, { action: ID_NAMES.TEST_NAMED_BLOCK_BTN });
});

document.getElementById(ID_NAMES.CREATE_BASE_WORKOUT_BTN).addEventListener("click", async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  await browser.tabs.sendMessage(tab.id, { action: ID_NAMES.CREATE_BASE_WORKOUT_BTN });
});