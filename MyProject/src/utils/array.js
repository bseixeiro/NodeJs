import { add, divide, greatest, tiniest } from "./math.js";

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
export const sortByAlphabetOrder = words => words.sort();

export const extractKey = (array, key) => {
    const properties = []
    array.forEach(element => {
        properties.push(element[key]);
    });
    return properties;
}

export const unsortNumber = numbers => numbers.sort().reverse();

export const vowels = ["a", "e", "i", "o", "u", "y"];

export const printArray = array => console.log(array);

export const printFirstOne = array => console.log(array[0])
export const printThirdElement = array => console.log(array[2])

export const sumOfElement  = numbers => {
    let sum = 0;
    numbers.forEach(element => {sum = add(sum, element)});
    return sum;
}

export const addElement = (array, element) => [...array, element]

export const averageOfArray = (array) => divide(sumOfElement(array), array.length)

export const searchElement = (array, element) => array.includes(element);

export const printMinAndMaxElement = array => {
    console.log(tiniest(array))
    console.log(greatest(array))
}

export function largestSentence (array) {
    const lengths = []
    array.forEach(element => lengths.push(element.length)); 
    return array[array.indexOf(array[lengths.indexOf(greatest(lengths))])]
}