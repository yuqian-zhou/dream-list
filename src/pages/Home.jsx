import { useState } from "react";
import List from "../components/List";
import AddTool from "../components/AddTool";
import { saveItemsToLocalStorage, getItemsFromLocalStorage } from "../utils";

export default function Home() {
  let localItems = getItemsFromLocalStorage("dream-list") || [];
  const [items, setItems] = useState([...localItems]);

  const addNewItem = (newItem) => {
    const newItems = [
      ...items,
      {
        id:
          items.length === 0
            ? 1
            : items.reduce((acc, item) => (item.id > acc ? item.id : acc), 0) +
              1,
        ...newItem,
      },
    ];
    setItems(newItems);
    saveItemsToLocalStorage("dream-list", newItems);
  };
;

  const handleItemClick = (item, type) => {
    switch (type) {
      case "unpin":
        item.pin = !item.pin;
        break;
      case "finish":
        item.done = !item.done;
        break;
      case "delete":
        const newItems = items.filter((i) => i.id !== item.id);
        setItems(newItems);
        saveItemsToLocalStorage("dream-list", newItems);
        return;
      default:
        break;
    }
    const newItems = items.map((i) => (i.id === item.id ? item : i));
    setItems(newItems);
    saveItemsToLocalStorage("dream-list", newItems);
  };

  return (
    <>
      <List items={items} onItemClick={handleItemClick} />
      <AddTool onAdd={addNewItem} />
    </>
  );
}
