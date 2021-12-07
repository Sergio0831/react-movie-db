import React, { useState, useContext } from "react";

import useFetch from "./useFetch";
// make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  const value = {
    isLoading,
    error,
    movies,
    query,
    setQuery
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
