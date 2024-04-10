import { ContactButton } from "../components/ContactButton";
import { PropertyList } from "../components/properties/PropertyList";
import { ShieldIcon } from "../icons/ShieldIcon";

export default function LandlordDatailPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <aside className="col-span-1 mb-4">
        <div className="flex flex-col items-center p-6 rounded-xl shadow-xl w-full border border-gray-300 relative">
          <div className="min-w-[100px] min-h-[100px] w-9 h-9 relative">
            <img
              src="/landlord.webp"
              alt="landlord name"
              className="w-full h-full rounded-full object-cover mb-2"
            />
            <div className="absolute size-8 bg-airbnb text-white flex justify-center items-center rounded-full bottom-0 right-0">
              <ShieldIcon />
            </div>
          </div>
          <span className="text-2xl font-bold">Landlord</span>
          <span className=" text-sm">Host</span>

          <ContactButton />
        </div>
      </aside>

      <div className="col-span-1 md:col-span-3 pl-0 md:pl-6 ">
        <PropertyList />
      </div>
    </section>
  );
}
