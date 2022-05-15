let Poeng = 0
let Lysnummer = 0
let Repetisjoner = 4
basic.forever(function () {
    for (let index = 0; index < Repetisjoner; index++) {
        Lysnummer = randint(0, 3)
        if (Lysnummer == 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else if (Lysnummer == 1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        } else if (Lysnummer == 2) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB))) {
        	
        }
        if (Lysnummer == 0 && input.buttonIsPressed(Button.A) || Lysnummer == 1 && input.buttonIsPressed(Button.B) || Lysnummer == 2 && input.buttonIsPressed(Button.AB)) {
            Poeng += 1
        }
    }
    basic.showString("" + Poeng + "Poeng av" + Repetisjoner + "mulige!")
})
