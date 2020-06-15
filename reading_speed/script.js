function readingSpeed(text) {
  // Split text up into an array of words
  let words = text.split(" ").map((element) => element.toLowerCase())

  let trackSeenWords = {}

  let uniqueWords = new Set(words);
  uniqueWords.forEach(element => {
    trackSeenWords[element] = false;
  })
  
  let seconds = 0;
  words.forEach(word => {
    if (trackSeenWords[word]) {
      seconds++;
    } else {
      trackSeenWords[word] = true;
      for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase().match(/[a-z]/)) {
          seconds++;
        }
      }
    }
  });

  console.log(seconds)
  return seconds;
}


readingSpeed('Red fish Green fish');