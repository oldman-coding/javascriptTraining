'use strict';

function testFunc(){
   age = 18;
   
}

testFunc();
console.log(age)

//strict mode o dau ham 
// strict mode o dau doan mo the script 
// strict mode o dau file

const student = new Object.freeze({
    fullName: "Nguyen Van A"
})
student.fullName = "Nguyen van B"
console.log(student)