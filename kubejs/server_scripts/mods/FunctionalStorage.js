//Functional Storage

ServerEvents.recipes(event => {

  //Replace Input
  event.replaceInput({mod: 'functionalstorage'}, '#c:chests/wooden', 'fractured:void_chest')
  event.replaceInput({mod: 'functionalstorage'}, 'minecraft:bucket', 'fractured:void_bucket')
  event.replaceInput({id: 'functionalstorage:linking_tool'}, 'minecraft:gold_ingot', 'fractured:void_ingot')
  event.replaceInput({id: 'functionalstorage:linking_tool'}, 'minecraft:diamond', 'undergarden:forgotten_ingot')
  event.replaceInput({id: 'functionalstorage:configuration_tool'}, 'minecraft:gold_ingot', 'fractured:void_ingot')
  event.replaceInput({id: 'functionalstorage:configuration_tool'}, 'minecraft:emerald', 'undergarden:forgotten_nugget')

  //Compating Rules
  addCompactingRecipe('minecraft:snow_block', '4x minecraft:snowball')
  addCompactingRecipe('immersiveengineering:coal_coke', '2x fractured:small_coal_coke')



  function addCompactingRecipe(higher, lower) {
    event.custom({
      "type": "functionalstorage:custom_compacting",
      "higher_input": Item.of(higher).toJson(),
      "lower_input": Item.of(lower).toJson(),
    })
  }
})