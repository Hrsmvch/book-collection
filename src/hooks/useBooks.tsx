import { useState, useEffect } from "react";
export const useBooks = (filterValue: string) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/books?filter=${filterValue}`);
      const data = await response.json();
      setBooks(data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch books");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [filterValue]); // Re-fetch when filterValue changes

  return {
    books,
    isLoading,
    error,
    refetchBooks: fetchBooks,
  };
};
