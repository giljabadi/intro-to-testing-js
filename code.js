// helloWorld test function
const helloWorld = () => "Hello, World!"
// sayHello test function
const sayHello = (str) => {
    if (str == undefined) {
        return "Hello, World!"
    } else if (str == true) {
        return "Hello, World!"
    } else if (str == false) {
        return "Hello, World!"
    } else if (typeof str == 'number') {
        return "Hello, World!"
    }
    return "Hello, " + str + "!"
}

    const isFive = (num) => {
        if (num === 5) {
            return true
        }
        return false
    }

    const isEven = (num) => {
        if (num % 2 === 0) {
            return true
        }
        return false
    }

function isVowel(x) {

    if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x=='a' || x=='e' || x=='i' || x=='o' || x=='u') {
        return true
    }
else {
    return false
    }
}

const add = (x, y) => {
    let z = x + y
    if (z = x+y) {
        return z
    }
    else {
        return NaN
    }
}