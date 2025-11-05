/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew
 * Created on: Oct 2025
 * This program shows nested loops
*/

// variables
let sprite: game.LedSprite = null
let loopCounter1 = 0
let loopCounter2 = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when "A" is pressed, the pixels move cw
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounter1 = 0
    while (loopCounter1 < 4) {
        loopCounter1 = loopCounter1 + 1
        loopCounter2 = 0
        while (loopCounter2 < 4) {
            sprite.move(1)
            basic.pause(200)
            loopCounter2 = loopCounter2 + 1
        }
        sprite.turn(Direction.Right, 90)
    }
    sprite.delete()
    basic.showIcon(IconNames.Yes)
})
