//Nature Compass

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'naturescompass:natures_compass'})

  //Nature Compass
  event.shaped('naturescompass:naturescompass', [' A ', 'ABA', ' A '], {
    A: '#c:ingots/cloggrum',
    B: 'minecraft:compass'
  }).id('naturescompass:natures_compass')

})