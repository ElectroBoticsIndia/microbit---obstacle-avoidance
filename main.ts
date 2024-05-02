let ultrasonic = 0
basic.forever(function () {
    ultrasonic = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(ultrasonic)
    if (ultrasonic <= 10) {
        servos.P2.setAngle(0)
    } else {
        servos.P2.stop()
    }
})
