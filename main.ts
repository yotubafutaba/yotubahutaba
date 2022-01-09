basic.forever(function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
