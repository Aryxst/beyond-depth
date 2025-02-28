ServerEvents.recipes(event => {

  // Remove existing recipes (item shelf, chairs, tables, etc.)
  event.remove({ id: 'valhelsia_furniture:jungle_table' });
  event.remove({ id: 'valhelsia_furniture:birch_table' });
  event.remove({ id: 'valhelsia_furniture:oak_table' });
  event.remove({ id: 'valhelsia_furniture:dark_oak_table' });
  event.remove({ id: 'valhelsia_furniture:spruce_table' });
  event.remove({ id: 'valhelsia_furniture:mangrove_table' });
  event.remove({ id: 'valhelsia_furniture:acacia_table' });
  event.remove({ id: 'valhelsia_furniture:cherry_table' });
  event.remove({ id: 'valhelsia_furniture:crimson_table' });
  event.remove({ id: 'valhelsia_furniture:warped_table' });

  event.remove({ id: 'valhelsia_furniture:jungle_chair' });
  event.remove({ id: 'valhelsia_furniture:birch_chair' });
  event.remove({ id: 'valhelsia_furniture:oak_chair' });
  event.remove({ id: 'valhelsia_furniture:dark_oak_chair' });
  event.remove({ id: 'valhelsia_furniture:spruce_chair' });
  event.remove({ id: 'valhelsia_furniture:mangrove_chair' });
  event.remove({ id: 'valhelsia_furniture:acacia_chair' });
  event.remove({ id: 'valhelsia_furniture:cherry_chair' });
  event.remove({ id: 'valhelsia_furniture:crimson_chair' });
  event.remove({ id: 'valhelsia_furniture:warped_chair' });

  // Table Recipes (Valhelsia Furniture)
  event.shaped('valhelsia_furniture:jungle_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:jungle_planks',
    c: 'minecraft:jungle_slab'
  }).id('valhelsia_furniture:jungle_table');

  event.shaped('valhelsia_furniture:birch_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:birch_planks',
    c: 'minecraft:birch_slab'
  }).id('valhelsia_furniture:birch_table');
  // made by blueversal
  event.shaped('valhelsia_furniture:oak_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:oak_planks',
    c: 'minecraft:oak_slab'
  }).id('valhelsia_furniture:oak_table');

  event.shaped('valhelsia_furniture:dark_oak_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:dark_oak_planks',
    c: 'minecraft:dark_oak_slab'
  }).id('valhelsia_furniture:dark_oak_table');

  event.shaped('valhelsia_furniture:spruce_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:spruce_planks',
    c: 'minecraft:spruce_slab'
  }).id('valhelsia_furniture:spruce_table');

  event.shaped('valhelsia_furniture:mangrove_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:mangrove_planks',
    c: 'minecraft:mangrove_slab'
  }).id('valhelsia_furniture:mangrove_table');

  // New Tables
  event.shaped('valhelsia_furniture:acacia_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:acacia_planks',
    c: 'minecraft:acacia_slab'
  }).id('valhelsia_furniture:acacia_table');

  event.shaped('valhelsia_furniture:cherry_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:cherry_planks',
    c: 'minecraft:cherry_slab'
  }).id('valhelsia_furniture:cherry_table');

  // this code was made for beyond depth if you see it somewhere else means it got stolen
  event.shaped('valhelsia_furniture:crimson_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:crimson_planks',
    c: 'minecraft:crimson_slab'
  }).id('valhelsia_furniture:crimson_table');

  event.shaped('valhelsia_furniture:warped_table', [
    '   ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:warped_planks',
    c: 'minecraft:warped_slab'
  }).id('valhelsia_furniture:warped_table');

  // Chair Recipes (Valhelsia Furniture)
  event.shaped('valhelsia_furniture:jungle_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:jungle_planks',
    c: 'minecraft:jungle_slab'
  }).id('valhelsia_furniture:jungle_chair');

  event.shaped('valhelsia_furniture:birch_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:birch_planks',
    c: 'minecraft:birch_slab'
  }).id('valhelsia_furniture:birch_chair');

  event.shaped('valhelsia_furniture:oak_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:oak_planks',
    c: 'minecraft:oak_slab'
  }).id('valhelsia_furniture:oak_chair');

  event.shaped('valhelsia_furniture:dark_oak_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:dark_oak_planks',
    c: 'minecraft:dark_oak_slab'
  }).id('valhelsia_furniture:dark_oak_chair');

  event.shaped('valhelsia_furniture:spruce_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:spruce_planks',
    c: 'minecraft:spruce_slab'
  }).id('valhelsia_furniture:spruce_chair');
  // was made for beyond depth
  event.shaped('valhelsia_furniture:mangrove_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:mangrove_planks',
    c: 'minecraft:mangrove_slab'
  }).id('valhelsia_furniture:mangrove_chair');

  // New Chairs
  event.shaped('valhelsia_furniture:acacia_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:acacia_planks',
    c: 'minecraft:acacia_slab'
  }).id('valhelsia_furniture:acacia_chair');

  event.shaped('valhelsia_furniture:cherry_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:cherry_planks',
    c: 'minecraft:cherry_slab'
  }).id('valhelsia_furniture:cherry_chair');

  event.shaped('valhelsia_furniture:crimson_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:crimson_planks',
    c: 'minecraft:crimson_slab'
  }).id('valhelsia_furniture:crimson_chair');

  event.shaped('valhelsia_furniture:warped_chair', [
    'c  ',
    'CCC',
    'c c'
  ], {
    C: 'minecraft:warped_planks',
    c: 'minecraft:warped_slab'
  }).id('valhelsia_furniture:warped_chair');

});
