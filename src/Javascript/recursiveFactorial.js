function factorial(x) {
    // basecase cuy
    if (x == 0) {
        return 1;
    } else { // selagi nilai parameter x > 0
        return x * factorial(x - 1);
    }
}

// inputan from user
const num = prompt('angka positif faktorial: ');

// (pengaman) kalau jika jika user iseng input angka dibawah 1
if (num >= 0) {
    const result = factorial(num);
    console.log(`faktorial dari ${num} adalah ${result}`);
} else {
    console.log('angka positif ya esempeh!.');
}

module.exports = factorial;

