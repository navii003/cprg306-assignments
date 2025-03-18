"use client";
import '../globals.css'
import { useState } from "react";

export default function NewItem({onAddItem}) {

    const [name, setName] = useState(""); 
    const [count, setCount] = useState(0); 
    const [category, setCategory] = useState("produce"); 

    const increment = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        const item = { name, quantity: count, category };


        console.log("Submitted Item:", item);


        onAddItem(item)


        setName("");
        setCount(0);
        setCategory("produce");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-5 w-72 text-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">New Item</h2>

                {/* Form Element */}
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <label className="block text-left font-medium text-gray-700 mb-1">Item Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter item name"
                        className="w-full p-2 mb-3 border rounded-lg"
                        required
                    />

                    {/* Quantity Control */}
                    <label className="block text-left font-medium text-gray-700 mb-1">Quantity:</label>
                    <div className="flex items-center justify-between gap-4 mb-3">
                        <button
                            type="button"
                            onClick={decrement}
                            className="w-12 h-12 bg-red-500 text-white text-xl font-bold rounded-lg hover:bg-red-600 disabled:bg-gray-300"
                            disabled={count === 0}
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>

                        <p className="text-3xl font-bold text-gray-800 w-12">{count}</p>

                        <button
                            type="button"
                            onClick={increment}
                            className="w-12 h-12 bg-blue-500 text-white text-xl font-bold rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
                            disabled={count === 20}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>

                    {/* Category Field */}
                    <label className="block text-left font-medium text-gray-700 mb-1">Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-3"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}