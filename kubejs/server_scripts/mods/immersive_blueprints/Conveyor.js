//Blueprint - Conveyor

ServerEvents.recipes(event => {

  //Remove 
  event.remove({ id: 'immersiveengineering:crafting/conveyor_basic' })

  //Conveyor
  event.recipes.immersiveengineering.blueprint(
    'conveyor',
    TagOutputJS.ofItemStack('8x immersiveengineering:conveyor_basic'),
    [
        IngredientWithSizeJS.ofItemStack('1x immersiveengineering:component_iron'),
        IngredientWithSizeJS.ofItemStack('2x immersiveengineering:hemp_fabric'),
        IngredientWithSizeJS.ofItemStack('2x alltheores:bronze_ingot'),
    ]
  ).id('fractured:conveyor')

  //Blueprint Recipe
  event.shaped('immersiveengineering:blueprint[immersiveengineering:blueprint="conveyor"]', ['AAA', 'BBB', 'CCC'], {
    A: '#c:ingots/copper',
    B: 'fractured:blueprint_paper',
    C: 'immersiveengineering:hemp_fabric'
  }).id('fractured:blueprint/conveyor')

})