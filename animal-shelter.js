const animalData = require('./animal-data.json')

class AnimalShelter {
  constructor() {
    this.animals = []
  }

  addAnimal(a) {
    this.animals.push(a)
  }

  adopt(a) {
    this.animals(splice(this.animals.indexOf(a), 1))
  }

  getAnimalsBySpecies(s) {
    return this.animals.filter(e => e.species === s)
  }
}

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name
    this.species = species
    this.color = color
    this.hunger = hunger
  }

  greet(g = 'Hi') {
    console.log(`${g}, my name is ${this.name} the ${this.species}.`)
  }

  feed(f = 'food') {
    this.hunger -= 20
    console.log(`Yum, I love ${f}.`)
  }
}

class Cat extends Animal {
  constructor(name, color, hunger) {
    super(name, 'cat', color, hunger)
    this.food = 'fish'
  }

  greet() {
    super.greet('Meow')
  }

  feed() {
    super.feed(this.food)
  }
}

class Dog extends Animal {
  constructor(name, color, hunger) {
    super(name, 'dog', color, hunger)
    this.food = 'kibble'
  }

  greet() {
    super.greet('Woof')
  }

  feed() {
    super.feed(this.food)
  }
}

let shelter = new AnimalShelter()
animalData.forEach((e, i, a) => {
  if (e.species === 'dog')
    shelter.addAnimal(new Dog(e.name, e.color, e.hunger ? e.hunger : 50))
  else if (e.species === 'cat')
    shelter.addAnimal(new Cat(e.name, e.color, e.hunger ? e.hunger : 50))
  else
    shelter.addAnimal(
      new Animal(e.name, e.species, e.color, e.hunger ? e.hunger : 50)
    )
})

shelter.animals.forEach(e => {
  e.greet()
  e.feed()
})
