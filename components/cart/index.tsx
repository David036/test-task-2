"use client";

import React from "react";
import { useCart } from "@/contexts/cartContext";
import Card from "../card";
import Button from "../button";

export default function Cart() {
  const { items, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  return (
    <div className="py-40 px-10">
      {items.map((product, index) => (
        <Card inCart key={index} product={product} />
      ))}
      <div className="fixed bottom-0 w-full left-0 p-10 bg-sky-800 flex items-center justify-between gap-x-2">
        <p className="text-2xl text-white font-bold">
          Total:{total.toFixed(2)}$
        </p>
        <Button onClick={clearCart} variant="red">
          Clear
        </Button>
      </div>
    </div>
  );
}
