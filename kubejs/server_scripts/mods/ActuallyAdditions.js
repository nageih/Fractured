//Actually Additions

ServerEvents.recipes(event => {

  //Remove
  event.remove({ output: 'actuallyadditions:iron_casing' })
  event.remove({ type: 'actuallyadditions:mining_lens' })
  
  //Black Quartz
  event.shaped('actuallyadditions:black_quartz', [' A ', 'ABA', ' A '], {
    A: 'gaiadimension:black_residue',
    B: 'minecraft:quartz'
  }).id('fractured:black_quartz')

  //Iron Casing
  event.shaped('actuallyadditions:iron_casing', ['ABA', 'BCB', 'ABA'], {
    A: 'immersiveengineering:component_iron',
    B: 'immersiveengineering:stick_treated',
    C: '#c:ingots/forgotten_metal'
  }).id('fractured:iron_casing')

  //Quartz
  event.recipes.actuallyadditions.laser('minecraft:quartz', 'gaiadimension:goshenite').energy(5000)
  event.recipes.actuallyadditions.laser('minecraft:emerald', 'gaiadimension:diopside_block').energy(5000)
  event.recipes.actuallyadditions.laser('minecraft:lapis_lazuli', 'gaiadimension:carnelian').energy(5000)
  event.recipes.actuallyadditions.laser('minecraft:diamond', 'gaiadimension:benitoite_block').energy(5000)
  
  //Lens of the Miner
  event.recipes.actuallyadditions.mining_lens('gaiadimension:blue_opal_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:green_opal_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:red_opal_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:white_opal_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:hematite_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:labradorite_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:moonstone_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:pyrite_ore', 'gaiadimension:gaia_stone').weight(1)
  event.recipes.actuallyadditions.mining_lens('gaiadimension:sugilite_ore', 'gaiadimension:gaia_stone').weight(1)

  event.recipes.actuallyadditions.mining_lens('gaiadimension:celestine_ore', 'gaiadimension:sugilite_block').weight(1)

})