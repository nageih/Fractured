Platform.getInfo('fractured').name = 'Fractured'

StartupEvents.registry('item', event => {

    //Misc
    event.create('fractured:survivalist_compound')
    event.create('fractured:pestle')
    event.create('fractured:mortar_and_pestle')
    event.create('fractured:dried_leaves')
    event.create('fractured:grout_dust')
    event.create('fractured:metallic_dust')
    event.create('fractured:grout_brick')
    event.create('fractured:small_coal_coke')
    event.create('fractured:netherrack_rocks')
    event.create('fractured:dye_extractor').maxStackSize(1).maxDamage(127).tooltip('Used to extract dyes from certain blocks. Right-click on a valid block to extract its dye.')
    event.create('fractured:blueprint_paper')
    event.create('fractured:wheat_flour').tag(['c:wheat_flour', 'c:dusts'])
    event.create('fractured:lightning_charge')
    event.create('fractured:malachite_heart')
    event.create('fractured:control_press')
    event.create('fractured:printed_control_circuit')
    event.create('fractured:main_island_teleporter')
    event.create('fractured:void_chest')
    event.create('fractured:void_bucket')
    event.create('fractured:void_ingot').tag(['c:ingots','c:ingots/void'])
    event.create('fractured:void_staff')
    event.create('fractured:portable_seismic_survey_tool')


    //Template
    event.create('fractured:cloggrum_template')
    event.create('fractured:froststeel_template')

    //Catalysts
    event.create('fractured:forgotten_catalyst')
    event.create('fractured:colored_catalyst')
    event.create('fractured:gaia_catalyst')
    event.create('fractured:nether_catalyst')
    event.create('fractured:end_catalyst')
    event.create('fractured:overworld_catalyst')

    //Tool Binding
    event.create('fractured:leafy_binding').tag('fractured:bindings')
    event.create('fractured:reinforced_binding').tag('fractured:bindings')

    //Locators
    event.create('fractured:catacombs_locator').maxStackSize(16).tooltip('Right-click to locate a Catacombs inside the Undergarden')
    event.create('fractured:malachite_watchtower_locator').maxStackSize(16).tooltip('Right-click to locate a Malachite Watchtower inside the Gaia Dimension')

    //Tool Molds
    event.create('fractured:axe_mold').tag(['c:molds/axe', 'casting:molds'])
    event.create('fractured:hoe_mold').tag(['c:molds/hoe', 'casting:molds'])
    event.create('fractured:pickaxe_mold').tag(['c:molds/pickaxe', 'casting:molds'])
    event.create('fractured:shovel_mold').tag(['c:molds/shovel', 'casting:molds'])
    event.create('fractured:sword_mold').tag(['c:molds/sword', 'casting:molds'])

    //Ore Tiers 
    oreTypes.forEach(ore => {
        event.create(`fractured:impure_${ore}`).tag([`c:impure_${ore}s`])
        event.create(`fractured:pure_${ore}`).tag([`c:pure_${ore}s`]).glow(true)
    })

    //Tool Parts
    materials.forEach(material => {
        createToolPart(material)
    })

    function createToolPart(material) {
        event.create(`fractured:${material}_axe_head`).tag(['fractured:axe_heads'])
        event.create(`fractured:${material}_hoe_head`).tag(['fractured:hoe_heads'])
        event.create(`fractured:${material}_pickaxe_head`).tag(['fractured:pickaxe_heads'])
        event.create(`fractured:${material}_shovel_head`).tag(['fractured:shovel_heads'])
        event.create(`fractured:${material}_sword_blade`).tag(['fractured:sword_blades'])
    }


})