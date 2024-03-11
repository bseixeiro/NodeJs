import { vowels } from "./array.js";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
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
    let count = 0;
    word.split('').forEach(element => {
        if(vowels.includes(element)){
            count++;
        }
    })
    return count;
}
