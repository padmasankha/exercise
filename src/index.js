const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require("fs");
console.log('It works!');


/**
 * q1
 */
function writeRandomWords(start, end) {
    let finalText = null;
    for (start = 1; start <= end; start++) {
        finalText = finalText + start + ": " + getRandomWordSync() + "\n";
    }

    return finalText;
}
fileWrite("question_1", writeRandomWords(1, 100));


/**
 * q2
 */
function writeRandomWordsFizzBuzz(start, end) {
    let finalText = null;
    for (start = 1; start <= end; start++) {

        let word = null

        if (start % 15 == 0) {
            word = "FizzBuzz";
        }
        else if (start % 3 == 0) {
            word = "Fizz";
        }
        else if (start % 5 == 0) {
            word = "Buzz";
        } else {
            word = getRandomWordSync();
        }
        finalText = finalText + start + ": " + word + '\n';
    }
    return finalText;
}
fileWrite("question_2", writeRandomWordsFizzBuzz(1, 100))

/**
 * q3
 */
async function writeRandomWords_v1(start, end) {
    let finalText = null
    for (start = 1; start <= end; start++) {
        var word = await getRandomWord();
        finalText = finalText + start + ": " + word + '\n';
    }
    return finalText
}

Promise.resolve(writeRandomWords_v1(1, 100)).then(function(value) {
    fileWrite("question_3_1", value)
});


async function writeRandomWordsFizzBuzz_v1(start, end) {
    let finalText = null;
    for (start = 1; start <= end; start++) {

        let word = null;

        if (start % 15 == 0) {
            word = "FizzBuzz";
        }
        else if (start % 3 == 0) {
            word = "Fizz";
        }
        else if (start % 5 == 0) {
            word = "Buzz";
        } else {
            word = await getRandomWord();
        }
        finalText = finalText + start + ": " + word + '\n';
    }
    return finalText;
}

Promise.resolve(writeRandomWordsFizzBuzz_v1(1, 100)).then(function(value) {
    fileWrite("question_3_2", value)
});

/**
 * q4
 */
async function printRandomWordsSync_v1(start, end) {
    let finalText = null;
    for (start = 1; start <= end; start++) {

        try {
            word = await getRandomWord({ withErrors: true })
            finalText = finalText + start + ": " + word + '\n';
        } catch (error) {
            finalText = finalText + start + ": " + "It shouldn't break anything!"+ '\n';
        }
    }

    return finalText;
}

Promise.resolve(printRandomWordsSync_v1(1, 100)).then(function(value) {
    fileWrite("question_4_1", value)
});


async function printRandomWordsFizzBuzz(start, end) {
    let finalText = null;
    for (start = 1; start <= end; start++) {

        let word = null

        if (start % 15 == 0) {
            word = "FizzBuzz";
        }
        else if (start % 3 == 0) {
            word = "Fizz";
        }
        else if (start % 5 == 0) {
            word = "Buzz";
        } else {
            try {
                word = await getRandomWord({ withErrors: true });
            } catch (error) {
                word = "It shouldn't break anything!";
            }

        }
        finalText = finalText + start + ": " + word + '\n';
    }
    return finalText;
}

Promise.resolve(printRandomWordsFizzBuzz(1, 100)).then(function(value) {
    fileWrite("question_4_2", value)
});


function fileWrite(fileName, data) {
    fs.writeFile(`${fileName}.txt`, data, (err) => {
        if (err) console.log(err);
        console.log(`Successfully Written to ${fileName}.txt File.`);
    });
}
