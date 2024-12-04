import React from "react";
import { Book } from "@/types/book";
import { formatDistanceToNow } from "date-fns";
import styles from "./styles.module.scss";
import BookItem from "./bookItem";

const sections = [
  { title: "To Read", status: "to-read" },
  { title: "In Progress", status: "in-progress" },
  { title: "Completed", status: "completed" },
];

const BookList = ({ books, refetchBooks }: { books: Book[], refetchBooks: Function }) => {
  return (
    <div className={styles.book_list}>
      {sections.map(({ title, status }) => {
        const filteredBooks = books.filter((book) => book.status === status);

        return (
          <div key={status} className={styles.section}>
            <div className={styles.section_header}>
              <h2>{title}</h2>
              <span className={styles.count}>{filteredBooks.length}</span>
            </div>

            <div className={styles.cards}>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookItem key={book.id} book={book} refetchBooks={refetchBooks} />
                ))
              ) : (
                <p className={styles.no_books}>No books in this category.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
