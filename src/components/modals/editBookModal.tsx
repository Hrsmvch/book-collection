import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Book } from "@/types/book";

interface EditBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookData: Book;
  onEditBook: (book: Book) => void;
}

const EditBookModal = ({ bookData, onEditBook }: EditBookModalProps) => {
  const [formData, setFormData] = useState<Book>({
    id: bookData?.id || "",
    title: bookData?.title || "",
    author: bookData?.author || "",
    genre: bookData?.genre || "",
    language: bookData?.language || "Ukrainian",
    status: bookData?.status || "planned",
    createdAt: bookData?.createdAt || new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditBook(formData); 
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h2>Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="to-read">To Read</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditBookModal;
