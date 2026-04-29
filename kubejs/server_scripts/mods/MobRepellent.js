//Mob Repellent

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'mob_repellent:wooden_brazier'})

  //Wooden Brazier
  event.shaped('mob_repellent:wooden_brazier', ['ABA', 'ACA', 'ADA'], {
    A: '#c:rods/wooden',
    B: 'bbllights:invisible_light',
    C: 'minecraft:fire_charge',
    D: '#minecraft:logs'
  }).id('mob_repellent:wooden_brazier')   
  
})