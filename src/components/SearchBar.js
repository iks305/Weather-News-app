import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите город..."
        className="search-input px-4 py-2 rounded-l-lg w-full md:w-64"
      />
      <button
        type="submit"
        className="bg-white bg-opacity-20 px-4 py-2 rounded-r-lg hover:bg-opacity-30 transition"
      >
        Поиск
      </button>
    </form>
  );
};

export default SearchBar;
