import { css } from 'styled-components';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Lobster');

  :root {
    --mango: #2ea3dd;
    --dark-mango: #272e68;
    --dust: #666;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
  }

  body {
    color: var(--dust);
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--mango);
    font-family: 'Lobster', cursive;
    font-weight: 400;
  }
`;
