export const divide = (a, b) => {
    if (b !== 0)
        return a/b;
    else
        throw new Error("Division par 0 impossible");
}

export const add = (a, b) => a + b;


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/
export const greatest = (numbers) => Math.max(...numbers);
export const tiniest = number => Math.min(...number);