import browser from "webextension-polyfill";
import { UI_IDS } from './constants/ui.js';


var buildBtn = document.getElementById(UI_IDS.BUILD_BTN);
if (!buildBtn) {
	console.error("Build button not found in popup.");
} else {
	buildBtn.addEventListener("click", async () => {
		const input = document.getElementById(UI_IDS.INPUT) as HTMLInputElement | null;
		if (!input) {
			alert("Please enter a valid JSON input.");
			return;
		}

		if (!input.value || input.value.trim() === "") {
			alert("Input field is empty. Please enter a valid JSON.");
			return;
		}

		const inputValue = input.value
		let workoutData;
		try {
			console.log("Input received: " + input);
			workoutData = JSON.parse(inputValue);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error("Error:", e.message);
			} else {
				console.error("Unknown error:", e);
			}
		}

		const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
		if (tab.id !== undefined) {
			browser.scripting.executeScript({
				target: { tabId: tab.id },
				func: buildWorkoutFromJson,
				args: [workoutData]
			});
		} else {
			console.error("Tab ID is undefined. Cannot execute script.");
		}
	});
}

function buildWorkoutFromJson(data: object) {
	console.log("Received structured workout: " + JSON.stringify(data, null, 2));
	alert("Building workout from JSON...\n(Actual implementation coming soon)");
}

var testNamedBlockBtn = document.getElementById(UI_IDS.TEST_NAMED_BLOCK_BTN);
if (testNamedBlockBtn) {
	testNamedBlockBtn.addEventListener("click", async () => {
		const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

		if (tab.id !== undefined) {
			await browser.tabs.sendMessage(tab.id, { action: UI_IDS.TEST_NAMED_BLOCK_BTN });
		} else {
			console.error("Tab ID is undefined. Cannot send message for Named Block Test.");
		}
	});
}

var createBaseWorkoutBtn = document.getElementById(UI_IDS.CREATE_BASE_WORKOUT_BTN);
if (createBaseWorkoutBtn) {
	createBaseWorkoutBtn.addEventListener("click", async () => {
		const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

		if (tab.id !== undefined) {
			await browser.tabs.sendMessage(tab.id, { action: UI_IDS.CREATE_BASE_WORKOUT_BTN });
		} else {
			console.error("Tab ID is undefined. Cannot send message for base workout creation.");
		}
	});
}