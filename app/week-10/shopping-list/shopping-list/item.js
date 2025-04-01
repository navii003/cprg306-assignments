const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li
        className="p-3 bg-[#1E293B] text-white rounded-md shadow-md w-96 h-20 cursor-pointer hover:bg-[#334155]"
        onClick={onSelect}
      >
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-300">Buy {quantity} in {category}</p>
      </li>
    );
  };
  
  export default Item;
  