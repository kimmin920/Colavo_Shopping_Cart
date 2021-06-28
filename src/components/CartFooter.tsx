import styled from 'styled-components';
import { StyledLink } from '../styles/styledLink';

type CartFooterProps = {
  totalPrice: number,
};

export default function CartFooter({
  totalPrice,
}: CartFooterProps): JSX.Element {
  return (
    <footer>
      <TotalPriceWrapper>
        합계
        <TotalPrice>
          {totalPrice}
        </TotalPrice>
      </TotalPriceWrapper>
      <StyledLinkPurple to='/'>
        결제
      </StyledLinkPurple>
    </footer>
  );
}

const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TotalPrice = styled.div`
  font-size: 2rem;
`;

const StyledLinkPurple = styled(StyledLink)`
  background-color: ${({ theme }) => theme.purple};
  width: 100%;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.lightPurple};
  }
`;
