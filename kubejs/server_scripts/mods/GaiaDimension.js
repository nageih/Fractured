//Actually Additions

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'gaiadimension:purifier' })
  event.remove({ id: 'gaiadimension:keystone_block' })

  //Keystone Block
  event.shaped('gaiadimension:keystone_block', ['ABA', 'BCB', 'ABA'], {
    A: 'undergarden:froststeel_ingot',
    B: 'minecraft:redstone',
    C: 'minecraft:glowstone'
  }).id('fractured:keystone_block')

  //Purifier
  event.shaped('gaiadimension:purifier', ['ABA', 'CDC', 'ABA'], {
    A: 'gaiadimension:pyrite_block',
    B: 'gaiadimension:aura_cluster',
    C: 'gaiadimension:restructurer',
    D: 'gaiadimension:bismuth_crystal',
  }).id('fractured:purifier')

  //Impure to Pure 
  oreTypes.forEach(oreType => {
    addPurifierRecipe( `fractured:impure_${oreType}`, `fractured:pure_${oreType}`, `fractured:pure_${oreType}`)
  })


  //Purifier Function
  function addPurifierRecipe(input, output, byproduct) {
    event.custom({
      "type": "gaiadimension:purifying",
      "byproduct": Item.of(byproduct).toJson(),
      "cookingtime": 200,
      "experience": 0.1,
      "ingredient": Ingredient.of(input).toJson(),
      "result": Item.of(output).toJson()
    }).id(`fractured:purifier/${output.split(':')[1]}`)
  }

})