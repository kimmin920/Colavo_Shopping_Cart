import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../store/cartSlice';

export default function Item() {
  const dispatch = useDispatch();

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
