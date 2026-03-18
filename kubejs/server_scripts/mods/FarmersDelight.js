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
  event.shapeless('2x farmersdelight:wheat_dough', ['2x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:2_wheat_dough_from_water')
  event.shapeless('3x farmersdelight:wheat_dough', ['3x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:3_wheat_dough_from_water')
  event.shapeless('4x farmersdelight:wheat_dough', ['4x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:4_wheat_dough_from_water')
  event.shapeless('5x farmersdelight:wheat_dough', ['5x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:5_wheat_dough_from_water')
  event.shapeless('6x farmersdelight:wheat_dough', ['6x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:6_wheat_dough_from_water')
  event.shapeless('7x farmersdelight:wheat_dough', ['7x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:7_wheat_dough_from_water')
  event.shapeless('8x farmersdelight:wheat_dough', ['8x fractured:wheat_flour', 'minecraft:water_bucket']).id('farmersdelight:8_wheat_dough_from_water')

  event.shapeless('farmersdelight:wheat_dough', ['fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:wheat_dough_from_water_ceramic')
  event.shapeless('2x farmersdelight:wheat_dough', ['2x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:2_wheat_dough_from_water_ceramic')
  event.shapeless('3x farmersdelight:wheat_dough', ['3x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:3_wheat_dough_from_water_ceramic')
  event.shapeless('4x farmersdelight:wheat_dough', ['4x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:4_wheat_dough_from_water_ceramic')
  event.shapeless('5x farmersdelight:wheat_dough', ['5x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:5_wheat_dough_from_water_ceramic')
  event.shapeless('6x farmersdelight:wheat_dough', ['6x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:6_wheat_dough_from_water_ceramic')
  event.shapeless('7x farmersdelight:wheat_dough', ['7x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:7_wheat_dough_from_water_ceramic')
  event.shapeless('8x farmersdelight:wheat_dough', ['8x fractured:wheat_flour', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:8_wheat_dough_from_water_ceramic')

  event.shapeless('farmersdelight:wheat_dough', ['fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:wheat_dough_from_water_undergarden')
  event.shapeless('2x farmersdelight:wheat_dough', ['2x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:2_wheat_dough_from_water_undergarden')
  event.shapeless('3x farmersdelight:wheat_dough', ['3x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:3_wheat_dough_from_water_undergarden')
  event.shapeless('4x farmersdelight:wheat_dough', ['4x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:4_wheat_dough_from_water_undergarden')
  event.shapeless('5x farmersdelight:wheat_dough', ['5x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:5_wheat_dough_from_water_undergarden')
  event.shapeless('6x farmersdelight:wheat_dough', ['6x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:6_wheat_dough_from_water_undergarden')
  event.shapeless('7x farmersdelight:wheat_dough', ['7x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:7_wheat_dough_from_water_undergarden')
  event.shapeless('8x farmersdelight:wheat_dough', ['8x fractured:wheat_flour', 'undergarden:cloggrum_bucket[undergarden:stored_fluid={amount:1000,id:"minecraft:water"}]']).id('farmersdelight:8_wheat_dough_from_water_undergarden')


  //Clay Ball 
  cuttingWithChanceShovel('minecraft:dirt', 'minecraft:clay_ball', 0.25, 'minecraft:dirt')

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
          "item": Item.of(output).toJson()
        }
      ],
      "tool": Ingredient.of(tool).toJson()
    }).id(`fractured:cutting/${output.split(':')[1]}`)
  }

  function cuttingWithChanceShovel(output, chanceOutput, chance, input) {
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        Ingredient.of(input).toJson()
      ],
      "result": [
        {
          "item": Item.of(output).toJson()
        },
        {
        "chance": chance,
        "item": Item.of(chanceOutput).toJson()
      }
      ],
      "tool": {
        "type": "farmersdelight:item_ability",
        "action": "shovel_dig"
      }
    }).id(`fractured:cutting/${output.split(':')[1]}`)
  }
})