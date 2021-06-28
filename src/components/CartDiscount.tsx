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
import getPercentage from '../utils/getPercentage';

type CartDiscountProps = {
  discount: CartDiscountType,
  items: CartItem[],
};

export default function CartDiscount({
  discount,
  items,
}: CartDiscountProps): JSX.Element {
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
          -{getDiscountedPrice(discount, items)} WON
          ({getPercentage(discount.rate)}%)
        </StyledItemDiscount>
      </div>
      <button>
        수정
      </button>
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
