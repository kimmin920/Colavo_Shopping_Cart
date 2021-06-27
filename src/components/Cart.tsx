import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../store';
import { decreaceItemCount, increaseItemCount, updateTotalPrice } from '../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
  StyledItemDiscount,
} from '../styles/styledListItem';

function EachItem({ item }: any) {
  const dispatch = useDispatch();

  return (
    <StyledListItem>
      <div>
        <StyledItemTitle>{item.name}</StyledItemTitle>
        <StyledItemDescription>
          {item.count} / {item.count * item.price} WON
        </StyledItemDescription>
      </div>
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
    </StyledListItem>
  );
}

function CartDiscount({ discount }: any) {
  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  // TODO: get discount price from stroe;
  function getDiscountedPrice(discount: any) {
    return discount.appliedItemIds?.reduce((acc: number, id: string) => {
      const item = items.find((item) => item.id === id);

      if (item) {
        return acc + (item.count * item.price * discount.rate);
      }

      return acc;
    }, 0);
  }

  function getDiscountedItems(discount: any) {
    return discount.appliedItemIds?.map((id: string) => {
      const item = items.find((item) => item.id === id);

      return (
        item && (
          <span
            key={item.id}
          >
            {item.name}x{item.count},
            {' '}
          </span>)
      );
    });
  }

  return (
    <StyledListItem>
      <div>
        <StyledItemTitle>
          {discount.name}
        </StyledItemTitle>
        <StyledItemDescription>
          {getDiscountedItems(discount)}
        </StyledItemDescription>
        <StyledItemDiscount>
          -{getDiscountedPrice(discount)} WON({Math.floor(discount.rate * 100)}%)
        </StyledItemDiscount>
      </div>
      <button>
        수정
      </button>
    </StyledListItem>
  );
}

function Cart() {
  const { items, totalPrice, discounts } = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <>
      <h1>CART</h1>
      <StyledList>
        {items.length > 0
          ? items.map(item =>
              <EachItem key={item.id} item={item} />
            )
          : 'no items'}
        <div>
          {discounts.map(discount => (
            <CartDiscount
              key={discount.id}
              discount={discount}
            />
          ))}
        </div>
        <button onClick={() => dispatch(updateTotalPrice())}>
          UPDATE
        </button>
      </StyledList>
      <div>{totalPrice} WON</div>
    </>
  );
}

export default Cart;
