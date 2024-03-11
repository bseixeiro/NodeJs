export const divide = (a, b) => {
    if (b !== 0)
        return a/b;
    else
        throw new Error("Division par 0 impossible");
}

export const add = (a, b) => a + b;
