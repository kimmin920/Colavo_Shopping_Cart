import styled from 'styled-components';
import { ShoppingCartPurple } from '../../styles/styledIcons';

export default function EmptyNotice() {
  return (
    <NoticeContainer>
      <ShoppingCartPurple size={40} />
      <br />
      텅~ 비었네요!
    </NoticeContainer>
  );
}

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  color: ${({ theme }) => theme.grey};
`;
