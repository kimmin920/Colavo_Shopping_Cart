import styled from 'styled-components';
import { StyledHeader } from '../../styles/styledHeader';
import { ArrowLeftGrey, HomeIconGrey } from '../../styles/styledIcons';
import { StyledLink } from '../../styles/styledLink';

type NavHeaderProp = {
  title: string,
};

export default function NavHeader({
  title,
}: NavHeaderProp): JSX.Element {
  return (
    <StyledNavHeader>
      <StyledLink to='/'>
        <ArrowLeftGrey />
      </StyledLink>
      {title}
      <StyledLink to='/'>
        <HomeIconGrey />
      </StyledLink>
    </StyledNavHeader>
  );
}

const StyledNavHeader = styled(StyledHeader)`
  justify-content: space-between;
  border: none;
`;
