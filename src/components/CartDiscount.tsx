import {
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
  StyledItemDiscount,
} from '../styles/styledListItem';
import getPercentage from '../utils/getPercentage';

type CartDiscountProps = {
  discount: any,
  items: any,
};

export default function CartDiscount({ discount, items }: CartDiscountProps) {
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

function getDiscountedPrice(discount: any, items: any) {
  return discount.appliedItemIds?.reduce((acc: number, id: string) => {
    const item = items.find((item: any) => item.id === id);

    if (item) {
      return acc + (item.count * item.price * discount.rate);
    }

    return acc;
  }, 0);
}

function getDiscountedItems(discount: any, items: any) {
  return discount.appliedItemIds?.map((id: string) => {
    const item = items.find((item: any) => item.id === id);

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
