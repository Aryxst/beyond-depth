BlockEvents.modification(event => {
  event.modify("celestisynth:starlit_factory", block => {
    block.destroySpeed = 30;
  });
});
