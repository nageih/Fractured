//Energy Meter

ServerEvents.recipes(event => {

  //Replace Input
  event.replaceInput({id: 'energymeter:meter'}, 'minecraft:observer', 'immersiveengineering:capacitor_lv')
  event.replaceInput({id: 'energymeter:meter'}, 'minecraft:comparator', 'immersiveengineering:connector_lv')
  
})