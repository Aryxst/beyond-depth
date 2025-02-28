// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
    event.remove({ id: 'celestisynth:starlit_factory' })
});

ServerEvents.recipes(event => {
    event.shaped('celestisynth:starlit_factory', [
      'XWX',
      'zxy',
      'ccc'
    ], {
      c: 'minecraft:obsidian',  
      X: 'celestisynth:celestial_netherite_ingot',
      W: 'deeperdarker:warden_carapace',
      z: 'minecraft:smithing_table',
      x: 'minecraft:crafting_table',
      y: 'minecraft:blast_furnace',
    });
  });