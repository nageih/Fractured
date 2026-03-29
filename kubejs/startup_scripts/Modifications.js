//Modifications

ItemEvents.modification(event => {
    event.modify('adfinders:gem_finder', item => {
        item.maxDamage = -1
    })
    event.modify('adfinders:metal_finder', item => {
        item.maxDamage = -1
    })
    event.modify('adfinders:mineral_finder', item => {
        item.maxDamage = -1
    })
})

