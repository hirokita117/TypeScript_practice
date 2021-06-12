import { Book } from "./Book";
import { BookShelf } from "./BookShelf";

const bookShelf = new BookShelf(4);
bookShelf.appendBook(new Book("世界の中心で愛を叫ぶ"));
bookShelf.appendBook(new Book("私の頭の中の消しゴム"));
bookShelf.appendBook(new Book("少林サッカー"));
bookShelf.appendBook(new Book("タイタニック"));

const iterator = bookShelf.iterator();
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(book.getName());
}
