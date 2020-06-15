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
  event.dataTransfer.setData('text/plain', event.target.id);
  // event.currentTarget.style.transform = scale(0.5, 0.5);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');

  const dragabbleElement = document.querySelector(`#${id}`)

  dragabbleElement.style.left = `${event.clientX - (192/2)}px`;
  dragabbleElement.style.top = `${event.clientY}px`;

  

  event.dataTransfer.clearData();
}