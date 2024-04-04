export function PropertyListItem() {
  return (
    <article className="cursor-pointer">
      <div className="overflow-hidden aspect-square rounded-xl">
        <img
          src="place_img.webp"
          alt="test"
          className="w-full h-full object-cover max-w-[768px] max-h-[768px] hover:scale-110 transition duration-300"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong className="text-black/90">$200</strong> per night
        </p>
      </div>

      {/* <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div> */}
    </article>
  );
}
