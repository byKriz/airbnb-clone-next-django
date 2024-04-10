import React from "react";

interface Props {
  image: string;
  alt: string;
  propertyName: string;
}

export function MyreservationItem({ image, alt, propertyName }: Props) {
  return (
    <article className="p-5 flex flex-col gap-4 shadow-md border border-gray-300 rounded-xl mt-0">
      <div className="col-span-1">
        <div className="relative overflow-hidden aspect-square rounded-xl">
          <img
            src={image}
            alt={alt}
            className="w-full h-full hover:scale-110 transition duration-300 ease-in-out object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="col-span-1 md:col-span-3 space-y-2">
          <h2 className="mb-4 text-xl font-bold">{propertyName}</h2>
          <p>
            <strong>Check in date:</strong> 04/10/2024
          </p>
          <p>
            <strong>Check out date:</strong> 04/16/2024
          </p>
          <p>
            <strong>Number of nights:</strong> 6
          </p>
          <p>
            <strong>Total price:</strong> $550
          </p>
        </div>

        <a
          href="#"
          className="mt-6 text-center inline-block py-4 px-6 bg-airbnb hover:bg-airbnb-dark transition-colors duration-300 text-white rounded-xl ease-in-out"
        >
          Go to property
        </a>
      </div>
    </article>
  );
}
