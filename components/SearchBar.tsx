import React from "react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (title: string) => void;
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl space-y-4">
      <form>
        <label
          htmlFor="search-products"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search products:
        </label>
        <input
          type="text"
          id="search-products"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search products"
          className="px-4 py-2 border w-full rounded-md"
        />
      </form>
    </div>
  );
};

export default SearchBar;
