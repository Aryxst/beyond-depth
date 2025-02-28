ServerEvents.recipes(event => {
  // Remove old items first (if needed)
  event.remove({ id: "everycomp:vf/netherexp/claret_chair" });
  event.remove({ id: "everycomp:vf/ecologics/flowering_azalea_chair" });
  event.remove({ id: "everycomp:vf/ecologics/azalea_chair" });
  event.remove({ id: "everycomp:vf/ecologics/coconut_chair" });
  event.remove({ id: "everycomp:vf/ecologics/walnut_chair" });
  event.remove({ id: "everycomp:vf/valhelsia_structures/lapidified_jungle_chair" });
  event.remove({ id: "everycomp:vf/born_in_chaos_v1/scorched_chair" });
  event.remove({ id: "everycomp:vf/cataclysm/chorus_chair" });
  event.remove({ id: "everycomp:vf/voidscape/thunder_chair" });
  event.remove({ id: "everycomp:vf/alexscaves/thornwood_chair" });
  event.remove({ id: "everycomp:vf/snifferplus/stone_pine_chair" });
  event.remove({ id: "everycomp:vf/deeperdarker/echo_chair" });
  event.remove({ id: "everycomp:vf/upgrade_aquatic/driftwood_chair" });
  event.remove({ id: "everycomp:vf/upgrade_aquatic/river_chair" });
  event.remove({ id: "everycomp:vf/alexscaves/pewen_chair" });
  event.remove({ id: "everycomp:vf/alexscaves/thornwood_chair" });

  // Chair Recipes
  // Claret Chair
  event
    .shaped("everycomp:vf/netherexp/claret_chair", ["c  ", "CCC", "c c"], {
      c: "netherexp:claret_slab", // Slabs only
      C: "netherexp:claret_planks", // Planks only
    })
    .id("everycomp:vf/netherexp/claret_chair");

  // Flowering Azalea Chair
  event
    .shaped("everycomp:vf/ecologics/flowering_azalea_chair", ["c  ", "CCC", "c c"], {
      c: "ecologics:flowering_azalea_slab", // Slabs only
      C: "ecologics:flowering_azalea_planks", // Planks only
    })
    .id("everycomp:vf/ecologics/flowering_azalea_chair");

  // Azalea Chair
  event
    .shaped("everycomp:vf/ecologics/azalea_chair", ["c  ", "CCC", "c c"], {
      c: "ecologics:azalea_slab", // Slabs only
      C: "ecologics:azalea_planks", // Planks only
    })
    .id("everycomp:vf/ecologics/azalea_chair");

  // Coconut Chair
  event
    .shaped("everycomp:vf/ecologics/coconut_chair", ["c  ", "CCC", "c c"], {
      c: "ecologics:coconut_slab", // Slabs only
      C: "ecologics:coconut_planks", // Planks only
    })
    .id("everycomp:vf/ecologics/coconut_chair");

  // Walnut Chair
  event
    .shaped("everycomp:vf/ecologics/walnut_chair", ["c  ", "CCC", "c c"], {
      c: "ecologics:walnut_slab", // Slabs only
      C: "ecologics:walnut_planks", // Planks only
    })
    .id("everycomp:vf/ecologics/walnut_chair");

  // Lapidified Jungle Chair made by blueversal for beyond depth
  event
    .shaped("everycomp:vf/valhelsia_structures/lapidified_jungle_chair", ["c  ", "CCC", "c c"], {
      c: "valhelsia_structures:lapidified_jungle_slab", // Slabs only
      C: "valhelsia_structures:lapidified_jungle_planks", // Planks only
    })
    .id("everycomp:vf/valhelsia_structures/lapidified_jungle_chair");

  // Scorched Chair
  event
    .shaped("everycomp:vf/born_in_chaos_v1/scorched_chair", ["c  ", "CCC", "c c"], {
      c: "born_in_chaos_v1:scorched_planks_slab", // Slabs only
      C: "born_in_chaos_v1:scorched_planks", // Planks only
    })
    .id("everycomp:vf/born_in_chaos_v1/scorched_chair");

  // Chorus Chair
  event
    .shaped("everycomp:vf/cataclysm/chorus_chair", ["c  ", "CCC", "c c"], {
      c: "cataclysm:chorus_slab", // Slabs only
      C: "cataclysm:chorus_planks", // Planks only
    })
    .id("everycomp:vf/cataclysm/chorus_chair");

  // Thunder Chair
  event
    .shaped("everycomp:vf/voidscape/thunder_chair", ["c  ", "CCC", "c c"], {
      c: "voidscape:thunder_slab", // Slabs only
      C: "voidscape:thunder_planks", // Planks only
    })
    .id("everycomp:vf/voidscape/thunder_chair");

  // Thornwood Chair
  event
    .shaped("everycomp:vf/alexscaves/thornwood_chair", ["c  ", "CCC", "c c"], {
      c: "alexscaves:thornwood_slab", // Slabs only
      C: "alexscaves:thornwood_planks", // Planks only
    })
    .id("everycomp:vf/alexscaves/thornwood_chair");

  // Stone Pine Chair
  event
    .shaped("everycomp:vf/snifferplus/stone_pine_chair", ["c  ", "CCC", "c c"], {
      c: "snifferplus:stone_pine_slab", // Slabs only
      C: "snifferplus:stone_pine_planks", // Planks only
    })
    .id("everycomp:vf/snifferplus/stone_pine_chair");

  // Echo Chair
  event
    .shaped("everycomp:vf/deeperdarker/echo_chair", ["c  ", "CCC", "c c"], {
      c: "deeperdarker:echo_slab", // Slabs only
      C: "deeperdarker:echo_planks", // Planks only                                                                                                                              //made by blueversal for beyond depth
    })
    .id("everycomp:vf/deeperdarker/echo_chair");

  // Driftwood Chair
  event
    .shaped("everycomp:vf/upgrade_aquatic/driftwood_chair", ["c  ", "CCC", "c c"], {
      c: "upgrade_aquatic:driftwood_slab", // Slabs only
      C: "upgrade_aquatic:driftwood_planks", // Planks only
    })
    .id("everycomp:vf/upgrade_aquatic/driftwood_chair");

  // River Chair
  event
    .shaped("everycomp:vf/upgrade_aquatic/river_chair", ["c  ", "CCC", "c c"], {
      c: "upgrade_aquatic:river_slab", // Slabs only
      C: "upgrade_aquatic:river_planks", // Planks only
    })
    .id("everycomp:vf/upgrade_aquatic/river_chair");
  // rotten chair
  event
    .shaped("everycomp:vf/betterarcheology/rotten_chair", ["c  ", "CCC", "c c"], {
      c: "betterarcheology:rotten_slab", // Slabs only
      C: "betterarcheology:rotten_planks", // Planks only
    })
    .id("everycomp:vf/betterarcheology/rotten_chair");

  // Pewen Chair
  event
    .shaped("everycomp:vf/alexscaves/pewen_chair", ["c  ", "CCC", "c c"], {
      c: "alexscaves:pewen_slab", // Slabs only
      C: "alexscaves:pewen_planks", // Planks only
    })
    .id("everycomp:vf/alexscaves/pewen_chair");
});
