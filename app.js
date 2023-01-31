function capitalize(string) {
    const firstLetter = string.slice(0,1);
    const rest = string.slice(1);
    return firstLetter.toUpperCase() + rest;
}

function reverseString(string) {
    const strArray = [...string];
    const length = strArray.length;
    const reversedArray = [];
    for (let i = length-1; i >= 0; i--) {
        reversedArray.push(strArray[i]);
    };
    const reversedStr = reversedArray.join('');
    return reversedStr;
}

export { capitalize, reverseString };