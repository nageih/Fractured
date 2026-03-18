//Cloche

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'cloche:cloche' })
  

  //Cloche
  event.shaped('cloche:cloche', ['AAA', 'BCB', 'AAA'], {
    A: 'fractured:void_ingot',
    B: 'immersiveengineering:light_bulb',
    C: 'opolisutilities:resource_generator'
  }).id('fractured:cloche')

})