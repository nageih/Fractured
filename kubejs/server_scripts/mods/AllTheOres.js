//All The Ores

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: /alltheores:alloysmelter/})
  event.remove({id: /alltheores:metalpress/})
  event.remove({id: /alltheores:crafting\/.*\/gear/ });
  event.remove({input: '#alltheores:ore_hammers', output: '#c:rods'})
  event.remove({input: '#alltheores:ore_hammers', output: '#c:dusts'})
  event.remove({input: '#alltheores:ore_hammers', output: '#c:gems'})
  event.remove({input: '#alltheores:ore_hammers', output: '#c:ingots'})
  event.remove({input: '#alltheores:ore_hammers', output: '#c:plates'})
  event.remove({id: 'alltheores:crafting/hammer/netherite/scrap_from_debris'})
  event.remove({id: 'alltheores:arcfurnace/steel/ingot'})


})