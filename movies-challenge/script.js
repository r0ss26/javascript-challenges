let movies = [{
  "title": "The Shawshank Redemption",
  
  "duration": "PT142M",
  
  "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
  
  "ratings": [],
  
  "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
  
  },  {
  "title": "The Godfather",
  
  "duration": "PT175M",
  
  "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
  
  "ratings": [],
  
  "watchlist": [62289, 66380, 34139, 6146]
  
  },  {
  "title": "The Dark Knight",
  
  "duration": "PT152M",
  
  "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
  
  "ratings": [],
  
  "watchlist": [51417, 62289, 6146, 71389, 7001]
  
  },  {
  "title": "Pulp Fiction",
  
  "duration": "PT154M",
  
  "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
  
  "ratings": [],
  
  "watchlist": [7001, 9250, 34139, 6146]
  
  },  {
  "title": "Schindler's List",
  
  "duration": "PT195M",
  
  "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
  
  "watchlist": [15291, 51417, 7001, 9250, 93707]
  
  }];
  
  let users = [{
  "userId": 15291,
  
  "email": "Constantin_Kuhlman15@yahoo.com",
  
  "friends": [7001, 51417, 62289]
  
  },    {
  "userId": 7001,
  
  "email": "Keven6@gmail.com",
  
  "friends": [15291, 51417, 62289, 66380]
  
  },    {
  "userId": 51417,
  
  "email": "Margaretta82@gmail.com",
  
  "friends": [15291, 7001, 9250]
  
  },    {
  "userId": 62289,
  
  "email": "Marquise.Borer@hotmail.com",
  
  "friends": [15291, 7001]
  
  }];

let topWatchlistedMoviesAmongFriends = user => {
  // Find the users friends
  let userObj;
  users.forEach(currUser => {
    if (currUser.userId === user) userObj = currUser;
  });
  let friends = userObj.friends
  
  // Count which movies they have watchlisted
  let count = {};
  movies.forEach(movie => {
    movie.watchlist.forEach(watchlistedBy => {
      if (friends.includes(watchlistedBy)) {
        if (count[movie.title]) {
          count[movie.title]++
        } else {
          count[movie.title] = 1
        }
      }
    })
  })

  // Convert the object into a sorted array of movie titles
  let arr = Object.keys(count)
  // If the count is equal, order alphabetically, otherwise order by the count
  arr.sort((a,b) => {
    if (count[a] - count[b] === 0) {
      return a.localeCompare(b)
    } else {
      return count[b] - count[a]
    }
  })

  return arr.slice(0, 4)
}
  
console.log(topWatchlistedMoviesAmongFriends(15291))