//Opolis Utilities 

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'opolisutilities:leafy_string'})
  event.remove({id: 'opolisutilities:sticks'})
  event.remove({id: 'opolisutilities:chests'})
  event.remove({id: 'opolisutilities:crook'})
  event.remove({id: 'opolisutilities:resource_generator'})
  event.remove({id: 'opolisutilities:fluid_generator'})

  //Resource Generator
  event.shaped('opolisutilities:resource_generator', ['AAA', 'B B', 'AAA'], {
    A: 'fractured:void_ingot',
    B: 'fractured:void_chest'
  }).id('fractured:resource_generator')

  //Fluid Generator
  event.shaped('opolisutilities:fluid_generator', ['AAA', 'B B', 'AAA'], {
    A: 'fractured:void_ingot',
    B: 'fractured:void_bucket'
  }).id('fractured:fluid_generator')

  //Crook
  event.shaped('opolisutilities:crook', ['AA', ' A'], {
    A: '#c:rods/wooden'
  }).id('fractured:crook')

  //Soaked Paper
  event.recipes.opolisutilities.soaking_table('opolisutilities:soaked_paper', 'minecraft:sugar_cane', 100).id('fractured:soaked_paper_from_sugar_cane')
  event.recipes.opolisutilities.soaking_table('opolisutilities:soaked_paper', 'projectvibrantjourneys:reeds', 100).id('fractured:soaked_paper_from_reeds')
  
  //Dried Leaves
  event.recipes.opolisutilities.drying_table('fractured:dried_leaves', '#minecraft:leaves', 100).id('fractured:dried_leaves')

})