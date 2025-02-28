// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {

    event.remove({ id: 'rubinated_nether:ruby_chandelier' })
    event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
});

ServerEvents.recipes(event => {
    event.shaped('rubinated_nether:ruby_chandelier', [
      'ccc',
      'cCc',
      'ccc'
    ], {
      c: 'rubinated_nether:molten_ruby_nugget',  
      C: 'minecraft:copper_block'
    });
  });
ServerEvents.recipes(event => {
    event.shaped('minecraft:netherite_upgrade_smithing_template', [
      'cAc',
      'cCc',
      'ccc'
    ], {
      c: 'rubinated_nether:ruby',  
      C: 'minecraft:obsidian',
      A: 'minecraft:netherite_upgrade_smithing_template'
    }).result('2x minecraft:netherite_upgrade_smithing_template');
});