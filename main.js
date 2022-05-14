const languages = [
    {   id: 1, 
        name: "english", 
        coin: 60, 
        quantity: 3
    }, 
    {
        id: 2, 
        name: "Vietnamese", 
        coin: 100, 
        quantity: 2
    }, 
    {
        id: 3, 
        name: "Chinese", 
        coin: 200, 
        quantity: 3 

    }, 
    {
        id: 4, 
        name: "Vietnamese", 
        coin: 60, 
        quantity: 50
    }, 

    {
        id: 5, 
        name: "Vietnamese", 
        coin: 60, 
        quantity: 10
    }
]/* on input
var inputElement = document.querySelector('input[type="text"]');
var inputValue;

inputElement.oninput = function (e) {
    inputValue = e.target.value
}
*/

var inputElement = document.querySelector('select');
console.log(inputElement)

inputElement.oninput = function (e) {
    var inputValue = e.target.value
    console.log(inputValue)
}



/* Dom Event - OnClick Handler - Event.target
var buttonElement = document.querySelectorAll('h2'); 
const clickHandler = (e) => {
    console.log(e.target)
}
for (var i =0; i< buttonElement.length; i++ ) {
    buttonElement[i].onclick = clickHandler
}
*/


/* My reduce Prototype Function
const numbers = [1,2,3,4,5]

Array.prototype.reduce2 = function(callback, result) {
    let index = 0
    if (arguments.length < 2) {
        result = this[0]
        index = 1
    }
    for (;index < this.length; index++) {
        result = callback(result, this[index])
        console.log(result, this[index])
    }
    return result
}

// const total = numbers.reduce2((previousValue, currentValue) => previousValue + currentValue, 0)
const result = languages.reduce((previousValue, currentValue) => previousValue + currentValue.quantity * 3, 0)
console.log(result)
*/ 

const iPhone7 = {
    name: 'iphone7] 7', 
    color: 'Pink', 
    weight: '100gr', 
    
    takePhoto() {
        console.log(this)
    },

    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this)
        }
    }
}
// iPhone7.objChild.methodChild()

// const button = document.querySelector('button')
// button.onclick = function () {
//     console.dir(this.innerText)
// }

/* This example
// 'use strict'

// function myFunction() {
//     console.log(this)
// }

// window.myFunction()
*/

// ArrowFunction khong co context để sử dụng this

/* This 
function Car (type, color) {
    this.type = type
    this.color = color
}

Car.prototype.run = function () {
    // context
    const test = () => console.log(this)
    test()
}

const honda = new Car('Honda', 'white')
const mazda = new Car('mazda', 'black')

honda.run()
mazda.run()

*/
/* InnerText and textContent
var headingNode = document.querySelector('h1');
headingNode.innerText = 'Inner text heading'
console.log(headingNode)
*/



// headingNode.style.backgroundColor = 'red'
// headingNode.style.height = '100px'
// headingNode.style.width = '200px'

/* class list
Object.assign(headingNode.style, {
    height : '100px', 
    width : '200px'
})

// headingNode.classList.add('red')

setInterval(() => {
    headingNode.classList.toggle('red')
}, 1000)
*/

// The a can co artribue la name moi co the lay ra duoc


/* Reduce Example
const result = languages.reduce((previousValue, currentValue) => previousValue.concat(currentValue.quantity * 2), [])
console.log(result)
*/


/* My every prototype function
Array.prototype.every2 = function(callback) {
    var output = true
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index])
        if (!result) {
            return false
        } 
        }
    }
    return output 
}

var result = languages.every2(language => language.quantity== 50)
console.log(result )
*/

/* My some function protorype
Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index])
            if (result) {
                return true
            }
        }
    }
    return false
}

var result = languages.some2(function(language) {
    return language.quantity == 10000
} )
console.log(result)
*/ 

/* My filter prototype function
Array.prototype.filter2 = function(callback){
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this); 
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output
}
   
var result = languages.filter2((language, index, array) => language.coin = 10)
console.log(result)
*/



