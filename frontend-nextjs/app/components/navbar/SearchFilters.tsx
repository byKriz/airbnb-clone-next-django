import { SearchIcon } from "@/app/icons/navBar/SearchIcon";

export function SearchFilters() {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between [&>div]:cursor-pointer [&>div]:h-[48px] [&>div]:lg:h-[64px]">
          <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm font-semibold">Search destinations</p>
          </div>
          <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm font-semibold">Add dates</p>
          </div>
          <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm font-semibold">Add dates</p>
          </div>
          <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm font-semibold">Add guests</p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-4 bg-airbnb rounded-full text-white hover:bg-airbnb-dark transition-colors">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
