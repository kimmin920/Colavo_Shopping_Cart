import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectSalon } from '../store';
import { addItem, removeItem } from '../store/cartSlice';
import { fetchSalonData } from '../store/salonSlice';

export default function Item() {
  const dispatch = useDispatch();
  const items = useSelector(selectSalon);

  useEffect(() => {
    async function getItems() {
      await dispatch(fetchSalonData());
    }

    getItems();
  }, [dispatch]);

  console.log(items);
  return (
    <div>
      <button
        onClick={() => dispatch(addItem({ id: 1, name: 'any', count: 1, price: 3000 }))}
      >
        add
      </button>
      <button
        onClick={() => dispatch(removeItem(3))}
      >
        remove
      </button>
    </div>
  )
}
