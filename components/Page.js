import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const Inner = styled.div`
  padding: 1rem;
`;

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Share Tech', sans-serif;
    src: url('/public/ShareTech-Regular.ttf') format('ttf');
  }
    html {
        --background: #2C363F;
        --secondary: #EDF7F6;
        --red: #FE6D73;
        --white: #e7e7e7;
        --box-shadow: 0px 4px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;
        color: var(--secondary);
    }
    body {
        background: var(--background);
        font-family: 'Share Tech', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button {
      font-family: 'Share Tech', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      outline: none;
      cursor: pointer;
      text-transform: uppercase;
    }

    input, textarea {
      outline: none;
      color: var(--secondary);
      background-color: var(--white);
    }

    *, *:before, *:after {
      box-sizing:  inherit;
      margin: 0;
    }

`;

const Page = ({ children }) => (
  <div>
    <GlobalStyled />
    <Header />
    <Inner>{children}</Inner>
  </div>
);

export default Page;
