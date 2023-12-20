"use client";

export default function Style() {
  return (
    <div className="text-white font-bold text-center">
      <div className="flex">
        <div className="grid grid-rows-4 grid-flow-col gap-4 w-2/12">
          <div className="p-4 rounded-lg shadow-lg bg-pink-500 row-span-2">
            01
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">03</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 rounded-lg shadow-lg bg-blue-500">01</div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500 col-span-2">
          02
        </div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500 col-span-2">
          03
        </div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500">04</div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500">05</div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500 col-span-2">
          06
        </div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500 col-span-2">
          07
        </div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500">08</div>
      </div>
    </div>
  );
}
