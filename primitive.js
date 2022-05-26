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
