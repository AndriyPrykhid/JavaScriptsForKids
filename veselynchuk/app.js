

const words = ['Andriy', 'Vasya', 'Sophia', 'Iryna', 'Mariana'];
let word = words[Math.floor(Math.random() * words.length)];
word = word.toLowerCase();

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remaningLetter = word.length;
let count = word.length + 1;

while (remaningLetter > 0 && count > 0) {

    alert(answerArray.join(" "));
    let guess = prompt("Enter one letter").toLowerCase();

    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Please enter one letter")
    } else {


        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === '_') {
                answerArray[j] = guess;
                remaningLetter--;
                count--;
            }

        }

        alert(`you must ${count}`);

    }


}

alert(answerArray.join(' '));

if (count >= 0) {
    alert(`Good job, the answer was ${word}`)
} else {
    alert("Too bad!The answer was " + word)
}

alert(`congratulations the word was gussed is ${word}`)




