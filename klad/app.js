function getRandomNumber(size) {
    return Math.floor(Math.random() * size)
}

const getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

const getDistanceHint = function (distance) {
    if (distance < 30) {
        return "obpecheshsa"
    } else if (distance < 35) {
        return "very-very hot"
    }

    else if (distance < 50) {
        return "very hot"
    } else if (distance < 100) {
        return "hot"
    } else if (distance < 200) {
        return "warm"
    } else if (distance < 350) {
        return "cold"
    } else if (distance < 500) {
        return "very cold"
    } else {
        return "ice"
    }


}


let width = 800;
let height = 800;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let clicks = 20;


$("#map").click(function (event) {





    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);


    alert(`You make ${clicks} click`)

    clicks--
    if (clicks <= 0) {
        alert("You lose");
        return

    } else if (distance < 20) {

        alert(`You win! Remain click ${clicks}`)
        return

    }



})
