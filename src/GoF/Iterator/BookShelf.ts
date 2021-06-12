import { Aggregate } from "./Aggregate";
import { Book } from "./Book";
import { BookShelfIterator } from "./BookShelfIterator";

export class BookShelf implements Aggregate {
  private last = 0;
  private books: Book[] = [];

  public constructor(maxSize: number) {
    this.books = new Array(maxSize);
  }

  public getBookAt(index: number): Book {
    return this.books[index];
  }

  public appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  public getLength(): number {
    return this.last;
  }

  public iterator(): BookShelfIterator {
    return new BookShelfIterator(this);
  }
}
