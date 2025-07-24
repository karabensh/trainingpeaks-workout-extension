import { openOrCreateWorkoutFolder } from './workout-folder-creator.js';

export function createBaseWorkout() {
	openWorkoutLibraryIfNeeded();
	openOrCreateWorkoutFolder();
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
}