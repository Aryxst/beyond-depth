ServerEvents.recipes(event => {
  // Remove existing recipes (stool and wooden wall platform)
  event.remove({ id: "valhelsia_furniture:jungle_stool" });
  event.remove({ id: "valhelsia_furniture:birch_stool" });
  event.remove({ id: "valhelsia_furniture:oak_stool" });
  event.remove({ id: "valhelsia_furniture:dark_oak_stool" });
  event.remove({ id: "valhelsia_furniture:spruce_stool" });
  event.remove({ id: "valhelsia_furniture:mangrove_stool" });
  event.remove({ id: "valhelsia_furniture:acacia_stool" });
  event.remove({ id: "valhelsia_furniture:cherry_stool" });
  event.remove({ id: "valhelsia_furniture:crimson_stool" });
  event.remove({ id: "valhelsia_furniture:warped_stool" });

  // Remove wooden wall platform recipe (instead of item shelf)
  event.remove({ id: "dungeonnowloading:wooden_wall_platform" });

  // Stool Recipes (Valhelsia Furniture)
  event
    .shaped("valhelsia_furniture:jungle_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:jungle_slab",
    })
    .id("valhelsia_furniture:jungle_stool");

  event
    .shaped("valhelsia_furniture:birch_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:birch_slab",
    })
    .id("valhelsia_furniture:birch_stool");

  event
    .shaped("valhelsia_furniture:oak_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:oak_slab",
    })
    .id("valhelsia_furniture:oak_stool");

  event
    .shaped("valhelsia_furniture:dark_oak_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:dark_oak_slab",
    })
    .id("valhelsia_furniture:dark_oak_stool");
  // made by blueversal
  event
    .shaped("valhelsia_furniture:spruce_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:spruce_slab",
    })
    .id("valhelsia_furniture:spruce_stool");

  event
    .shaped("valhelsia_furniture:mangrove_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:mangrove_slab",
    })
    .id("valhelsia_furniture:mangrove_stool");

  // New Stools
  event
    .shaped("valhelsia_furniture:acacia_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:acacia_slab",
    })
    .id("valhelsia_furniture:acacia_stool");
  //was made for beyond depth
  event
    .shaped("valhelsia_furniture:cherry_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:cherry_slab",
    })
    .id("valhelsia_furniture:cherry_stool");

  event
    .shaped("valhelsia_furniture:crimson_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:crimson_slab",
    })
    .id("valhelsia_furniture:crimson_stool");

  event
    .shaped("valhelsia_furniture:warped_stool", ["   ", "ccc", "c c"], {
      c: "minecraft:warped_slab",
    })
    .id("valhelsia_furniture:warped_stool");

  // Wooden Wall Platform Recipe (DungeonNowLoading)
  event
    .shaped("dungeonnowloading:wooden_wall_platform", ["   ", "cCc", "   "], {
      c: "#minecraft:wooden_slabs", // This makes it work with all planks (oak, spruce, etc.)
      C: "#minecraft:planks",
    })
    .id("dungeonnowloading:wooden_wall_platform");
});
