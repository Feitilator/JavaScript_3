// // Function Declaration
// function greet(name){
//     console.log('Hello -', name)
// }

// // Function Expression
// const greet2 = function(name){
//     console.log('2 Hello -', name)
// }

// greet('Vladilen')
// greet2('Vladilen')

// console.log(greet.toString())

// setTimeout(function(){
//     greet('Vladilen')
// },500)

// let counter = 0
// const interval = setInterval(function () {
//     if(counter === 5 ){
//        clearInterval(interval)
//     }else{
//         console.log(++counter)    
//     }
    
// },1000)

//Arrow Function
function greet(name){
    console.log('Hello -', name)
}

const arrow = (name) => {
    console.log('Hello -', name)
}

const arrow2 = (name) => console.log('Hello -', name)

function pow(number, exp) {
    return Math.pow(number,exp)
}

const pow2 = (number,exp) => Math.pow(number,exp)

console.log(pow2(2, 3))


arrow('Vladilen')
arrow2('Vladilen')


// ====== Default Parameters
const sum = (a = 40,b = 2) => a + b
// console.log(sum(40,2))
// console.log(sum())

function sumAll(...numbers){
    // let res = 0
    // for (let num of numbers){
    //     res += num
    // }
    // return res
    return numbers.reduce((acm,cur) => acm += cur, 0)
} 

console.log(sumAll(1,2,3,4,5))

//Closures

function createPerson(name) {
    return function(lastName){
        console.log (name + ' ' + lastName)
    }
}

const addLastName = createPerson('Vladilen1')
addLastName('Minin')
addLastName('Petrov')
