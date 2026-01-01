basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . . . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    . # # # .
    . . # . .
    . # # # .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . # # # .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # # . # #
    # . . . #
    . . . . .
    # . . . #
    # # . # #
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Ready")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plotBrightness(0, 0, 255)
        led.plotBrightness(1, 0, 255)
        led.plotBrightness(2, 0, 255)
        led.plotBrightness(3, 0, 255)
        led.plotBrightness(4, 0, 255)
        basic.pause(500)
        led.plotBrightness(0, 1, 255)
        led.plotBrightness(1, 1, 255)
        led.plotBrightness(2, 1, 255)
        led.plotBrightness(3, 1, 255)
        led.plotBrightness(4, 1, 255)
        basic.pause(500)
        led.plotBrightness(0, 2, 255)
        led.plotBrightness(1, 2, 255)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(3, 2, 255)
        led.plotBrightness(4, 2, 255)
        basic.pause(500)
        led.plotBrightness(0, 3, 255)
        led.plotBrightness(1, 3, 255)
        led.plotBrightness(2, 3, 255)
        led.plotBrightness(3, 3, 255)
        led.plotBrightness(4, 3, 255)
        basic.pause(500)
        led.plotBrightness(0, 4, 255)
        led.plotBrightness(1, 4, 255)
        led.plotBrightness(2, 4, 255)
        led.plotBrightness(3, 4, 255)
        led.plotBrightness(4, 4, 255)
        basic.pause(500)
        led.unplot(2, 0)
        basic.pause(50)
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
        led.unplot(2, 1)
        basic.pause(50)
        led.unplot(0, 0)
        led.unplot(4, 0)
        led.unplot(1, 1)
        led.unplot(3, 1)
        led.unplot(2, 2)
        basic.pause(100)
        led.unplot(0, 1)
        led.unplot(4, 1)
        led.unplot(1, 2)
        led.unplot(3, 2)
        led.unplot(2, 3)
        basic.pause(50)
        led.unplot(0, 2)
        led.unplot(4, 2)
        led.unplot(1, 3)
        led.unplot(3, 3)
        led.unplot(2, 4)
        basic.pause(50)
        led.unplot(0, 3)
        led.unplot(4, 3)
        led.unplot(1, 4)
        led.unplot(3, 4)
        basic.pause(50)
        led.unplot(0, 4)
        led.unplot(4, 4)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        led.setDisplayMode(DisplayMode.Greyscale)
        led.plotBrightness(0, 0, 51)
        basic.pause(1)
        led.plotBrightness(0, 1, 51)
        basic.pause(1)
        led.plotBrightness(0, 2, 51)
        basic.pause(1)
        led.plotBrightness(0, 3, 51)
        basic.pause(1)
        led.plotBrightness(0, 4, 51)
        basic.pause(100)
        led.plotBrightness(1, 0, 102)
        basic.pause(1)
        led.plotBrightness(1, 1, 102)
        basic.pause(1)
        led.plotBrightness(1, 2, 102)
        basic.pause(1)
        led.plotBrightness(1, 3, 102)
        basic.pause(1)
        led.plotBrightness(1, 4, 102)
        basic.pause(100)
        led.plotBrightness(2, 0, 153)
        basic.pause(1)
        led.plotBrightness(2, 1, 153)
        basic.pause(1)
        led.plotBrightness(2, 2, 153)
        basic.pause(1)
        led.plotBrightness(2, 3, 153)
        basic.pause(1)
        led.plotBrightness(2, 4, 153)
        basic.pause(100)
        led.plotBrightness(3, 0, 204)
        basic.pause(1)
        led.plotBrightness(3, 1, 204)
        basic.pause(1)
        led.plotBrightness(3, 2, 204)
        basic.pause(1)
        led.plotBrightness(3, 3, 204)
        basic.pause(1)
        led.plotBrightness(3, 4, 204)
        basic.pause(100)
        led.plotBrightness(4, 0, 255)
        basic.pause(1)
        led.plotBrightness(4, 1, 255)
        basic.pause(1)
        led.plotBrightness(4, 2, 255)
        basic.pause(1)
        led.plotBrightness(4, 3, 255)
        basic.pause(1)
        led.plotBrightness(4, 4, 255)
        basic.clearScreen()
    }
})
