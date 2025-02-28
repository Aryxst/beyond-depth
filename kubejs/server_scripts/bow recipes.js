// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  event.remove({ id: "too_many_bows:twin_shadows" });
});

ServerEvents.recipes(event => {
  event.shaped("too_many_bows:ancient_sage_bow", ["cec", "CbC", "cCc"], {
    c: "minecraft:emerald",
    C: "too_many_bows:power_crystal",
    b: "minecraft:bow",
    e: "undergarden:forgotten_ingot",
  });
});

ServerEvents.recipes(event => {
  event.shaped("too_many_bows:twin_shadows", ["CAC", "cbc", "CcC"], {
    A: "minecraft:netherite_ingot",
    c: "minecraft:quartz",
    C: "minecraft:obsidian",
    b: "minecraft:bow",
  });
});

ServerEvents.recipes(event => {
  event.shaped("too_many_bows:torchbearer", [" A ", "aea", "cCc"], {
    e: "majruszsdifficulty:cerberus_fang",
    a: "born_in_chaos_v1:lifestealer_bone",
    c: "minecraft:blaze_powder",
    C: "minecraft:torchflower",
    A: "blazegear:brimsteel_ingot",
  });
});
