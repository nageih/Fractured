//Torchmaster

ServerEvents.recipes(event => {

  //Remove
  event.remove({id: 'torchmaster:feral_flare_lantern'})

  //Feral Flare Lantern
  event.shaped('torchmaster:feral_flare_lantern', ['ABA', 'CDC', 'EEE'], {
    A: '#c:glass_blocks',
    B: 'bbllights:invisible_light',
    C: 'undergarden:utheric_cluster',
    D: 'undergarden:shard_torch',
    E: 'undergarden:cloggrum_block'
  }).id('fractured:feral_flare_lantern')
})