StartupEvents.registry('block', event => {

  //Misc

  //Dark Fused Stone
  event.create('fractured:dark_fused_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //Light Fused Stone
  event.create('fractured:light_fused_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //Void Infused Sandstone
  event.create('fractured:void_infused_sandstone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //Void Infused Sandstone
  event.create('fractured:void_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //Fractured Desert
  event.create('fractured:forgotten_sandstone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .sandSoundType()
    .fullBlock(true);

  //Undergarden Portal Frame
  event.create('fractured:treated_stone_bricks')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //Nether Portal Frame
  event.create('fractured:infused_obsidian')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //End Portal Frame
  event.create('fractured:infused_end_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true);

  //Scorching Ore
  event.create('fractured:scorching_ore')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .tagBoth(['c:ores/scorching', 'c:ores'])
    .fullBlock(true);

  //Certus Quartz Ore (What year is it?)
  event.create('fractured:certus_quartz_ore')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .tagBoth(['c:ores/certus_quartz', 'c:ores'])
    .fullBlock(true);
      

})