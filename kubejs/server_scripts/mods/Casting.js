//Casting 

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'casting:smelting/black_brick' })
  event.remove({ id: 'casting:melting/black_brick/from_clay_block' })
  event.remove({ id: 'casting:melting/black_brick/from_clay' })

  //Plate Mold
  event.shaped('casting:plate_mold', [' A ', 'ABA', ' A '], { 
    A: 'casting:black_brick',
    B: '#minecraft:wooden_pressure_plates' 
  }).id('fractures:plate_mold')

  //Coke Brick
  event.recipes.casting.solidifier('minecraft:bricks', '250x casting:molten_black_brick', 'immersiveengineering:cokebrick').id('fractured:solidifier/coke_brick')
  
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

    event.recipes.casting.melting(`fractured:impure_${oreType}`, `45x casting:molten_${oreType}`, 1000).id(`fractured:melting/impure_${oreType}`)
    event.recipes.casting.melting(`fractured:pure_${oreType}`, `180x casting:molten_${oreType}`, 1000).id(`fractured:melting/pure_${oreType}`)
  })

})