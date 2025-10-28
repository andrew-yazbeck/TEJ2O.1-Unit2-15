/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew
 * Created on: Oct 2025
 * This program shows nested loops
*/

// variables
let ones: number = 0
let tens: number = 0

// setup
basic.showIcon(IconNames.Happy)

// when "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()

    tens = 0
    while (tens <= 9) {
        ones = 0
        while (ones <= 9) {
            basic.showString(tens.toString() + ones.toString())
            ones++
        }
        tens++
    }

    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
