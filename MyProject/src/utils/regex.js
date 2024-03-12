export const deleteVowelsRegex = word => word.replace(/[aeiouy]/gi, "");
export const deleteDigitRegex = word => word.replace(/[0-9]/g, "");