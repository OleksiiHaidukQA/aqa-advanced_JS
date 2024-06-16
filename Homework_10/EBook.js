const Book = require('./Book');

class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this.fileFormat = fileFormat;
    this.auth = "bearer";
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу повинен бути рядком.');
    }
    this._fileFormat = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`fileFormat: ${this.fileFormat}, auth: ${this.auth}`);
  }

  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.name, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;