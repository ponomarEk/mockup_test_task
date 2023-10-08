import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const values = { isLoading, startLoading, stopLoading };

  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
};

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
