//Banned Items and Blocks

ServerEvents.tags("item", event => {

    //Banned in Loot Tables
    event.get('fractured:banned_in_loot_tables')
        .add("minecraft:diamond")
        .add("minecraft:emerald")
        .add("minecraft:lapis_lazuli")

    //Banned Items
    event.get('fractured:banned_items').add([
        'flintrequired:plant_fiber',
        'flintrequired:flint_knife',
        'actuallyadditions:wooden_aiot', 
        'minecraft:wooden_sword', 
        'minecraft:wooden_hoe', 
        'minecraft:wooden_axe', 
        'minecraft:wooden_pickaxe', 
        'minecraft:wooden_shovel',
        'ae2:inscriber',
        'opolisutilities:cloche',
        'opolisutilities:catalogue',
        'alltheores:copper_ore_hammer',
        'alltheores:iron_ore_hammer',
        'alltheores:bronze_ore_hammer',
        'alltheores:invar_ore_hammer',
        'alltheores:platinum_ore_hammer',
        'opolisutilities:smart_crafting_table',
        'actuallyadditions:water_bowl',
        'ae2:nether_quartz_axe', 
        'ae2:nether_quartz_pickaxe', 
        'ae2:fluix_pickaxe', 
        'ae2:certus_quartz_hoe', 
        'ae2:nether_quartz_shovel', 
        'ae2:fluix_axe', 
        'ae2:fluix_shovel', 
        'ae2:certus_quartz_axe', 
        'ae2:nether_quartz_hoe', 
        'ae2:certus_quartz_shovel', 
        'ae2:certus_quartz_pickaxe', 
        'ae2:fluix_hoe', 
        'ae2:certus_quartz_sword', 
        'ae2:nether_quartz_sword', 
        'ae2:fluix_sword',
        'gaiadimension:agate_sword', 
        'gaiadimension:agate_pickaxe', 
        'gaiadimension:agate_axe', 
        'gaiadimension:agate_shovel', 
        'gaiadimension:sugilite_sword', 
        'gaiadimension:sugilite_pickaxe', 
        'gaiadimension:sugilite_axe', 
        'gaiadimension:sugilite_shovel', 
        'gaiadimension:stibnite_sword', 
        'gaiadimension:stibnite_pickaxe', 
        'gaiadimension:stibnite_axe', 
        'gaiadimension:stibnite_shovel', 
        'gaiadimension:euclase_sword', 
        'gaiadimension:euclase_pickaxe', 
        'gaiadimension:benitoite_axe', 
        'gaiadimension:benitoite_pickaxe', 
        'gaiadimension:benitoite_sword', 
        'gaiadimension:carnelian_shovel', 
        'gaiadimension:carnelian_axe', 
        'gaiadimension:carnelian_pickaxe', 
        'gaiadimension:carnelian_sword', 
        'gaiadimension:euclase_axe', 
        'gaiadimension:euclase_shovel', 
        'gaiadimension:benitoite_shovel', 
        'gaiadimension:goshenite_sword', 
        'gaiadimension:goshenite_pickaxe', 
        'gaiadimension:goshenite_axe', 
        'gaiadimension:goshenite_shovel',
        'opolisutilities:catalogue_book',
        'actuallyadditions:tiny_coal',
        'actuallyadditions:tiny_charcoal',
        'strainers:purifying_salt_mulch',
        'strainers:eroding_salt_mulch',
        'strainers:blazing_salt_mulch'
    ])
})


ServerEvents.tags('block', event => {

})

