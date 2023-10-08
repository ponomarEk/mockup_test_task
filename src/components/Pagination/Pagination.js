import React from "react";

import { DEFAULT_PAGE } from "../../../constants";

import { useCharacters } from "../../hooks";

import * as styles from "./Pagination.module.css";

const Pagination = ({ totalPages }) => {
  const { handleClickNextPage, handleClickPrevPage, page } = useCharacters();

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={handleClickPrevPage}
        disabled={page === DEFAULT_PAGE}
      >
        Prev
      </button>
      <span className={styles.pageNumber}>
        Page {page} of {totalPages}
      </span>
      <button
        className={styles.paginationButton}
        onClick={handleClickNextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
