//The Undergarden

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'undergarden:catalyst' })
  event.remove({ id: 'undergarden:smelt_raw_cloggrum' })
  event.remove({ id: 'undergarden:blast_raw_cloggrum' })
  event.remove({ id: 'undergarden:smelt_raw_froststeel' })
  event.remove({ id: 'undergarden:blast_raw_froststeel' })
  event.remove({ id: 'undergarden:cloggrum_helmet' })
  event.remove({ id: 'undergarden:cloggrum_chestplate' })
  event.remove({ id: 'undergarden:cloggrum_leggings' })
  event.remove({ id: 'undergarden:cloggrum_boots' })
  event.remove({ id: 'undergarden:cloggrum_pickaxe' })
  event.remove({ id: 'undergarden:cloggrum_axe' })
  event.remove({ id: 'undergarden:cloggrum_shovel' })
  event.remove({ id: 'undergarden:cloggrum_sword' })
  event.remove({ id: 'undergarden:cloggrum_hoe' })
  

  //Cloggrum Armor
  event.smithing('undergarden:cloggrum_helmet', 'fractured:cloggrum_template', 
    'minecraft:leather_helmet', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_helmet')

  event.smithing('undergarden:cloggrum_chestplate', 'fractured:cloggrum_template',
    'minecraft:leather_chestplate', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_chestplate')

  event.smithing('undergarden:cloggrum_leggings', 'fractured:cloggrum_template',
    'minecraft:leather_leggings', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_leggings')

  event.smithing('undergarden:cloggrum_boots', 'fractured:cloggrum_template',
    'minecraft:leather_boots', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_boots')

  //Cloggrum Tools
  event.smithing('undergarden:cloggrum_pickaxe', 'fractured:cloggrum_template',
    'minecraft:stone_pickaxe', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_pickaxe')

  event.smithing('undergarden:cloggrum_axe', 'fractured:cloggrum_template',
    'minecraft:stone_axe', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_axe')
  
  event.smithing('undergarden:cloggrum_shovel', 'fractured:cloggrum_template',
    'minecraft:stone_shovel', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_shovel')

  event.smithing('undergarden:cloggrum_sword', 'fractured:cloggrum_template',
    'minecraft:stone_sword', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_sword')

  event.smithing('undergarden:cloggrum_hoe', 'fractured:cloggrum_template',
    'minecraft:stone_hoe', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_hoe')

  //Forgotten Ingot
  event.smithing('undergarden:forgotten_ingot', 'undergarden:forgotten_upgrade_smithing_template', 
    'undergarden:froststeel_ingot', 'undergarden:cloggrum_ingot').id('fractured:forgotten_ingot')

  //Raw Cloggrum
  event.shaped('undergarden:raw_cloggrum', ['AAA', 'AAA', 'AAA'], {
    A: 'fractured:impure_cloggrum'
  }).id('fractured:raw_cloggrum')

  //Raw Froststeel
  event.shaped('undergarden:raw_froststeel', ['AAA', 'AAA', 'AAA'], {
    A: 'fractured:impure_froststeel'
  }).id('fractured:raw_froststeel')

  //Catalyst
  event.shaped('undergarden:catalyst' , ['ABA', 'BCB', 'ABA'], {
    A: '#c:ingots/bronze',
    B: 'immersiveengineering:coal_coke',
    C: 'survival_firesticks:firestick'
  }).id('fractured:catalyst')

})