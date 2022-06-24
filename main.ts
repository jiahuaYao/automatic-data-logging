datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.No)
        datalogger.deleteLog()
        logging = false
        datalogger.setColumnTitles(
        "x",
        "y",
        "z",
        "temp"
        )
    }
})
let logging = false
logging = false
datalogger.setColumnTitles(
"x",
"y",
"z",
"temp"
)
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("x", input.acceleration(Dimension.X)),
        datalogger.createCV("y", input.acceleration(Dimension.Y)),
        datalogger.createCV("z", input.acceleration(Dimension.Z))
        )
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
        datalogger.log(datalogger.createCV("temp", input.temperature()))
    }
})
