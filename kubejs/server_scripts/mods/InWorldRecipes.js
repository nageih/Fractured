//In World Recipes

ServerEvents.recipes(event => {

  //Void Block
  createInWorldConversion('alltheores:steel_block', "fractured:void_block", false, 100, "javd:void")

  //Void Planks
  createInWorldConversion('immersiveengineering:treated_wood_horizontal', "fractured:void_planks", false, 100, "javd:void")

  //Void Infused Sandstone
  createInWorldConversion("minecraft:sandstone", "fractured:void_infused_sandstone", false, 100, "javd:void")

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

  //Vitriol Berries
  event.custom({
    "type": "inworldrecipes:lightning_crafting",
    "dropped_item":
    {
      "item": "minecraft:glow_berries",
      "count": 1
      
    },
    "results": [
      {
        "item": {
          "count": 1,
          "id": "ltxi:vitriol_berries"
        }
      }
    ]
  }).id('fractured:lightning_crafting/vitriol_berries')

  //Dyes
  colors.forEach(color => {
    createDyeExtractorRecipe(`colors:${color}_stone`, 'fractured:dye_extractor', 'minecraft:stone', `minecraft:${color}_dye`, 0.25)

  });


  //Dye Extractor
  function createDyeExtractorRecipe(input, heldItem, outputState, outputItem, outputItemChance) {
    event.recipes.inworldrecipes.block_interaction(
      "right",                        
      input,
      heldItem, 
      false, 
      false, 
      true, 
      false      
    ).outputBlockState(outputState)
    .results([
      [outputItem, outputItemChance]
    ])

  }

  //Forgotten Template
  event.custom({
  "type": "inworldrecipes:drop_item_in_fluid",
    "dropped_items": [
      {
        "count": 1,
        "item": "undergarden:forgotten_upgrade_smithing_template"
      }
    ],
    "fluid": "undergarden:virulent_mix_source",
    "consume_fluid": true,
    "results": [
      {
        "item": {
          "count": 2,
          "id": "undergarden:forgotten_upgrade_smithing_template"
        }
      }
    ]
  }).id('fractured:drop_item_in_fluid/forgotten_template')
    
})