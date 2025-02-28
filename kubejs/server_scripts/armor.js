// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  // Add custom recipes
  // Iron and Gold Plates (using Create mod sheets)
  const ironPlate = 'create:iron_sheet';
  const goldPlate = 'create:golden_sheet';
  const ironIngot = 'minecraft:iron_ingot';
  const goldIngot = 'minecraft:gold_ingot';
  const nugget = 'minecraft:iron_nugget';
  // Armor Recipes
  const armorShapes = {
      helmet: ['PpP', 'p p'],
      chestplate: ['p p', 'PPP', 'pPp'],
      leggings: ['PpP', 'p p', 'P P'],
      boots: ['p p', 'P P']
  };

  for (const [armor, pattern] of Object.entries(armorShapes)) {
      event.shaped(`minecraft:iron_${armor}`, pattern, { P: ironIngot, p: ironPlate });
      event.shaped(`minecraft:golden_${armor}`, pattern, { P: goldIngot, p: goldPlate });
      event.shaped(`minecraft:chainmail_${armor}`, pattern, { P: ironIngot, p: nugget });
  }

  // Horse Armor Recipes
  event.shaped('minecraft:iron_horse_armor', ['p p', 'PpP', 'p p'], { P: ironIngot, p: ironPlate });
  event.shaped('minecraft:golden_horse_armor', ['p p', 'PpP', 'p p'], { P: goldIngot, p: goldPlate });
});