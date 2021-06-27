import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSalonDiscounts } from '../store';
import { addDiscount } from '../store/cartSlice';

export default function Discount(): JSX.Element {
  const dispatch = useDispatch();
  const discounts = useSelector(selectSalonDiscounts);
  const discountsArray = Object.values(discounts);

  return (
    <List>
      {discountsArray.map(discount => (
        <div key={discount.id}>
          {discount.name}
          {discount.rate}
          <button
            onClick={() => dispatch(addDiscount(discount))}
          >
            select
          </button>
        </div>
      ))}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;
