import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  background: var(--blue);
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
      <Logo>UR Tech Nerd</Logo>
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;
