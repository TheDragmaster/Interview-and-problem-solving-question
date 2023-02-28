/*
    Write a function that accepts a String as an argument

    The function should capitalize ONLY every other letter in the string

    The function should then return a converted String 

*/

// letter == character
//startin caps at letter 0

//"hello" => "HeLlO"
//"yo eli" => "Yo eLi"
//"hello???" => "HeLlo???"
//"HELLO" => 'HeLlO'

const camelLetters = (string) => {
    //loop through string
    let camelString = "";
    for (let i = 0; i < string.length; i++) {
        //change the even indices to be caps
        if (i % 2 == 0) {
           camelString += string[i].toUpperCase();
        }   else {
        camelString += string[i].toLowerCase();
        }
    }

    return camelString;
};

console.log(camelLetters("hello"));
console.log(camelLetters("yo eli"));
console.log(camelLetters("hello???"));
console.log(camelLetters("HELLO"));