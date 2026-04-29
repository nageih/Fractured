//Toms Simple Storage

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'toms_storage:inventory_connector'})
  event.remove({id: 'toms_storage:storage_terminal'})
  event.remove({id: 'toms_storage:crafting_terminal'})
  event.remove({id: 'toms_storage:inventory_cable'})
  event.remove({id: 'toms_storage:inventory_cable_connector'})

  //Replace Input
  event.replaceInput({mod: 'flintrequired'}, 'flintrequired:plant_fiber', 'fractured:leafy_binding')

  //Inventory Cable Connector
  event.shaped('toms_storage:inventory_cable_connector', ['ABA', 'BCB', 'ABA'], {
    A: '#minecraft:logs',
    B: 'minecraft:redstone',
    C: 'woodenhopper:wooden_hopper',
  }).id('fractured:inventory_cable_connector')

  //Storage Terminal

  //Inventory Connector
  event.shaped('toms_storage:inventory_connector', ['ABA', 'BCB', 'ABA'], {
    A: '#minecraft:logs',
    B: 'minecraft:redstone',
    C: 'minecraft:hopper',
  }).id('fractured:inventory_connector')

  //Storage Terminal
  event.shaped('toms_storage:storage_terminal', ['AAA', 'BCB', 'AAA'], {
    A: '#minecraft:logs',
    B: '#c:chests/wooden',
    C: 'minecraft:redstone',
  }).id('fractured:storage_terminal')

  //Crafting Terminal
  event.shaped('toms_storage:crafting_terminal', ['AAA', 'BCB', 'AAA'], {
    A: '#minecraft:logs',
    B: '#c:player_workstations/crafting_tables',
    C: 'toms_storage:storage_terminal',
  }).id('fractured:crafting_terminal')

  //Inventory Cable
  event.shaped('8x toms_storage:inventory_cable', ['AAA', 'BBB', 'AAA'], {
    A: '#minecraft:logs',
    B: 'minecraft:redstone',
  }).id('fractured:inventory_cable')

})