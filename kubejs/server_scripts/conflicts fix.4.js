ServerEvents.recipes(event => {
    // Remove old items first (if needed)
    event.remove({id: 'everycomp:vf/netherexp/claret_table'});
    event.remove({id: 'everycomp:vf/ecologics/flowering_azalea_table'});
    event.remove({id: 'everycomp:vf/ecologics/azalea_table'});
    event.remove({id: 'everycomp:vf/ecologics/coconut_table'});
    event.remove({id: 'everycomp:vf/ecologics/walnut_table'});
    event.remove({id: 'everycomp:vf/valhelsia_structures/lapidified_jungle_table'});
    event.remove({id: 'everycomp:vf/born_in_chaos_v1/scorched_table'});
    event.remove({id: 'everycomp:vf/cataclysm/chorus_table'});
    event.remove({id: 'everycomp:vf/voidscape/thunder_table'});
    event.remove({id: 'everycomp:vf/alexscaves/thornwood_table'});
    event.remove({id: 'everycomp:vf/snifferplus/stone_pine_table'});
    event.remove({id: 'everycomp:vf/deeperdarker/echo_table'});
    event.remove({id: 'everycomp:vf/upgrade_aquatic/driftwood_table'});
    event.remove({id: 'everycomp:vf/upgrade_aquatic/river_table'});
    event.remove({id: 'everycomp:vf/alexscaves/pewen_table'});
    event.remove({id: 'everycomp:vf/alexscaves/thornwood_table'});  // Duplicate

    // Table Recipes
    // Claret Table
    event.shaped('everycomp:vf/netherexp/claret_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'netherexp:claret_slab',  // Slabs only
        C: 'netherexp:claret_planks'  // Planks only
    }).id('everycomp:vf/netherexp/claret_table');

    // Flowering Azalea Table
    event.shaped('everycomp:vf/ecologics/flowering_azalea_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'ecologics:flowering_azalea_slab',  // Slabs only
        C: 'ecologics:flowering_azalea_planks'  // Planks only
    }).id('everycomp:vf/ecologics/flowering_azalea_table');

    // Azalea Table
    event.shaped('everycomp:vf/ecologics/azalea_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'ecologics:azalea_slab',  // Slabs only
        C: 'ecologics:azalea_planks'  // Planks only
    }).id('everycomp:vf/ecologics/azalea_table');

    // Coconut Table
    event.shaped('everycomp:vf/ecologics/coconut_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'ecologics:coconut_slab',  // Slabs only
        C: 'ecologics:coconut_planks'  // Planks only
    }).id('everycomp:vf/ecologics/coconut_table');

    // Walnut Table  . made by blueversal for beyond depth
    event.shaped('everycomp:vf/ecologics/walnut_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'ecologics:walnut_slab',  // Slabs only
        C: 'ecologics:walnut_planks'  // Planks only
    }).id('everycomp:vf/ecologics/walnut_table');

    // Lapidified Jungle Table
    event.shaped('everycomp:vf/valhelsia_structures/lapidified_jungle_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'valhelsia_structures:lapidified_jungle_slab',  // Slabs only
        C: 'valhelsia_structures:lapidified_jungle_planks'  // Planks only
    }).id('everycomp:vf/valhelsia_structures/lapidified_jungle_table');

    // Scorched Table
    event.shaped('everycomp:vf/born_in_chaos_v1/scorched_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'born_in_chaos_v1:scorched_planks_slab',  // Slabs only
        C: 'born_in_chaos_v1:scorched_planks'  // Planks only
    }).id('everycomp:vf/born_in_chaos_v1/scorched_table');

    // Chorus Table
    event.shaped('everycomp:vf/cataclysm/chorus_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'cataclysm:chorus_slab',  // Slabs only
        C: 'cataclysm:chorus_planks'  // Planks only
    }).id('everycomp:vf/cataclysm/chorus_table');

    // Thunder Table
    event.shaped('everycomp:vf/voidscape/thunder_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'voidscape:thunder_slab',  // Slabs only
        C: 'voidscape:thunder_planks'  // Planks only                                                                                                                                                                                                     //made by blueversal for beyond depth
    }).id('everycomp:vf/voidscape/thunder_table');

    // Thornwood Table
    event.shaped('everycomp:vf/alexscaves/thornwood_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'alexscaves:thornwood_slab',  // Slabs only
        C: 'alexscaves:thornwood_planks'  // Planks only
    }).id('everycomp:vf/alexscaves/thornwood_table');

    // Stone Pine Table
    event.shaped('everycomp:vf/snifferplus/stone_pine_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'snifferplus:stone_pine_slab',  // Slabs only
        C: 'snifferplus:stone_pine_planks'  // Planks only
    }).id('everycomp:vf/snifferplus/stone_pine_table');

    // Echo Table
    event.shaped('everycomp:vf/deeperdarker/echo_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'deeperdarker:echo_slab',  // Slabs only
        C: 'deeperdarker:echo_planks'  // Planks only
    }).id('everycomp:vf/deeperdarker/echo_table');

    // Driftwood Table
    event.shaped('everycomp:vf/upgrade_aquatic/driftwood_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'upgrade_aquatic:driftwood_slab',  // Slabs only
        C: 'upgrade_aquatic:driftwood_planks'  // Planks only
    }).id('everycomp:vf/upgrade_aquatic/driftwood_table');

    // River Table
    event.shaped('everycomp:vf/upgrade_aquatic/river_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'upgrade_aquatic:river_slab',  // Slabs only
        C: 'upgrade_aquatic:river_planks'  // Planks only
    }).id('everycomp:vf/upgrade_aquatic/river_table');

     // rotten table
  event.shaped('everycomp:vf/betterarcheology/rotten_table', [
    '   ',
    'CCC',
    'c c'
], {
    c: 'betterarcheology:rotten_slab',  // Slabs only
    C: 'betterarcheology:rotten_planks'  // Planks only
}).id('everycomp:vf/betterarcheology/rotten_table');

    // Pewen Table
    event.shaped('everycomp:vf/alexscaves/pewen_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'alexscaves:pewen_slab',  // Slabs only
        C: 'alexscaves:pewen_planks'  // Planks only
    }).id('everycomp:vf/alexscaves/pewen_table');
});
