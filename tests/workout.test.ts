import { clickWorkoutBlockByTitle } from "../src/workout";

test('clicks the block with title "Warm up"', () => {
	document.body.innerHTML = `
		<div class="block" draggable="true" title="Warm up">
			<svg class="warmUp"><polygon points="..." /></svg>
		</div>
	`;

	const warmUp = document.querySelector('div.block[title="Warm up"]');
	if (!warmUp) {
		throw new Error('Warm up block not found in the document.');
	}
	const clickHandler = jest.fn();
	warmUp.addEventListener('click', clickHandler);

	clickWorkoutBlockByTitle('Warm up');

	expect(clickHandler).toHaveBeenCalled();
});

test('does not click a block with a different title', () => {
	document.body.innerHTML = `
		<div class="block" draggable="true" title="Cool down">
			<svg class="coolDown"><polygon points="..." /></svg>
		</div>
	`;

	const coolDown = document.querySelector('div.block[title="Cool down"]');
	if (!coolDown) {
		throw new Error('Cool down block not found in the document.');
	}
	const clickHandler = jest.fn();
	coolDown.addEventListener('click', clickHandler);

	clickWorkoutBlockByTitle('Warm up');

	expect(clickHandler).not.toHaveBeenCalled();
});