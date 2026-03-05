//Armor

StartupEvents.registry('item', event => {

    //Conductive Armor
    event.create('fractured:survivalist_helmet', 'helmet').maxDamage(56).material('fractured:survivalist').tag('fractured:survivalist_armor')
    event.create('fractured:survivalist_chestplate', 'chestplate').maxDamage(72).material('fractured:survivalist').tag('fractured:survivalist_armor')
    event.create('fractured:survivalist_leggings', 'leggings').maxDamage(67).material('fractured:survivalist').tag('fractured:survivalist_armor')
    event.create('fractured:survivalist_boots', 'boots').maxDamage(56).material('fractured:survivalist').tag('fractured:survivalist_armor')
})

StartupEvents.registry('armor_material', event => {
    event.create('fractured:survivalist').defense({"boots": 1, "leggings": 2, "chestplate": 3, "helmet": 1, "body": 2})
})
