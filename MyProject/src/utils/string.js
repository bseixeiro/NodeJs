import { vowels } from "./array.js";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/
export const deleteVowels = word => {
    let temp =  word.replace(/[aeiouy]/gi, "");
    return temp;
}

export const upperCaseVowels = (word) => {
    let wordUpperVowels = "";
    word.split('').forEach(element => {
        wordUpperVowels += vowels.includes(element)? element.toUpperCase() : element;
    });
    return wordUpperVowels;
}

export const upperCaseConsonnes = (word) => {
    let wordUpperVowels = "";
    word.split('').forEach(element => {
        wordUpperVowels += !vowels.includes(element)? element.toUpperCase() : element;
    });
    return wordUpperVowels;
}

export const countVowels = (word) => {
    let test = decomposeString(word);
    return test.filter(element => element.vowels).length;
}

//Décompose une phrase en objet contenant le caractère et si le caractère est une voyelle
function decomposeString (string) {
    let toReturn = []
    string.split('').forEach( char => {
        let object = {
            char : char,
            vowels : false,
        }
        vowels.includes(char)? object.vowels = true: object.vowels = false;
        toReturn.push(object);
    });
    return toReturn; 
}
function recomposeString (array){
    let string = "";
    array.forEach(element => {
        string += element.char;
    })
    return string;
}

