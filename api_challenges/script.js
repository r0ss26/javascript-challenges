function makeGetRequest(url, callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => console.log(request.readyState)
  request.open("GET", url);
  request.send();
  request.onload = (res) => callback(res.currentTarget.responseText)
}

makeGetRequest('https://pokeapi.co/api/v2/pokemon/ditto', (data) => {
  data = JSON.parse(data)
  console.log(data)
})