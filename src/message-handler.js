import { clickWorkoutBlockByTitle } from "./workout";
import * as WorkoutBlockTypes from './constants/workout-block-types.js';
import { UI_IDS } from './constants/ui.js';

var count = 0;

export function messageHandler(message) {
  console.log("Handling message:", message);
  if (message.action === UI_IDS.TEST_NAMED_BLOCK_BTN) {
    clickWorkoutBlockByTitle(
      WorkoutBlockTypes.BLOCK_TYPE_LIST[count % WorkoutBlockTypes.BLOCK_TYPE_LIST.length],
      document
    );
    count++;
  } else if (message.action === UI_IDS.CREATE_BASE_WORKOUT_BTN) {
    // TODO: Implement the logic to create a base workout
    alert("Base workout creation logic is not yet implemented.");
  }
};
