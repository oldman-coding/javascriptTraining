let a = 1 
let b = a

console.log(b)
console.log(a)

console.log(a===b)

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
    obj.name = 'Mercedes'
    console.log(obj)
}

const a1 = {
    name: 'BMW'
}
func(a1)
console.log(a1)

function createCar (obj) {
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: "BMW"
}

const newCar = createCar(car)

console.log(car)
console.log(newCar)
