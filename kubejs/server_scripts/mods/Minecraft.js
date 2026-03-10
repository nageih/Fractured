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

  //Rocks to Blocks
  event.shaped('minecraft:cobblestone', [' A ', 'ABA', ' A '], {
    A: 'projectvibrantjourneys:rocks',
    B: 'opolisutilities:leafy_string'
  }).id('fractured:cobblestone')

  event.shaped('minecraft:mossy_cobblestone', [' A ', 'ABA', ' A '], {
    A: 'projectvibrantjourneys:mossy_rocks',
    B: 'opolisutilities:leafy_string'
  }).id('fractured:mossy_cobblestone')

  event.shaped('minecraft:sandstone', [' A ', 'ABA', ' A '], {
    A: 'projectvibrantjourneys:sandstone_rocks',
    B: 'opolisutilities:leafy_string'
  }).id('fractured:sandstone')

  event.shaped('minecraft:red_sandstone', [' A ', 'ABA', ' A '], {
    A: 'projectvibrantjourneys:red_sandstone_rocks',
    B: 'opolisutilities:leafy_string'
  }).id('fractured:red_sandstone')

  //Piston 
  event.shaped('minecraft:piston', ['AAA', 'BCB', 'BDB'], {
    D: '#c:ingots/steel',
    A: '#minecraft:planks',
    C: 'undergarden:utheric_cluster',
    B: '#c:cobblestones'
  }).id('fractured:piston')

  //Sticks
  event.shaped('8x minecraft:stick', ['A', 'A'], { A: '#minecraft:logs' }).id('fractured:sticks')

  //Oak Planks
  event.shaped('minecraft:oak_planks', ['AA', 'AA'], { A: '#c:rods/wooden' }).id('fractured:oak_planks')

  //Netherrack 
  event.shaped('minecraft:netherrack', [' A ', 'ABA', ' A '], { 
    A: 'fractured:netherrack_rocks',
    B: 'opolisutilities:leafy_string'
  }).id('fractured:netherrack')

  //Compass
  event.shaped('minecraft:compass', [' A ', 'ABA', ' A '], {
    A: '#c:ingots/bronze',
    B: 'fractured:metallic_dust'
  }).id('minecraft:compass')

  //Campfire
  event.shaped('minecraft:campfire', [' A ', 'ABA', 'CCC'], {
    A: 'minecraft:stick',
    B: 'fractured:dried_leaves',
    C: '#minecraft:logs'
  }).id('minecraft:campfire')
})