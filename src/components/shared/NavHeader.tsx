import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { StyledHeader } from './StyledHeader';
import { ArrowLeftGrey, ShoppingCartGrey } from './StyledIcons';
import { StyledLink } from './StyledLink';

type NavHeaderProp = {
  title: string,
};

export default function NavHeader({
  title,
}: NavHeaderProp): JSX.Element {
  const history = useHistory();

  return (
    <StyledNavHeader>
      <BackButton onClick={() => history.goBack()}>
        <ArrowLeftGrey />
      </BackButton>
      {title}
      <StyledLink to='/'>
        <ShoppingCartGrey />
      </StyledLink>
    </StyledNavHeader>
  );
}

const StyledNavHeader = styled(StyledHeader)`
  justify-content: space-between;
  border: none;
`;

const BackButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem .3rem 1rem .3rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`;
