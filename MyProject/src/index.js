import { divide } from "./utils/math.js"
import { numberMax, sortByAlphabetOrder, extractKey, unsortNumber } from "./utils/array.js";
import { countVowels, deleteVowels, upperCaseConsonnes, upperCaseVowels } from "./utils/string.js";

const a = 45;
const b = 5;
const array = [1, 5, 2, 3, 4];
const word = "bijour toi"
const fruits = ["banana", "apple", "kiwi", "grapes"]
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
console.log(upperCaseConsonnes(word));
console.log(countVowels(word));