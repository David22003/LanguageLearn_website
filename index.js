let arr=[1,2,3,4,5,7];
// console.log(arr)
// console.log(arr[1])
// console.log(arr.length)
// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr.push())
// console.log(arr.shift())
// console.log(arr.pop())
// console.log(arr.unshift())
// arr.forEach((value,index,arr)=> {
//     console.log(value,index,arr)
// })

let newarr = arr.map((e)=>{
    return e**2
})
console.log(newarr)

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a*b
}

console.log(arr2.reduce(red))