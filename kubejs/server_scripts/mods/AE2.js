//Applied Energistics 2

ServerEvents.recipes(event => {

  //Remove
  event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
  event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
  event.remove({ id: 'ae2:inscriber/logic_processor_print' })
  event.remove({ id: 'ae2:inscriber/silicon_print' })
  
  event.remove({ id: 'ae2:inscriber/engineering_processor' })
  event.remove({ id: 'ae2:inscriber/logic_processor' })
  event.remove({ id: 'ae2:inscriber/calculation_processor' })
 
})