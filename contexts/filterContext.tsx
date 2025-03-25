"use client";

import React, { createContext, useContext, useState } from "react";

interface SearchFilterContextType {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

const SearchFilterContext = createContext<SearchFilterContextType | undefined>(
  undefined
);

export const SearchFilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  return (
    <SearchFilterContext.Provider
      value={{ search, setSearch, category, setCategory }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (!context) {
    throw new Error(
      "useSearchFilter must be used within a SearchFilterProvider"
    );
  }
  return context;
};
