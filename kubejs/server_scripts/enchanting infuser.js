
ServerEvents.recipes(event => {

  event.remove({ id: 'enchantinginfuser:advanced_enchanting_infuser' })
});

ServerEvents.recipes(event => { 
                                                                                                                                                                                        // made by blueversal
  event.shaped('enchantinginfuser:advanced_enchanting_infuser', [
      ' B ',
      'NSN',
      'CEC'
  ], {
      B: 'minecraft:book',         
      N: 'minecraft:netherite_ingot',         
      S: 'minecraft:nether_star',       
      C: 'minecraft:crying_obsidian',
      E: 'enchantinginfuser:enchanting_infuser',
  });
});
