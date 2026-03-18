//Block Tags

ServerEvents.tags("block", event => {

    //Needs Stone Tool
    event.add('minecraft:needs_stone_tool', '#c:ores/coal')

    //Undergarden Portal Frames
    event.remove('undergarden:portal_frame_blocks', ['minecraft:stone_bricks', 'minecraft:deepslate_bricks', 'minecraft:nether_bricks'])
    event.add('undergarden:portal_frame_blocks', 'fractured:treated_stone_bricks')

    //Colored Stone
    colors.forEach(color => {
        event.add(`fractured:colored_stone`, `colors:${color}_stone`)
    })

    //Smart Crafting Inventories
    event.add('smartcrafting:whitelisted_storage', [
        'immersiveengineering:crate',
        'immersiveengineering:reinforced_crate',
        'toms_storage:inventory_connector' 
    ])

    //Nether Portal Frames
    event.remove('bblcore:nether_portal_frame', 'minecraft:obsidian')

})
