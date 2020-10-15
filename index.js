// Your code here
// const mapToNegativize = (arr) => {
//     let newArr = [];
// //    for(const num of arr){
// //        let neg = num * -1
// //        newArr.push(neg)
// //    }
//     for(let i = 0; i < arr.length; i++){
//         let neg = arr[i] * -1
//         newArr.push(neg)
//     }
//    return newArr
// }

function mapToNegativize(arr){
    let newArr = [];
       for(const num of arr){
           newArr.push(num * -1)
       }
       return newArr
}
let array = [1, 2, 3, -9]
console.log(mapToNegativize(array))

const mapToNoChange = (arr) => arr

const mapToDouble = (arr) => {
    let dblArr = []
    for( const num of arr){
        dblArr.push(num * 2)
    }
    return dblArr
}

const mapToSquare = (arr) =>{
    let sqrArr = []
    for(const num of arr){
        sqrArr.push(Math.pow(num, 2))
    }
    return sqrArr
}

const reduceToTotal = (arr, start = 0) =>{
    let count = start
    for(const num of arr){
        count = count + num
    }
    return count
}

const reduceToAllTrue = (arr) => {
    let result = true
    for( const item of arr){
        if(!item){return result = false}
    }
    return result
}

let trueTestI = [1, 2, true, "razmatazz"]
let trueTestII = [1, 2, true, "razmatazz", false]
console.log(reduceToAllTrue(trueTestI))

const reduceToAnyTrue = (arr) => {
    let result = false
    for( const item of arr){
        if(item){return result = true}
    }
    return result
}