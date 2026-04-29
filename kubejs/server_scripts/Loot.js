//Loot

LootJS.modifiers(event => {

    let bannedItemsInLootTables = Ingredient.of("#fractured:banned_in_loot_tables").itemIds
    bannedItemsInLootTables.forEach(item => {
            
      event.addTableModifier("/.*:chests.*/").removeLoot(item)
      event.addTableModifier("/.*:entities.*/").removeLoot(item)
  })

  //Gravel 
  event.addBlockModifier('minecraft:gravel').removeLoot('*').addLoot('minecraft:gravel')

  //Ores 
  replaceOreDrops('#c:ores/coal', 'fractured:impure_coal')
  replaceOreDrops('#c:ores/copper', 'fractured:impure_copper')
  replaceOreDrops('#c:ores/iron', 'fractured:impure_iron')
  replaceOreDrops('#c:ores/gold', 'fractured:impure_gold')
  replaceOreDrops('#c:ores/diamond', 'fractured:impure_diamond')

  //AllTheOres
  replaceOreDrops('#c:ores/tin', 'fractured:impure_tin')
  replaceOreDrops('#c:ores/platinum', 'fractured:impure_platinum')
  replaceOreDrops('#c:ores/silver', 'fractured:impure_silver')
  replaceOreDrops('#c:ores/lead', 'fractured:impure_lead')
  replaceOreDrops('#c:ores/nickel', 'fractured:impure_nickel')
  replaceOreDrops('#c:ores/uranium', 'fractured:impure_uranium')
  replaceOreDrops('#c:ores/zinc', 'fractured:impure_zinc')
  replaceOreDrops('#c:ores/aluminum', 'fractured:impure_aluminum')
  replaceOreDrops('#c:ores/osmium', 'fractured:impure_osmium')
  replaceOreDrops('#c:ores/scorching', 'fractured:netherrack_rocks')

  //Undergarden
  replaceOreDrops('#c:ores/cloggrum', 'fractured:impure_cloggrum')
  replaceOreDrops('#c:ores/froststeel', 'fractured:impure_froststeel')
  replaceOreDrops('#c:ores/utherium', 'undergarden:utheric_shard')

  //Titanium
  replaceOreDrops('#c:ores/titanium', 'fractured:impure_titanium')

  //Certus Quartz
  replaceOreDrops('#c:ores/certus_quartz', 'fractured:impure_certus_quartz')
  
  //Function to replace ore drops
  function replaceOreDrops(oreTag, drop) {

    let oreBlocks = Ingredient.of(oreTag).itemIds

    oreBlocks.forEach(oreBlock => {

      event.addBlockModifier(oreBlock).removeLoot('*').addAlternativesLoot(
            
        LootEntry.of(oreBlock).when(c =>
                c.matchTool(ItemFilter.anyOf(ItemFilter.hasEnchantment("minecraft:silk_touch")))),
              
        LootEntry.of(drop).applyOreBonus("minecraft:fortune").when(c =>
            c.matchTool(ItemFilter.not(ItemFilter.hasEnchantment("minecraft:silk_touch")))),
                  
      )
    })
  }

  //More Sticks

  let leaves = Ingredient.of('#minecraft:leaves').itemIds

  leaves.forEach(leaf => {
    event.addBlockModifier(leaf).addAlternativesLoot(
      LootEntry.of('minecraft:stick')
        .applyOreBonus("minecraft:fortune")
        .when(c => c.matchTool(
          ItemFilter.not(
            ItemFilter.anyOf([
              ItemFilter.hasEnchantment("minecraft:silk_touch"),
              ItemFilter.anyToolAction("shears_dig") 
            ])
          )
        ))
        .randomChance(0.2)
    )
  })
            

  //Mobs
  event.addEntityModifier('gaiadimension:malachite_guard').addLoot('fractured:malachite_heart')
  event.addEntityModifier('minecraft:witch')
    .removeLoot('minecraft:redstone')
    .removeLoot('minecraft:glass_bottle')
    .removeLoot('minecraft:glowstone_dust')

  event.addEntityModifier('minecraft:drowned').removeLoot('minecraft:copper_ingot')
  event.addEntityModifier('minecraft:zombie').removeLoot('minecraft:iron_ingot')
  event.addEntityModifier('minecraft:pillager').removeLoot('minecraft:emerald')
  event.addEntityModifier('minecraft:vindicator').removeLoot('minecraft:emerald')

})