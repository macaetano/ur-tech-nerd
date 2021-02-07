import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.h3`
  margin-right: 1rem;
  padding: 1rem;
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    border-bottom: 3px solid var(--black);
  }
`;

const Nav = () => (
  <StyledNav>
    <NavItem>
      <Link href="/Sell">Sell</Link>
    </NavItem>
    <NavItem>
      <Link href="/Orders">Orders</Link>
    </NavItem>
    <NavItem>
      <Link href="/Account">Account</Link>
    </NavItem>
    <NavItem>
      <Link href="/Cart">Cart</Link>
    </NavItem>
  </StyledNav>
);

export default Nav;
