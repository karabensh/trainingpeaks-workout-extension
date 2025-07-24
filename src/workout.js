function clickWarmUp(container) {
  const warmupButton = container.querySelector('div.block[title="Warm up"]');
  if (warmupButton) {
    warmupButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }
}

module.exports = { clickWarmUp };