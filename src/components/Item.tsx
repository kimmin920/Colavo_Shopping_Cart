import { useDispatch, useSelector } from 'react-redux';
import { selectSalonItems } from '../store';
import { addItem, removeItem } from '../store/cartSlice';
import {
  StyledList,
  StyledListItem,
  StyledItemTitle,
  StyledItemDescription,
} from '../styles/styledListItem';

export default function Item(): JSX.Element {
  const dispatch = useDispatch();
  const items = useSelector(selectSalonItems);
  const itemsArray = Object.values(items);

  return (
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
                {item.price}
              </StyledItemDescription>
            </div>
            <div>
            <button
              onClick={() => dispatch(removeItem(item.id))}
            >
              delete
            </button>
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
  );
}
