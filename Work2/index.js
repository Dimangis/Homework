function sum(n) {
  sum.result += n;
  return sum;
}
sum.result = 0;
console.info(sum(2)(3)(5).result);

let array = [99, 11, 5, 1, 3, 75, 0, -4, 40, 1]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const buff = arr[arr.length - 1]
  const leftlist = []
  const rightlist = []

  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] < buff) {
      leftlist.push(arr[i])
    } else {
      rightlist.push(arr[i])
    }
  }

  return [...quickSort(leftlist), buff, ...quickSort(rightlist)]
}

console.log(quickSort(array))


// TASK1
const colors = ['GREEN', 'RED', 'YELLOW', 'BLUE']
let elipse = document.querySelector("#elipse")
let nameOfColor = document.querySelector("#name-color")
let i = 0

function changeBackground(color) {
  elipse.style.background = color;
}

function changeColors(colorArr) {
  if (i < colorArr.length - 1) {
    i++
    changeBackground(colorArr[i])
  } else {
    i = 0
    changeBackground(colorArr[i])
  }
  promise1 = new Promise(function (resolve, reject) {
    if (nameOfColor.innerHTML != colors[i]) {
      resolve(
        nameOfColor.innerHTML = colorArr[i]
      )
    } else {
      reject(
        nameOfColor.innerHTML = colorArr[0]
      )
    }
  })
}

let timerId = setTimeout(function tick() {
  changeColors(colors)
  timerId = setTimeout(tick, 2000);
}, 2000);


// TASK2
let x = document.getElementById("number1")
let y = document.getElementById("number2")
let s1 = document.getElementById("number1_sum")
let s2 = document.getElementById("number2_sum")
let m1 = document.getElementById("number1_minus")
let m2 = document.getElementById("number2_minus")
let mu1 = document.getElementById("number1_multiply")
let mu2 = document.getElementById("number2_multiply")
let d1 = document.getElementById("number1_division")
let d2 = document.getElementById("number2_division")
const number1 = [s1, m1, mu1, d1]
const number2 = [s2, m2, mu2, d2]


let timeoutID
x.addEventListener("input", changeTextX)
y.addEventListener("input", changeTextY)
// y.addEventListener("input", changeText(y))

function changeTextX() {
  clearTimeout(timeoutID)
  timeoutID = setTimeout(printText(number1, x.value), 0)
}

function changeTextY() {
  clearTimeout(timeoutID)
  timeoutID = setTimeout(printText(number2, y.value), 0)
}

function printText(arr, value) {
  for(let i = 0; i < arr.length; ++i){
    arr[i].innerHTML = value
  }
}

let btn = document.getElementById("calc")

async function calculate() {  
  const num1 = Number(x.value)
  const num2 = Number(y.value)
  let sumfunc = new Promise((resolve, reject) => {    
    resolve(sum = num1 + num2 )   
  })  
  
  let minusfunc = new Promise((resolve, reject) => {    
    resolve(minus = num1 - num2 )
  })  

  let multiplyfunc = new Promise((resolve, reject) => {    
    resolve(multiply = num1 * num2 )
  })  

  let divisionfunc = new Promise((resolve, reject) => {    
    resolve(division = num1 / num2 )
  }) 

  sumfunc.then(document.getElementById("answer_sum").innerHTML = sum)
  minusfunc.then(document.getElementById("answer_minus").innerHTML = minus)
  multiplyfunc.then(document.getElementById("answer_multiply").innerHTML = multiply)
  divisionfunc.then(document.getElementById("answer_division").innerHTML = division)
}