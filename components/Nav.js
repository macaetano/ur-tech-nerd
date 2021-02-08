import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.h3`
  margin-right: 1rem;
  padding: 1rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--black);
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: ${(props) =>
      props.isActive ? "var(--red)" : "transparent"};
  }
  a:hover {
    border-bottom-color: var(--red);
  }
`;

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <StyledNav>
      <NavItem isActive={pathname === "/Buy"}>
        <Link href="/Buy">Buy</Link>
      </NavItem>
      <NavItem isActive={pathname === "/Sell"}>
        <Link href="/Sell">Sell</Link>
      </NavItem>
      <NavItem isActive={pathname === "/Orders"}>
        <Link href="/Orders">Orders</Link>
      </NavItem>
      <NavItem isActive={pathname === "/Account"}>
        <Link href="/Account">Account</Link>
      </NavItem>
      <NavItem isActive={pathname === "/Cart"}>
        <Link href="/Cart">Cart</Link>
      </NavItem>
    </StyledNav>
  );
};

export default Nav;
