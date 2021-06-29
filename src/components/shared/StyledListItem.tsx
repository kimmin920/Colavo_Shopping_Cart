import styled from 'styled-components';

export const StyledList = styled.ul<{ height?: string }>`
  height: ${props => props.height ?? '65%'};
  overflow: scroll;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .5rem;

  :hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

export const StyledItemTitle = styled.div`
  max-width: 300px;
  color: ${({ theme }) => theme.black};
  font-size: 1rem;
`;

export const StyledItemDescription = styled.div`
  color: ${({ theme }) => theme.grey};
  font-size: .7rem;
`;

export const StyledItemDiscount = styled.div`
  color: ${({ theme }) => theme.pink};
  font-size: .9rem;
`;
