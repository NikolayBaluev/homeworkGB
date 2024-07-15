const alphabeticLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabeticUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = "0123456789";
const symbols = "(#@<)>%!+=-&^:~";

function generatePassword(num){
    let count = 0
    let result = []

    for (let i = 0; i < num; i++) {
        count = Math.floor(Math.random() * (4));
        if (count === 0) {
            result.push(alphabeticLowerCase[Math.floor(Math.random() * (26))]);
        }
        if (count === 1) {
            result.push(alphabeticUpperCase[Math.floor(Math.random() * (26))]);
        }
        if (count === 2) {
            result.push(numbers[Math.floor(Math.random() * (9))]);
        }
        if (count === 3) {
            result.push(symbols[Math.floor(Math.random() * (15))]);
        }
    }
    return result.join('');
}

function generatePasswordWithCriteria(lowerCaseCount, upperCaseCount, numberCount, symbolCount) {
    const result = [];
    for (let i = 0; i < lowerCaseCount; i++) {
        result.push(alphabeticLowerCase[Math.floor(Math.random() * alphabeticLowerCase.length)]);
    }
    for (let i = 0; i < upperCaseCount; i++) {
        result.push(alphabeticUpperCase[Math.floor(Math.random() * alphabeticUpperCase.length)]);
    }
    for (let i = 0; i < numberCount; i++) {
        result.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    for (let i = 0; i < symbolCount; i++) {
        result.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]; 
    }

    return result.join('');
}

module.exports ={generatePassword, generatePasswordWithCriteria};

