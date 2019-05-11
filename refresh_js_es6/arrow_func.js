// Function & Arrow Function

let greet_1 = function (firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log(greet_1('chaiwat', 'chaobaankoh'))

let greet_2 = (firstName, lastName) => {
    return firstName + ' ' + lastName
}

console.log(greet_2('chaiwat', 'chaobaankoh'))

let greet_3 = (firstName, lastName) =>  firstName + ' ' + lastName
console.log(greet_3('chaiwatt', 'chaobaankoh'))

var personal = {
    name: "Luna",
    handleMessage: (message, handler) =>{ handler(message) },
    greet: function () {
        this.handleMessage("Hi",  (message) => {
            console.log(message + " " + this.name)
        })
    }
}

// Array function
var fruits = ['Apples', 'Banana']
console.log(fruits.length)
console.log(fruits[0])

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});

// PUSH
fruits.push('Orange')
console.log(fruits)

//POP
var result = fruits.pop()
console.log(result)

//SHIFT
fruits.shift()
console.log(fruits)

//UNSHIFT
fruits.unshift('Kiwi')
console.log(fruits)

//INDEX
console.log(fruits.indexOf('Banana'))

//Remove
var vegetables = ['Cabbage', 'Turnip', 'Radish']
console.log(vegetables)
vegetables.splice(1, 2)
console.log(vegetables)

//COPY
var copy = vegetables.slice();
console.log(copy)

//MAP
var arr1 = [1, 4, 9, 16]
const map1 = arr1.map(x => x * 2)
console.log(map1)



