class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.walks = [];
  }

  speak() {
    console.log(`Woof! My name is ${this.name}.`)
  }

  walk(location, distance) {
    this.walks.push(new Walk(location, distance))
  }

  displayWalks() {
    for (let i = 0; i < this.walks.length; i++) {
      console.log(`Walk ${i + 1}: Location - ${this.walks[i].location}, Distance - ${this.walks[i].distance}, Timestamp - ${this.walks[i].time}`)
    }
  }

  totalDistance() {
    let totalDistance = 0
    for (let i = 0; i < this.walks.length; i++) {
      totalDistance += this.walks[i].distance;
    }
    console.log(`${this.name} has walked ${totalDistance} Kms!`)
    return totalDistance
  }
}

class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
    this.time = new Date;
  }
}

dog = new Dog('Jack', 'Canberra')
dog.speak()
dog.walk('park', 5)
dog.walk('shop', 10)

dog.displayWalks();
dog.totalDistance();