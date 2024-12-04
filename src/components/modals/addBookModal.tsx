import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Book } from "@/types/book";
import GenreSelect from "../formsElement/GenreSelect";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: Book) => void;
}

const AddBookModal = ({ onAddBook }: AddBookModalProps) => {
  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    genre: "Fiction",
    language: "Ukrainian",
    status: "to-read",
    createdAt: new Date().toISOString(),
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeGenre = (value: string) => {
    setFormData((prev: any) => ({ ...prev, genre: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook(formData); 
  };

 

  return (
      <div className={styles.modal_content}>
        <h2>Add New Book</h2>
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
          
          <GenreSelect selectedGenre={formData.genre} onChange={handleChangeGenre} />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="to-read">To Read</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
  );
};

export default AddBookModal;
