import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectSalonCurrency,
  selectSalonItems,
} from '../../store';
import { addItem } from '../../store/cartSlice';
import getLocalCurrency from '../../utils/getLocalCurrency';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
} from '../../styles/styledListItem';
import Loader from '../shared/Loader';
import NavHeader from '../shared/NavHeader';
import Styledbutton from '../shared/Styledbutton';
import { CheckIconPurple } from '../../styles/styledIcons';

export default function Item(): JSX.Element {
  const dispatch = useDispatch();

  const currencyCode = useSelector(selectSalonCurrency);
  const items = useSelector(selectSalonItems);
  const itemsArray = Object.values(items);
  const cartItems = useSelector(selectCartItems);

  function isInCart(itemId: string) {
    return cartItems.find((cartItem) => cartItem.id === itemId);
  }

  return (
    <>
      <NavHeader title='시술메뉴' />
      <StyledList>
        {itemsArray.length > 0
          ? itemsArray.map(item => (
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
              {isInCart(item.id)
                ? <CheckIconPurple />
                : (
                  <Styledbutton
                    onClick={() => dispatch(addItem(item))}
                    text='담기'
                  />)}
            </StyledListItem>))
          : <Loader />}
      </StyledList>
    </>
  );
}
