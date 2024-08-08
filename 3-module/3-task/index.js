function camelize(str) {
 let arr = str.split('') 
  for(let i=0; i<arr.length; i++){
    if (arr[i] === "-"){
        arr[i+1] = arr[i+1].toUpperCase()
        arr[i]=''
    }
}
let rez = arr.join('')
return rez
}
