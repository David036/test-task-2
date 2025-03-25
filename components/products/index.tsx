"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchFilter } from "@/contexts/filterContext";
import { fetchProducts } from "./action";
import Card from "../card";
import { IProduct } from "./types";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const { search, category } = useSearchFilter();

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        console.log(data, "data");

        if (!data) {
          throw new Error("Failed to fetch products.");
        }

        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearch) ||
          product.description.toLowerCase().includes(lowerSearch)
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    return filtered;
  }, [search, category, products]);

  return (
    <div className="pt-40 p-10">
      <div className="grid grid-cols-1 gap-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {!loading && !error && filteredProducts.length === 0 && (
          <p>No products available.</p>
        )}
        <div></div>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
