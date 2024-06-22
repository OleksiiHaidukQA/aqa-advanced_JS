class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва повинна бути рядком.");
    }
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор повинен бути рядком.");
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Рік видання повинен бути позитивним числом.");
    }
    this._year = value;
  }

  printInfo() {
    console.log(
      `name: ${this.name}, author: ${this.author}, year: ${this.year}`,
    );
  }

  static getLatest(books) {
    if (books.length === 0) return null;
    return books.reduce((latest, book) =>
      book.year > latest.year ? book : latest,
    );
  }
}

module.exports = Book;
