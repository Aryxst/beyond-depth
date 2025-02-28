// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  event.remove({ id: "additionaladditions:rose_gold_alloy" });
});

ServerEvents.recipes(event => {
  event.recipes.create.mixing("additionaladditions:rose_gold_alloy", [
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:copper_ingot",
    "minecraft:copper_ingot",
    "minecraft:copper_ingot",
  ]);
});
