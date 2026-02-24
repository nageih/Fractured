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
        'minecraft:wooden_shovel'



    ])
})


ServerEvents.tags('block', event => {

})

