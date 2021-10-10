import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Work Sans', sans-serif;
      -ms-overflow-style: none; /* IE and Edge
      scrollbar-width: none; Firefox */
      font-size: 15px;
      
      @media (max-width: 1200px) {
          font-size: 94%
        }

      @media (max-width: 992px) {
          font-size: 84%
        }
      @media (max-width: 768px) {
          font-size: 68%
        }

      @media (max-width: 576px) {
          font-size: 62.5%
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
