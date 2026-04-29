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
  event.remove({ id: 'immersiveengineering:crafting/fluid_pipe' })
  event.remove({ id: 'immersiveengineering:crafting/rs_engineering' })
  event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' })
  event.remove({ id: 'immersiveengineering:crafting/light_engineering' })
  event.remove({ id: 'immersiveengineering:crafting/redstone_acid' })
  event.remove({ id: 'immersiveengineering:crafting/hammer' })
  event.remove({input: 'immersiveengineering:hammer', output: '#c:dusts'})
  event.remove({input: 'immersiveengineering:hammer', output: '#c:plates'})


  //Replace Input
  event.replaceInput({ id: 'immersiveengineering:crafting/windmill' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/workbench' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/dynamo' }, 'minecraft:redstone', '#c:dusts/bronze')
  event.replaceInput({ id: 'immersiveengineering:crafting/dynamo' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/coil_lv' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/wirecutter' }, 'minecraft:iron_ingot', '#c:ingots/steel')
  event.replaceInput({ id: 'immersiveengineering:crafting/thermoelectric_generator' }, '#c:plates/constantan', '#c:plates/iron')
  event.replaceInput({ id: 'immersiveengineering:crafting/empty_casing' }, '#c:plates/copper', '#c:plates/constantan')
  event.replaceInput({ id: 'immersiveengineering:crafting/coil_hv' }, 'minecraft:iron_ingot', 'actuallyadditions:void_crystal_block')
  event.replaceInput({ id: 'immersiveengineering:crafting/capacitor_lv' }, 'immersiveengineering:plate_lead', '#c:plates/iron' )
  
  //Hammer
  event.shaped('immersiveengineering:hammer[unbreakable={},damage=1]', [' AB', ' CA', 'C  '], {
    A: '#c:ingots/copper',
    B: '#c:strings',
    C: '#c:rods/wooden'
  }).id('fractured:hammer')
  
  //Time Steel
  event.recipes.immersiveengineering.alloy(
    TagOutputJS.ofItemStack("tempad:time_steel"),
    IngredientWithSizeJS.ofItemStack("fractured:void_ingot"),
    IngredientWithSizeJS.ofItemStack("alltheores:electrum_ingot"),
  ).id("fractured:time_steel_ingot")

  //RS Engineering (Controller Engineering Block)
  event.shaped('2x immersiveengineering:rs_engineering', [' A ', 'ABA', ' A '], {
    A: '#c:ingots/copper',
    B: 'undergarden:utheric_cluster'
  }).id('fractured:controller_engineering_block')

  //Heavy Engineering Block
  event.shaped('2x immersiveengineering:heavy_engineering', [' A ', 'ABA', ' A '], {
    A: '#c:ingots/steel',
    B: 'immersiveengineering:component_steel'
  }).id('fractured:heavy_engineering_block')

  //Light Engineering Block
  event.shaped('2x immersiveengineering:light_engineering', [' A ', 'ABA', ' A '], {
    A: '#c:ingots/bronze',
    B: 'immersiveengineering:component_iron'
  }).id('fractured:light_engineering_block')

  //Fluid Pipe
  event.shaped('8x immersiveengineering:fluid_pipe', ['AAA', '   ', 'AAA'], {
    A: '#c:ingots/steel'
  }).id('fractured:fluid_pipe')

  //Titanium Gear
  event.recipes.immersiveengineering.metal_press(
    TagOutputJS.ofItemStack("ltxi:titanium_gear"),
    IngredientWithSizeJS.ofTag("c:ingots/titanium", 4),
    "casting:gear_mold",
    "2400"
  ).id("fractured:titanium_gear")

  //Slatesteel Gear
  event.recipes.immersiveengineering.metal_press(
    TagOutputJS.ofItemStack("ltxi:slatesteel_gear"),
    IngredientWithSizeJS.ofTag("c:ingots/slatesteel", 4),
    "casting:gear_mold",
    "2400"
  ).id("fractured:slatesteel_gear")

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

  //Silicon Press
  event.recipes.immersiveengineering.bottling_machine(
    [TagOutputJS.ofItemStack("ae2:printed_silicon"), TagOutputJS.ofItemStack("ae2:silicon_press")],
    IngredientWithSizeJS.ofItemStack("ae2:silicon_press"),
    Fluid.of("casting:molten_silicon", 250)
  ).id('fractured:printed_silicon')

  //Logic Processor
  event.recipes.immersiveengineering.bottling_machine(
    [TagOutputJS.ofItemStack("ae2:printed_logic_processor"), TagOutputJS.ofItemStack("ae2:logic_processor_press")],
    IngredientWithSizeJS.ofItemStack("ae2:logic_processor_press"),
    Fluid.of("casting:molten_gold", 90)
  ).id('fractured:printed_logic_processor')

  //Calculation Processor
  event.recipes.immersiveengineering.bottling_machine(
    [TagOutputJS.ofItemStack("ae2:printed_calculation_processor"), TagOutputJS.ofItemStack("ae2:calculation_processor_press")],
    IngredientWithSizeJS.ofItemStack("ae2:calculation_processor_press"),
    Fluid.of("casting:molten_certus_quartz", 250)
  ).id('fractured:printed_calculation_processor')

  //Engineering Processor
  event.recipes.immersiveengineering.bottling_machine(
    [TagOutputJS.ofItemStack("ae2:printed_engineering_processor"), TagOutputJS.ofItemStack("ae2:engineering_processor_press")],
    IngredientWithSizeJS.ofItemStack("ae2:engineering_processor_press"),
    Fluid.of("casting:molten_diamond", 90)
  ).id('fractured:printed_engineering_processor')

  //Control Processor
  event.recipes.immersiveengineering.bottling_machine(
    [TagOutputJS.ofItemStack("fractured:printed_control_circuit"), TagOutputJS.ofItemStack("fractured:control_press")],
    IngredientWithSizeJS.ofItemStack("fractured:control_press"),
    Fluid.of("casting:molten_titanium", 90)
  ).id('fractured:printed_control_circuit')

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

  //Iron Casing
  event.recipes.immersiveengineering.arc_furnace(
    [
      TagOutputJS.ofItemStack("actuallyadditions:iron_casing")
    ],
    IngredientWithSizeJS.ofItemStack("actuallyadditions:wood_casing"),
    200,
    8192,
    [
      IngredientWithSizeJS.ofItemStack("4x minecraft:iron_ingot")
    ],
    []
  ).id('fractured:arc_furnace/iron_casing')

  //Aluminum Ingot
  event.recipes.immersiveengineering.arc_furnace(
    [
      TagOutputJS.ofItemStack("alltheores:aluminum_ingot")
    ],
    IngredientWithSizeJS.ofItemStack("fractured:impure_aluminum"),
    200,
    8192,
    [
      IngredientWithSizeJS.ofItemStack("4x fractured:impure_aluminum")
    ],
    []
  ).id('fractured:arc_furnace/aluminum_ingot')

  event.recipes.immersiveengineering.arc_furnace(
    [
      TagOutputJS.ofItemStack("4x alltheores:aluminum_ingot")
    ],
    IngredientWithSizeJS.ofItemStack("fractured:pure_aluminum"),
    200,
    8192,
    [
      IngredientWithSizeJS.ofItemStack("4x fractured:pure_aluminum")
    ],
    []
  ).id('fractured:arc_furnace/aluminum_ingot_pure')

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
      "2400"
  ).id("fractured:bullet_casing")

  //Windmill Blade
  event.shaped('immersiveengineering:windmill_blade', ['AA ', 'BBA', 'CB '], {
    A: '#immersiveengineering:treated_wood',
    B: 'immersiveengineering:stick_treated',
    C: '#c:rods/steel'
  }).id('fractured:windmill_blade')
  
  //Gold, Silver, Nickel 
  addSqueezerRecipe('minecraft:gold_ingot', 'minecraft:empty', 4000,  '4x fractured:impure_gold')
  addSqueezerRecipe('alltheores:silver_ingot', 'minecraft:empty', 4000,  '4x fractured:impure_silver')
  addSqueezerRecipe('alltheores:nickel_ingot', 'minecraft:empty', 4000,  '4x fractured:impure_nickel')

  addSqueezerRecipe('minecraft:gold_ingot', 'minecraft:empty', 4000,  'fractured:pure_gold')
  addSqueezerRecipe('alltheores:silver_ingot', 'minecraft:empty', 4000,  'fractured:pure_silver')
  addSqueezerRecipe('alltheores:nickel_ingot', 'minecraft:empty', 4000,  'fractured:pure_nickel')

  //Redstone
  addSqueezerRecipe('minecraft:redstone', '125x undergarden:virulent_mix_source', 4000, 'undergarden:utheric_cluster')

  //Iron Ingot
  addSqueezerRecipe('minecraft:iron_ingot', '125x undergarden:virulent_mix_source', 4000, 'undergarden:cloggrum_ingot')

  //Steel
  addBlastFurnaceRecipe('alltheores:steel_ingot', 'undergarden:froststeel_ingot', 20 * 10)
  addBlastFurnaceRecipe('alltheores:steel_block', 'undergarden:froststeel_block', 20 * 10 * 9)
  addBlastFurnaceRecipe('alltheores:steel_ingot', 'minecraft:iron_ingot', 20 * 15)
  addBlastFurnaceRecipe('alltheores:steel_block', 'minecraft:iron_block', 20 * 15 * 9)

  //Undergarden Raw Ores 
  addBlastFurnaceRecipe('undergarden:cloggrum_ingot', 'undergarden:raw_cloggrum', 20 * 10)
  addBlastFurnaceRecipe('undergarden:cloggrum_block', 'undergarden:raw_cloggrum_block', 20 * 10 * 9)
  addBlastFurnaceRecipe('undergarden:froststeel_ingot', 'undergarden:raw_froststeel', 20 * 10)
  addBlastFurnaceRecipe('undergarden:froststeel_block', 'undergarden:raw_froststeel_block', 20 * 10)

  //Metallic Dust
  addBlastFurnaceRecipe('fractured:metallic_dust', 'alltheores:bronze_ingot', 20 * 10)

  //Coke Brick
  event.shaped('3x immersiveengineering:cokebrick', [' A ', 'ABA', ' A '], {
    A: 'fractured:impure_coal',
    B: 'minecraft:bricks'
  }).id('fractured:coke_brick_impure')

  event.shaped('6x immersiveengineering:cokebrick', [' A ', 'ABA', ' A '], {
    A: 'fractured:pure_coal',
    B: 'minecraft:bricks'
  }).id('fractured:coke_brick_pure')

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
  function addSqueezerRecipe(output, outputFluid, energy, input) {
      event.recipes.immersiveengineering.squeezer(
        IngredientWithSizeJS.ofItemStack(input),
        energy,
        Fluid.of(outputFluid),
        TagOutputJS.ofItemStack(output)
    ).id(`fractured:squeezer/${output.split(':')[1]}_from_${input.split(':')[1]}`)
  }
  function addSqueezerRecipeNoFluid(output, input) {
      event.recipes.immersiveengineering.squeezer(
        IngredientWithSizeJS.ofItemStack(input),
        TagOutputJS.ofItemStack(output)
    ).id(`fractured:squeezer/${output.split(':')[1]}_from_${input.split(':')[1]}`)
  }

  //Blast Furnace Function
  function addBlastFurnaceRecipe(output, input, time) {
    event.recipes.immersiveengineering.blast_furnace(
      TagOutputJS.ofItemStack(output),
      IngredientWithSizeJS.ofItemStack(input),
      time
    ).id(`fractured:blast_furnace/${output.split(':')[1]}_from_${input.split(':')[1]}`)
  }

  //Replacment for All The Ores Metal Press recipes from Techopolis 3, thanks ben
  createMetalPressRecipes('aluminum', 'c:ingots/aluminum')
  createMetalPressRecipes('lead', 'c:ingots/lead')
  createMetalPressRecipes('nickel', 'c:ingots/nickel')
  createMetalPressRecipes('osmium', 'c:ingots/osmium')
  createMetalPressRecipes('platinum', 'c:ingots/platinum')
  createMetalPressRecipes('silver', 'c:ingots/silver')
  createMetalPressRecipes('tin', 'c:ingots/tin')
  createMetalPressRecipes('uranium', 'c:ingots/uranium')
  createMetalPressRecipes('zinc', 'c:ingots/zinc')
  createMetalPressRecipes('iridium', 'c:ingots/iridium')
  createMetalPressRecipes('steel', 'c:ingots/steel')
  createMetalPressRecipes('invar', 'c:ingots/invar')
  createMetalPressRecipes('electrum', 'c:ingots/electrum')
  createMetalPressRecipes('bronze', 'c:ingots/bronze')
  createMetalPressRecipes('constantan', 'c:ingots/constantan')
  createMetalPressRecipes('signalum', 'c:ingots/signalum')
  createMetalPressRecipes('lumium', 'c:ingots/lumium')
  createMetalPressRecipes('enderium', 'c:ingots/enderium')
  createMetalPressRecipes('copper', 'c:ingots/copper')
  createMetalPressRecipes('iron', 'c:ingots/iron')
  createMetalPressRecipes('gold', 'c:ingots/gold')
  createMetalPressRecipes('diamond', 'c:gems/diamond')
  createMetalPressRecipes('netherite', 'c:ingots/netherite')
  createMetalPressRecipes('brass', 'c:ingots/brass')

  function createMetalPressRecipes(type, inputItem) {

    event.custom({
        "type": "immersiveengineering:metal_press", "energy": 2400, "input": { "tag": inputItem },
        "mold": "casting:plate_mold", "result": { "item": `alltheores:${type}_plate` }
    }).id(`fractured:ie/metal_press/plate_${type}`)
    event.remove(`immersiveengineering:metalpress/plate_${type}`)

    event.custom({
        "type": "immersiveengineering:metal_press", "energy": 2400, "input": { "basePredicate": { "tag": inputItem }, "count": 4 },
        "mold": "casting:gear_mold", "result": { "item": `alltheores:${type}_gear` }
    }).id(`fractured:ie/metal_press/gear_${type}`)
    event.remove(`immersiveengineering:metalpress/gear_${type}`)

    event.custom({
        "type": "immersiveengineering:metal_press", "energy": 2400, "input": { "tag": inputItem },
        "mold": "casting:rod_mold", "result": { "basePredicate": { "item": `alltheores:${type}_rod` }, "count": 2 }
    }).id(`fractured:ie/metal_press/rod_${type}`)
    event.remove(`immersiveengineering:metalpress/rod_${type}`)
  }
})
