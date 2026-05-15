//Actually Additions

ServerEvents.recipes(event => {

  //Remove
  event.remove({ output: 'actuallyadditions:iron_casing' })
  event.remove({ type: 'actuallyadditions:mining_lens' })
  event.remove({ id: 'actuallyadditions:laser/crystalize_void_crystal' })
  event.remove({ id: 'actuallyadditions:laser/crystalize_void_crystal_block' })
  event.remove({ id: 'actuallyadditions:rice_paper' })
  event.remove({ id: 'actuallyadditions:tiny_torch' })
  event.remove({ id: 'actuallyadditions:rice_dough_smelting' })
  
  //AE2
  event.recipes.actuallyadditions.crushing("ae2:fluix_dust", "ae2:fluix_crystal").id('fractured:aa/crusher/fluix_dust')
  event.recipes.actuallyadditions.crushing("ae2:certus_quartz_dust", "ae2:certus_quartz_crystal").id('fractured:aa/crusher/certus_quartz_dust')
  event.recipes.actuallyadditions.crushing("ae2:sky_dust", "ae2:sky_stone_block").id('fractured:aa/crusher/sky_dust')

  //Tiny Torch
  event.shaped('2x actuallyadditions:tiny_torch', ['A', 'B'], {
    A: 'opolisutilities:mini_coal',
    B: 'minecraft:stick'
  }).id('fractured:tiny_torch_coal')

  event.shaped('2x actuallyadditions:tiny_torch', ['A', 'B'], {
    A: 'opolisutilities:mini_charcoal',
    B: 'minecraft:stick'
  }).id('fractured:tiny_torch_charcoal')

  //Black Quartz
  event.shaped('actuallyadditions:black_quartz', [' A ', 'ABA', ' A '], {
    A: 'gaiadimension:black_residue',
    B: 'minecraft:quartz'
  }).id('fractured:black_quartz')

  //Gloom Shroom
  event.recipes.actuallyadditions.laser('ltxi:gloom_shroom', 'minecraft:chorus_flower').energy(5000).id('fractured:gloom_shroom')

  //Void Crystal 
  event.recipes.actuallyadditions.laser('actuallyadditions:void_crystal', 'immersivepetroleum:petcoke').energy(5000).id('fractured:void_crystal')
  event.recipes.actuallyadditions.laser('actuallyadditions:void_crystal_block', 'immersivepetroleum:petcoke_block').energy(45000).id('fractured:void_crystal_block')  

  //Quartz
  event.recipes.actuallyadditions.laser('minecraft:quartz', 'gaiadimension:goshenite').energy(5000).id('fractured:quartz')
  
  //Emerald
  event.recipes.actuallyadditions.laser('minecraft:emerald', 'gaiadimension:diopside_block').energy(5000).id('fractured:emerald') 
  
  //Lapis Lazuli
  event.recipes.actuallyadditions.laser('minecraft:lapis_lazuli', 'gaiadimension:carnelian').energy(5000).id('fractured:lapis_lazuli')  
  
  //Diamond
  event.recipes.actuallyadditions.laser('minecraft:diamond', 'gaiadimension:benitoite_block').energy(5000).id('fractured:diamond')  
  
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