import React from "react";

import { DEFAULT_PAGE } from "../../constans";

import { useCharacters } from "../hooks/useCharacters";

import * as styles from "../styles/components/Pagination.module.css";

const Pagination = ({ totalPages }) => {
  const { handleNextPage, handlePrevPage, page } = useCharacters();
  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={handlePrevPage}
        disabled={page === DEFAULT_PAGE}
      >
        Prev
      </button>
      <span className={styles.pageNumber}>
        Page {page} of {totalPages}
      </span>
      <button
        className={styles.paginationButton}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
