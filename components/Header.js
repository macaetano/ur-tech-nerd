import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  background: var(--red);
  color: white;
  padding: 0.5rem;
  transform: skew(-7deg);
  margin: 0.5rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid var(--black);
  margin: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <Logo>Ur Tech Nerd &#x1f913;</Logo>
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;
