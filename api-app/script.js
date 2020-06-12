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
      let numberOfTheDay = response.contents.nod.numbers;
      console.log(numberOfTheDay);
      
      displayNumberOfTheDay(numberOfTheDay.number)
      displayNumberOfTheDayFacts(numberOfTheDay['general-facts'])

      document.querySelector('#decimalConversion').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.number)
      })

      document.querySelector('#binaryConversion').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.bases.binary.value)
      })

      document.querySelector('#hexConversion').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.bases.hexadecimal.value)
      })

      document.querySelector('#octalConversion').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.bases.octal.value)
      })

      document.querySelector('#romanNumeral').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.numerals.roman.display)
      })

      document.querySelector('#babylonianNumeral').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.numerals.babylonian.display)
      })

      document.querySelector('#chineseNumeral').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.numerals.chinese.display)
      })

      document.querySelector('#numberOfDigits').addEventListener('click', () => {
        console.log(numberOfTheDay.recreational.noofdigits.display);
        
        displayNumberOfTheDay(numberOfTheDay.recreational.noofdigits.display)
      })

      document.querySelector('#sumOfDigits').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.recreational.digitssum.display)
      })

      document.querySelector('#reverseDigits').addEventListener('click', () => {
        displayNumberOfTheDay(numberOfTheDay.recreational.reverse.display)
      })


    })
    // .catch(error => console.log(error));
}

function displayNumberOfTheDay(number) {
  const numberOfTheDayNode = document.querySelector('#number-of-the-day');
  numberOfTheDayNode.innerHTML = number;
}

function displayNumberOfTheDayFacts(facts) {
  const factsList = document.querySelector('#number-of-the-day--facts');
  
  for (let fact in facts) {
    factsList.appendChild(document.createElement('li')).innerHTML = facts[fact].display
  } 
}

getNumberOfTheDay()

