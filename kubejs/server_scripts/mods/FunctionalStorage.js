//Functional Storage

ServerEvents.recipes(event => {

  //Replace Input
  event.replaceInput({mod: 'functionalstorage'}, '#c:chests/wooden', 'fractured:void_chest')
  event.replaceInput({mod: 'functionalstorage'}, 'minecraft:bucket', 'fractured:void_bucket')

})