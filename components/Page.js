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
        --black: #595758;
        --red: #DB8A74;
        --green: #09BC8A;
        --blue: #5995ED;
    }
    body {
        background: var(--grey);
        font-family: 'Share Tech', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    * {
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
