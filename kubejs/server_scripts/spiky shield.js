// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  event.remove({ id: "legendary_monsters:spiky_shield" });
});

ServerEvents.recipes(event => {
  event.shaped("legendary_monsters:spiky_shield", ["cC ", "be ", "   "], {
    C: "minecraft:shield",
    c: "legendary_monsters:ancient_spike",
    b: "legendary_monsters:molten_metal_ingot",
    e: "legendary_monsters:chiseled_ancient_dripstone_shard",
  });
});
