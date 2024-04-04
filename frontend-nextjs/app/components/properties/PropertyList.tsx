import { PropertyListItem } from "./PropertyListItem";

export function PropertyList() {
  return (
    <section className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
    </section>
  );
}
