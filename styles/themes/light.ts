import { lighten } from 'polished';

export default {
  name: 'light',
  colors: {
    background: '#fff',
    primary: lighten(0.2, '#222222'),
    secondary: '#09DEE5',
    highlights: '#296AF9',
    details: '#314464',
    white: '#222',
    black: '#fff',
    cardBackground: '#314464'
  }
};
