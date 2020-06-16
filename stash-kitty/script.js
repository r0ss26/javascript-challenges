function addStash(event) {
  console.log(event);
  let moustache = document.querySelector('#stash-pic');
  console.log(event.clientX);
  
  moustache.style.left = `${event.clientX - (192/2)}px`;
  moustache.style.top = `${event.clientY}px`;
}

// Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
let catPic = document.querySelector('#cat-pic');
catPic.addEventListener('click', addStash)


// Drag and drop
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id); // Store the moustache ID in the dataTransfer object
}

function onDragOver(event) {
  event.preventDefault(); // Drop events are disables by default
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text'); // Get the id of the moustache when it is dropped
  const dragabbleElement = document.querySelector(`#${id}`) // Use the id to select the node

  dragabbleElement.style.left = `${event.clientX - (192/2)}px`; // Position the moustache
  dragabbleElement.style.top = `${event.clientY}px`;

  event.dataTransfer.clearData(); // Clear the dataTransfer object
}