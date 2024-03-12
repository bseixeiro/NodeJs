import { divide } from "./utils/math.js"
import { sortByAlphabetOrder, extractKey, unsortNumber, printArray, printFirstOne, sumOfElement, addElement, averageOfArray, searchElement, printThirdElement, printMinAndMaxElement, largestSentence } from "./utils/array.js";
import { countVowels, deleteVowels, upperCaseConsonnes, upperCaseVowels } from "./utils/string.js";
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const a = 45;
const b = 5;
const array = [1, 5, 2, 3, 4];
const numbers = [1,2,3,4,5, 6, 7, 8,9, 10];
const evens = [2,4,6,8,10]
const days = ["monday", "tuesday", "wenesday", "thursday", "friday", "saturday", "sunday"]
const months = ["january", "february", "march", "april", "may", "june", "jully", "august", "september", "october", "november", "december"]
const word = "amuse toi avec les voyelles"
const fruits = ["banana", "apple", "kiwi", "grapes", "pear"]
const students = [
    {
        name : "Mastrodicasa",
        firstname: "Max",
        age: "42"
    },
    {
        name : "SexHeros",
        firstname: "Benji",
        age: "19"
    },
    {
        name : "Stazick",
        firstname: "Max",
        age: "21"
    },
    {
        name : "Kong A Siou",
        firstname: "Swan",
        age: "12"
    },
]

//console.log(numberMax(array));
//console.log(unsortNumber(array));
//console.log(deleteVowels(word));
//console.log(sortByAlphabetOrder(fruits));
//console.log(numberToString(3));
//console.log(extractKey(students, "firstname"))
//console.log(upperCaseVowels(word));
//console.log(upperCaseConsonnes(word));
//printArray(numbers);
//printFirstOne(days);
//sumOfElement(evens);
//addElement(sortByAlphabetOrder(fruits), "mango")
//console.log(averageOfArray(evens))
//console.log(searchElement(days, "test"))
//printThirdElement(months);
//printMinAndMaxElement(array)
//console.log(largestSentence(["test", "bijour toi", "skuuuuuuuuu","oue oue oue"]));
//console.log(countVowels(word));

console.log(__dirname)