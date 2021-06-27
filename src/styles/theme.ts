import { fadeInUp, heartBeat } from './keyframes';

const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
};

const theme = {
  purple: '#9885f0',
  lightPurple: '#ae9df1',
  pink: '#ffa3c5',
  lightPink: '#fdf0f5',
  grey: '#96a0a9',
  lightGrey: '#f7f7f7',
  black: '#2a292b',
  boxShadow: '0px 0px 11px 1px rgba(0,0,0,0.3)',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  keyframes: {
    fadeInUp,
    heartBeat,
  }
};

export default theme;
