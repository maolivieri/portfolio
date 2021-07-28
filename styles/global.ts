import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Work Sans', sans-serif;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */


      @media (max-width: 1200px) {
          font-size: 14px
        }

      @media (max-width: 992px) {
          font-size: 13px
        }
      @media (max-width: 768px) {
          font-size: 11px
        }

      @media (max-width: 576px) {
          font-size: 10px
        }



    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    
`;

export default GlobalStyle;
