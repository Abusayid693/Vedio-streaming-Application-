

const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});

srBottom.reveal(`  #whole,
      .anni `,{
    interval: 200
})

const srTop= ScrollReveal({
    origin: 'bottom',

    duration: 2000,
    reset: false
});

srTop.reveal(`
    .button_section,.logo_`,{
    interval: 100
})
