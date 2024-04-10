import React from "react";

import { ShieldIcon } from "../icons/ShieldIcon";
import { ContactButton } from "../components/ContactButton";
import { PropertyList } from "../components/properties/PropertyList";

export default function MyProperties() {
  return (
    <>
      <h1 className="my-6 text-2xl font-bold">My Properties</h1>

      <div className="col-span-1 md:col-span-3 pl-0">
        <PropertyList />
      </div>
    </>
  );
}
