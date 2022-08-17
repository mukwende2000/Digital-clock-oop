const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

class Clock {
    constructor(second, minute, hour) {
        this.second = second
        this.minute = minute
        this.hour = hour
    }
    updateSeconds() {
        this.second.style.transform = `rotateZ(${secondsTransform}deg)`

        setInterval(() => {
            secondsTransform += 6
            this.second.style.transform = `rotateZ(${secondsTransform}deg)`
        }, 1000)
    }
    updateMinutes() {
        setInterval(() => {
            minutesTransform += 0.1
            this.minute.style.transform = `rotateZ(${minutesTransform}deg)`
        }, 1000)
    }
    updateHours() {
        setInterval(() => {
            hoursTransform += 0.017
            this.hour.style.transform = `rotateZ(${hoursTransform}deg)`
        }, 1000)
    }
}


let currentSecond = new Date().getSeconds()
let secondsTransform = 6 * currentSecond;



let currentMinute = new Date().getMinutes()
let minutesTransform = 6 * currentMinute;


let currentHour = new Date().getHours()
let hoursTransform = 6 * (currentHour * 5);


const clock = new Clock(secondHand, minuteHand, hourHand)
clock.updateSeconds()
clock.updateMinutes()
clock.updateHours()


/* 
    PROTOTYPYCAL INHERITANCE METHOD
    function Clock(second, minute, hour) {
    this.second = second
    this.minute = minute
    this.hour = hour
}


let currentSecond = new Date().getSeconds()
let secondsTransform = 6 * currentSecond;

Clock.prototype.updateSeconds = function () {
    this.second.style.transform = `rotateZ(${secondsTransform}deg)`

    setInterval(() => {
        secondsTransform += 6
        this.second.style.transform = `rotateZ(${secondsTransform}deg)`
    }, 1000);
}


let currentMinute = new Date().getMinutes()
let minutesTransform = 6 * currentMinute;

Clock.prototype.updateMinutes = function () {
    setInterval(() => {
        minutesTransform += 0.1
        this.minute.style.transform = `rotateZ(${minutesTransform}deg)`
    }, 1000);
}

let currentHour = new Date().getHours()
let hoursTransform = 6 * (currentHour * 5);

Clock.prototype.updateHours = function () {
    setInterval(() => {
        hoursTransform += 0.017
        this.hour.style.transform = `rotateZ(${hoursTransform}deg)`
    }, 1000);
}

const clock = new Clock(secondHand, minuteHand, hourHand)
clock.updateSeconds()
clock.updateMinutes()
clock.updateHours() */