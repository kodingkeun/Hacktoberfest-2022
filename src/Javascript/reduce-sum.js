console.log('hello, contribution ideapedyudi')

let hero = [{ name: 'Jendral Soedirman', level: 7 }, { name: 'Pangeran Deponegoro', level: 7 }, { name: 'Kapitan Pattimura', level: 9 }]
const reduceSum = function (key, obj) {
    return obj.reduce((n, item) => {
        return n + (item[key] ? item[key] : 0)
    }, 0)
}

let totalLevelItem = reduceSum('level', hero)

console.log(totalLevelItem)