//Flopper

ServerEvents.recipes(event => {

  event.shaped('flopper:flopper', ['A A', 'ABA', ' A '], {
    A: '#c:plates/steel',
    B: 'immersiveengineering:fluid_pipe',
  }).id('flopper:flopper')

})