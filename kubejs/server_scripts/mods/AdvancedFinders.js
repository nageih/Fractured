//Advanced Finders

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'adfinders:metal_finder'})
  event.remove({id: 'adfinders:mineral_finder'})

  //Metal Finder
  event.shaped('adfinders:metal_finder', ['ABA', 'BCB', 'ABA'], {
    A: '#c:ingots/copper',
    B: '#c:ingots/tin',
    C: 'minecraft:compass'
  }).id('fractured:metal_finder')

  //Mineral Finder
  event.shaped('adfinders:mineral_finder', ['ABA', 'BCB', 'ABA'], {
    A: '#c:ingots/iron',
    B: '#c:dusts/saltpeter',
    C: 'minecraft:compass'
  }).id('fractured:mineral_finder')

})