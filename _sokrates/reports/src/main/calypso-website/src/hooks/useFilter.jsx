import { useState, useEffect } from "react";

const useFilter = (items) => {
  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const result = items.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(result);
  }, [value, items]);

  return {
    value,
    setValue,
    filteredItems,
  };
};

export default useFilter;
