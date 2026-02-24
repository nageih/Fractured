//Minecraft 

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'minecraft:glass'})
  event.remove({id: 'minecraft:compass'})
  event.remove({id: 'minecraft:paper'})
  event.remove({id: 'minecraft:bread'})

  //Replace
  event.replaceInput({id: 'minecraft:hopper'}, 'minecraft:iron_ingot', '#c:plates/iron')
  event.replaceInput({id: 'minecraft:smithing_table'}, 'minecraft:iron_ingot', '#c:ingots/cloggrum')

  //Oak Planks
  event.shaped('minecraft:oak_planks', ['AA', 'AA'], { A: '#c:rods/wooden' }).id('fractured:oak_planks')

  //Netherrack 
  event.shaped('minecraft:netherrack', ['AA', 'AA'], { A: 'fractured:netherrack_rocks' }).id('fractured:netherrack')

  //Compass
  event.shaped('minecraft:compass', [' A ', 'ABA', ' A '], {
    A: '#c:ingots/bronze',
    B: '#c:dusts/copper'
  }).id('minecraft:compass')

  //Campfire
  event.shaped('minecraft:campfire', [' A ', 'ABA', 'CCC'], {
    A: 'minecraft:stick',
    B: 'fractured:dried_leaves',
    C: '#minecraft:logs'
  }).id('minecraft:campfire')
})