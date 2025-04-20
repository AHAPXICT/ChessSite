//Task 1
console.log(12 + '3')
console.log('5' - 2)
console.log(true + 1)
console.log(undefined + 10)
console.log(null == 0)

//Task 2
console.log(parseFloat('123.8'))
console.log((255).toString(16))
console.log(Boolean(0))

//Task 3
console.log(5 == '5')
console.log(5 === '5')
console.log(0 == false)
console.log('' == false)

//Task 4
//a
let a = 15
if (a % 2 === 0) {
	console.log('Number is even')
}
else {
	console.log('Number is odd')
}
if (a % 5 === 0) {
	console.log('Number is divided by 5')
}
if (a > 10) {
	console.log('Number more than 10')
}

//b
let number1 = 10
let number2 = 25
if (number1 > number2) {
	console.log('Number1 more than number2')
}
else if (number1 < number2) {
	console.log('Number1 less than number2')
}
else {
	console.log('Number1 equal number2')
}

//c
let temperature = -5

if (temperature < 0) {
	console.log('Мороз')
}
else if (temperature >= 0 && temperature <= 15) {
	console.log('Прохладно')
}
else if (temperature >= 16 && temperature < 25) {
	console.log('Тепло')
}
else {console.log('Жара')}

//d
let value = -8
if (value % 2 === 0) {
	if (value > 0) {
		console.log('Number is even and positive')
	}
	else if (value < 0) {
		console.log('Number is odd and positive')
	}
}
else {
	console.log('Number is odd')
}

//Task 5
let price = 1000
let discount = price > 500 ? 10 : 0

//Task 6
console.log(0 || '' || NaN)
console.log(1 && 'hello' && true)
console.log(!'' && !0)

//Task 7
let num = 12
if (num === 12) {
	console.log("Число 12")
}

let result = 10 + 5 / 2
console.log(result)

console.log(5 > '14')



