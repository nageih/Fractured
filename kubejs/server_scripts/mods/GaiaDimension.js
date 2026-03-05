//Actually Additions

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'gaiadimension:purifier' })
  event.remove({ id: 'gaiadimension:keystone_block' })

  //Titanium
  addRestructuringRecipe('fractured:impure_titanium', 'ltxi:titanium_nugget', 'ltxi:titanium_nugget')
  addRestructuringRecipe('fractured:pure_titanium', '2x ltxi:titanium_nugget', '2x ltxi:titanium_nugget')

  //Certus Quartz
  addRestructuringRecipe('fractured:impure_certus_quartz', 'ae2:certus_quartz_dust', 'ae2:certus_quartz_dust')
  addRestructuringRecipe('fractured:pure_certus_quartz', 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust')

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
    }).id(`fractured:purifier/${output.split(':')[1]}_from_${input.split(':')[1]}`)
  }

  //Restructuring Function
  function addRestructuringRecipe(input, output, byproduct) {
    event.custom({
      "type": "gaiadimension:restructuring",
      "byproduct": Item.of(byproduct).toJson(),
      "cookingtime": 200,
      "experience": 0.1,
      "ingredient": Ingredient.of(input).toJson(),
      "result": Item.of(output).toJson()
    }).id(`fractured:restructuring/${output.split(':')[1]}_from_${input.split(':')[1]}`)
  }
})