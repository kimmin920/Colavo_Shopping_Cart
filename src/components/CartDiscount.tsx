import { useDispatch, useSelector } from 'react-redux';
import { selectSalonCurrency } from '../store';
import { changeDiscountItemIds, removeDiscount } from '../store/cartSlice';
import { RowContainer } from '../styles/RowContainer';
import {
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
  StyledItemDiscount,
  StyledList,
} from '../styles/styledListItem';
import {
  CartDiscount as CartDiscountType,
  CartItem,
} from '../types/cart.types';
import getLocalCurrency from '../utils/getLocalCurrency';
import getPercentage from '../utils/getPercentage';
import DeleteButton from './shared/DeleteButton';
import Styledbutton from './shared/Styledbutton';
import Modal from './shared/Modal';
import useModal from '../hooks/useModal';
import { useState } from 'react';

type CartDiscountProps = {
  discount: CartDiscountType,
  items: CartItem[],
};

export default function CartDiscount({
  discount,
  items,
}: CartDiscountProps): JSX.Element {
  const [appliedItemIds, setAppliedItemIds] = useState(discount.appliedItemIds);
  const { isModalOpen, setIsModalOpen } = useModal(false);
  const dispatch = useDispatch();
  const currencyCode = useSelector(selectSalonCurrency);

  function onClickDeleteItem(targetId: string) {
    setAppliedItemIds((prev) => prev.filter((id) => id !== targetId));
  }

  function onClickAddItem(targetId: string) {
    setAppliedItemIds((prev) => prev.concat(targetId));
  }

  function onClickFinish() {
    dispatch(changeDiscountItemIds({
      discountId: discount.id,
      appliedItemIds,
    }));

    setIsModalOpen(false);
  }
  return (
    <>
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
        <RowContainer>
          <Styledbutton
            onClick={() => setIsModalOpen(true)}
            text='수정'
          />
          <DeleteButton
            onClick={() => dispatch(removeDiscount(discount.id))}
          />
        </RowContainer>
      </StyledListItem>
      {isModalOpen && (
        <Modal
          title='할인 수정'
          handleClose={() => setIsModalOpen(false)}
        >
          <>
            <StyledList>
              {discount.appliedItemIds.map((id) => {
                const matchedItem = items.find((item) => item.id === id);
                if (matchedItem) {
                  return (
                    <StyledListItem
                      key={matchedItem.id}
                    >
                      <div>
                        <StyledItemTitle>
                          {matchedItem.name}
                        </StyledItemTitle>
                        <StyledItemDescription>
                          {getLocalCurrency(matchedItem.price, currencyCode)}
                        </StyledItemDescription>
                      </div>
                      {appliedItemIds.includes(id)
                        ? <Styledbutton
                          text='삭제'
                          onClick={() => onClickDeleteItem(id)}
                        />
                        : <Styledbutton
                          text='추가'
                          onClick={() => onClickAddItem(id)}
                        />
                      }
                    </StyledListItem>
                  );
                }
              })}
            </StyledList>
            <Styledbutton
              text='완료'
              onClick={onClickFinish}
            />
          </>
        </Modal>
      )}
    </>
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
