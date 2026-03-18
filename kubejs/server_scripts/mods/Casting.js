//Casting 

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'casting:smelting/black_brick' })
  event.remove({ id: 'casting:melting/black_brick/from_clay_block' })
  event.remove({ id: 'casting:melting/black_brick/from_clay' })
  event.remove({ id: 'casting:tank' })
  event.remove({ id: 'casting:mixer' })

  //Simple Mixer
  event.shaped('casting:mixer', ['AAA', 'BCB', 'AAA'], {
    A: 'casting:black_bricks',
    B: 'casting:tank',
    C: 'undergarden:forgotten_nugget'
  }).id('fractured:simple_mixer')

  //Void Stone
  event.recipes.casting.solidifier('#c:stones', '100x fractured:void_fuel', 'fractured:void_stone').id('fractured:solidifier/void_stone')

  //Void Fuel Because casting is the best mod 
  event.recipes.casting.mixing('250x fractured:void_fuel', 
    [
      '250x undergarden:virulent_mix_source',
      '250x immersiveengineering:ethanol',
      '250x immersiveengineering:redstone_acid'
    ]
  ).id('fractured:mixing/void_fuel')

  //Tank
  event.shaped('casting:tank', ['AAA', 'A A', 'AAA'], {
    A: 'casting:black_brick'
  }).id('fractured:tank')

  //Plate Mold
  event.shaped('casting:plate_mold', [' A ', 'ABA', ' A '], { 
    A: 'casting:black_brick',
    B: '#minecraft:wooden_pressure_plates' 
  }).id('fractured:plate_mold')
  
  //Empty Casing
  event.recipes.casting.solidifier('#c:molds/bullet', '45x casting:molten_constantan', 'immersiveengineering:empty_casing').id('fractured:solidifier/empty_casing')

  //Grout Melting
  event.recipes.casting.melting('fractured:grout_dust', '250x casting:molten_black_brick', 1000).id('fractured:melting/grout_dust')
  event.recipes.casting.melting('fractured:grout_brick', '250x casting:molten_black_brick', 1000).id('fractured:melting/grout_brick')
  
  //Treated Wood
  event.recipes.casting.solidifier('#minecraft:planks', '125x immersiveengineering:creosote', 'immersiveengineering:treated_wood_horizontal').id('fractured:solidifier/treated_wood_planks')
  event.recipes.casting.solidifier('#minecraft:logs', '500x immersiveengineering:creosote', '4x immersiveengineering:treated_wood_horizontal').id('fractured:solidifier/treated_wood_logs')

  //Smelting
  event.smelting('casting:black_brick', 'fractured:grout_brick').xp(0.1).id('fractured:smelting/grout_ball')

  //Ore Types
  oreTypes.forEach(oreType => {

    if (oreType === 'coal') return;
    if (oreType === 'gold') return;
    if (oreType === 'silver') return;
    if (oreType === 'nickel') return;
    if (oreType === 'aluminum') return;
    if (oreType === 'certus_quartz') return;
    if (oreType === 'titanium') return;

    event.recipes.casting.melting(`fractured:impure_${oreType}`, `45x casting:molten_${oreType}`, 1000).id(`fractured:melting/impure_${oreType}`)
    event.recipes.casting.melting(`fractured:pure_${oreType}`, `180x casting:molten_${oreType}`, 1000).id(`fractured:melting/pure_${oreType}`)
  })

})