const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._AC_SY400_.jpg'
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
  }
];

let title = document.createElement('h1');
title.innerText = 'My Book List';
let body = document.querySelector('body');

body.appendChild(title);
let bookList = document.createElement('ul')
body.appendChild(bookList)

books.forEach(book => {
  // let bookDiv = document.createElement('div');
  let bookLi = document.createElement('li');
  let img = document.createElement('img');
  img.src = book.url;
  bookLi.innerHTML = `Title: ${book.title}, author: ${book.author}, read: ${book.alreadyRead}`;
  bookLi.appendChild(img);
  bookList.appendChild(bookLi);
  if (book.alreadyRead) {
    bookLi.style.color = 'green'
  }
})