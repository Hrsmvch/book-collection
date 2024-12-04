"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import BookList from "@/components/bookList";
import AddBookModal from "@/components/modals/addBookModal";
import { Book } from "@/types/book";
import Modal from "@/components/modals/Modal";
import { useBooks } from "../../hooks/useBooks";
import { LanguageFilter } from "@/components/languageFilter";

const HomePage = () => {
  const [filterValue, setFilterValue] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { books, isLoading, error, refetchBooks } = useBooks(filterValue);

  useEffect(() => {
    console.log("Fetching books with filter: ", filterValue);
    refetchBooks();
  }, [filterValue]);

  const handleFilterChange = (type: string) => {
    setFilterValue(type);
  };

  const handleAddBook = (newBook: Book) => {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then(() => {
      setIsModalOpen(false);
      refetchBooks();
    });
  };

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error_content}>Error: {error}</div>;
  }

  return (
    <div className={styles.page_content}>
      <div className={styles.page_heading}>
        <LanguageFilter
          currentValue={filterValue}
          onChange={handleFilterChange}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.add_book_btn}
        >
          + Add Book
        </button>
      </div>

      <BookList books={books} refetchBooks={refetchBooks} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddBookModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddBook={handleAddBook}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
