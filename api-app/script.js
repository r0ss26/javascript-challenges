// let request = new XMLHttpRequest();
// request.open('get', 'https://swapi.dev/api/people/1/');
// request.onload = (progressEvent) => {
//   console.log(progressEvent);
  
//   console.log(`Status Code: ${progressEvent.currentTarget.status}, Status Text: ${progressEvent.currentTarget.statusText}`)
//   console.log(JSON.parse(progressEvent.currentTarget.responseText));
//   document.write(progressEvent.currentTarget.responseText)
//   let request2 = new XMLHttpRequest();
//   request2.open('get', 'https://swapi.dev/api/people/2/');
//   request2.onload = progressEvent => {
//     document.write(progressEvent.currentTarget.responseText);
//   }
//   request2.send();
// }
// request.onerror = () => {
//   console.log('A network error occured');
// }
// request.onprogress = (event) => {
//   if (event.lengthComputable) console.log(`${event.loaded} / ${event.total}`)
// }
// request.send();

function getNumberOfTheDay() {
  fetch('https://api.math.tools/numbers/nod')
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
}

getNumberOfTheDay();