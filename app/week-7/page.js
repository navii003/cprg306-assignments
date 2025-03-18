"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Week7Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items") // ✅ Fetch from API route
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to fetch items.json", err));
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: Date.now().toString() }, // Generate unique ID
    ]);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Shopping List</h1>

      <div className="flex flex-col items-start space-y-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
