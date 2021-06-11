import { BookShelf } from './BookShelf';
import { Iterator } from './Iterator';

export class BookShelfIterator implements Iterator {
  public constructor (
    private bookShelf: BookShelf,
  ) {}

  public hasNext () {
    return true;
  }

  public next () {
    return {};
  }
}