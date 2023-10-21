"use client";

import { SearchContextType, SearchProviderProps } from "@/models/searchType";
import { useContext, createContext, useState, ReactNode } from "react";

export const SearchContext = createContext<SearchContextType | null>(null);

// provider
export const SearchContextProvider: React.FC<SearchProviderProps> = ({
  children,
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};
