"use client";
import React, { Dispatch, SetStateAction } from "react";

import Image, { StaticImageData } from "next/image";

interface iButtonProps {
  handlerButton?: ((params: string) => void) | any;
  provider: string;
  image: StaticImageData | string;
  description: string;
}

export default function LoginButton({
  handlerButton,
  provider,
  image,
  description,
}: iButtonProps) {
  return (
    <button
      className="p-4 my-4 flex justify-center items-center gap-2 dark:bg-white text-black rounded-lg"
      onClick={
        handlerButton === undefined ? undefined : () => handlerButton(provider)
      }
    >
      <Image src={image} alt={`${image}`} width={30} height={30}></Image>
      <span>{description}</span>
    </button>
  );
}
