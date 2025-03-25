import { useSearchFilter } from "@/contexts/filterContext";
import React from "react";

export default function FilterComponent() {
  const { category, setCategory } = useSearchFilter();

  const categories = [
    "all",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="capitalize text-center text-lg appearance-none p-2 outline-none text-white border-2 rounded-md cursor-pointer border-white "
      >
        {categories.map((category) => (
          <option
            key={category}
            className="text-center cursor-pointer p-2 bg-sky-800 capitalize"
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
