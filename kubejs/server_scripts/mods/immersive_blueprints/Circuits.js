//Blueprint - Circuits

ServerEvents.recipes(event => {

  //Remove 
  //event.remove({ id: 'immersiveengineering:crafting/light_engineering' })

  //Control Press
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('fractured:control_press'),
    [
      IngredientWithSizeJS.ofItemStack('ltxi:titanium_block'),
    ]
  ).id('fractured:control_press')
  
  //Logic Press
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ae2:logic_processor_press'),
    [
        IngredientWithSizeJS.ofItemStack('minecraft:gold_block'),
    ]
  ).id('fractured:logic_processor_press')

  //Engineering Press
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ae2:engineering_processor_press'),
    [
      IngredientWithSizeJS.ofItemStack('minecraft:diamond_block'),
    ]
  ).id('fractured:engineering_processor_press')
  
  //Calculation Press
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ae2:calculation_processor_press'),
    [
      IngredientWithSizeJS.ofItemStack('ae2:quartz_block'),
    ]
  ).id('fractured:calculation_processor_press')

  //Logic Processor
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ae2:logic_processor'),
    [
      IngredientWithSizeJS.ofItemStack('ae2:printed_logic_processor'),
      IngredientWithSizeJS.ofItemStack('minecraft:redstone'),
      IngredientWithSizeJS.ofItemStack('immersiveengineering:circuit_board'),
    ]
  ).id('fractured:logic_processor')

  //Engineering Processor
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ae2:engineering_processor'),
    [
      IngredientWithSizeJS.ofItemStack('ae2:printed_engineering_processor'),
      IngredientWithSizeJS.ofItemStack('minecraft:redstone'),
      IngredientWithSizeJS.ofItemStack('immersiveengineering:circuit_board'),
    ]
  ).id('fractured:engineering_processor')

  //Calculation Processor
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ae2:calculation_processor'),
    [
      IngredientWithSizeJS.ofItemStack('ae2:printed_calculation_processor'),
      IngredientWithSizeJS.ofItemStack('minecraft:redstone'),
      IngredientWithSizeJS.ofItemStack('immersiveengineering:circuit_board'),
    ]
  ).id('fractured:calculation_processor')

  //Basic Circuit (Control Circuit)
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ltxi:t1_circuit'),
    [
      IngredientWithSizeJS.ofItemStack('fractured:printed_control_circuit'),
      IngredientWithSizeJS.ofItemStack('ae2:printed_calculation_processor'),
      IngredientWithSizeJS.ofItemStack('ae2:printed_logic_processor'),
      IngredientWithSizeJS.ofItemStack('ae2:printed_engineering_processor'),
      IngredientWithSizeJS.ofItemStack('minecraft:redstone'),
      IngredientWithSizeJS.ofItemStack('immersiveengineering:circuit_board'),
    ]
  ).id('fractured:control_circuit')

  //Enhanced Circuit 
  event.recipes.immersiveengineering.blueprint(
    'circuits',
    TagOutputJS.ofItemStack('ltxi:t2_circuit'),
    [
      IngredientWithSizeJS.ofItemStack('ltxi:t1_circuit'),
      IngredientWithSizeJS.ofItemStack('ae2:logic_processor'),
      IngredientWithSizeJS.ofItemStack('ae2:engineering_processor'),
      IngredientWithSizeJS.ofItemStack('ae2:calculation_processor'),
      IngredientWithSizeJS.ofItemStack('minecraft:redstone'),
      IngredientWithSizeJS.ofItemStack('immersiveengineering:circuit_board'),
    ]
  ).id('fractured:enhanced_control_circuit')

  //Blueprint Recipe
  event.shaped('immersiveengineering:blueprint[immersiveengineering:blueprint="circuits"]', ['AAA', 'BBB', 'CCC'], {
    A: 'immersiveengineering:circuit_board',
    B: 'fractured:blueprint_paper',
    C: 'immersiveengineering:plate_duroplast',
  }).id('fractured:blueprint/circuits')

})