import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, selectSalonCurrency } from '../../store';
import {
  removeItem,
  decreaceItemCount,
  increaseItemCount,
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
import getLocalCurrency from '../../utils/getLocalCurrency';
import QuantitySelector from '../shared/QuantitySelector';
import DeleteButton from '../shared/DeleteButton';
import { RowContainer } from '../../styles/RowContainer';

function EachItem({ item }: any) {
  const dispatch = useDispatch();
  const currencyCode = useSelector(selectSalonCurrency);

  return (
    <>
    <StyledListItem>
      <div>
        <StyledItemTitle>{item.name}</StyledItemTitle>
        <StyledItemDescription>
          {getLocalCurrency(item.count * item.price, currencyCode)}
        </StyledItemDescription>
      </div>
      <RowContainer>
        <QuantitySelector
          value={item.count}
          onStepDown={() => dispatch(decreaceItemCount({ id: item.id, count: 1 }))}
          onStepUp={() => dispatch(increaseItemCount({ id: item.id, count: 1 }))}
        />
        <DeleteButton
          onClick={() => dispatch(removeItem(item.id))}
        />
      </RowContainer>
    </StyledListItem>
    </>
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
              <EachItem key={item.id} item={item} />
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
