import { Aggregate } from './Aggregate';
import { BookShelfIterator } from './BookShelfIterator';

export class BookShelf implements Aggregate {
  public iterator() {
    return new BookShelfIterator(this);
  }
}