ServerEvents.recipes(event => {
    // Remove old items first (if needed)
    event.remove({id: 'everycomp:vf/biomemakeover/willow_chair' });
    event.remove({id: 'everycomp:vf/biomemakeover/swamp_cypress_chair' });
    event.remove({id: 'everycomp:vf/biomemakeover/blighted_balsa_chair' });
    event.remove({id: 'everycomp:vf/biomemakeover/ancient_oak_chair' });
    event.remove({id: 'everycomp:vf/biomemakeover/willow_stool' });
    event.remove({id: 'everycomp:vf/biomemakeover/swamp_cypress_stool' });
    event.remove({id: 'everycomp:vf/biomemakeover/blighted_balsa_stool' });
    event.remove({id: 'everycomp:vf/biomemakeover/ancient_oak_stool' });
    event.remove({id: 'everycomp:vf/biomemakeover/willow_table' });
    event.remove({id: 'everycomp:vf/biomemakeover/swamp_cypress_table' });
    event.remove({id: 'everycomp:vf/biomemakeover/blighted_balsa_table' });
    event.remove({id: 'everycomp:vf/biomemakeover/ancient_oak_table' });
    event.remove({id: 'everycomp:vf/palegardenbackport/pale_oak_table' });
    event.remove({id: 'everycomp:vf/palegardenbackport/pale_oak_chair' });
    event.remove({id: 'everycomp:vf/palegardenbackport/pale_oak_stool' });
    event.remove({id: 'everycomp:vf/witherstormmod/tainted_table' });
    event.remove({id: 'everycomp:vf/witherstormmod/tainted_chair' });
    event.remove({id: 'everycomp:vf/witherstormmod/tainted_stool' });
  
    // Flowering Azalea Table Replaced by Wood Type Variants
    // Willow Table
    event.shaped('everycomp:vf/biomemakeover/willow_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:willow_slab',  // Slabs only
        C: 'biomemakeover:willow_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/willow_table');
  
    // Swamp Cypress Table
    event.shaped('everycomp:vf/biomemakeover/swamp_cypress_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:swamp_cypress_slab',  // Slabs only
        C: 'biomemakeover:swamp_cypress_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/swamp_cypress_table');
  
    // Blighted Balsa Table
    event.shaped('everycomp:vf/biomemakeover/blighted_balsa_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:blighted_balsa_slab',  // Slabs only
        C: 'biomemakeover:blighted_balsa_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/blighted_balsa_table');
  
    // Ancient Oak Table
    event.shaped('everycomp:vf/biomemakeover/ancient_oak_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:ancient_oak_slab',  // Slabs only
        C: 'biomemakeover:ancient_oak_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/ancient_oak_table');
  
    // Pewen Stool Replaced by Wood Type Variants
    // Willow Stool
    event.shaped('everycomp:vf/biomemakeover/willow_stool', [
        '   ',
        'ccc',
        'c c'
    ], {
        c: 'biomemakeover:willow_slab',  // Slabs only
    }).id('everycomp:vf/biomemakeover/willow_stool');

    // Swamp Cypress Stool
    event.shaped('everycomp:vf/biomemakeover/swamp_cypress_stool', [
        '   ',
        'ccc',
        'c c'
    ], {
        c: 'biomemakeover:swamp_cypress_slab',  // Slabs only
    }).id('everycomp:vf/biomemakeover/swamp_cypress_stool');

    // Blighted Balsa Stool
    event.shaped('everycomp:vf/biomemakeover/blighted_balsa_stool', [
        '   ',
        'ccc',
        'c c'
    ], {
        c: 'biomemakeover:blighted_balsa_slab',  // Slabs only
    }).id('everycomp:vf/biomemakeover/blighted_balsa_stool');

    // Ancient Oak Stool
    event.shaped('everycomp:vf/biomemakeover/ancient_oak_stool', [
        '   ',
        'ccc',
        'c c'
    ], {
        c: 'biomemakeover:ancient_oak_slab',  // Slabs only
    }).id('everycomp:vf/biomemakeover/ancient_oak_stool');
  
    // Willow Chair
    event.shaped('everycomp:vf/biomemakeover/willow_chair', [
        'c  ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:willow_slab',  // Slabs only
        C: 'biomemakeover:willow_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/willow_chair');

    // Swamp Cypress Chair
    event.shaped('everycomp:vf/biomemakeover/swamp_cypress_chair', [
        'c  ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:swamp_cypress_slab',  // Slabs only
        C: 'biomemakeover:swamp_cypress_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/swamp_cypress_chair');

    // Blighted Balsa Chair
    event.shaped('everycomp:vf/biomemakeover/blighted_balsa_chair', [
        'c  ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:blighted_balsa_slab',  // Slabs only
        C: 'biomemakeover:blighted_balsa_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/blighted_balsa_chair');

    // Ancient Oak Chair
    event.shaped('everycomp:vf/biomemakeover/ancient_oak_chair', [
        'c  ',
        'CCC',
        'c c'
    ], {
        c: 'biomemakeover:ancient_oak_slab',  // Slabs only
        C: 'biomemakeover:ancient_oak_planks'  // Planks only
    }).id('everycomp:vf/biomemakeover/ancient_oak_chair');

    // Pale Oak Table
    event.shaped('everycomp:vf/palegardenbackport/pale_oak_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'palegardenbackport:pale_oak_slab',  // Slabs only
        C: 'palegardenbackport:pale_oak_planks'  // Planks only
    }).id('everycomp:vf/palegardenbackport/pale_oak_table');

    // Pale Oak Stool
    event.shaped('everycomp:vf/palegardenbackport/pale_oak_stool', [
        '   ',
        'ccc',
        'c c'
    ], {
        c: 'palegardenbackport:pale_oak_slab',  // Slabs only
    }).id('everycomp:vf/palegardenbackport/pale_oak_stool');

    // Pale Oak Chair
    event.shaped('everycomp:vf/palegardenbackport/pale_oak_chair', [
        'c  ',
        'CCC',
        'c c'
    ], {
        c: 'palegardenbackport:pale_oak_slab',  // Slabs only
        C: 'palegardenbackport:pale_oak_planks'  // Planks only
    }).id('everycomp:vf/palegardenbackport/pale_oak_chair');

    event.shaped('everycomp:vf/witherstormmod/tainted_table', [
        '   ',
        'CCC',
        'c c'
    ], {
        c: 'witherstormmod:tainted_slab',  // Slabs only
        C: 'witherstormmod:tainted_planks'  // Planks only
    }).id('everycomp:vf/witherstormmod/tainted_table');

    event.shaped('everycomp:vf/witherstormmod/tainted_stool', [
        '   ',
        'ccc',
        'c c'
    ], {
        c: 'witherstormmod:tainted_slab',  // Slabs only
    }).id('everycomp:vf/witherstormmod/tainted_stool');

    event.shaped('everycomp:vf/witherstormmod/tainted_chair', [
        'c  ',
        'CCC',
        'c c'
    ], {
        c: 'witherstormmod:tainted_slab',  // Slabs only
        C: 'witherstormmod:tainted_planks'  // Planks only
    }).id('everycomp:vf/witherstormmod/tainted_chair');
});
