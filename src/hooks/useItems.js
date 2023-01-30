import { useState } from 'react';
import { useEffect } from 'react';
import { getListItems } from '../services/items';

export function useItems() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getListItems();
        setItems(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message);
      }
    };
    fetchItems();
  }, []);
  return { items, setItems };
}
