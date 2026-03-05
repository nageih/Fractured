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

  event.remove({ id: 'undergarden:froststeel_helmet' })
  event.remove({ id: 'undergarden:froststeel_chestplate' })
  event.remove({ id: 'undergarden:froststeel_leggings' })
  event.remove({ id: 'undergarden:froststeel_boots' })
  event.remove({ id: 'undergarden:froststeel_pickaxe' })
  event.remove({ id: 'undergarden:froststeel_axe' })
  event.remove({ id: 'undergarden:froststeel_shovel' })
  event.remove({ id: 'undergarden:froststeel_sword' })
  event.remove({ id: 'undergarden:froststeel_hoe' })
  
  //Froststeel Armor
  event.smithing('undergarden:froststeel_helmet', 'fractured:froststeel_template', 
    'fractured:survivalist_helmet', 'undergarden:froststeel_ingot').id('fractured:froststeel_helmet')
    
  event.smithing('undergarden:froststeel_chestplate', 'fractured:froststeel_template',
    'fractured:survivalist_chestplate', 'undergarden:froststeel_ingot').id('fractured:froststeel_chestplate')

  event.smithing('undergarden:froststeel_leggings', 'fractured:froststeel_template',
    'fractured:survivalist_leggings', 'undergarden:froststeel_ingot').id('fractured:froststeel_leggings')

  event.smithing('undergarden:froststeel_boots', 'fractured:froststeel_template',
    'fractured:survivalist_boots', 'undergarden:froststeel_ingot').id('fractured:froststeel_boots')

  //Froststeel Tools
  event.smithing('undergarden:froststeel_pickaxe', 'fractured:froststeel_template',
    'minecraft:stone_pickaxe', 'undergarden:froststeel_ingot').id('fractured:froststeel_pickaxe')

  event.smithing('undergarden:froststeel_axe', 'fractured:froststeel_template',
    'minecraft:stone_axe', 'undergarden:froststeel_ingot').id('fractured:froststeel_axe')
      
  event.smithing('undergarden:froststeel_shovel', 'fractured:froststeel_template',
    'minecraft:stone_shovel', 'undergarden:froststeel_ingot').id('fractured:froststeel_shovel')

  event.smithing('undergarden:froststeel_sword', 'fractured:froststeel_template',
    'minecraft:stone_sword', 'undergarden:froststeel_ingot').id('fractured:froststeel_sword')

  event.smithing('undergarden:froststeel_hoe', 'fractured:froststeel_template',
    'minecraft:stone_hoe', 'undergarden:froststeel_ingot').id('fractured:froststeel_hoe')

  //Froststeel Template
  event.shaped('fractured:froststeel_template', ['ABA', 'ABA', 'AAA'], {
    A: 'undergarden:froststeel_nugget',
    B: 'undergarden:depthrock'
  }).id('fractured:froststeel_template')

  //Cloggrum Armor
  event.smithing('undergarden:cloggrum_helmet', 'fractured:cloggrum_template', 
    'fractured:survivalist_helmet', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_helmet')

  event.smithing('undergarden:cloggrum_chestplate', 'fractured:cloggrum_template',
    'fractured:survivalist_chestplate', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_chestplate')

  event.smithing('undergarden:cloggrum_leggings', 'fractured:cloggrum_template',
    'fractured:survivalist_leggings', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_leggings')

  event.smithing('undergarden:cloggrum_boots', 'fractured:cloggrum_template',
    'fractured:survivalist_boots', 'undergarden:cloggrum_ingot').id('fractured:cloggrum_boots')

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

  //Cloggrum Template
  event.shaped('fractured:cloggrum_template', ['ABA', 'ABA', 'AAA'], {
    A: 'undergarden:cloggrum_nugget',
    B: 'undergarden:depthrock'
  }).id('fractured:cloggrum_template')

  //Forgotten Ingot
  event.smithing('undergarden:forgotten_ingot', 'undergarden:forgotten_upgrade_smithing_template', 
    'undergarden:froststeel_ingot', 'undergarden:cloggrum_ingot').id('fractured:forgotten_ingot')

  //Raw Cloggrum
  event.shaped('undergarden:raw_cloggrum', ['AA', 'AA'], {
    A: 'fractured:impure_cloggrum'
  }).id('fractured:raw_cloggrum_from_impure')

  event.shaped('2x undergarden:raw_cloggrum', ['AA', 'AA'], {
    A: 'fractured:pure_cloggrum'
  }).id('fractured:raw_cloggrum_from_pure')

  //Raw Froststeel
  event.shaped('undergarden:raw_froststeel', ['AA', 'AA'], {
    A: 'fractured:impure_froststeel'
  }).id('fractured:raw_froststeel_from_impure')

  event.shaped('2x undergarden:raw_froststeel', ['AA', 'AA'], {
    A: 'fractured:pure_froststeel'
  }).id('fractured:raw_froststeel_from_pure')

  //Catalyst
  event.shaped('undergarden:catalyst' , ['ABA', 'BCB', 'ABA'], {
    A: '#c:ingots/bronze',
    B: 'immersiveengineering:coal_coke',
    C: 'survival_firesticks:firestick'
  }).id('fractured:catalyst')

})