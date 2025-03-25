"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "@/contexts/cartContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SearchComponent from "../search";
import FilterComponent from "../filter";

export default function Header() {
  const { items } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="py-10 px-6 bg-sky-800 fixed top-0 w-full z-100 flex justify-between items-center">
      <Link
        className="text-3xl font-bold hover:underline transition text-white"
        href="/"
      >
        Home
      </Link>
      {pathname === "/" && (
        <div className="flex gap-x-4">
          <SearchComponent />
          <FilterComponent />
        </div>
      )}

      <div
        className="transition group cursor-pointer"
        onClick={() => router.push("/cart")}
      >
        <div className="relative ">
          <Image
            className="group-hover:scale-110"
            alt="cart"
            src="icons/cart.svg"
            width={70}
            height={70}
          />
          {items.length !== 0 && (
            <p className="group-hover:scale-110 absolute font-bold text-white z-2 text-lg">
              {items.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
