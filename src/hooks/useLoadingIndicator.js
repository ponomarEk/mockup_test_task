import React, { createContext, useContext, useState } from "react";

const LoadingIndicatorContext = createContext();

export const LoadingIndicatorProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartLoading = () => {
    setIsLoading(true);
  };

  const handleStopLoading = () => {
    setIsLoading(false);
  };

  const values = { isLoading, handleStartLoading, handleStopLoading };

  return (
    <LoadingIndicatorContext.Provider value={values}>
      {children}
    </LoadingIndicatorContext.Provider>
  );
};

const useLoadingIndicator = () => useContext(LoadingIndicatorContext);

export { useLoadingIndicator };
