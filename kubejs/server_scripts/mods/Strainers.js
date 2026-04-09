//Strainers

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'strainers:stone_from_pebble'})
  event.remove({id: /strainers:strainer\/purified_gravel\/.*/})
  event.remove({id: /strainers:strainer\/purified_soul_sand\/.*/})
  event.remove({id: 'strainers:ore_pieces/quartz'})
  event.remove({id: 'strainers:ore_pieces/coal'})
  event.remove({id: 'strainers:ore_pieces/redstone'})

  event.remove({id: 'strainers:lava'})
  event.remove({id: 'strainers:water'})
  event.remove({id: 'strainers:eroding_water'})
  event.remove({id: 'strainers:purifying_water'})

})