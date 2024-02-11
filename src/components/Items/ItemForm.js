import { useContext, useState } from 'react';
import { createListItem } from '../../services/items';
import { ItemsContext } from '../../context/ItemsContext';

export default function ItemForm() {
  const [name, setName] = useState('');
  const [qty, setQty] = useState(0);
  const { setItems } = useContext(ItemsContext);

  const handleNewItem = async () => {
    try {
      const item = await createListItem(name, qty);
      setItems((prev) => [...prev, item]);
      setName('');
      setQty(0);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="field is-grouped m-2">
      <input
        className="input m-2"
        type="text"
        placeholder="new item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input m-2"
        type="number"
        placeholder="qty"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <button className="button is-primary m-2" onClick={handleNewItem}>
        Add
      </button>
    </div>
  );
}
