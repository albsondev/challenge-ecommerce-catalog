import React from 'react';

const SearchBar = () => {
  return (
    <div id="searchBar" className="relative flex h-3 content-center items-center mb-10 z-50">
      <span className="absolute left-4 cursor-pointer text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        type="text"
        className="w-full rounded-lg bg-white py-3 pl-10 pr-5 text-lg text-gray-600 outline-none ring-gray-200 focus:ring-1 focus:ring-gray-400 dark:text-zinc-900 dark:ring-zinc-600"
        placeholder="Buscar produto"
      />
    </div>
  );
};

export default SearchBar;
