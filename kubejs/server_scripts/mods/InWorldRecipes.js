//In World Recipes

ServerEvents.recipes(event => {

  //Void Infused Sandstone
  createInWorldConversion("minecraft:sand", "fractured:void_infused_sandstone", true, 200, "minecraft:the_nether")

  //In World Conversion Function
  function createInWorldConversion(blockToConvert, convertedBlock, popItem, duration, dimension) {
    event.custom({
      "type": "inworldrecipes:block_conversion",
      "block_to_convert": blockToConvert,
      "converted_block": convertedBlock,
      "pop_block": popItem,
      "requires_sunlight": false,
      "duration": duration,
      "dimension": dimension
    }).id(`fractured:${convertedBlock.split(':')[1]}_conversion`)
  }

  /*
  event.custom({
    "type": "inworldrecipes:block_conversion",
    "block_to_convert": "minecraft:sand",
    "converted_block": "fractured:void_infused_sandstone",
    "pop_block": true,
    "requires_sunlight": false,
    "dimension": "javd:void",
    "duration": 200
  })
  */
 
  //Glowstone Dust
  event.custom({
    "type": "inworldrecipes:lightning_crafting",
    "dropped_item":
    {
      "item": "alltheores:gold_dust",
      "count": 1

    },
    "results": [
      {
        "item": {
          "count": 1,
          "id": "minecraft:glowstone_dust"
        }
      }
    ]
  }).id('fractured:lightning_crafting/glowstone_dust')
 
  //Spark Fruit Dust
  event.custom({
    "type": "inworldrecipes:lightning_crafting",
    "dropped_item":
    {
      "item": "minecraft:nether_wart",
      "count": 1

    },
    "results": [
      {
        "item": {
          "count": 1,
          "id": "ltxi:spark_fruit"
        }
      }
    ]
  }).id('fractured:lightning_crafting/spark_fruit')

})