//Custom Portals

PortalEvents.register(event => {

  //Overworld -> Void
  event.create()
    .returnDim('minecraft:overworld', true)
    .setDestination('javd:void')
    .frameBlock('actuallyadditions:void_crystal_block') 
    .lightWithFluid('immersiveengineering:ethanol')
    .portalTexture('nether')
    .tint(0x000000)
  
  //Void -> Undergarden
  event.create()
    .returnDim('javd:void', true)
    .setDestination('undergarden:undergarden')
    .frameBlock('fractured:treated_stone_bricks')
    .lightWithItem('undergarden:catalyst')
    .portalTexture('default')
    .tint(0x001607)

  //Void -> Fractured Desert
  event.create()
    .returnDim('javd:void', true)
    .setDestination('fractured:desert')
    .frameBlock('fractured:forgotten_sandstone') 
    .lightWithItem('fractured:forgotten_catalyst')
    .portalTexture('default')
    .tint(0x9E9011)

  //Void -> Fractured Dark Colored Caves
  event.create()
    .returnDim('javd:void', true)
    .setDestination('fractured:dark_colored_caves')
    .frameBlock('fractured:dark_fused_stone') 
    .lightWithItem('fractured:colored_catalyst')
    .portalTexture('default')
    .tint(0x808080)

  //Void -> Fractured Light Colored Caves
  event.create()
    .returnDim('javd:void', true)
    .setDestination('fractured:light_colored_caves')
    .frameBlock('fractured:light_fused_stone') 
    .lightWithItem('fractured:colored_catalyst')
    .portalTexture('default')
    .tint(0xFF11AF)

  //Void -> Gaia
  event.create()
    .returnDim('javd:void', true)
    .setDestination('gaiadimension:gaia_dimension')
    .frameBlock('gaiadimension:keystone_block') 
    .lightWithItem('fractured:gaia_catalyst')
    .portalTexture('default')
    .tint(0xBE0E61)

  //Void -> Nether
  event.create()
    .returnDim('javd:void', true)
    .setDestination('minecraft:the_nether')
    .frameBlock('fractured:infused_obsidian') 
    .lightWithItem('fractured:nether_catalyst')
    .portalTexture('default')
    .tint(0xFF0000)

  //Void -> End
  event.create()
    .returnDim('javd:void', true)
    .setDestination('minecraft:the_end')
    .frameBlock('fractured:infused_end_stone') 
    .lightWithItem('fractured:end_catalyst')
    .portalTexture('default')
    .tint(0xDAE1A3)

})