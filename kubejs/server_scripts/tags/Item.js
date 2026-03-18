//Item Tags

ServerEvents.tags("item", event => {

    //Immersive Engineering Molds
    event.add('c:molds/plate', 'immersiveengineering:mold_plate')
    event.add('c:molds/gear', 'immersiveengineering:mold_gear')
    event.add('c:molds/rod', 'immersiveengineering:mold_rod')
    event.add('c:molds/wire', 'immersiveengineering:mold_wire')
    event.add('c:molds/bullet', 'immersiveengineering:mold_bullet_casing')

    //Twigs
    event.add('fractured:twigs', ['projectvibrantjourneys:birch_twigs', 'projectvibrantjourneys:twigs'])

    //Nether Portal Frames
    event.remove('bblcore:nether_portal_frame', 'minecraft:obsidian')
    
    //Food Tags

    event.add('fractured:small_xp_foods', [
        'minecraft:apple',
        'colors:cyan_apple',
        'colors:blue_apple',
        'colors:green_apple',
        'colors:purple_apple',
        'colors:red_apple',
        'colors:yellow_apple',
        'colors:white_apple',
        'colors:black_apple',
        'colors:light_blue_apple',
        'colors:light_gray_apple',
        'colors:orange_apple',
        'colors:pink_apple',
        'colors:brown_apple',
        'colors:gray_apple',
        'colors:magenta_apple',
        'colors:lime_apple',
        '#c:foods/vegetable',
        '#c:foods/fruit',
    ])

    event.add('fractured:medium_xp_foods', [
        'minecraft:bread',
        '#c:foods/cooked_meat',
        'opolisutilities:jerky',
        '#c:foods/cooked_fish',
    ])

    event.add('fractured:large_xp_foods', [
        'minecraft:golden_apple',
        'minecraft:enchanted_golden_apple',
        '#farmersdelight:snacks',
    ])
    
    event.add('fractured:extreme_xp_foods', [
        '#farmersdelight:meals',
    ])

})
