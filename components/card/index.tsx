"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/cartContext";
import RatingStars from "../rating";
import Button from "../button";
import { CardProps } from "./types";

export default function Card({ product, inCart }: CardProps) {
  const { addToCart, removeFromCart, updateQuantity } = useCart();

  const incrementQuantity = useCallback(() => {
    if (product.quantity != null) {
      updateQuantity(product.id, product.quantity + 1);
    }
  }, [product, updateQuantity]);

  const decrementQuantity = useCallback(() => {
    if (product.quantity && product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  }, [product, updateQuantity, removeFromCart]);

  return (
    <div className="rounded-lg grid grid-cols-4">
      <div className="col-span-1">
        <Image
          alt="product image"
          width={200}
          height={200}
          className="object-contain h-48 w-full"
          src={product.image}
        />
      </div>
      <div className="p-4 flex flex-col col-span-3 gap-y-2">
        <p className="text-2xl font-bold">{product?.title}</p>
        <p>{product?.description}</p>
        <div className="flex  gap-x-2">
          <RatingStars rating={product.rating?.rate} />
          <p>{product.rating?.count}</p>
        </div>
        <p className="text-lg font-semibold text-gray-700">${product.price}</p>
        {inCart ? (
          <div className="flex gap-x-2 items-center">
            <Button onClick={() => removeFromCart(product.id)} variant="red">
              Remove
            </Button>
            <div className="text-xl  rounded-3xl border-2 p-2 border-black font-bold flex gap-x-2 items-center">
              <Button
                variant="icon"
                onClick={decrementQuantity}
                className="cursor-pointer hover:scale-110"
              >
                <Minus />
              </Button>
              <p>{product.quantity}</p>
              <Button
                variant="icon"
                onClick={incrementQuantity}
                className="cursor-pointer hover:scale-110"
              >
                <Plus />
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => addToCart(product)}>Add to cart</Button>
        )}
      </div>
    </div>
  );
}
