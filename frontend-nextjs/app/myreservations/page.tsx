import React from "react";
import { MyreservationItem } from "../components/myReservation/MyreservationItem";

export default function MyReservationsPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="text-2xl font-bold my-6">My Reservations</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MyreservationItem
          image={"/test_house.webp"}
          alt={"Propiedad reservada"}
          propertyName={"Property Name"}
        />
        <MyreservationItem
          image={"/test_house.webp"}
          alt={"Propiedad reservada"}
          propertyName={"Property Name"}
        />
        <MyreservationItem
          image={"/test_house.webp"}
          alt={"Propiedad reservada"}
          propertyName={"Property Name"}
        />
      </section>
    </main>
  );
}
