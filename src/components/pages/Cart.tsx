import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store';
import {
  updateTotalPrice,
} from '../../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
  StyledItemDiscount,
} from '../../styles/styledListItem';
import CartHeader from '../CartHeader';
import CartFooter from '../CartFooter';
import NavHeader from '../shared/NavHeader';
import EmptyNotice from '../shared/EmptyNotice';
import getPercentage from '../../utils/getPercentage';
import CartItem from '../CartItem';

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
          -{getDiscountedPrice(discount)} WON
          ({getPercentage(discount.rate)}%)
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

  // TODO: is side effect?
  useLayoutEffect(() => {
    dispatch(updateTotalPrice());
  }, [items, discounts, dispatch]);

  return (
    <>
      <NavHeader title='장바구니' />
      <CartHeader />
      <StyledList>
        {items.length > 0
          ? items.map(item =>
              <CartItem key={item.id} item={item} />
            )
          : <EmptyNotice />}
        <div>
          {discounts.map(discount => (
            <CartDiscount
              key={discount.id}
              discount={discount}
            />
          ))}
        </div>
      </StyledList>
      <CartFooter
        totalPrice={totalPrice}
      />
    </>
  );
}

export default Cart;
