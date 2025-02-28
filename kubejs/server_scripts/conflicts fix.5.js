ServerEvents.recipes(event => {
  // Remove old items first (if needed)
  event.remove({ id: "everycomp:vf/netherexp/claret_stool" });
  event.remove({ id: "everycomp:vf/ecologics/flowering_azalea_stool" });
  event.remove({ id: "everycomp:vf/ecologics/azalea_stool" });
  event.remove({ id: "everycomp:vf/ecologics/coconut_stool" });
  event.remove({ id: "everycomp:vf/ecologics/walnut_stool" });
  event.remove({ id: "everycomp:vf/valhelsia_structures/lapidified_jungle_stool" });
  event.remove({ id: "everycomp:vf/born_in_chaos_v1/scorched_stool" });
  event.remove({ id: "everycomp:vf/cataclysm/chorus_stool" });
  event.remove({ id: "everycomp:vf/voidscape/thunder_stool" });
  event.remove({ id: "everycomp:vf/alexscaves/thornwood_stool" });
  event.remove({ id: "everycomp:vf/snifferplus/stone_pine_stool" });
  event.remove({ id: "everycomp:vf/deeperdarker/echo_stool" });
  event.remove({ id: "everycomp:vf/upgrade_aquatic/driftwood_stool" });
  event.remove({ id: "everycomp:vf/upgrade_aquatic/river_stool" });
  event.remove({ id: "everycomp:vf/alexscaves/pewen_stool" });
  event.remove({ id: "everycomp:vf/alexscaves/thornwood_stool" }); // Duplicate

  // stool Recipes
  // Claret stool
  event
    .shaped("everycomp:vf/netherexp/claret_stool", ["   ", "ccc", "c c"], {
      c: "netherexp:claret_slab", // Slabs only
    })
    .id("everycomp:vf/netherexp/claret_stool");

  // Flowering Azalea stool
  event
    .shaped("everycomp:vf/ecologics/flowering_azalea_stool", ["   ", "ccc", "c c"], {
      c: "ecologics:flowering_azalea_slab", // Slabs only
    })
    .id("everycomp:vf/ecologics/flowering_azalea_stool");

  // Azalea stool
  event
    .shaped("everycomp:vf/ecologics/azalea_stool", ["   ", "ccc", "c c"], {
      c: "ecologics:azalea_slab", // Slabs only
    })
    .id("everycomp:vf/ecologics/azalea_stool");

  // Coconut stool
  event
    .shaped("everycomp:vf/ecologics/coconut_stool", ["   ", "ccc", "c c"], {
      c: "ecologics:coconut_slab", // Slabs only
    })
    .id("everycomp:vf/ecologics/coconut_stool");

  // Walnut stool  . made by blueversal for beyond depth
  event
    .shaped("everycomp:vf/ecologics/walnut_stool", ["   ", "ccc", "c c"], {
      c: "ecologics:walnut_slab", // Slabs only
    })
    .id("everycomp:vf/ecologics/walnut_stool");

  // Lapidified Jungle stool
  event
    .shaped("everycomp:vf/valhelsia_structures/lapidified_jungle_stool", ["   ", "ccc", "c c"], {
      c: "valhelsia_structures:lapidified_jungle_slab", // Slabs only                                                                                                                        // made by blueversal for beyond depth
    })
    .id("everycomp:vf/valhelsia_structures/lapidified_jungle_stool");

  // Scorched stool
  event
    .shaped("everycomp:vf/born_in_chaos_v1/scorched_stool", ["   ", "ccc", "c c"], {
      c: "born_in_chaos_v1:scorched_planks_slab", // Slabs only
    })
    .id("everycomp:vf/born_in_chaos_v1/scorched_stool");

  // Chorus stool
  event
    .shaped("everycomp:vf/cataclysm/chorus_stool", ["   ", "ccc", "c c"], {
      c: "cataclysm:chorus_slab", // Slabs only
    })
    .id("everycomp:vf/cataclysm/chorus_stool");

  // Thunder stool
  event
    .shaped("everycomp:vf/voidscape/thunder_stool", ["   ", "ccc", "c c"], {
      c: "voidscape:thunder_slab", // Slabs only                                                                                                                                                                                                   //made by blueversal for beyond depth
    })
    .id("everycomp:vf/voidscape/thunder_stool");

  // Thornwood stool
  event
    .shaped("everycomp:vf/alexscaves/thornwood_stool", ["   ", "ccc", "c c"], {
      c: "alexscaves:thornwood_slab", // Slabs only
    })
    .id("everycomp:vf/alexscaves/thornwood_stool");

  // Stone Pine stool                                 //made by blueversal
  event
    .shaped("everycomp:vf/snifferplus/stone_pine_stool", ["   ", "ccc", "c c"], {
      c: "snifferplus:stone_pine_slab", // Slabs only
    })
    .id("everycomp:vf/snifferplus/stone_pine_stool");

  // Echo stool
  event
    .shaped("everycomp:vf/deeperdarker/echo_stool", ["   ", "ccc", "c c"], {
      c: "deeperdarker:echo_slab", // Slabs only
    })
    .id("everycomp:vf/deeperdarker/echo_stool");

  // Driftwood stool
  event
    .shaped("everycomp:vf/upgrade_aquatic/driftwood_stool", ["   ", "ccc", "c c"], {
      c: "upgrade_aquatic:driftwood_slab", // Slabs only
    })
    .id("everycomp:vf/upgrade_aquatic/driftwood_stool");

  // River stool
  event
    .shaped("everycomp:vf/upgrade_aquatic/river_stool", ["   ", "ccc", "c c"], {
      c: "upgrade_aquatic:river_slab", // Slabs only
    })
    .id("everycomp:vf/upgrade_aquatic/river_stool");

  // rotten stool
  event
    .shaped("everycomp:vf/betterarcheology/rotten_stool", ["   ", "ccc", "c c"], {
      c: "betterarcheology:rotten_slab", // Slabs only                                                                                                                                           //beyond depth
    })
    .id("everycomp:vf/betterarcheology/rotten_stool");

  // Pewen stool
  event
    .shaped("everycomp:vf/alexscaves/pewen_stool", ["   ", "ccc", "c c"], {
      c: "alexscaves:pewen_slab", // Slabs only
    })
    .id("everycomp:vf/alexscaves/pewen_stool");
});
