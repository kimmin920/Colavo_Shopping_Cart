import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GreyPlusIcon, PinkPlusIcon } from '../styles/styledIcons';

export default function CartHeader() {
  return (
    <StyledHeader>
      <StyledLinkGrey to='/items'>
        <GreyPlusIcon size={16} />
        <span>시술</span>
      </StyledLinkGrey>
      <StyledLinkPink to='/discount'>
        <PinkPlusIcon size={16} />
        <span>할인</span>
      </StyledLinkPink>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding-bottom: .5rem;
  border-bottom: 1.5px dashed ${({ theme }) => theme.lightGrey};
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 48%;
  padding: 1rem .3rem 1rem .3rem;
  border-radius: 8px;
  font-size: 1rem;
`;

const StyledLinkGrey = styled(StyledLink)`
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.grey};
`;

const StyledLinkPink = styled(StyledLink)`
  background-color: ${({ theme }) => theme.lightPink};
  color: ${({ theme }) => theme.pink};
`;
