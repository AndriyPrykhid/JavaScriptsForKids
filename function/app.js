
// task 1
function add(a, b) {
    return a + b
}
console.log(add(123, 77));

function multiply(a, b) {
    return a / b
}

console.log(multiply(34, 4));

// task 2

function areArraysSum(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

// task 3


function randomWord(arr) {
    let word = arr[Math.floor(Math.random() * arr.length)];
    return word;
}

function setupAnswerArr(word) {
    for (let i = 0; i < word.length; i++) {
        answerArr[i] = "_";
    }
}

function showPlayerProgress(arr) {
    return alert(arr.join(' '))
}

function getGuess() {
    return prompt("Enter one letter or click cancel to exit")
}



let word = randomWord(["Andriy", "Iryna", "Vasya", "Sophia", "Mariana"]);


word = word.toLowerCase();


let remaningLetter = word.length;
let answerArr = [];
let count = word.length + 1;


setupAnswerArr(word);


while (remaningLetter > 0) {

    showPlayerProgress(answerArr)
    let guess = getGuess();


    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter one letter")
    } else {

        for (let j = 0; j < word.length; j++) {
            if (guess === word[j] && answerArr[j] === "_") {
                answerArr[j] = guess;
                remaningLetter--;
                console.log(remaningLetter)
            }
        }
        count--;
        console.log(count)
    }

}
if (count >= 0) {
    alert(`Congratulation word was ${word}`)
} else {
    alert("You lose" + `Congratulation word was ${word}`)
}





