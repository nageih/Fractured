StartupEvents.registry('fluid', event => {

  //Colored Water
  colors.forEach(color => {
    event.create(`fractured:${color}_water`, "thin")
      .tint(0x86A774)
  })

})