function clickWorkoutBlockByTitle(title, container = document) {
  const block = container.querySelector(`div.block[title="${title}"]`);
  if (block) {
    block.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }
}

module.exports = { clickWorkoutBlockByTitle };
