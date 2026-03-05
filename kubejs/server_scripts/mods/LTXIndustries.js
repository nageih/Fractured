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

  //Replace Input
  event.replaceInput({ id: 'ltxi:shaped_recipes/fabricator' }, 'ltxi:titanium_ingot', 'ltxi:niobium_ingot')
})