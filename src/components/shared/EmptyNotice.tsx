import { ShoppingCartPurple } from './StyledIcons';
import { NoticeContainer } from './NoticeContainer';

export default function EmptyNotice(): JSX.Element {
  return (
    <NoticeContainer>
      <ShoppingCartPurple size={40} />
      <br />
      텅~ 비었네요!
    </NoticeContainer>
  );
}

