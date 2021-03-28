class Employee {
    constructor(name, age, salary) {
        this._name = name
        this._age = age
        this._salary = salary
    }
    checkNumber(value) {
        return typeof value === 'number' && !isNaN(value) ? true : false
    }
    checkString(value) {
        return typeof value === 'string' && value !== '' && value !== ' ' ? true : false
    }
    set name(value) {
        this.checkString(value) ? (this._name = value) : console.log(`Name is not valid.`)
    }
    set age(value) {
        this.checkNumber(value) ? (this._age = value) : console.log('Age should be a number.')
    }
    set salary(value) {
        this.checkNumber(value) ? (this._salary = value) : console.log('Salary should be in numbers.')
    }
    get name() {
        return this._name
    }
    get age() {
        return this._age
    }
    get salary() {
        return this._salary
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary)
        this._lang = lang
    }
    set lang(value) {
        this.checkString(value) ? (this._lang = value) : console.log(`Lang is not valid.`)
    }
    set salary(value) {
        this.checkNumber(value) ? (this._salary = value) : console.log('Salary should be in numbers.')
    }
    get lang() {
        return this._lang
    }
    get salary() {
        return this._salary * 3
    }
}
const programmer1 = new Programmer('Jack', 25, 1500, 'JavaScript')
const programmer2 = new Programmer('Bob', 27, 2000, 'Node.Js')
const programmer3 = new Programmer('John', 30, 2500, 'Phyton')
const programmer4 = new Programmer('Anton', 38, 4500, 'C#')
const programmer5 = new Programmer('Franck', 18, 500, 'C++')


console.log(programmer1)
console.log(programmer2)
console.log(programmer3)
console.log(programmer4)
console.log(programmer5)
