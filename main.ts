input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showString("REETAN")
basic.forever(function () {
	
})
