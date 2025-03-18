import Item from "./item.js";
import { useState } from "react";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div>
      <div className="mb-4 flex gap-6">
        <label htmlFor="sort" className="m-2 text-gray-300">Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`p-1 m-2 w-28 bg-[#2563EB] text-white hover:bg-[#3B82F6] rounded-md ${
            sortBy === "name" ? "bg-[#1D4ED8]" : ""
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-1 m-2 w-28 bg-[#2563EB] text-white hover:bg-[#3B82F6] rounded-md ${
            sortBy === "category" ? "bg-[#1D4ED8]" : ""
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item.name)} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
