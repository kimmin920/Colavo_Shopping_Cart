import {
  PlusCircle,
  ArrowLeft,
  ShoppingCart,
  X,
  Heart,
  Check,
} from 'react-feather';
import styled, { css } from 'styled-components';

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

export const ShoppingCartGrey = styled(ShoppingCart)`
  color: ${({ theme }) => theme.grey};
`;

export const ShoppingCartPurple = styled(ShoppingCart)`
  color: ${({ theme }) => theme.purple};
`;

export const DeleteIconGrey = styled(X)`
  color: ${({ theme }) => theme.grey};
`;

export const HeartPurple = styled(Heart)`
  fill: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.purple};

  ${({ theme }) => css`
    animation: ${theme.keyframes.heartBeat} .8s infinite;
  `};
`;

export const CheckIconPurple = styled(Check)`
  color: ${({ theme }) => theme.purple};
`;
