StartupEvents.registry('block', event => {

  //Misc

  //Void Block
  event.create('fractured:void_block')
    .hardness(1.3)
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('metal')
    .requiresTool(true)
    .fullBlock(true);

  //Void Planks
  event.create('fractured:void_planks')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/axe')
    .woodSoundType()
    .fullBlock(true);

  //Dark Fused Stone
  event.create('fractured:dark_fused_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Light Fused Stone
  event.create('fractured:light_fused_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Void Infused Sandstone
  event.create('fractured:void_infused_sandstone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Void Infused Sandstone
  event.create('fractured:void_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Fractured Desert
  event.create('fractured:forgotten_sandstone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Undergarden Portal Frame
  event.create('fractured:treated_stone_bricks')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Nether Portal Frame
  event.create('fractured:infused_obsidian')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //End Portal Frame
  event.create('fractured:infused_end_stone')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Overworld Portal Frame
  event.create('fractured:overworld_portal_frame')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .fullBlock(true);

  //Scorching Ore
  event.create('fractured:scorching_ore')
    .hardness(0.8)
    .tagBlock(['minecraft:mineable/pickaxe', 'minecraft:needs_stone_tool'])
    .stoneSoundType()
    .requiresTool(true)
    .tagBoth(['c:ores/scorching', 'c:ores'])
    .fullBlock(true);

  //Certus Quartz Ore (What year is it?)
  event.create('fractured:certus_quartz_ore')
    .hardness(0.8)
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .requiresTool(true)
    .tagBoth(['c:ores/certus_quartz', 'c:ores'])
    .fullBlock(true);
      

})
