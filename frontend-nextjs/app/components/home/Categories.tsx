import Image from "next/image";

import CategoryItem from "./CategoryItem";
import { Category } from "@/app/enums/Category";

export function Categories() {
  return (
    <section className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      {/* Terminar mas tarde el resto de iconos */}
      <CategoryItem category={Category.ARTIC} title="Artic" />
      <CategoryItem category={Category.POOLS} title="Amazing Pools" />
      <CategoryItem category={Category.BEACH} title="Beach" />
      <CategoryItem category={Category.NATIONAL_PARKS} title="National Parks" />
    </section>
  );
}
