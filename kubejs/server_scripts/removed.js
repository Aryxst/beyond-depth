// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal
ServerEvents.recipes(event => {
  // Remove original recipes for iron and gold tools, armor, horse armor
  const itemsToRemove = [
    // Armor
    "minecraft:iron_helmet",
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",
    "minecraft:golden_helmet",
    "minecraft:golden_chestplate",
    "minecraft:golden_leggings",
    "minecraft:golden_boots",
    "minecraft:diamond_helmet",
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",
    // Horse Armor
    "minecraft:iron_horse_armor",
    "minecraft:golden_horse_armor",
    // other
  ];

  itemsToRemove.forEach(item => {
    event.remove({ id: item });
  });
});
