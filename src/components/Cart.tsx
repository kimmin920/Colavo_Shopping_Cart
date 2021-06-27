import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../store';
import { decreaceItemCount, increaseItemCount, updateTotalPrice } from '../store/cartSlice';

function EachItem({ item }: any) {
  const dispatch = useDispatch();

  return (
    <>
      <div>{item.name}</div>
      <div>{item.count} / {item.count * item.price} WON</div>
      <span>
        <button
          onClick={() => dispatch(increaseItemCount({ id: item.id, count: 1 }))}
        >
          +
        </button>
        <button
          onClick={() => dispatch(decreaceItemCount({ id: item.id, count: 1 }))}
        >
          -
        </button>
      </span>
    </>
  )
}

function Cart() {
  const { items, totalPrice, discounts } = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ background: 'red' }}>
        <h1>CART</h1>
        {items.length > 0
          ? items.map(item =>
              <EachItem key={item.id} item={item} />
            )
          : 'no items'}
        <div>{totalPrice} WON</div>
        <div>
          {discounts.map(discount => (
            <div key={discount.id}>
              {discount.name}, {discount.rate}
              {console.log(discount.appliedItemIds)}
            </div>
          ))}
        </div>
        <button onClick={() => dispatch(updateTotalPrice())}>
          UPDATE
        </button>
      </div>
    </>
  );
}

export default Cart;
