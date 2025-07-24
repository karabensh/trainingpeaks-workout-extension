const { clickWorkoutBlockByTitle } = require('../src/workout');

test('clicks the block with title "Warm up"', () => {
  document.body.innerHTML = `
    <div class="block" draggable="true" title="Warm up">
      <svg class="warmUp"><polygon points="..." /></svg>
    </div>
  `;

  const warmUp = document.querySelector('div.block[title="Warm up"]');
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
  const clickHandler = jest.fn();
  coolDown.addEventListener('click', clickHandler);

  clickWorkoutBlockByTitle('Warm up');

  expect(clickHandler).not.toHaveBeenCalled();
});