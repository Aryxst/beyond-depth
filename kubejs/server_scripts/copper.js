ServerEvents.tags('block', event => {
  event.remove('minecraft:needs_stone_tool', [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore' 
  ])
  event.add('minecraft:needs_wooden_tool', [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore'
  ])
})                                                                                                                                                                                                //made by blueversal