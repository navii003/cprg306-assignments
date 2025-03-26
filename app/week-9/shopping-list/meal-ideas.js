"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const fetchMealDetails = async (mealId) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    setSelectedMealId(mealId);
    const details = await fetchMealDetails(mealId);
    setMealDetails(details);
  };

  return (
    <div className="flex-1 max-w-sm m-2">
      <h3 className="text-xl font-bold text-white">Meal Ideas:</h3>
      <div>
        {meals.length > 0 ? (
          <>
            <h1 className="text-gray-300">Here are some meal ideas using {ingredient}:</h1>
            {meals.map((meal) => (
              <div 
                key={meal.idMeal} 
                className="p-2 m-1 bg-[#1E293B] text-white max-w-sm hover:bg-[#334155] cursor-pointer rounded-md"
                onClick={() => handleMealClick(meal.idMeal)}
              >
                <h2 className="font-semibold">{meal.strMeal}</h2>
                
                {mealDetails && selectedMealId === meal.idMeal && (
                  <div className="rounded">
                    <h1 className="text-xs ml-6 text-gray-400">Ingredients needed:</h1>
                    <ul>
                      {Array.from({ length: 20 }).map((_, index) => {
                        const ingredient = mealDetails[`strIngredient${index + 1}`];
                        const measure = mealDetails[`strMeasure${index + 1}`];
                        return ingredient ? (
                          <li key={index} className="text-xs ml-6 text-gray-400">
                            {`${ingredient} (${measure})`}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <p className="text-gray-400">No meal ideas found for this ingredient.</p>
        )}
      </div>
    </div>
  );
}
