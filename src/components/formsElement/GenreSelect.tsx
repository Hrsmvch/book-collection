import React from "react";
import styles from "./styles.module.scss";
import { Genre } from "@/types/book";

interface GenreSelectProps {
  selectedGenre: Genre;
  onChange: Function;
}

const GENRE_OPTIONS: Genre[] = [
  "Fiction",
  "Non-Fiction",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Biography",
  "Historical",
  "Romance",
];

const GenreSelect: React.FC<GenreSelectProps> = ({ selectedGenre, onChange }) => {
  return (
      <select
        key={selectedGenre}
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onChange(e.target.value as Genre)}
        className={styles.select}
      >
        <option value="" disabled>
          -- Choose Genre --
        </option>
        {GENRE_OPTIONS.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
  );
};

export default GenreSelect;
