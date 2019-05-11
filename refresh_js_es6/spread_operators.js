const arr = [4, 5, 6];
const append = [1, 2, 3, ...arr]
const append2 = [...arr, 1, 2, 3]

// Spread Object
let obj_1 = {foo: 'bar', x: 42}
let obj_2 = {foo: 'baz', y: 13}

let clone_obj = {...obj_1}
let clone_obj_2 = {...obj_1, ...obj_2}

let {foo, x, y} = obj_1
console.log(foo, x, y)

