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

  //Repair
  event.shapeless('adfinders:mineral_finder', ['adfinders:mineral_finder']).id('fractured:mineral_finder_repair')
  event.shapeless('adfinders:metal_finder', ['adfinders:metal_finder']).id('fractured:metal_finder_repair')
  event.shapeless('adfinders:gem_finder', ['adfinders:gem_finder']).id('fractured:gem_finder_repair')

})