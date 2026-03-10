//Blueprint - Engineering Blocks

ServerEvents.recipes(event => {

  //Remove 
  event.remove({ id: 'immersiveengineering:crafting/light_engineering' })
  event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' })
  event.remove({ id: 'immersiveengineering:crafting/rs_engineering' })

  
  //This is needed to prevent a crash that happens
  event.recipes.immersiveengineering.blueprint(
    'engineering_blocks',
    TagOutputJS.ofItemStack('1x minecraft:cobblestone'),
    [
        IngredientWithSizeJS.ofItemStack('1x minecraft:cobblestone'),
    ]
  ).id('fractured:air')

  //Redstone Engineering Block
  event.recipes.immersiveengineering.blueprint(
    'engineering_blocks',
    TagOutputJS.ofItemStack('immersiveengineering:rs_engineering'),
    [
        IngredientWithSizeJS.ofItemStack('1x immersiveengineering:component_iron'),
        IngredientWithSizeJS.ofItemStack('1x immersiveengineering:component_steel'),
    ]
  ).id('fractured:rs_engineering')

  //Light Engineering Block
  event.recipes.immersiveengineering.blueprint(
    'engineering_blocks',
    TagOutputJS.ofItemStack('immersiveengineering:light_engineering'),
    [
        IngredientWithSizeJS.ofItemStack('2x immersiveengineering:component_iron'),
        IngredientWithSizeJS.ofItemStack('3x alltheores:bronze_ingot'),
    ]
  ).id('fractured:light_engineering')

  //Heavy Engineering Block
  event.recipes.immersiveengineering.blueprint(
    'engineering_blocks',
    TagOutputJS.ofItemStack('immersiveengineering:heavy_engineering'),
    [
        IngredientWithSizeJS.ofItemStack('2x immersiveengineering:component_steel'),
        IngredientWithSizeJS.ofItemStack('3x alltheores:steel_ingot'),
    ]
  ).id('fractured:heavy_engineering')

  
  

  //Blueprint Recipe
  event.shaped('immersiveengineering:blueprint[immersiveengineering:blueprint="engineering_blocks"]', ['AAA', 'BBB', 'CCC'], {
    A: 'immersiveengineering:component_iron',
    B: 'fractured:blueprint_paper',
    C: 'immersiveengineering:component_steel',
  }).id('fractured:blueprint/engineering_blocks')

})
