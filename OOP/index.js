const speak = function () {
    console.log(`${this.sound} my name is ${this.name}!`)
}

const dog = {
    name: "Jack",
    legs: "4",
    isAwesome: true,
    age: 2,
    sound: "Gav, gav, gav",
    speak: speak
}

dog.eyes = "black";

dog.bark = function () {
    console.log(`Gav, gav my name is ${this.name}`)
}



const Car = function (x, y) {
    this.x = x,
        this.y = y,

        this.draw()

}




Car.prototype.draw = function () {
    let carHtml = '<img src = "./img/car.webp">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y,


    })

    $("body").append(this.carElement)
}
Car.prototype.moveRight = function (speed = 5) {
    this.x += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveLeft = function (speed = 5) {
    this.x -= speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveUp = function (speed = 5) {
    this.y -= speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveDown = function (speed = 5) {
    this.y += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}



const mers = new Car(20, 10);
const tesla = new Car(20, 80);



let moveId = setInterval(function () {
    tesla.moveRight(Math.floor(Math.random() * 5))
    if (tesla.x === 700) tesla.x = 0

    mers.moveRight(Math.floor(Math.random() * 5))
    if (mers.x === 700) mers.x = 0

}, 50);

clearInterval(moveId)








