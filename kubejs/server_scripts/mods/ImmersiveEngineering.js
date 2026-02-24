//Immersive Engineering (All blueprint related recipes and additions are in the immersive_blueprints folder)

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'immersiveengineering:crafting/cokebrick' })
  event.remove({ id: 'immersiveengineering:crafting/alloybrick' })
  event.remove({ id: 'immersiveengineering:crafting/treated_wood_horizontal' })
  event.remove({ id: 'immersiveengineering:crafting/stick_steel' })
  event.remove({ id: 'immersiveengineering:blastfurnace/steel' })
  event.remove({ id: 'immersiveengineering:blastfurnace/steel_block' })
  event.remove({ id: 'immersiveengineering:crafting/windmill_blade' })
  event.remove({ id: 'immersiveengineering:metalpress/bullet_casing' })
  event.remove({ id: 'immersiveengineering:blueprint/mold_bullet_casing' })
  event.remove({ id: 'immersiveengineering:crafting/empty_shell' })
  event.remove({ id: 'immersiveengineering:squeezer/graphite_dust' })
  event.remove({ id: 'immersiveengineering:crafting/sample_drill' })
  event.remove({ id: /immersiveengineering:mineral/ })
  event.remove({ id: 'immersiveengineering:super_mineral_vein' })
  event.remove({ id: 'immersiveengineering:crafting/armor_faraday_helmet' })
  event.remove({ id: 'immersiveengineering:crafting/armor_faraday_chestplate' })
  event.remove({ id: 'immersiveengineering:crafting/armor_faraday_leggings' })
  event.remove({ id: 'immersiveengineering:crafting/armor_faraday_boots' })

  //Replace Input
  event.replaceInput({ id: 'immersiveengineering:crafting/hammer' }, 'minecraft:iron_ingot', '#c:ingots/copper')
  event.replaceInput({ id: 'immersiveengineering:crafting/windmill' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/workbench' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/dynamo' }, 'minecraft:redstone', '#c:dusts/bronze')
  event.replaceInput({ id: 'immersiveengineering:crafting/dynamo' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/coil_lv' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/wirecutter' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/thermoelectric_generator' }, '#c:plates/constantan', '#c:plates/iron')
  event.replaceInput({ id: 'immersiveengineering:crafting/empty_casing' }, '#c:plates/copper', '#c:plates/constantan')

  //Titanium Gear
  event.recipes.immersiveengineering.metal_press(
    TagOutputJS.ofItemStack("ltxi:titanium_gear"),
    IngredientWithSizeJS.ofTag("c:ingots/titanium", 4),
    "casting:gear_mold",
    "1000"
  ).id("fractured:titanium_gear")

  //Faraday Armor
  event.shaped('immersiveengineering:armor_faraday_helmet', ['AAA', 'ABA'], {
    A: '#c:plates/aluminum',
    B: 'immersiveengineering:coil_hv'
  }).id('fractured:armor_faraday_helmet')

  event.shaped('immersiveengineering:armor_faraday_chestplate', ['A A', 'ABA', 'AAA'], {
    A: '#c:plates/aluminum',
    B: 'immersiveengineering:coil_hv'
  }).id('fractured:armor_faraday_chestplate')

  event.shaped('immersiveengineering:armor_faraday_leggings', ['ABA', 'A A', 'A A'], {
    A: '#c:plates/aluminum',
    B: 'immersiveengineering:coil_hv'
  }).id('fractured:armor_faraday_leggings')

  event.shaped('immersiveengineering:armor_faraday_boots', ['A A', 'A A'], {
    A: '#c:plates/aluminum'
  }).id('fractured:armor_faraday_boots')

  //Lightning Charge
  event.recipes.immersiveengineering.bottling_machine(
    TagOutputJS.ofItemStack("fractured:lightning_charge"),
    IngredientWithSizeJS.ofItemStack("minecraft:redstone"),
    Fluid.of("immersivepetroleum:napalm", 250)
  ).id('fractured:lightning_charge')

  //Core Sample Drill
  event.recipes.shaped('immersiveengineering:sample_drill', ['ABA', 'CBD', 'EBE'], {
    A: 'immersiveengineering:steel_scaffolding_standard',
    B: 'immersiveengineering:steel_fence',
    C: 'strainers:purifying_water_bucket',
    D: 'strainers:eroding_water_bucket',
    E: 'immersiveengineering:light_engineering'
  }).id('fractured:sample_drill')

  //Aluminum Ingot
  event.recipes.immersiveengineering.arc_furnace(
    [
      TagOutputJS.ofItemStack("alltheores:aluminum_ingot")
    ],
    IngredientWithSizeJS.ofItemStack("fractured:impure_aluminum"),
    200,
    8192,
    [
      IngredientWithSizeJS.ofItemStack("fractured:impure_aluminum"),
      IngredientWithSizeJS.ofItemStack("fractured:impure_aluminum"),
      IngredientWithSizeJS.ofItemStack("fractured:impure_aluminum"),
      IngredientWithSizeJS.ofItemStack("fractured:impure_aluminum")
    ],
    []
  ).id('fractured:arc_furnace/aluminum_ingot')

  //Light Fused Stone
  event.recipes.immersiveengineering.arc_furnace(
    [
        TagOutputJS.ofItemStack("fractured:light_fused_stone"),
    ],
    IngredientWithSizeJS.ofItemStack("colors:white_stone"),
    200,
    51200,
    [
        IngredientWithSizeJS.ofItemStack("colors:yellow_stone"),
        IngredientWithSizeJS.ofItemStack("colors:light_blue_stone"),
        IngredientWithSizeJS.ofItemStack("colors:red_stone"),
        IngredientWithSizeJS.ofItemStack("colors:lime_stone")
    ],[]
  ).id('fractured:arc_furnace/light_fused_stone')

  //Dark Fused Stone
  event.recipes.immersiveengineering.arc_furnace(
    [
        TagOutputJS.ofItemStack("fractured:dark_fused_stone"),
    ],
    IngredientWithSizeJS.ofItemStack("colors:black_stone"),
    200,
    51200,
    [
        IngredientWithSizeJS.ofItemStack("colors:brown_stone"),
        IngredientWithSizeJS.ofItemStack("colors:cyan_stone"),
        IngredientWithSizeJS.ofItemStack("colors:gray_stone"),
        IngredientWithSizeJS.ofItemStack("colors:light_gray_stone")
    ],[]
  ).id('fractured:arc_furnace/dark_fused_stone')

  //Bullet Mold
  event.shaped('immersiveengineering:mold_bullet_casing', [' A ', 'ABA', ' A '], {
    A: 'casting:black_brick' ,
    B: 'immersiveengineering:empty_casing'
  }).id('fractured:bullet_casing_mold')

  //Bullet Casing 
  event.recipes.immersiveengineering.metal_press(
      TagOutputJS.ofItemStack("2x immersiveengineering:empty_casing"),
      IngredientWithSizeJS.ofTag("c:ingots/constantan"),
      "immersiveengineering:mold_bullet_casing",
      "1000"
  ).id("fractured:bullet_casing")

  //Windmill Blade
  event.shaped('immersiveengineering:windmill_blade', ['AA ', 'BBA', 'CB '], {
    A: '#immersiveengineering:treated_wood',
    B: 'immersiveengineering:stick_treated',
    C: '#c:rods/steel'
  }).id('fractured:windmill_blade')

  //Gold, Silver, Nickel 
  addSqueezerRecipe('minecraft:gold_ingot', 'minecraft:empty', 0,  '4x fractured:impure_gold')
  addSqueezerRecipe('alltheores:silver_ingot', 'minecraft:empty', 0,  '4x fractured:impure_silver')
  addSqueezerRecipe('alltheores:nickel_ingot', 'minecraft:empty', 0,  '4x fractured:impure_nickel')

  //Redstone
  addSqueezerRecipe('minecraft:redstone', '125x undergarden:virulent_mix_source', 4000, 'undergarden:utheric_cluster')

  //Iron Ingot
  addSqueezerRecipe('minecraft:iron_ingot', '125x undergarden:virulent_mix_source', 4000, 'undergarden:cloggrum_ingot')

  //Steel
  addBlastFurnaceRecipe('alltheores:steel_ingot', 'undergarden:froststeel_ingot', 20 * 30)
  addBlastFurnaceRecipe('alltheores:steel_block', 'undergarden:froststeel_block', 20 * 30 * 9)

  //Undergarden Raw Ores 
  addBlastFurnaceRecipe('undergarden:cloggrum_ingot', 'undergarden:raw_cloggrum', 20 * 10)
  addBlastFurnaceRecipe('undergarden:froststeel_ingot', 'undergarden:raw_froststeel', 20 * 10)

  //Metallic Dust
  addBlastFurnaceRecipe('fractured:metallic_dust', 'alltheores:bronze_ingot', 20 * 10)

  //Kiln Brick
  event.shaped('4x immersiveengineering:alloybrick', ['AB', 'BA'], {
    A: 'immersiveengineering:cokebrick',
    B: 'immersiveengineering:blastbrick'
  }).id('fractured:alloybrick')

  //Coke Coal 
  event.recipes.immersiveengineering.coke_oven(
      TagOutputJS.ofItemStack('fractured:small_coal_coke'),
      IngredientWithSizeJS.ofItem('fractured:impure_coal', 16),
      3000,
      250
  ).id('fractured:coke_from_impure_coal')

  event.shapeless('immersiveengineering:coal_coke', ['2x fractured:small_coal_coke']).id('fractured:coke_from_small_coal_coke')

  //Squeezer Function
  function addSqueezerRecipe(output, outputFluid, outputFluidAmount, input) {
      event.recipes.immersiveengineering.squeezer(
        IngredientWithSizeJS.ofItemStack(input),
        outputFluidAmount,
        Fluid.of(outputFluid),
        TagOutputJS.ofItemStack(output)
    ).id(`fractured:squeezer/${output.split(':')[1]}`)
  }
  function addSqueezerRecipeNoFluid(output, input) {
      event.recipes.immersiveengineering.squeezer(
        IngredientWithSizeJS.ofItemStack(input),
        TagOutputJS.ofItemStack(output)
    ).id(`fractured:squeezer/${output.split(':')[1]}`)
  }

  //Blast Furnace Function
  function addBlastFurnaceRecipe(output, input, time) {
    event.recipes.immersiveengineering.blast_furnace(
      TagOutputJS.ofItemStack(output),
      IngredientWithSizeJS.ofItemStack(input),
      time
    ).id(`fractured:blast_furnace/${output.split(':')[1]}`)
  }

})