input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(numero)
    numero += 1
})
input.onButtonPressed(Button.AB, function () {
    texto = "oko"
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
let numero = 0
let texto = ""
texto = "Jamón"
numero = 34
