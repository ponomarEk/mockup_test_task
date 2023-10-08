import React, { createContext, useContext, useState } from "react";

import { DEFAULT_PAGE } from "../../constants";

const CharactersContext = createContext({
  page: DEFAULT_PAGE,
  searchText: "",
  gender: "",
  status: "",
});

export const CharactersProvider = ({ children }) => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    gender: "",
    status: "",
  });

  const handleClickNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleClickPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleClickSearch = (value) => {
    setSearchText(value);
  };

  const handleChangeFilter = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleResetPage = () => {
    setPage(DEFAULT_PAGE);
  };

  const handleResetAllFilters = () => {
    handleResetPage();
    setFilters({
      gender: "",
      status: "",
    });
    setSearchText("");
  };

  const values = {
    page,
    searchText,
    gender: filters.gender,
    status: filters.status,
    handleResetPage,
    handleChangeFilter,
    handleClickNextPage,
    handleClickPrevPage,
    handleClickSearch,
    handleResetAllFilters,
  };

  return (
    <CharactersContext.Provider value={values}>
      {children}
    </CharactersContext.Provider>
  );
};

const useCharacters = () => useContext(CharactersContext);
export { useCharacters };
