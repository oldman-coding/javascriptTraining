const languages = [
    {   id: 1, 
        name: "english", 
        coin: 10, 
        quantity: 3
    }, 
    {
        id: 2, 
        name: "Vietnamese", 
        coin: 10, 
        quantity: 2
    }, 
    {
        id: 3, 
        name: "Chinese", 
        coin: 10, 
        quantity: 3 

    }, 
    {
        id: 4, 
        name: "Vietnamese", 
        coin: 10, 
        quantity: 50
    }, 

    {
        id: 5, 
        name: "Vietnamese", 
        coin: 10, 
        quantity: 10
    }

]

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










