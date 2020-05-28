function Movie(title, duration, rating) {
  this.title = title
  this.duration = duration
  let validRatings = ['G', 'PG', 'PG-13', 'R', 'NR']
  if (validRatings.includes(rating)) {
    this.rating = rating
  } else {
    this.rating = 'NR'
  }
  this.userWatchCount = {}
  // this.totalWatchCount = Object.values(this.userWatchCount).reduce(((total, num) => total + num), 0) 
  this.totalWatchCount = 0
  this.printMovie = () => {
    console.log(`${this.title}, ${this.duration} minutes, rated ${this.rating}. Watched ${this.totalWatchCount} times.`)
  }
  this.watch = (user) => {
    if (this.userWatchCount[user.email]) {
      this.watchCount[user.email]++
    } else {
      this.userWatchCount[user.email] = 1
    }
    this.totalWatchCount++
  }
}

let users = []

function User(email, name) {
  if (users.includes(email)) {
    this.email = null
  } else {
    this.email = email
    users.push(this.email)
  }
  this.name = name
}

let me = new User('rossbaker@gmail.com', 'Ross Baker')
let me2 = new User('rossbaker@gmail.com', 'Ross Baker')
let john = new User('john@gmail.com', 'John')
let john2 = new User('john@gmail.com', 'John')

let citizenKane = new Movie('Citizen Kane', 120, 'PGgsdfsd')

citizenKane.watch(me)
citizenKane.watch(john)

citizenKane.printMovie()