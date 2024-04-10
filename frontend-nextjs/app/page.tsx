import Image from "next/image";
import { Categories } from "./components/home/Categories";
import { PropertyList } from "./components/properties/PropertyList";

export default function Home() {
  return (
    <>
      <Categories />
      <PropertyList />
    </>
  );
}
