//lab6 JavaScript file
book1 = {
author: "William Shakespeare",
title : "The Tempest",
genre : "Historical Fiction"
};

book2 = {
author: "Stephen King",
title : "The Shining",
genre : "Horror"
};

book3 = {
author: "Anne Frank",
title : "The Diary of Anne Frank",
genre : "Non-Fiction"
};

var bookArray = new Array();
var titleArray = new Array();
var authorArray = new Array();
var genreArray = new Array();

bookArray[0] = book1;
bookArray[1] = book2;
bookArray[2] = book3;

function addBooks(intitle, inauthor, ingenre, books) {
  var x = 0;
  for(x = 0; x < 3 ; x+=1){
    intitle[x] = prompt("Please enter a book title: ","");
    inauthor[x] = prompt("Please enter the book's author: ","");
    ingenre[x] = prompt("Please enter a book's genre: ","");
  }
  book4 = {
  author: inauthor[0],
  title : intitle[0],
  genre : ingenre[0]
  };
  book5 = {
    author: inauthor[1],
    title : intitle[1],
    genre : ingenre[1]
  };
  book6 = {
    author: inauthor[2],
    title : intitle[2],
    genre : ingenre[2]
  };
  books[3] = book4;
  books[4] = book5;
  books[5] = book6;
  console.log(books);
  return books;
}
function displayRecommendations(books){
var bookEntry = document.createElement("ul");
for(var x = 0 ; x < books.length ; x+=1){
  var bookItem = document.createElement("li");
  bookItem.innerHTML = 'Book title: '.concat(books[x].title, ' Book Author: ', books[x].author, ' Book genre: ', books[x].genre);
  bookEntry.appendChild(bookItem);
}
document.getElementById("bookList").appendChild(bookEntry);
}

addBooks(titleArray, authorArray, genreArray, bookArray);
//document.write(bookArray[0].title);
displayRecommendations(bookArray); //null?
