import React from "react";
import styles from "./styles.module.scss";

export const LanguageFilter = ({
  currentValue,
  onChange,
}: {
  currentValue: string;
  onChange: (type: string) => void;
}) => {
  return (
    <div className={styles.filter}>
      <div
        className={`${styles.filter_item} ${currentValue === "All" ? styles.active : ""}`}
        onClick={() => onChange("All")}
      >
        All
      </div>
      <div
        className={`${styles.filter_item} ${currentValue === "Ukrainian" ? styles.active : ""}`}
        onClick={() => onChange("Ukrainian")}
      >
        Ukrainian
      </div>
      <div
        className={`${styles.filter_item} ${currentValue === "English" ? styles.active : ""}`}
        onClick={() => onChange("English")}
      >
        English
      </div>
    </div>
  );
};
