import browser from "webextension-polyfill";
import { messageHandler } from "./message-handler";

console.log("Content script active");

browser.runtime.onMessage.addListener((message) => {
  console.log("Received message:", message);

  messageHandler(message);
});
