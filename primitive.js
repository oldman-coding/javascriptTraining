let a = {
    name: 'BMW'
}

let b = a

a = {
    name: 'Mercedes', 
    price: '50k USD'
}
console.log(a)
console.log(b)

const student = {
    name: "Loan Tran", 
    profile: {
        firstName: 'Loan', 
        lastName: 'Ha',
        introduction: 'Girl'
    }
}

const studentProfile = student.profile 
student.profile.introduction = 'Good girl'
console.log(student)

// Side effect
function func(obj) {
    // obj.name = 'Mercedes'
    console.log(obj)
}

const a1 = {
    name: 'BMW'
}
func(a1)
console.log(a1)

function createCar (obj) {
    // obj = JSON.parse(JSON.stringify(obj))
    obj = {...obj}
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: "BMW"
}

const newCar = createCar(car)

console.log(car)
console.log(newCar)

const bmw = {
    name: "BMW"
}

const bmw1 = {
    name: "BMW"
}
console.log(bmw == bmw1)
