'use strict';

function testFunc(){
   var age = 18;
   console.log(age)
}

testFunc();


//strict mode o dau ham 
// strict mode o dau doan mo the script 
// strict mode o dau file

const student = {fullName: 'Nguyen Van A'}

Object.defineProperty(student,'fullName', {
    value: "Nguyen Van A", 
    writable: false, 
})
student.fullName = "nguyen van B"
console.log(student)