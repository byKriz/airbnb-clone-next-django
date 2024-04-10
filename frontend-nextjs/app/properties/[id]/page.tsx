import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";

export default function Property() {
  return (
    <>
      <section className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <img
          src="/place_img.webp"
          alt="Property Image"
          className="object-cover w-full h-full"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <div>
            <h1 className="mb-4 text-2xl">Property Name</h1>
            <span className="mb-6 block text-lg text-gray-600">
              5 guests - 1 bedroom - 5 beds - 1 private bath
            </span>
          </div>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            {/* <Image
              src={"/landlord.webp"}
              alt="landlord"
              width={70}
              height={70}
            /> */}
            <img
              src="/landlord.webp"
              alt="landlord"
              className="h-[50px] w-[50px] object-cover rounded-full"
            />
            <div className="flex flex-col justify-center">
              <p className="font-semibold">Hosted by Francine</p>
              <p className=" text-black/70">11 years hosting</p>
            </div>
          </div>

          <hr />

          <div className="py-6">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              eius dignissimos veniam laudantium, nobis doloremque laborum sed
              nihil, sit quod dolore saepe quia ex consequuntur, architecto
              corrupti expedita porro deleniti.
            </p>
          </div>
        </div>
        <ReservationSideBar />
      </section>
    </>
  );
}
