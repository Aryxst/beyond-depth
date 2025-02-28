// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  // Define the custom items
  const diamond = "minecraft:diamond";
  const diamondshard = "born_in_chaos_v1:diamond_termite_shard";

  // Helmet Recipe
  event.shaped("minecraft:diamond_helmet", ["dDd", "DHD"], {
    D: diamondshard,
    d: diamond,
    H: "additionaladditions:rose_gold_helmet",
  });

  // Chestplate Recipe                                                                                                                                                                                          //made by blueversal
  event.shaped("minecraft:diamond_chestplate", ["d d", "DCD", "dDd"], {
    D: diamondshard,
    d: diamond,
    C: "additionaladditions:rose_gold_chestplate",
  });

  // Leggings Recipe
  event.shaped("minecraft:diamond_leggings", ["dLd", "D D", "d d"], {
    D: diamondshard,
    d: diamond,
    L: "additionaladditions:rose_gold_leggings",
  });

  // Boots Recipe
  event.shaped("minecraft:diamond_boots", ["D D", "dBd"], {
    D: diamondshard,
    d: diamond,
    B: "additionaladditions:rose_gold_boots",
  });
});
