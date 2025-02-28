// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal
ServerEvents.recipes(event => {
  event.remove({ id: 'galosphere:silver_upgrade_smithing_template' });
});

ServerEvents.recipes(event => {
    event.shaped('galosphere:silver_upgrade_smithing_template', [
      'cCc',
      'CcC',
      'cCc'
    ], {
      C: 'galosphere:silver_ingot',
      c: '#minecraft:planks'
    }).id('galosphere:silver_upgrade_smithing_template');
  
    event.shaped('galosphere:silver_upgrade_smithing_template', [
      'cPc',
      'cCc',
      'ccc'
    ], {
      C: 'galosphere:silver_ingot',
      c: '#minecraft:planks',
      P: 'galosphere:silver_upgrade_smithing_template'
    }).result('2x galosphere:silver_upgrade_smithing_template')
});