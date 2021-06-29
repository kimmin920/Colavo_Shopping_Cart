import { useDispatch, useSelector } from 'react-redux';
import { selectSalonCurrency } from '../store';
import { removeDiscount } from '../store/cartSlice';
import {
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
  StyledItemDiscount,
} from '../styles/styledListItem';
import {
  CartDiscount as CartDiscountType,
  CartItem,
} from '../types/cart.types';
import getLocalCurrency from '../utils/getLocalCurrency';
import getPercentage from '../utils/getPercentage';
import DeleteButton from './shared/DeleteButton';

type CartDiscountProps = {
  discount: CartDiscountType,
  items: CartItem[],
};

export default function CartDiscount({
  discount,
  items,
}: CartDiscountProps): JSX.Element {
  const dispatch = useDispatch();
  const currencyCode = useSelector(selectSalonCurrency);

  return (
    <StyledListItem>
      <div>
        <StyledItemTitle>
          {discount.name}
        </StyledItemTitle>
        <StyledItemDescription>
          {getDiscountedItems(discount, items)}
        </StyledItemDescription>
        <StyledItemDiscount>
          -{getLocalCurrency(getDiscountedPrice(discount, items), currencyCode)}
          ({getPercentage(discount.rate)}%)
        </StyledItemDiscount>
      </div>
      <button
        onClick={() => console.log(discount.appliedItemIds)}
      >
        수정
      </button>
      <DeleteButton
        onClick={() => dispatch(removeDiscount(discount.id))}
      />
    </StyledListItem>
  );
}

function getDiscountedPrice(discount: CartDiscountType, items: CartItem[]) {
  return discount.appliedItemIds?.reduce((acc: number, id: string) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      return acc + (item.count * item.price * discount.rate);
    }

    return acc;
  }, 0);
}

function getDiscountedItems(discount: CartDiscountType, items: CartItem[]) {
  return discount.appliedItemIds?.map((id: string) => {
    const item = items.find((item) => item.id === id);

    return (
      item && (
        <span
          key={item.id}
        >
          {item.name}x{item.count},
          {' '}
        </span>
      )
    );
  });
}
