this.firstName = "Thu"
this.lastName = "Minh" 

const teacher = {
    firstName: "Minh", 
    lastName: "Thao", 
    getFullName() {
       console.log(`${this.firstName} ${this.lastName}`)
    }
}

console.log(teacher.getFullName())

const getTeacherName = teacher.getFullName.bind(teacher);


var button1 = document.querySelector('.click2')
console.log(button1)


button1.onclick = getTeacherName