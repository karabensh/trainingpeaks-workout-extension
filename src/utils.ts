export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function waitForElement(selector: string, timeout: number = 5000): Promise<Element> {
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


export async function waitForElementThenClick(selector: string, timeout: number = 5000): Promise<Element | null>{
	const el = await waitForElement(selector, timeout) as HTMLElement;

	if (!el) {
		console.error(`Element not found for clicking: ${selector}`);
		return null;
	}

	el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	return el;
}