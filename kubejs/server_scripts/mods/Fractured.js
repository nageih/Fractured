//Fractured 

ServerEvents.recipes(event => {

  //Removed Banned Items
  event.remove({output: '#fractured:banned_items'})

  //Logs to Planks nerf
  event.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    event.shapeless(Item.of(output.id, 2), ingredients[0]).id(r.getId())
  })  

  //Infused Obsidian
  event.shaped('5x fractured:infused_obsidian', ['ABC', 'DDD', 'CBA'], { 
    A: 'gaiadimension:albite_block',
    B: 'gaiadimension:stibnite_block',
    C: 'gaiadimension:euclase_block',
    D: 'minecraft:obsidian'
  }).id('fractured:infused_obsidian')

  //Nether Catalyst
  event.shaped('fractured:nether_catalyst', ['ABA', 'BCB', 'ABA'], { 
    A: 'minecraft:nether_brick',
    B: 'minecraft:glowstone_dust',
    C: 'fractured:malachite_heart'
  }).id('fractured:nether_catalyst')

  //Malachite Watchtower Locator
  event.shaped('fractured:malachite_watchtower_locator', ['CAC', 'ABA', 'CAC'], { 
    A: 'gaiadimension:pink_essence',
    B: 'minecraft:compass',
    C: 'gaiadimension:black_residue'
  }).id('fractured:malachite_watchtower_locator')

  //Catacombs Locator
  event.shaped('fractured:catacombs_locator', [' A ', 'ABA', ' A '], { 
    A: '#c:dusts/saltpeter',
    B: 'minecraft:compass'
  }).id('fractured:catacombs_locator')


  //Gaia Catalyst
  event.shaped('fractured:gaia_catalyst', ['ABA', 'BCB', 'ABA'], { 
    A: 'minecraft:iron_block',
    B: 'minecraft:redstone_block',
    C: 'minecraft:glowstone'
  }).id('fractured:gaia_catalyst')

  //Cloggrum Template
  event.shaped('fractured:cloggrum_template', ['ABA', 'ABA', 'AAA'], {
    A: 'undergarden:cloggrum_ingot',
    B: 'undergarden:depthrock'
  }).id('fractured:cloggrum_template')

  //Wheat Flour
  event.shapeless('fractured:wheat_flour', ['fractured:mortar_and_pestle', 'minecraft:wheat'])
    .keepIngredient('fractured:mortar_and_pestle').id('fractured:wheat_flour')
  
  //Mortar and Pestle
  event.shapeless('fractured:mortar_and_pestle', ['fractured:pestle', 'minecraft:bowl']).id('fractured:mortar_and_pestle')

  //Pestle
  event.shaped('fractured:pestle', [' A', 'B '], { 
    A: 'minecraft:stone',
    B: 'flintrequired:flint_shard'
  }).id('fractured:pestle')

  //Grout Dust
  event.shapeless('fractured:grout_dust', ['fractured:mortar_and_pestle', '#c:sands', 'minecraft:gravel', 'minecraft:clay_ball'])
    .keepIngredient('fractured:mortar_and_pestle').id('fractured:grout_ball_from_dust')

  //Leafy Binding
  event.shaped('fractured:leafy_binding', [' A ', 'AAA', ' A '], { 
    A: 'opolisutilities:leafy_string'
  }).id('fractured:leafy_binding')

  //Blueprint Paper
  event.shapeless('fractured:blueprint_paper', ['3x minecraft:paper', '#c:dyes/blue']).id('fractured:blueprint_paper')

  //Forgotten Sandstone
  event.shaped('fractured:forgotten_sandstone', ['ABA', 'BCB', 'ABA'], { 
    A: '#c:sands',
    B: '#c:nuggets/forgotten_metal',
    C: 'fractured:void_infused_sandstone' 
  }).id('fractured:forgotten_sandstone')

  //Treated Stone Bricks
  event.shaped('fractured:treated_stone_bricks', ['ABA', 'BCB', 'ABA'], { 
    A: 'minecraft:stone_bricks',
    B: '#immersiveengineering:treated_wood',
    C: '#c:ingots/bronze'
  }).id('fractured:treated_stone_bricks')

  //Molds
  event.shaped('fractured:pickaxe_mold', [' A ', 'ABA', ' A '], { 
    A: 'casting:black_brick' ,
    B: 'flintrequired:flint_pickaxe_head' 
  }).id('fractured:pickaxe_mold')

  event.shaped('fractured:axe_mold', [' A ', 'ABA', ' A '], {
    A: 'casting:black_brick' ,
    B: 'flintrequired:flint_axe_head' 
  }).id('fractured:axe_mold')

  event.shaped('fractured:shovel_mold', [' A ', 'ABA', ' A '], {
    A: 'casting:black_brick' ,
    B: 'flintrequired:flint_shovel_head' 
  }).id('fractured:shovel_mold')

  event.shaped('fractured:hoe_mold', [' A ', 'ABA', ' A '], {
    A: 'casting:black_brick' ,
    B: 'flintrequired:flint_hoe_head' 
  }).id('fractured:hoe_mold')

  event.shaped('fractured:sword_mold', [' A ', 'ABA', ' A '], {
    A: 'casting:black_brick' ,
    B: 'flintrequired:flint_knife_head'
  }).id('fractured:sword_mold')

  //Grout Brick 
  event.smelting('fractured:grout_brick', 'fractured:grout_dust').xp(0.1).id('fractured:smelting/grout_brick')

})