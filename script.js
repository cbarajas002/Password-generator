// Dom elements
var passwordEl = document.getElementById("password");
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEL = document.getElementById("generate");





var randomFunc = {
    lower: getRandomLower,
    upper:getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};






// Generator functions - http://www.net-comber.com/charset.html
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols [Math.floor(Math.random() * symbols.length)];
}




generateEL.addEventListener('click' , () => {
    var length = +lengthEl.value;
    var hasUpper= uppercaseEl.checked;
    var hasLower = lowercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;


    passwordEl.innerText = generatePassword (
        hasLower,
        hasUpper,
        hasNumber, 
        hasSymbol,
        length
    );



});


function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword =" ";

    var typesCount = lower + upper + number + symbol;

    console.log('typesCount:' , typesCount);

    var typesArr = [{ lower }, { upper }, { number} , { symbol }].filter
    (
        item => Object.values(item)[0]
    );

    console.log('typesArr:', typesArr);

    if (typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount ) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];


            console.log('funcName:', funcName);


            generatedPassword += randomFunc[funcName]();

        })
    }

    var finalPassword = generatedPassword;

    return finalPassword;


}

