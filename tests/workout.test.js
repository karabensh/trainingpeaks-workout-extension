const { clickWarmUp } = require('../src/workout');

test('clicks the warm up block div by title attribute', () => {
  document.body.innerHTML = `
    <div class="block" draggable="true" title="Warm up">
      <svg class="warmUp" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <polygon points="0 1000, 0 0, 1000 0, 1000 1000"></polygon>
      </svg>
    </div>
  `;

  const warmupDiv = document.querySelector('div.block[title="Warm up"]');
  const clickHandler = jest.fn();
  warmupDiv.addEventListener('click', clickHandler);

  clickWarmUp(document);

  expect(clickHandler).toHaveBeenCalled();
});
