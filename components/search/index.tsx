"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { useSearchFilter } from "@/contexts/filterContext";

export default function SearchComponent() {
  const { search, setSearch } = useSearchFilter();

  return (
    <div className="border-white border-2 p-2 rounded-md flex items-center">
      <Search color="white" />
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-2 text-white outline-none"
      />
      <button
        onClick={() => setSearch("")}
        className="tetx-white cursor-pointer"
      >
        <X color="white" />
      </button>
    </div>
  );
}
