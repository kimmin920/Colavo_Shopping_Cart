import { useDispatch, useSelector } from 'react-redux';
import { selectCartdiscounts, selectSalonDiscounts } from '../../store';
import { addDiscount } from '../../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDiscount,
} from '../shared/StyledListItem';
import getPercentage from '../../utils/getPercentage';
import NavHeader from '../shared/NavHeader';
import { CheckIconPurple } from '../shared/StyledIcons';
import Styledbutton from '../shared/Styledbutton';
import Loader from '../shared/Loader';
import { StyledLinkPurple } from '../shared/StyledLinkPurple';

export default function Discount(): JSX.Element {
  const dispatch = useDispatch();
  const discounts = useSelector(selectSalonDiscounts);
  const discountsArray = Object.values(discounts);
  const cartDiscounts = useSelector(selectCartdiscounts);

  function isInCart(discountId: string) {
    return cartDiscounts.find((cartDiscount) => cartDiscount.id === discountId);
  }

  return (
    <>
      <NavHeader title='할인' />
      <StyledList
        height='80%'
      >
        {discountsArray.length > 0
          ? discountsArray.map(discount => (
            <StyledListItem key={discount.id}>
              <div>
                <StyledItemTitle>
                  {discount.name}
                </StyledItemTitle>
                <StyledItemDiscount>
                  {getPercentage(discount.rate)}%
                </StyledItemDiscount>
              </div>
              {isInCart(discount.id)
                ? <CheckIconPurple />
                : (
                  <Styledbutton
                    onClick={() => dispatch(addDiscount(discount))}
                    text='적용'
                  />)}
            </StyledListItem>))
          : <Loader />}
      </StyledList>
      <StyledLinkPurple to='/'>
        장바구니로 돌아가기
      </StyledLinkPurple>
    </>
  );
}

