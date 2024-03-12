import { vowels } from "./array.js";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/
export const deleteVowels = word => word.replace(/[aeiouy]/gi, "");

export const upperCaseVowels = (word) => 
    word.split('').forEach(element => {
        element = vowels.includes(element)? element.toUpperCase() : element;
    }).join('');

export const upperCaseConsonnes = 
    (word) => word.split('').forEach(element => {
        element = !vowels.includes(element)? element.toUpperCase() : element;
    }).join('');


export const countVowels = (word) => test.filter(element => vowels.includes(element)).length;

