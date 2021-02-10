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
        --grey: #EEEEEE;
        --black: #071013;
        --red: #FF6F59;
        box-sizing: border-box;
        color: var(--black);
    }
    body {
        background: var(--grey);
        font-family: 'Share Tech', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button {
      font-family: 'Share Tech', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      outline: none;
      cursor: pointer;
    }

    input {
      outline: none;
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
