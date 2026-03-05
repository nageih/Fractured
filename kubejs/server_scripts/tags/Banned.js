//Banned Items and Blocks

ServerEvents.tags("item", event => {

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



    ])
})


ServerEvents.tags('block', event => {

})

