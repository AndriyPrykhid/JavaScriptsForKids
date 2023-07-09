
const timeUp = function () {
    alert("Time over")
}

let timeoutId = setTimeout(timeUp, 5000);
clearTimeout(timeoutId);

let counter = 0

const time = function () {
    counter += 5;
    console.log(`you look ${counter} second`)

}

let intervalId = setInterval(time, 5000);

clearInterval(intervalId);

let leftOfSet = 0;

let moveHeading = function () {
    $("#heading").offset({ left: leftOfSet });
    leftOfSet += 2;
    if (leftOfSet > 800) {

        leftOfSet = 0;
    }
}

let moveId = setInterval(moveHeading, 10);

clearInterval(moveId);

// event

let clickHandler = function (event) {
    console.log("click " + event.pageX + " " + event.pageY)
}

$("#description").click(clickHandler);

$("html").click(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    })
})

let offset = 0;
let direction = "right";

$("#animation").offset({
    left: offset,
    top: offset,
})


function animation() {

    if (direction === 'right') {
        $("#animation").offset({ left: offset })
        offset++
        if (offset >= 200) {
            offset = 0;
            direction = "down"
        }
    } else if (direction === 'down') {
        $("#animation").offset({ top: offset })
        offset++

        if (offset >= 200) {
            direction = "left"
            offset = 200;

        }
    } else if (direction === 'left') {
        $("#animation").offset({ left: offset })
        offset--

        if (offset <= 0) {
            offset = 200;
            direction = "up"
        }
    } else if (direction === 'up') {
        $("#animation").offset({ top: offset })
        offset--

        if (offset <= 0) {
            offset = 0;
            direction = "right"
        }
    }

}
let count = 0;
let interval = 15;

let animationId = setInterval(animation, interval);

$("#animation").click(function () {
    clearInterval(animationId)
    interval++
    count++



    if (count > 5) {
        return $("#animation").text("You Win");
    } else {
        setInterval(animation, interval)
    }




})

console.log(interval)




