import { createGlobalStyle } from 'styled-components';
// import Regular from '../fonts/Regular.ttf';
// import Medium from '../fonts/Medium.ttf';
// import Bold from '../fonts/Bold.ttf';
import modernNormalize from 'modern-normalize/modern-normalize.css';

export const calculateLineHeight = (fontSize, lineHeight) => {
  return fontSize / lineHeight;
};

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  :root {
    --primaryWhite: #FFFFFF;
    --primaryBlack: #2F2F2F;
    --primaryBlue: #3470FF;
    --secondaryGrey: #F3F3F2;
    --secondaryDarkGrey: #D7E3FF;
    --secondaryRed: #EF5050;
    --secondaryOrange: #FF9D43;
    --secondaryBlue: #0B44CD;

    --fontSizesTiny: 1rem;
    --fontSizesSmall: 1.25rem;
    --fontSizesMedium: 1.5rem;
    --fontSizesLarge: 2.5rem;

    --animationDuration: 0.3s;
    --animationCubicBezier: cubic-bezier(0.7, 0.98, 0.86, 0.98);
  }

  body {
    margin: 0;
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  height: 100vh;
  margin: 0;
  color: #121417;
  }

  .container {
    width: 320px;
    margin: 0 auto;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    padding: 0px 115px;

    @media screen and (min-width: 768px) {
      width: 768px;
    }

    @media screen and (min-width: 1440px) {
      width: 1440px;
    }
  }

  .static-background {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    outline: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .ReactModalPortal {
    position: relative;
    transition: opacity 350ms ease-in-out;
    z-index: 5;
  }
  .cross-btn {
    padding: 0;
  width: 36px;
  height: 36px;
  border: none;
  background-color: var(--primaryWhite);

  &:hover {
    & svg {
      transform: rotate(-45deg) scale(1.1);
    }
  }
  }
  .cross-svg {
    fill: var(--primaryBlue);
  transform: rotate(45deg);
  width: 36px;
  height: 36px;
  transition: transform var(--animationCubicBezier);
  }




.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .custom-modal {
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 350ms ease-in-out, transform 350ms ease-in-out;

    &.ReactModal__Content--after-open {
      opacity: 1;
      transform: translateY(0);
    }

    &.ReactModal__Content--before-close {
      opacity: 0;
      transform: translateY(-50%);
    }
  }

  .custom-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 350ms ease-in-out;

    &.ReactModal__Overlay--after-open {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &.ReactModal__Overlay--before-close {
      background-color: transparent;
    }
  }
`;