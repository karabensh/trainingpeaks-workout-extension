import { openOrCreateWorkoutFolder, getWorkoutFolder } from './workout-folder-creator.js';
import { waitForElement, waitForElementThenClick } from './utils.js';

export async function initWorkout() {
	openWorkoutLibraryIfNeeded();
	openOrCreateWorkoutFolder();
	await createWorkoutItem();
}

function openWorkoutLibraryIfNeeded() {
	// This function checks if the workout library is open and opens it if not.
	const workoutLibrary = document.querySelector('#exerciseLibrary');
	if (workoutLibrary.classList.contains('active')) {
		console.log("Workout library is already open.");
		return;
	}

	console.log("Opening workout library...");
	workoutLibrary.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	if (!workoutLibrary.classList.contains('active')) {
		console.error("Could Not Open Workout library.");
		return;
	}
}

async function createWorkoutItem() {
	element = getWorkoutFolder();
	if (element === null) {
		console.error("Workout folder not found, cannot create workout.");
		return;
	}

	openOptionsMenu(element);
	await clickCreateWorkoutButton();
	await inputWorkoutName("Test My Workout");
	await submitFolderCreation();
	await selectWorkoutType("Run");
}

function openOptionsMenu(folderElement) {
	console.log("We got the folder and will be creating workout in folder:", folderElement);
	const openOptionsButton = folderElement.querySelector('.foldersettingsButton');
	if (!openOptionsButton) {
		console.error("Open Options button not found in workout library controls.");
		return;
	}

	openOptionsButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	console.log("Open Options button clicked, can now create workout...");
}

async function clickCreateWorkoutButton() {
	await waitForElementThenClick('[data_cy="addWorkout"]');
	console.log("Create workout button clicked, now creating workout...");
}

async function inputWorkoutName(workoutName) {
	const folderNameInput = await waitForElement('.createGroup input');
	if (!folderNameInput) {
		console.error("Workout name input not found.");
		return;
	}

	folderNameInput.value = workoutName;
	folderNameInput.dispatchEvent(new Event('input', { bubbles: true }));
	folderNameInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
	console.log("Workout name entered... Need to create it.");
}

async function submitFolderCreation() {
	await waitForElement('.createGroup button');
	const buttons = document.querySelectorAll(".createGroup button");
	for (const button of buttons) {
		if (button.innerText.trim() == 'Add') {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			console.log("Workout creation submitted.");
			return;
		}
	}
	console.error("'Add' button not found for workout creation.");
}

async function selectWorkoutType(workoutType) {
	try {
		// Wait for the buttons to load
		await waitForElement(".newItemViewWorkouts button");

		const workoutTypeButtons = document.querySelectorAll(".newItemViewWorkouts button");
		for (const button of workoutTypeButtons) {
			if (button.innerText.trim() == workoutType) {
				button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
				console.log(`Workout type ${workoutType} selected.`);
				return;
			}
		}
		
		console.error(`Workout type button for ${workoutType} not found.`);
	} catch (err) {
		console.error("Workout type selector never appeared:", err);
	}
}