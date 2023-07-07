
$("#main-heading").text("Hello my friends");

// $("#main-heading").fadeOut(3000).fadeIn(1000);
let setTiming = 1000;
for (let i = 0; i < 5; i++) {


    $("#main-heading").fadeOut(setTiming).fadeIn(setTiming);
    setTiming += 1000
    console.log(setTiming)
}

let friends = ['Andriy', "Vasya", "Stepan", "Yurik"];

for (let i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + ' The Best' + "</p>")
}

$("#description").fadeOut(2000).delay(5000).fadeIn(2000);
$("#my-life").fadeTo(3000, 0.7);


