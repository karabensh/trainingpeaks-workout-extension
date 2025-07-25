export function openOrCreateWorkoutFolder() {
	if (doesWorkoutFolderExist()) {
		console.log("Workout folder already exists.");
		return;
	}

	console.log("Creating workout folder... (or at least we will one day.");
	createWorkoutFolder();
}

const WORKOUT_FOLDER_NAME = 'EZPZ TP Creator';

export function getWorkoutFolder() {
	const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".workoutLibraryFolder .titleContain");
	for (const element of elements) {
		if (element.innerText.trim() == WORKOUT_FOLDER_NAME) {
			const header = element.closest(".listHeader");
			if (header) {
				return header;
			}
		}
	}

	console.log('Extension\'s folder not found.');
	return null;
}

function doesWorkoutFolderExist() {
	if (getWorkoutFolder() !== null) {
		console.log('Extension\'s folder exists.');
		return true;
	}

	console.log('Extension\'s folder not found.');
	return false;
}

function createWorkoutFolder() {
	// This function creates a new workout folder.
	clickAddButton();
	clickFolderButton();
	enterFolderName();
	submitFolderCreation();
}

function clickAddButton() {
	const addButton = document.querySelector('.workoutLibraryControls .addOptionsButton');
	if (!addButton) {
		console.error("Add button not found in workout library controls.");
		return;
	}
	
	addButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	console.log("Add button clicked, now creating folder...");
}

function clickFolderButton() {
	const folderButton = document.querySelector('.workoutLibraryControls .addOptionsButton .addOption[data_cy="addWorkoutLibrary"]');
	if (!folderButton) {
		console.error("Folder button not found in workout library controls.");
		return;
	}

	folderButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	console.log("Folder button clicked, now entering folder name...");
}

function enterFolderName() {
	const folderNameInput = document.querySelector('tp-dialog.createGroup input') as HTMLInputElement | null;

	if (!folderNameInput) {
		console.error("Folder name input not found.");
		return;
	}

	folderNameInput.value = WORKOUT_FOLDER_NAME;
	folderNameInput.dispatchEvent(new Event('input', { bubbles: true }));
	folderNameInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
	console.log("Folder name entered... Need to create it.");
}

function submitFolderCreation() {
	const submitButton = document.querySelector('tp-dialog.createGroup tp-button-primary');
	if (!submitButton) {
		console.error("'Add' button not found for folder creation.");
		return;
	}

	submitButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	console.log("Folder creation submitted.");
}