import { useDispatch, useSelector } from 'react-redux';
import { selectSalonCurrency } from '../store';
import { decreaceItemCount, increaseItemCount, removeItem } from '../store/cartSlice';
import { RowContainer } from '../styles/RowContainer';
import { StyledListItem, StyledItemTitle, StyledItemDescription } from '../styles/styledListItem';
import getLocalCurrency from '../utils/getLocalCurrency';
import DeleteButton from './shared/DeleteButton';
import QuantitySelector from './shared/QuantitySelector';

export default function CartItem({ item }: any) {
  const dispatch = useDispatch();
  const currencyCode = useSelector(selectSalonCurrency);

  return (
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
  );
}
