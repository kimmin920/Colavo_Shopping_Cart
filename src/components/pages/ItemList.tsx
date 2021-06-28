import { useDispatch, useSelector } from 'react-redux';
import { selectSalonCurrency, selectSalonItems } from '../../store';
import { addItem, removeItem } from '../../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
} from '../../styles/styledListItem';
import getLocalCurrency from '../../utils/getLocalCurrency';
import NavHeader from '../shared/NavHeader';

export default function Item() {
  const dispatch = useDispatch();
  const items = useSelector(selectSalonItems);
  const currencyCode = useSelector(selectSalonCurrency);
  const itemsArray = Object.values(items);

  return (
    <>
      <NavHeader title='시술메뉴' />
      <StyledList>
        {itemsArray.map(item =>
          (
            <StyledListItem
              key={item.id}
            >
              <div>
                <StyledItemTitle>
                  {item.name}
                </StyledItemTitle>
                <StyledItemDescription>
                  {getLocalCurrency(item.price, currencyCode)}
                </StyledItemDescription>
              </div>
              <div>
                {item.count}
              <button
                onClick={() => dispatch(addItem(item))}
              >
                add
              </button>
              </div>
            </StyledListItem>
          )
        )}
      </StyledList>
    </>
  );
}
