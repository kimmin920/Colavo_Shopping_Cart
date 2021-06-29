import styled from 'styled-components';
import { StyledLink } from './StyledLink';

export const StyledLinkPurple = styled(StyledLink)`
  background-color: ${({ theme }) => theme.purple};
  width: 100%;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.lightPurple};
  }
`;
