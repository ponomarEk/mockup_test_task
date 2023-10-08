import React, { createContext, useContext, useState } from "react";

import { DEFAULT_PAGE } from "../../constans";
import useLoading from "./useLoadingData";

const CharactersContext = createContext({
  page: DEFAULT_PAGE,
  searchText: "",
  gender: "",
  status: "",
});

export const CharactersProvider = ({ children }) => {
  const { startLoading } = useLoading();
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    gender: "",
    status: "",
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    startLoading();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    startLoading();
  };

  const handleSearch = (value) => {
    setSearchText(value);
    startLoading();
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    startLoading();
  };

  const resetPage = () => {
    setPage(DEFAULT_PAGE);
  };

  const values = {
    page,
    searchText,
    gender: filters.gender,
    status: filters.status,
    resetPage,
    handleFilterChange,
    handleNextPage,
    handlePrevPage,
    handleSearch,
  };

  return (
    <CharactersContext.Provider value={values}>
      {children}
    </CharactersContext.Provider>
  );
};

const useCharacters = () => useContext(CharactersContext);
export { useCharacters };
