//Thirst Was Taken

ServerEvents.recipes(event => {

  //Clay Bowl
  event.shaped('thirst:clay_bowl', ['A A', ' A '], { A: 'fractured:grout_brick' }).id('thirst:clay_bowl')
})