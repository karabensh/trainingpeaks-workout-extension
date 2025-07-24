import browser from "webextension-polyfill";
import { clickWorkoutBlockByTitle } from "./workout";
import * as WorkoutBlockTypes from './constants/workout-block-types.js';

console.log("Content script active");

var count = 0;

browser.runtime.onMessage.addListener((message) => {
  console.log("Received message:", message);
  console.log("Received message:", message);
  if (message.action === "clickWarmup") {

    clickWorkoutBlockByTitle(
      WorkoutBlockTypes.BLOCK_TYPE_LIST[count% WorkoutBlockTypes.BLOCK_TYPE_LIST.length]
      , document
    );
    count++;
  }
});
