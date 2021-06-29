import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding-bottom: .5rem;
  border-bottom: 1.5px dashed ${({ theme }) => theme.lightGrey};
`;
