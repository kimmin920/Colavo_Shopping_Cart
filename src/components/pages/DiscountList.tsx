import { useDispatch, useSelector } from 'react-redux';
import { selectSalonDiscounts } from '../../store';
import { addDiscount } from '../../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDiscount,
} from '../../styles/styledListItem';
import getPercentage from '../../utils/getPercentage';
import NavHeader from '../shared/NavHeader';

export default function Discount(): JSX.Element {
  const dispatch = useDispatch();
  const discounts = useSelector(selectSalonDiscounts);
  const discountsArray = Object.values(discounts);

  return (
    <>
      <NavHeader title='할인' />
      <StyledList>
        {discountsArray.map(discount => (
          <StyledListItem key={discount.id}>
            <div>
              <StyledItemTitle>
                {discount.name}
              </StyledItemTitle>
              <StyledItemDiscount>
                {getPercentage(discount.rate)}%
              </StyledItemDiscount>
            </div>
            <button
              onClick={() => dispatch(addDiscount(discount))}
            >
              select
            </button>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

