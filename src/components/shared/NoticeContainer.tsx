import styled from 'styled-components';

export const NoticeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;

color: ${({ theme }) => theme.grey};
`;
