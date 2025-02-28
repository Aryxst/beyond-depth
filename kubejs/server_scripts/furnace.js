// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:furnace' })
});

ServerEvents.recipes(event => {
    event.shaped('minecraft:furnace', [
      'ccc',
      'cCc',
      'ccc'
    ], {
      c: 'minecraft:cobblestone',  
      C: '#minecraft:coals'          
    });
  });