//Blueprint - Common Projectiles

ServerEvents.recipes(event => {

  //Remove 
  event.remove({ id: 'immersiveengineering:crafting/blueprint_bullets' })

  //Blueprint Recipe
  event.shaped('immersiveengineering:blueprint[immersiveengineering:blueprint="bullet"]', ['AAA', 'BBB', 'CCC'], {
    A: 'immersiveengineering:empty_casing',
    B: 'fractured:blueprint_paper',
    C: '#c:ingots/constantan',
  }).id('fractured:blueprint/common_projectiles')

})