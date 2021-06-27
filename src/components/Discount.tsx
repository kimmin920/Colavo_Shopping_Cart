import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSalonDiscounts } from '../store';
import { addDiscount } from '../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDiscount,
} from '../styles/styledListItem';

export default function Discount(): JSX.Element {
  const dispatch = useDispatch();
  const discounts = useSelector(selectSalonDiscounts);
  const discountsArray = Object.values(discounts);

  return (
    <StyledList>
      {discountsArray.map(discount => (
        <StyledListItem key={discount.id}>
          <div>
            <StyledItemTitle>
              {discount.name}
            </StyledItemTitle>
            <StyledItemDiscount>
              {discount.rate}
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
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;
