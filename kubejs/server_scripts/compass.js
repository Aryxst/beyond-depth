
ServerEvents.recipes(event => {
  // Add the new shaped recipe for Nature's Compass                                                                                                                                                           made by blueversal
  event.shaped('naturescompass:naturescompass', [
      'EDE',
      'GCI',
      'ScZ'
  ], {
      E: 'minecraft:emerald',         
      D: 'minecraft:diamond',         
      G: 'create:golden_sheet',       
      C: 'minecraft:compass',         
      I: 'create:iron_sheet',         
      S: 'galosphere:silver_ingot',   
      c: 'minecraft:copper_ingot',    
      Z: 'create:zinc_ingot'          
  });
});
