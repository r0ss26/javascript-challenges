function makeGetRequest(url, callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => console.log(request.readyState)
  request.open("GET", url);
  request.send();
  request.onload = (res) => callback(res.currentTarget.responseText)
}

// makeGetRequest('https://pokeapi.co/api/v2/pokemon/ditto', (data) => {
//   data = JSON.parse(data)
//   console.log(data)
// })

function getPokemonStats(pokemonName, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    request.onload = (response) => {
      if (request.status >= 200 && request.status < 400) {
        let stats = JSON.parse(response.currentTarget.responseText).stats
        callback(stats)
      } else {
        console.log('No pokemon data found')
      }
    }
    request.send()
}


getPokemonStats('pikachu', data => console.log(data))