import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartHeader from '../CartHeader';
import CartFooter from '../CartFooter';
import NavHeader from '../shared/NavHeader';
import EmptyNotice from '../shared/EmptyNotice';
import CartItem from '../CartItem';
import CartDiscount from '../CartDiscount';
import { selectCart } from '../../store';
import { updateTotalPrice } from '../../store/cartSlice';
import { StyledList } from '../shared/StyledListItem';

function Cart(): JSX.Element {
  const {
    items,
    totalPrice,
    discounts,
  } = useSelector(selectCart);
  const dispatch = useDispatch();

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
            <CartItem key={item.id} item={item} />,
          )
          : <EmptyNotice />}
        <div>
          {discounts.length > 0
            && (
              discounts.map(discount => (
                <CartDiscount
                  key={discount.id}
                  discount={discount}
                  items={items}
                />
              )))}
        </div>
      </StyledList>
      <CartFooter
        totalPrice={totalPrice}
      />
    </>
  );
}

export default Cart;
