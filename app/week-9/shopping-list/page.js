"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].replace(/[^\w\s]/g, "").trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  return (
    <main className=" bg-[#020617] text-white ">
      <h1 className="text-4xl font-bold mb-0 p-2">Shopping List</h1>
      
      <div className="flex mt-6 gap-2">
        <div className="flex flex-col space-y-4 ">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}