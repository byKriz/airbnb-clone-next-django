import Image from "next/image";
import { Categories } from "./components/home/Categories";
import { PropertyList } from "./components/properties/PropertyList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />

        <PropertyList />
    </main>
  );
}
