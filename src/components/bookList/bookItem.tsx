import { Book } from "@/types/book";
import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import styles from "./styles.module.scss";
import Modal from "../modals/Modal";
import EditBookModal from "../modals/editBookModal";

const BookItem = ({
  book,
  refetchBooks,
}: {
  book: Book;
  refetchBooks: Function;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditBook = (updatedData: Book) => {
    fetch("/api/books", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }).then(() => {
      setIsModalOpen(false);
      refetchBooks();
    });
  };

  const handleDelete = (id: string | undefined) => {
    fetch("/api/books", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then(() => {
      refetchBooks();
    });
  };

  return (
    <>
      <div key={book.id} className={styles.card}>
        <div className={styles.card_header}>
          <strong>{book.title}</strong>
          <span className={`${styles.genre_tag}`}>{book.genre}</span>
        </div>
        <div className={styles.card_body}>
          <p>{book.author}</p>
          <div className={styles.meta}>
            <span>
              {book.createdAt &&
                formatDistanceToNow(new Date(book.createdAt), {
                  addSuffix: true,
                })}
            </span>
            <button onClick={() => setIsModalOpen(true)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EditBookModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bookData={book}
          onEditBook={handleEditBook}
        />
      </Modal>
    </>
  );
};

export default BookItem;
