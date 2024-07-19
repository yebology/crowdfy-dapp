import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <div className="flex justify-end mt-2 mb-12">
      <label
        className="bg-white flex border py-2 px-2 rounded-full focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          placeholder={"message"}
          className="pl-4 py-2 rounded-full flex-1 outline-none bg-white"
        //   value={query}
        //   onChange={handleSearch}
        />
        <button className="w-auto px-4 py-2 bg-green-400 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">
          <div className="relative">
            <FaSearch />
          </div>
        </button>
      </label>
    </div>
  );
};
