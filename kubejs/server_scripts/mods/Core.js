//BBL Core

ServerEvents.recipes(event => {

  //Upgrade Base
  event.shaped('bblcore:upgrade_base', [' A ', 'ABA', ' A '], {
    A: '#c:plates/iron',
    B: '#c:plates/gold'
  }).id('fractured:upgrade_base')

 
})