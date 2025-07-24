import { openOrCreateWorkoutFolder, getWorkoutFolder } from './workout-folder-creator.js';

export function createWorkout() {
	openWorkoutLibraryIfNeeded();
	openOrCreateWorkoutFolder();
	createWorkoutItem();
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

function createWorkoutItem() {
	element = getWorkoutFolder();
	if (element === null) {
		console.error("Workout folder not found, cannot create workout.");
		return;
	}

	openOptionsMenu(element);
	clickCreateWorkoutButton();
	inputWorkoutName("Test My Workout");
	submitFolderCreation();
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

function clickCreateWorkoutButton() {
	const createWorkoutButton = document.querySelector('[data_cy="addWorkout"]');
	if (!createWorkoutButton) {
		console.error("Create workout button not found in workout library controls.");
		return;
	}

	createWorkoutButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	console.log("Create workout button clicked, now creating workout...");
}

function inputWorkoutName(workoutName) {
	const folderNameInput = document.querySelector('.createGroup input');
	if (!folderNameInput) {
		console.error("Workout name input not found.");
		return;
	}

	folderNameInput.value = "Test My Workout";
	folderNameInput.dispatchEvent(new Event('input', { bubbles: true }));
	folderNameInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
	console.log("Workout name entered... Need to create it.");
}

function submitFolderCreation() {
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