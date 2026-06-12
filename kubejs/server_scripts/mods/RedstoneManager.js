//Redstone Manager

ServerEvents.recipes(event => {

  //Replace Input
  event.replaceInput({id: 'redstonemanager:rm_manager'}, 'minecraft:quartz_block', 'minecraft:iron_block')
  event.replaceInput({mod: 'redstonemanager'}, 'minecraft:comparator', 'minecraft:redstone_block')
  event.replaceInput({mod: 'redstonemanager'}, 'minecraft:ender_pearl', 'fractured:void_ingot')
})