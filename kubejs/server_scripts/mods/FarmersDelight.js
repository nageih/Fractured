//Farmers Delight

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'farmersdelight:cutting/gravel'})
  event.remove({id: 'farmersdelight:wheat_dough_from_water'})
  event.remove({id: 'farmersdelight:wheat_dough_from_egg'})

  //Replace Input
  event.replaceInput({id: 'farmersdelight:flint_knife'}, 'minecraft:flint', 'flintrequired:flint_knife_head')

  //Dough
  event.shapeless('farmersdelight:wheat_dough', ['fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:wheat_dough_from_water')
  event.shapeless('farmersdelight:wheat_dough', ['fractured:wheat_flour', 'thirst:terracotta_water_bowl']).id('farmersdelight:wheat_dough_from_terracotta_water_bowl')
  event.shapeless('farmersdelight:wheat_dough', ['fractured:wheat_flour', 'actuallyadditions:water_bowl']).id('farmersdelight:wheat_dough_from_actuallyadditions_water_bowl')

  //Leafy String
  cutting('opolisutilities:leafy_string', '#minecraft:leaves', '#c:tools/knife')

  //Flint
  cutting('minecraft:flint', 'minecraft:gravel', 'projectvibrantjourneys:rocks')

  //Cutting Recipe Function
  function cutting(output, input, tool) {
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        Ingredient.of(input).toJson()
      ],
      "result": [
        {
          "item": 
            Item.of(output).toJson()
          
        }
      ],
      "tool": Ingredient.of(tool).toJson()
    }).id(`fractured:cutting/${output.split(':')[1]}`)
  }
})