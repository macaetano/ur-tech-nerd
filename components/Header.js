import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  background: var(--red);
  color: var(--white);
  padding: 0.5rem;
  margin: 0.5rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid var(--secondary);
  margin: 1rem;
  @media (max-width: 600px) {
    h1 {
      display: none;
    }
    border-bottom: 0px;
    display: block;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <Logo>Ur Tech Nerd</Logo>
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;
