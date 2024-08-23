function getMinMax(str) {
    let rez = {}
    let numbers = []
    let arr = str.split(' ')
numbers += arr.map(items => +(items)).filter(items => !isNaN(items))
let mass = numbers.split(',')
 rez.min = Math.min(...mass)
 rez.max = Math.max(...mass)
return rez
}
