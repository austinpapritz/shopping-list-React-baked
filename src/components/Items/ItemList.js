import { useContext } from 'react';
import { toggleListItem } from '../../services/items';
import { ItemsContext } from '../../context/ItemsContext';

export default function ItemsList() {
  const { items, setItems } = useContext(ItemsContext);
  const handleChange = async (item) => {
    try {
      const updatedItem = await toggleListItem(item);
      setItems((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? updatedItem : prevItem))
      );
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <label className="checkbox">
            <input
              className="m-1"
              type="checkbox"
              checked={item.purchased}
              onChange={() => handleChange(item)}
            />
            {item.qty} {item.name}
          </label>
        </div>
      ))}
    </>
  );
}
