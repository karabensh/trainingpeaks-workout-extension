// src/constants/ui.js
export const UI_IDS = Object.freeze({
	INPUT: 'workoutInput',
	BUILD_BTN: 'buildBtn',
	TEST_NAMED_BLOCK_BTN: 'testNamedBlockBtn',
	CREATE_BASE_WORKOUT_BTN: 'createBaseWorkoutBtn',
});

export type Message
	= { action: "buildBtn" }
	| { action: "testNamedBlockBtn" }
	| { action: "createBaseWorkoutBtn"};

export function isValidMessage(msg: unknown): msg is Message {
	return (
		typeof msg === "object"
		&& msg !== null
		&& "action" in msg
		&& typeof (msg as any).action === "string"
		&& ["buildBtn", "testNamedBlockBtn", "createBaseWorkoutBtn"].includes((msg as any).action)
	);
}