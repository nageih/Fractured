//Material List
let materials = [
    'stone', 
    'iron', 
    'gold', 
    'diamond',
    'netherite',
    'steel',
]

// Define the Tiers outside so they are accessible in the function
const bindingTiers = [
    { id: 'fractured:leafy_binding', level: 1 },
    { id: 'fractured:reinforced_binding', level: 2 },
    { id: 'fractured:steel_binding', level: 3 },
    { id: 'fractured:diamond_binding', level: 4 },
    { id: 'fractured:netherite_binding', level: 5 }
]

//Recipes
ServerEvents.recipes(event => {

    addRecipes('stone', 'c:stones', 1000, 'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_shovel', 'minecraft:stone_hoe', 'minecraft:stone_sword')
    addRecipes('iron', 'c:ingots/iron', 90, 'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe', 'minecraft:iron_sword')
    addRecipes('gold', 'c:ingots/gold', 90, 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe', 'minecraft:golden_sword')
    addRecipes('diamond', 'c:gems/diamond', 90, 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:diamond_sword')
    addRecipes('netherite', 'c:ingots/netherite', 90, 'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel', 'minecraft:netherite_hoe', 'minecraft:netherite_sword')
    addRecipes('steel', 'c:ingots/steel', 90, 'immersiveengineering:pickaxe_steel', 'immersiveengineering:axe_steel', 'immersiveengineering:shovel_steel', 'immersiveengineering:hoe_steel', 'immersiveengineering:sword_steel')

    function addRecipes(material, itemMaterial, mbCost, pickaxe, axe, shovel, hoe, sword) {
        
        // --- PICKAXE ---
        event.recipes.casting.solidifier('fractured:pickaxe_mold', `${mbCost * 3}x casting:molten_${material}`, `fractured:${material}_pickaxe_head`).id(`fractured:casting/${material}_pickaxe_head`)
        event.recipes.immersiveengineering.metal_press(TagOutputJS.ofItemStack(`fractured:${material}_pickaxe_head`), IngredientWithSizeJS.ofTag(itemMaterial, 3), "fractured:pickaxe_mold", "1000").id(`fractured:metal_press/${material}_pickaxe_head`)

        bindingTiers.forEach(binding => {
            event.shapeless(`${pickaxe}[casting:equipment_experience=1,casting:equipment_level=${binding.level},casting:unbreaking=${binding.level}]`, [`fractured:${material}_pickaxe_head`, '#c:rods/wooden', binding.id]).id(`fractured:crafting/${material}_pickaxe_tier_${binding.level}`)
        })
        event.remove({output: `${pickaxe}`})

        // --- AXE ---
        event.recipes.casting.solidifier('fractured:axe_mold', `${mbCost * 3}x casting:molten_${material}`, `fractured:${material}_axe_head`).id(`fractured:casting/${material}_axe_head`)
        event.recipes.immersiveengineering.metal_press(TagOutputJS.ofItemStack(`fractured:${material}_axe_head`), IngredientWithSizeJS.ofTag(itemMaterial, 3), "fractured:axe_mold", "1000").id(`fractured:metal_press/${material}_axe_head`)

        bindingTiers.forEach(binding => {
            event.shapeless(`${axe}[casting:equipment_experience=1,casting:equipment_level=${binding.level},casting:unbreaking=${binding.level}]`, [`fractured:${material}_axe_head`, '#c:rods/wooden', binding.id]).id(`fractured:crafting/${material}_axe_tier_${binding.level}`)
        })
        event.remove({output: `${axe}`})

        // --- SHOVEL ---
        event.recipes.casting.solidifier('fractured:shovel_mold', `${mbCost * 1}x casting:molten_${material}`, `fractured:${material}_shovel_head`).id(`fractured:casting/${material}_shovel_head`)
        event.recipes.immersiveengineering.metal_press(TagOutputJS.ofItemStack(`fractured:${material}_shovel_head`), IngredientWithSizeJS.ofTag(itemMaterial, 1), "fractured:shovel_mold", "1000").id(`fractured:metal_press/${material}_shovel_head`)

        bindingTiers.forEach(binding => {
            event.shapeless(`${shovel}[casting:equipment_experience=1,casting:equipment_level=${binding.level},casting:unbreaking=${binding.level}]`, [`fractured:${material}_shovel_head`, '#c:rods/wooden', binding.id]).id(`fractured:crafting/${material}_shovel_tier_${binding.level}`)
        })
        event.remove({output: `${shovel}`})

        // --- HOE ---
        event.recipes.casting.solidifier('fractured:hoe_mold', `${mbCost * 2}x casting:molten_${material}`, `fractured:${material}_hoe_head`).id(`fractured:casting/${material}_hoe_head`)
        event.recipes.immersiveengineering.metal_press(TagOutputJS.ofItemStack(`fractured:${material}_hoe_head`), IngredientWithSizeJS.ofTag(itemMaterial, 2), "fractured:hoe_mold", "1000").id(`fractured:metal_press/${material}_hoe_head`)

        bindingTiers.forEach(binding => {
            event.shapeless(`${hoe}[casting:equipment_experience=1,casting:equipment_level=${binding.level},casting:unbreaking=${binding.level}]`, [`fractured:${material}_hoe_head`, '#c:rods/wooden', binding.id]).id(`fractured:crafting/${material}_hoe_tier_${binding.level}`)
        })
        event.remove({output: `${hoe}`})

        // --- SWORD ---
        event.recipes.casting.solidifier('fractured:sword_mold', `${mbCost * 2}x casting:molten_${material}`, `fractured:${material}_sword_blade`).id(`fractured:casting/${material}_sword_blade`)
        event.recipes.immersiveengineering.metal_press(TagOutputJS.ofItemStack(`fractured:${material}_sword_blade`), IngredientWithSizeJS.ofTag(itemMaterial, 2), "fractured:sword_mold", "1000").id(`fractured:metal_press/${material}_sword_blade`)

        bindingTiers.forEach(binding => {
            event.shapeless(`${sword}[casting:equipment_experience=1,casting:equipment_level=${binding.level},casting:unbreaking=${binding.level}]`, [`fractured:${material}_sword_blade`, '#c:rods/wooden', binding.id]).id(`fractured:crafting/${material}_sword_tier_${binding.level}`)
        })
        event.remove({output: `${sword}`})
    }
})