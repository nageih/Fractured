//Minecraft 

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'minecraft:glass'})
  event.remove({id: 'minecraft:compass'})
  event.remove({id: 'minecraft:paper'})
  event.remove({id: 'minecraft:bread'})
  event.remove({id: 'minecraft:wooden_pickaxe'})
  event.remove({id: 'minecraft:wooden_shovel'})
  event.remove({id: 'minecraft:wooden_axe'})
  event.remove({id: 'minecraft:wooden_hoe'})
  event.remove({id: 'minecraft:wooden_sword'})


  //Replace
  event.replaceInput({id: 'minecraft:hopper'}, 'minecraft:iron_ingot', '#c:plates/iron')
  event.replaceInput({id: 'minecraft:smithing_table'}, 'minecraft:iron_ingot', '#c:ingots/cloggrum')

  event.replaceInput({}, 'minecraft:wooden_pickaxe', 'flintrequired:flint_pickaxe')
  event.replaceInput({}, 'minecraft:wooden_shovel', 'flintrequired:flint_shovel')
  event.replaceInput({}, 'minecraft:wooden_axe', 'flintrequired:flint_axe')
  event.replaceInput({}, 'minecraft:wooden_hoe', 'flintrequired:flint_hoe')
  event.replaceInput({}, 'minecraft:wooden_sword', 'flintrequired:flint_knife')

  //Ice
  event.shaped('minecraft:ice', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:snow_block',
    B: 'undergarden:froststeel_nugget'
  }).id('fractured:ice')


  //Fire Charge
  event.shaped('minecraft:fire_charge', ['ACA', 'CBC', 'ACA'], {
    A: 'fractured:ash',
    B: 'fractured:flint_and_stick',
    C: 'fractured:dried_leaves'
  }).id('fractured:fire_charge')

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

  //Chests
  event.shaped('2x minecraft:chest', ['AAA', 'A A', 'AAA'], {
    A: '#minecraft:logs'
  }).id('fractured:chest')

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