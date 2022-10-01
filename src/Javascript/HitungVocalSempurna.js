function hitungVokal(kalimat) {
    console.log(`\nKalimat : ${kalimat}`)
    console.log('\nJumlah huruf vokal')
    console.log('====================');

    let total = 0
    const vokalA = kalimat.match(/a/g) ? kalimat.match(/a/g).length : 0
    const vokalI = kalimat.match(/i/g) ? kalimat.match(/i/g).length : 0
    const vokalU = kalimat.match(/u/g) ? kalimat.match(/u/g).length : 0
    const vokalE = kalimat.match(/e/g) ? kalimat.match(/e/g).length : 0
    const vokalO = kalimat.match(/o/g) ? kalimat.match(/o/g).length : 0 

    total += vokalA
    total += vokalI
    total += vokalU
    total += vokalE
    total += vokalO

    console.log(`A : ${vokalA}`);
    console.log(`I : ${vokalI}`);
    console.log(`U : ${vokalU}`);
    console.log(`E : ${vokalE}`);
    console.log(`O : ${vokalO}`);
    console.log(`Total : ${total}`)
} 


hitungVokal(process.argv[2])
