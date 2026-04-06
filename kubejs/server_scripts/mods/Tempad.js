//Tempad

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'tempad:time_steel_shapeless'})
  event.remove({id: 'tempad:tempad'})

  //Replace Input
  event.replaceInput({id: 'tempad:metronome'}, 'minecraft:ender_chest', 'fractured:void_chest')
  
  //Tempad
  event.shaped('tempad:tempad', ['AAA', 'EBE', 'CDC'], {
    A: '#c:glass_blocks',
    B: 'minecraft:clock',
    C: 'tempad:time_steel',
    D: 'tempad:chronon_battery',
    E: 'fractured:void_ingot'
  }).id('fractured:tempad')


})