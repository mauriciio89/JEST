

const {sum} = require('./app.js')
test("14 + 9 should be 23", function(){
expect(sum(14,9)).toBe(23);
})

const {fromEuroToDollar} = require('./app.js')
test("One euro should be 1.206 dollars", function(){
//import the function from app.js

// use the function like its suppoed to be used
// const dollars = fromEuroToDollar(3.5)

// if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
// const expected = 3.5 * 1.2;

// this is the comparison for the unit test
expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

const {fromDollarToYen} = require('./app.js')
test("One dollar should be 107 yens", function(){
//import the function from app.js

// use the function like its suppoed to be used
// const dollars = fromEuroToDollar(3.5)

// if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
// const expected = 3.5 * 1.2;

// this is the comparison for the unit test
expect(fromDollarToYen(2)).toBe(214); //1 dollar are 107 yens, then 2 dollars should be = (2 * 107)
})

const {fromYenToPound} = require('./app.js')
test("One Yen should be 0.00625 pounds", function(){
//import the function from app.js

// use the function like its suppoed to be used
// const dollars = fromEuroToDollar(3.5)

// if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
// const expected = 3.5 * 1.2;

// this is the comparison for the unit test
expect(fromYenToPound(320)).toBe(2); //160 yens is 1 pound, then 320 yens should be = (320 * 0.00625)
})