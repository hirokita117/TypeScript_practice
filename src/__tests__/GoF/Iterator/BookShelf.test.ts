import { Book } from "../../../GoF/Iterator/Book";
import { BookShelf } from "../../../GoF/Iterator/BookShelf";

describe("BookShelf test", () => {
  describe("appendBook", () => {
    test("BookインスタンスがBookShelf.booksに格納され、正常に終了する", () => {
      const bookShelfSize = 5;
      const bookShelf = new BookShelf(bookShelfSize);
      for (let index = 0; index < bookShelfSize; index++) {
        expect(
          bookShelf.appendBook(new Book(`シリーズ映画 part${index}`))
        ).toBeUndefined();
      }
    });
    test("規定されたBookShelf.booksよりも多いBookインスタンスが格納されて、異常終了する", () => {
      const bookShelfSize = 2;
      const bookShelf = new BookShelf(bookShelfSize);
      expect(
        bookShelf.appendBook(new Book("この映画は格納される part1"))
      ).toBeUndefined();
      expect(
        bookShelf.appendBook(new Book("この映画は格納される part2"))
      ).toBeUndefined();
      expect(() => {
        bookShelf.appendBook(new Book("この映画は格納されない"));
      }).toThrow(Error);
    });
  });
});
