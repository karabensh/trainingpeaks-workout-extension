import { waitForElementThenClick } from "./utils";
import { initWorkout } from "./workout-init";

export async function createStructuredWorkout() {
	console.log("Creating structured workout...");
	await initWorkout();
	await startStructuredWorkoutCreation();
	await selectUnits();
	await save();
}

async function startStructuredWorkoutCreation() {
	// This function starts the structured workout creation process.
	console.log("Starting structured workout creation...");
	await waitForElementThenClick('.buildWorkout')
}

async function selectUnits() {
	// TODO: Implement unit selection logic. For now, we will just click the update button.
	console.log("Selecting units for the workout...");
	await waitForElementThenClick('.unitsSelection .updateUnitsButton');
}

async function save() {
	console.log("Saving the structured workout...");
	await waitForElementThenClick('.saveCloseButtons button#close');
}