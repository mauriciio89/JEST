
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
// convert the given valueInEuro to dollars
let valueInDollar = valueInEuro * 1.2;
//return the dollar value
return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
// convert the given valueInEuro to dollars
let valueInYen = valueInDollar * 107;
//return the dollar value
return valueInYen;
}

const fromYenToPound = function(valueInYen){
// convert the given valueInEuro to dollars
let valueInPound = valueInYen * 0.00625;
//return the dollar value
return valueInPound;
}

function sum(a,b){
return a+b
}

// let oneEuroIs = {
// "JPY": 127.9, // japan yen
// "USD": 1.2, // us dollar
// "GBP": 0.8, // british pound
// }

// function fromEuroToDollar(mon){
// let dollars = 1.2;
// return mon*dollars ;
// }

module.exports= {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}