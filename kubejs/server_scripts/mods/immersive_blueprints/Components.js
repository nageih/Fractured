//Blueprint - Components

ServerEvents.recipes(event => {

  //Remove 
  event.remove({ id: 'immersiveengineering:crafting/blueprint_components' })
  event.remove({ id: 'immersiveengineering:blueprint/component_iron' })
  event.remove({ id: 'immersiveengineering:blueprint/component_steel' })
  event.remove({ id: 'immersiveengineering:crafting/component_iron' })
  event.remove({ id: 'immersiveengineering:crafting/component_steel' })

  //Iron Component
  event.recipes.immersiveengineering.blueprint(
    'components',
    TagOutputJS.ofItemStack('immersiveengineering:component_iron'),
    [
        IngredientWithSizeJS.ofItemStack('2x undergarden:cloggrum_ingot'),
        IngredientWithSizeJS.ofItemStack('1x alltheores:bronze_ingot'),
    ]
  ).id('fractured:component_iron_cloggrum')

  event.recipes.immersiveengineering.blueprint(
    'components',
    TagOutputJS.ofItemStack('immersiveengineering:component_iron'),
    [
        IngredientWithSizeJS.ofItemStack('2x undergarden:cloggrum_ingot'),
        IngredientWithSizeJS.ofItemStack('1x undergarden:utheric_cluster'),
    ]
  ).id('fractured:component_iron_utheric')

  //Steel Component
  event.recipes.immersiveengineering.blueprint(
    'components',
    TagOutputJS.ofItemStack('immersiveengineering:component_steel'),
    [
        IngredientWithSizeJS.ofItemStack('2x undergarden:froststeel_ingot'),
        IngredientWithSizeJS.ofItemStack('1x alltheores:steel_ingot'),
    ]
  ).id('fractured:component_steel')

  //Blueprint Recipe
  event.shaped('immersiveengineering:blueprint[immersiveengineering:blueprint="components"]', ['ABC', 'DDD', 'EEE'], {
    A: '#c:ingots/copper',
    B: '#c:ingots/tin',
    C: '#c:ingots/bronze',
    D: 'fractured:blueprint_paper',
    E: 'undergarden:utheric_cluster',
  }).id('fractured:blueprint/components')

})