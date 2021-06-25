import { useSelector } from 'react-redux';
import { selectCart } from '../store';

function Cart() {
  const items = useSelector(selectCart);

  return (
    <div>
      <h1>CART</h1>
      {items.length > 0
        ? items.map(item =>
          <div>
            {item.name}
          </div>)
        : 'no items'}
    </div>
  );
}

export default Cart;
