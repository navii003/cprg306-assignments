import ItemList from "./item-list"; 
export default function Page() {
  return (
    <main className=" bg-gray-900 text-[#ffffff] p-8 min-h-1">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <ItemList /> {}
    </main>
  );
}
