import styled from 'styled-components';
import { PlusIconGrey, PlusIconPink } from './shared/StyledIcons';
import { StyledLink } from './shared/StyledLink';
import { StyledHeader } from './shared/StyledHeader';

export default function CartHeader(): JSX.Element {
  return (
    <StyledHeader>
      <StyledLinkGrey to='/items'>
        <PlusIconGrey size={16} />
        <span>시술</span>
      </StyledLinkGrey>
      <StyledLinkPink to='/discount'>
        <PlusIconPink size={16} />
        <span>할인</span>
      </StyledLinkPink>
    </StyledHeader>
  );
}

const StyledLinkGrey = styled(StyledLink)`
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.grey};
  width: 48%;
`;

const StyledLinkPink = styled(StyledLink)`
  background-color: ${({ theme }) => theme.lightPink};
  color: ${({ theme }) => theme.pink};
  width: 48%;
`;
