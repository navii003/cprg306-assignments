"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);  // State to store items
  const [selectedItemName, setSelectedItemName] = useState(""); // State to store selected item name
  const { user } = useUserAuth();  // Get authenticated user from context

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);  // Fetch items for the user
      setItems(fetchedItems);  // Set fetched items in state
    }
  };

  useEffect(() => {
    if (!user) {
      setItems([]);  // Clear items if there is no authenticated user
      return;
    }
    loadItems();  // Load items when user is authenticated
  }, [user]);

  if (!user) {
    return (
      <div>
        <h1>Week 9</h1>
        <p>Go away!</p>
      </div>
    );
  }

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].replace(/[^\w\s]/g, "").trim();  // Clean item name
    setSelectedItemName(cleanedItemName);  // Set selected item name
  };

  const handleAddItem = async (newItem) => {
    if (!user) return;  // Ensure user is authenticated before adding item
    const itemId = await addItem(user.uid, newItem);  // Add item to Firestore
    if (itemId) {
      setItems([...items, { id: itemId, ...newItem }]);  // Update state with new item
    }
  };

  return (
    <main className="bg-[#020617] text-white">
      <h1 className="text-4xl font-bold mb-0 p-2">Shopping List</h1>
      <p>{user.displayName}</p>
      
      <div className="flex mt-6 gap-2">
        <div className="flex flex-col space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
