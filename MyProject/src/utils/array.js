// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
export const numberMax = (numbers) => Math.max(...numbers);

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