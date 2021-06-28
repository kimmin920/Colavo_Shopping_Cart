import {
  PlusCircle,
  ArrowLeft,
  Home,
  ShoppingCart,
} from 'react-feather';
import styled from 'styled-components';

export const PlusIconGrey = styled(PlusCircle)`
  fill: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.lightGrey};
`;

export const PlusIconPink = styled(PlusCircle)`
  fill: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.lightPink};
`;

export const ArrowLeftGrey = styled(ArrowLeft)`
  color: ${({ theme }) => theme.grey};
`;

export const HomeIconGrey = styled(Home)`
  color: ${({ theme }) => theme.grey};
`;

export const ShoppingCartPurple = styled(ShoppingCart)`
  color: ${({ theme }) => theme.purple};
`;
