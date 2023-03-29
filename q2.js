/*
    Write a function that accepts a String as an argument.

    The String is supposed to be HTML, but all the div elements 
    are missing their closing tags(they have the < and > )

    the function's job is to find and close all the divs in the 
    provided HTML string

    The function should return the entire corrected string.
*/
// <p>Here is a <div> tag  </p>

 const closeSecondDivs = (string) => {
//     Array.from(string).reduce((acc, char, i, array) => {
//         if (char === '<') {
//             const divCheck = "div>";    
//             for(let j = 0; i < 4; j++) {
//               if (array[i + j] === ) {
//               }   
//             }
//         }
//     }, "")
    let divCounter = 0;
    let unkownFour = ""; 
    let fixedHTML = "";
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === '<') {
            for(let j = 1; j < 5; j++) {
                unkownFour += string[i + j];
            }
            //console.log(unkownFour);

        }

        if (unkownFour === 'div>') {
        // console.log("coming in to the div fixer");
            divCounter++;
            if (divCounter % 2 === 0){
                fixedHTML += string[i] + "/";
                unkownFour = "";
                continue;
            } 
        }
        fixedHTML += string[i]
        unkownFour = "";
    }

    return fixedHTML;
};

console.log(closeSecondDivs("<div><p>Here is a <div> tag </p>"));
console.log(closeSecondDivs("<div><div><div>"));
console.log(closeSecondDivs("<div><div><p>Hello</p><div><div>"));
console.log(closeSecondDivs("<div></div><p>Hello</p><div></div>"));