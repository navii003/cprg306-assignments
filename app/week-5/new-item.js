"use client";

import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, category, quantity };

    alert(`Added item: ${name}, Category: ${category}, Quantity: ${quantity}`);
    console.log(item);

    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-6 rounded-lg shadow-lg w-[350px] bg-[#0f172a]"
      >
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
          className="w-full p-2 mb-4 text-black bg-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center bg-white px-4 py-2 rounded-md w-[150px] justify-between">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-10 h-8 flex items-center justify-center bg-gray-500 text-white rounded-md disabled:bg-gray-300"
            >
              -
            </button>
            <span className="text-black">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="w-10 h-8 flex items-center justify-center bg-blue-500 text-white rounded-md"
            >
              +
            </button>
          </div>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 w-[140px] text-black bg-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Produce">Produce</option>
            <option value="Meat">Meat</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          +
        </button>
      </form>
    </div>
  );
}