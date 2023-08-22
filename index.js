function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    return function Chai() {
        console.log("Hi")
    }
}

function returnsAnAnonymousFunction () {
    return function () {
    }
}


