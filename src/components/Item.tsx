import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectSalonItems } from '../store';
import { addItem, removeItem } from '../store/cartSlice';

export default function Item(): JSX.Element {
  const dispatch = useDispatch();
  const items = useSelector(selectSalonItems);
  const itemsArray = Object.values(items);

  return (
    <>
      {itemsArray.map(item =>
        (<div key={item.id}>
          <div>
            {item.name}
            {item.price}
          </div>
          <div>
            {item.count}
          </div>
          <button
            onClick={() => dispatch(addItem(item))}
          >
            add
          </button>
          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            remove
          </button>
        </div>)
      )}
    </>
  );
}
