export default function ReservationSideBar() {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-xl">
        <strong>$300</strong> night
      </h2>

      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="" className="mb-2 block font-bold text-xs">
          Guests
        </label>
        <select name="" id="" className="w-full -ml-1 text-sm">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>

      <div className="w-full mb-3 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark transition-colors duration-300 rounded-xl">
        <span>Book</span>
      </div>
      <div className="my-4 grid grid-cols-1 gap-2">
        <div className="flex justify-between items-center">
          <p>$200 X 4 nights</p>
          <p>$800</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Fake Airbnb Fee</p>
          <p>$40</p>
        </div>
      </div>

      <hr />
      <div className="my-4 mb-0 grid grid-cols-1">
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p>$840</p>
        </div>
      </div>
    </aside>
  );
}
