function someFunction() {
    return function f(number) {
        console.log(number);
    }
}

call_me = someFunction()
call_me(3)

