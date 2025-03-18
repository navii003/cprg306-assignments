"use client";

import React, { useEffect, useState } from "react";
import Item from "./item";

const ItemList = ({items}) => {

    const [copyItems, setCopyItems] = useState(items)

    const [sortBy, setSortBy] = useState("name")
    const sorting = () => {
        let sortedItems = [...items];
        if (sortBy === "name") {
            sortedItems.sort((a,b) => a.name.localeCompare(b.name))
        }

        if (sortBy === "category") {
            sortedItems.sort((a,b) => a.category.localeCompare(b.category))

        }
        console.log(sortedItems)
        console.log(items)
        setCopyItems(sortedItems); 
    }

   const handleName = () => {
    setSortBy("name")
   }

   const handleCategory = () => {
    setSortBy("category")

   }

   useEffect(() => {
    sorting()
   },[sortBy, items])




    const renderItem = (item) => (
        <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
        />
    );

    return (
        <div className="grid grid-cols-1 gap-4 width-full md:grid-cols-2 lg:grid-cols-3">
            <button onClick = {handleName}>Name</button>
            <button onClick = {handleCategory}>Category</button>

            {copyItems.map(renderItem)}
        </div>
    );
};

export default ItemList;