import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSalonCurrency } from '../store';
import getLocalCurrency from '../utils/getLocalCurrency';
import { StyledLink } from './shared/StyledLink';

type CartFooterProps = {
  totalPrice: number,
};

export default function CartFooter({
  totalPrice,
}: CartFooterProps): JSX.Element {
  const currencyCode = useSelector(selectSalonCurrency);
  return (
    <footer>
      <TotalPriceWrapper>
        합계
        <TotalPrice>
          {getLocalCurrency(totalPrice, currencyCode)}
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
  margin-bottom: .3rem;
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
