"use client";

import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="w-9/12 max-w-md lg:max-w">
        <SearchBar />
      </div>
      <div className="relative isolate">
        <div className="mx-auto">
          <div className="text-left">
            <h1 className="text-gray-900 text-3xl font-extrabold">
              Tênis
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
