let LysRekke = [randint(0, 3)]
basic.forever(function () {
    let Lysnummer = 0
    if (Lysnummer == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (Lysnummer == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (Lysnummer == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 1)
    }
})
