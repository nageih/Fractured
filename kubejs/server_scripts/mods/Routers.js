//Routers

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'routers:exporter_block'})
  event.remove({id: 'routers:importer_block'})
  event.remove({id: 'routers:dimensional_upgrade'})

  //Exporter 
  event.shaped('routers:exporter_block', [' A ', 'BCB', 'A A'], {
    A: '#c:plates/silver',
    B: '#c:plates/gold',
    C: 'ae2:logic_processor'
  }).id('fractured:exporter_block')

  //Importer
  event.shaped('routers:importer_block', ['A A', 'BCB', ' A '], {
    A: '#c:plates/silver',
    B: '#c:plates/gold',
    C: 'ae2:logic_processor'
  }).id('fractured:importer_block')

  //Dimensional Upgrade
  event.shaped('routers:dimensional_upgrade', ['ABA', 'BCB', 'ABA'], {
    A: '#c:ingots/iron',
    B: 'fractured:void_ingot',
    C: 'ae2:logic_processor'
  }).id('fractured:dimensional_upgrade')



})