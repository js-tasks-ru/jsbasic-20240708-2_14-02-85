function getMinMax(str) {
    let rez = {}
    let numbers = []
    let arr = str.split(' ')
console.log(arr);
numbers += arr.map(items => +(items)).filter(items => !isNaN(items))
let mass = numbers.split(',')
 rez.min = Math.min(...mass)
 rez.max = Math.max(...mass)
console.log(mass);
console.log(rez);
return rez
}
