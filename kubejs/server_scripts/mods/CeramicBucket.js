//Ceramic Bucket 

ServerEvents.recipes(event => {

  //Unfired Bucket
  event.shaped('ceramicbucket:unfired_clay_bucket', ['ABA', ' A '], { 
    A: 'fractured:grout_brick', 
    B: 'thirst:clay_bowl' 
  }).id('ceramicbucket:unfired_clay_bucket')

})