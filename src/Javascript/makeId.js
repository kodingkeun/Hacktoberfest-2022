const string = "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890"
function makeId(number = 8) {
    let result = "";
    const charlength = string.length;
    for(let i = 0; i < number; i++) {
        result += string.charAt(Math.floor(Math.random() * charlength));
    }
    return result;
}

console.log(makeId(10))
