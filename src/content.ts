import browser from "webextension-polyfill";
import { messageHandler } from "./message-handler";
import { isValidMessage } from "./constants/ui.js";

console.log("Content script active");

browser.runtime.onMessage.addListener((message: unknown) => {
	if (isValidMessage(message)) {
		console.log("Received message:", message);
		messageHandler(message);
	}
});