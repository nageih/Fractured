//Ender Chests 

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'enderstorage:ender_chest' })
  event.remove({ id: 'enderstorage:ender_tank' })
  event.remove({ id: 'enderstorage:ender_pouch' })
  event.remove({ id: 'enderrf:ender_battery' })

  //Ender Chest
  event.shaped('enderstorage:ender_chest', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:obsidian',
    B: 'fractured:void_chest',
    C: '#c:chests/wooden'
  }).id('fractured:ender_chest')

  //Ender Tank
  event.shaped('enderstorage:ender_tank', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:obsidian',
    B: 'minecraft:cauldron',
    C: 'fractured:void_chest'
  }).id('fractured:ender_tank')

  //Ender Pouch
  event.shaped('enderstorage:ender_pouch', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:leather',
    B: 'fractured:void_chest',
    C: 'minecraft:string'
  }).id('fractured:ender_pouch')

  //Ender Energy 
  event.shaped('enderrf:ender_battery', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:obsidian',
    B: 'routers:rf_upgrade_1',
    C: 'fractured:void_chest'
  }).id('fractured:ender_battery_1')

  event.shaped('2x enderrf:ender_battery', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:obsidian',
    B: 'routers:rf_upgrade_2',
    C: 'fractured:void_chest'
  }).id('fractured:ender_battery_2')

  event.shaped('3x enderrf:ender_battery', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:obsidian',
    B: 'routers:rf_upgrade_3',
    C: 'fractured:void_chest'
  }).id('fractured:ender_battery_3')

  event.shaped('4x enderrf:ender_battery', ['AAA', 'CBC', 'AAA'], {
    A: 'minecraft:obsidian',
    B: 'routers:rf_upgrade_4',
    C: 'fractured:void_chest'
  }).id('fractured:ender_battery_4')






})