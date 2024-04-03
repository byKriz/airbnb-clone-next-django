import Image from "next/image";
import React from "react";

import { Category } from "@/app/enums/Category";

interface Props {
  category: Category;
  title: string;
}

export default function CategoryItem({ category, title }: Props) {
  return (
    <article className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
      <Image
        src={`/icons/${category}_icon.jpg`}
        alt={`Category - ${category}`}
        width={30}
        height={30}
      />
      <span>{title}</span>
    </article>
  );
}
