import { keyframes } from 'styled-components';

export const heartBeat = keyframes`
  0% {
    transform: scale(.75);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(.75);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(.75);
  }
  100% {
    transform: scale(.75);
  }
`;

export const fadeInUp = keyframes`
  0% {
    opacity:0;
    transform:  translate(0px, 100px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px, 0px)  ;
  }
`;
