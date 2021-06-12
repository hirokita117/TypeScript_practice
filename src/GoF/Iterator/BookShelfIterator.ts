import { BookShelf } from "./BookShelf";
import { Iterator } from "./Iterator";

export class BookShelfIterator implements Iterator {
  private bookShelf: BookShelf;
  private index: number;

  public constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  public hasNext(): boolean {
    return this.index < this.bookShelf.getLength();
  }

  public next() {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
