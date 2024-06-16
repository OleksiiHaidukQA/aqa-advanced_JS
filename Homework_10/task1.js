const Book = require('./Book');
const EBook = require('./EBook');

const firstBook = new Book("Записки экстрасэнса", "Toha Boss", 2024);
firstBook.printInfo();

const secondBook = new Book("Розумний інвестор", "Бенджамін Ґрем", 2019);
secondBook.printInfo();

const books = [
  new Book("Book 1", "Author 1", 2020),
  new Book("Book 2", "Author 2", 2018),
  new Book("Book 3", "Author 3", 2022),
  new EBook("E-Book 1", "E-Author 1", 2020, "PDF")
];

const latestBook = Book.getLatest(books);
console.log(`Latest Book: ${latestBook.name}, ${latestBook.year}`);


const ebook = new EBook("HTML & CSS: Design and Build Web Sites", "Jon Duckett", 2011, "PDF");
ebook.printInfo();


const ebookFromBook = EBook.createEBookFromBook(firstBook, "EPUB");
ebookFromBook.printInfo();