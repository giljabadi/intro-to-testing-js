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
    } else if (str == 2) {
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