// var language = languages.filter(function(language, index) {
//     console.log(index)
//     return language.name === "Vietnamese"
// })
// console.log(language)

// function courseHandler (language, index, originArray) {
//     language.name = `Ngon ngu: ${language.name}`
//     language.coinText = `Gia: ${language.coin * 2 }`
//     language.index = index 
//     return `<h2>${language.name}</h2>`
// }

// var languageNew = languages.map(courseHandler)
// console.log(languageNew.join(''))

// function courseCoin (accumulator, currentValue) {
//     console.table({
//         "Bien tich tru": accumulator, 
//         "Thanh tien": currentValue.coin*currentValue.quantity, 
//         "Coin cong don": currentValue.coin*currentValue.quantity + accumulator
//     } )
//     return currentValue.coin*currentValue.quantity + accumulator
    
// }

/*  Array lam mang 
var i = 0
var totalCoin = languages.reduce(function (total, course) {
    i++
    console.log(i, total, course)
    return total + course.coin * course.quantity
}) 
console.log(totalCoin)

var numbers = [100,200,300,400,500] 
var total = numbers.reduce(function(total, number) {
    return total + number   
})
console.log(total)
*/

/* Flat array 
var numbers = [1,[2,3], 4, [5,6,7], 8, 9, [10,11]] 
var flatArray = numbers.reduce(function(number, depthItem) {
    return number.concat(depthItem)        
}, [])
console.log(flatArray)

var topics = [
    {
        topics: "Front-end", 
        courses: [
    {
        id: 1, 
        title: 'Html-Css'}, 
    {
        id: 2, 
        title: 'JavaScript'
    }
]}, 
    {
        topics: "Back-end", 
        courses: [
    {
        id: 1, 
        title: 'Java'}, 
    {
        id: 2, 
        title: 'PHP'
    }
]}
]

var flatCourse = topics.reduce(function(course, topic) {
    return course.concat(topic.courses)
}, [])
console.log(flatCourse)

var htmls = flatCourse.map(function(item){
    return item.title + " id: " + item.id
        // `
        //     <div>
        //         <h2>${item.title}</h2>
        //         <p>ID khoa hoc: ${item.id}</p>
        //     </div>
        // `
      
})
console.log(htmls)
console.log(htmls.join(''))
*/

/* INCLUDES
var randomSentence = ["mercedes", "mazda", "bmw"]

var isReal = randomSentence.includes('mazda',-1)
console.log(isReal)
*/

/* Math 
var random = Math.floor(Math.random() * 5 )
console.log(random)

var bonus = [
    1000000000000,200000,30000,400000,500000
]

console.log(Math.min(...bonus))
*/

/* CALL BACK 
function myFunction(param) {
    param(123)
}

function myCallBack(value) {
    console.log('Value: ', value )
}

myFunction(myCallBack)
*/

/* My Map function
Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    var output = [];
    for (var i=0; i< arrayLength; i++) {
        var result = callback(this[i], i);
        
        output.push(result)
    }
    return output;
}

var courses = [
    "Java", 
    "NodeJs", 
    "Ruby", 
    "PHP",
]


var htmls = courses.map2(function(course, index) {
    return `<h2>${course}</h2>`
}); 

console.log(htmls); 
console.log(htmls.join(" "))
*/

/* My ForEach2
Array.prototype.forEach2 = function(callback) {
    for (index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
          
    }
    
}

var courses = [
    "Java", 
    "NodeJs", 
    "Ruby", 
    "PHP",
]


var course2 = courses.forEach2(function(course, index, array) {
    console.log('Khoa hoc: ' + course, index, array)
})

*/

// var myFunction = function (course) {
//     return `<h2>${course}</h2>`
// }
// Callback function 
// var htmls = courses.map(course => 
//     `<h2>${course}</h2>`) 
// console.log(htmls)
// console.log(htmls.join(''))


// function processUserInput(callback) {
// var name = prompt('Please enter your name.');
// callback(name);
// }

// processUserInput(greeting);

