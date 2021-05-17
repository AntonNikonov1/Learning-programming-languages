const peopleList = []

class Person {
  constructor(name, age, id) {
    this.name = name
    this.age = age
    this.id = id
  }

  addPerson() {
    peopleList.push({
      name: this.name,
      age: this.age,
      id: this.id
    })
  }

  deletePerson() {
    const removeIndex = peopleList.findIndex(person => person.id === this.id)

    if(removeIndex !== -1) {
      peopleList.splice(removeIndex, 1)
    }
  }
}

const anton = new Person('Anton', 19, 1)
const igor = new Person('Igor', 29, 2)

anton.addPerson()
igor.addPerson()

console.log(peopleList)

igor.deletePerson()

console.log(peopleList)