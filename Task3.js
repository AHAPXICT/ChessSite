//1. Work with objects
console.log('------------------level 1------------------')
const user = {
	name: 'anton',
	age: 16,
	email: 'mail.ru'
}

user.email = 'email@mail.ru'
user.isAdmin = true
delete user.age

user.hasOwnProperty('name')
Object.keys(user)
Object.values(user)

for (let prop in user) {
	console.log(prop)
}

console.log('------------------level 2------------------')
const company = {
	address: {
		city: 'Vologda',
		stree: 'Vologodskay ylitsa',
		house: '25'
	}
}
company.address.city = 'New-york'
company.employees = Array.of('Petr', 'Nikita', 'Anton')
console.log(company.employees[0])

//2. Work with mutation and copy
console.log('------------------level 1------------------')
const product = {
	name: 'Milk',
	cost: '15$',
	manufacturer: {
		city: 'SPB',
		employees_count: '10'
	}
}
let product2 = product
product2.name = 'Pineapple'
console.log(product, "\n", product2)

product2 = {...product}
product2.manufacturer.city = 'Moscow'
console.log(product, "\n", product2)

product2 = JSON.parse(JSON.stringify(product))
product2.manufacturer.city = 'SPB'
console.log(product, "\n", product2)

console.log('------------------level 2------------------')
const arr = [1, 2, 3, 4, 5]
arr.slice(2, 2)
arr.unshift(0)
Object.freeze(arr)
//arr[1] = 2

//3. Works with arrays
console.log('------------------level 1------------------')
const array = Array.of(1, 2, 3, 4, 5)
array.push(6)
array.shift()
array.length
array[2]
array[1] = 5

console.log('------------------level 2------------------')
for (let i = 0; i < array.length; i++) {
	console.log(array[i])
}

for (const el of array) {
	console.log(el)
}

let array2 = array.map(i => i + 10)
let array3 = array.filter(i => i % 2 === 0)
array.find(el => el > 50)

array.includes(100)
array.sort((a, b) => a - b)
array.reverse()

//Cycles
console.log('------------------level 1------------------')
for (let i = 0; i <= 10; i++) {
	console.log(i)
}
for (let i = 0 ; i < 10; i++) {
	if (i % 2 === 0) {
		console.log(i)
	}
}

let sum = 0
for (let i = 0 ; i <= 100; i++) {
	sum += i
}
console.log(sum)

let k = 10
while(k > 0) {
	console.log(k)
	k--
}

let j = 1
do
{
	console.log(j)
	j++
} while(j < 5)

console.log('------------------level 2------------------')
for (let i = 0; i < array; i++) {
	if (i > 10) {
		console.log(i)
	}
}
const array5 = array.map(i => i * 2)
Math.max([...array])

for (const key in user) {
	console.log(key)
}

const names = ['petr', 'anton']
for (const name of names) {
	console.log(name)
}

//Combined tasks
console.log('------------------level 1------------------')
let peopleArray = [{name: 'Petr', age: 15},
	{name: 'Anton', age: 32}, {name: 'Nikita', age: 31}];
peopleArray.forEach(person => person.age += 1)

const peopleNames = peopleArray.map(i => {return i.name})
peopleArray = peopleArray.filter(i => i.age > 30)

peopleArray.find(el => el.name === 'Anton')
peopleArray.some(person => person.age < 20)
peopleArray.sort((a, b) => a.age - b.age)

//Additional tasks
console.log('------------------level 1------------------')

const strings = ['This is', 'will be', 'one string']
const firstStirng = strings.join(' ')
console.log(firstStirng.split(' '))

