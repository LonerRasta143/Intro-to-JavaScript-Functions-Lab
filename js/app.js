// //Exercise 1 has been completed for you: Using as example

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//         return x;
//     } else {
//         return y;
//     }
// }

// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
//Excercise 2
function isAdult(age){
     if (age <= 18){
        return "Minor";}
    else
        {return "Adult";
    }
}
console.log('Exercise 2 Result:', isAdult(21));

//Excercise 3

function isCharAVowel(vowel){
    if (vowel === "a" || 
        vowel === "e" ||
        vowel === "i" || 
        vowel === "o" ||
        vowel === "u")
        {return "true"}
    else
        {return "false"
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

