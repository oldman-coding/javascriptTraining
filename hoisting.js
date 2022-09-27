console.log(age); 
var age = 16;

console.log(sum(6,9))

function sum(a,b) {
    return a+b;
}

// Let se dua vao temporary dead zone va khong gan gia tri mac dinh
let fullName = "Nguyen Van A" 
{
    let fullName = "Nguyen Van B"
    {
        console.log(fullName)

    }
}

const counter1 = makeCounter();
console.log(counter1())

function makeCounter() {
    let counter = 0; 
    return increase 
    function increase() {
        return ++ counter;
    }
}