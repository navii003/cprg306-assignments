import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get all items for a user from Firestore
export const getItems = async (userId) => {
  try {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
};

// Function to add an item to the user's shopping list in Firestore
export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id; // Return the id of the newly added item
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
};
