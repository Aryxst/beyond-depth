// Made by Blueversal
BlockEvents.broken("waystones:waystone", event => { 
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "aquaculture:neptunium_pickaxe" &&
      item.id != "blazegear:brimsteel_pickaxe" &&
      item.id != "cataclysm:infernal_forge" &&
      item.id != "cataclysm:void_forge" &&
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "deeperdarker:warden_pickaxe" &&
      item.id != "voidscape:voidic_crystal_pickaxe" &&
      item.id != "legendary_monsters:mossy_hammer" &&
      item.id != "voidscape:titanite_pickaxe" &&
      item.id != "voidscape:ichor_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&            
      item.id != "voidscape:astral_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:mossy_waystone", event => {
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "aquaculture:neptunium_pickaxe" &&
      item.id != "blazegear:brimsteel_pickaxe" &&
      item.id != "cataclysm:infernal_forge" &&
      item.id != "cataclysm:void_forge" &&
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "deeperdarker:warden_pickaxe" &&
      item.id != "voidscape:voidic_crystal_pickaxe" &&
      item.id != "legendary_monsters:mossy_hammer" &&
      item.id != "voidscape:titanite_pickaxe" &&
      item.id != "voidscape:ichor_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&       
      item.id != "voidscape:astral_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})

BlockEvents.broken("waystones:sandy_waystone", event => {
  const {player, block} = event
  const item = player.getMainHandItem()
  if (item.id != "minecraft:netherite_pickaxe" && 
      item.id != "aquaculture:neptunium_pickaxe" &&
      item.id != "blazegear:brimsteel_pickaxe" &&
      item.id != "cataclysm:infernal_forge" &&
      item.id != "cataclysm:void_forge" &&
      item.id != "majruszsdifficulty:enderium_pickaxe" &&
      item.id != "deeperdarker:warden_pickaxe" &&
      item.id != "voidscape:voidic_crystal_pickaxe" &&
      item.id != "legendary_monsters:mossy_hammer" &&
      item.id != "voidscape:titanite_pickaxe" &&
      item.id != "voidscape:ichor_pickaxe" &&
      item.id != "ender_dragon_loot_:dragon_paxel" &&
      item.id != "ender_dragon_loot_:dragon_picaxe" &&             
      item.id != "voidscape:astral_pickaxe") {
      event.player.statusMessage = 'You need atleast a Netherite Pickaxe!'
      event.cancel()
  }
})