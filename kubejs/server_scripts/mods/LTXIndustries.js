//LTX Industries 

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'ltxi:shaped_recipes/titanium_gear' })
  event.remove({ id: 'ltxi:shaped_recipes/slatesteel_gear' })
  event.remove({ id: 'ltxi:shaped_recipes/t1_circuit' })
  event.remove({ id: 'ltxi:shaped_recipes/t2_circuit' })

  event.remove({ id: 'ltxi:assembling/t1_circuit' })
  event.remove({ id: 'ltxi:assembling/t2_circuit' })

  event.remove({ id: 'ltxi:smelting/smelt_raw_niobium' })
  event.remove({ id: 'ltxi:blasting/smelt_raw_niobium' })
  event.remove({ id: 'ltxi:smelting/smelt_stone_titanium' })
  event.remove({ id: 'ltxi:blasting/smelt_stone_titanium' })
  event.remove({ id: 'ltxi:blasting/smelt_deepslate_titanium' })
  event.remove({ id: 'ltxi:smelting/smelt_deepslate_titanium' })
  event.remove({ id: 'ltxi:blasting/smelt_raw_titanium' })
  event.remove({ id: 'ltxi:smelting/smelt_raw_titanium' })

  //Replace Input
  event.replaceInput({ id: 'ltxi:shaped_recipes/fabricator' }, 'ltxi:titanium_ingot', 'ltxi:niobium_ingot')

  //Fluix Dust
  grinding('ae2:fluix_dust', 'ae2:fluix_crystal')
  grinding('ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal')
  grinding('ae2:sky_dust', 'ae2:sky_stone_block')

  //Grinding
  function grinding(output, input) {
    event.custom({
      "type": "ltxi:grinding",
      "ingredients": [
        Ingredient.of(input).toJson()
      ],
      "item_results": [
        Item.of(output).toJson()
      ]
    }).id(`${output.split(':')[1]}/grinding/${input.split(':')[1]}`)
  }
})