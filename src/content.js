import browser from "webextension-polyfill";
import { clickWorkoutBlockByTitle } from "./workout";

console.log("Content script active");

browser.runtime.onMessage.addListener((message) => {
  console.log("Received message:", message);
  console.log("Received message:", message);
  if (message.action === "clickWarmup") {
    clickWorkoutBlockByTitle("Warm up");
  }
});
