import React from "react";
import { ButtonProps } from "./types";

export default function Button({
  variant = "sky",
  children,
  ...props
}: ButtonProps) {
  let buttonClasses = "";

  switch (variant) {
    case "red":
      buttonClasses =
        "py-2 px-3 bg-red-400 text-white border-2 border-red-400 hover:bg-white hover:text-red-400";
      break;
    case "sky":
    default:
      buttonClasses =
        "py-2 px-3 bg-sky-800 text-white border-2 border-sky-800 hover:bg-white hover:text-sky-800";
      break;
    case "icon":
      buttonClasses = "hover:scale-110";
      break;
  }

  return (
    <button
      {...props}
      className={`rounded-3xl  max-w-48 font-bold w-full cursor-pointer transition ${buttonClasses}`}
    >
      {children}
    </button>
  );
}
