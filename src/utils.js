export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function waitForElement(selector, timeout = 5000) {
	return new Promise((resolve, reject) => {
		const startTime = Date.now();
		const interval = setInterval(() => {
			const el = document.querySelector(selector);
			if (el) {
				clearInterval(interval);
				resolve(el);
			} else if (Date.now() - startTime > timeout) {
				clearInterval(interval);
				reject(new Error("Element not found: " + selector));
			}
		}, 100);
	});
}

export async function waitForElementThenClick(selector, timeout = 5000) {
	await waitForElement(selector, timeout);

	const el = document.querySelector(selector);
	if (el) {
		el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		console.log(`Element clicked: ${selector}`);
	}
	else {
		console.error(`Element not found for clicking: ${selector}`);
	}
}