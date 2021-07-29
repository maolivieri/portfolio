import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      primary: string;
      secondary: string;
      highlights: string;
      details: string;
      white: string;
      black: string;
      cardBackground: string;
    };
  }
}
