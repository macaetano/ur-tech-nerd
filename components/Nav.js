import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease-in-out;

  &.menu-open {
    width: 200px;
    height: 275px;
  }
  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: var(--background);
    box-shadow: var(--box-shadow);
    flex-direction: column;
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;

const StyledNavItem = styled.h3`
  margin-right: 1rem;
  padding: 1rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--secondary);
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: ${(props) =>
      props.isActive ? "var(--red)" : "transparent"};
  }
  a:hover {
    border-bottom-color: var(--red);
  }
`;

const MobileHambuger = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const MobileMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  &.menu-open {
    display: block;
  }
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavItem = ({ title }) => {
    const { pathname } = useRouter();
    const routeName = `/${title}`;
    return (
      <StyledNavItem
        isActive={pathname === routeName}
        onClick={() => setMenuOpen(false)}
      >
        <Link href={routeName}>{title}</Link>
      </StyledNavItem>
    );
  };

  return (
    <div>
      <MobileHambuger onClick={() => setMenuOpen(!menuOpen)}>
        <h2>🍔</h2>
      </MobileHambuger>

      <StyledNav className={menuOpen ? "menu-open" : ""}>
        <NavItem title="Buy" />
        <NavItem title="Sell" />
        <NavItem title="Orders" />
        <NavItem title="Account" />
        <NavItem title="Cart" />
      </StyledNav>
      <MobileMenuWrapper
        onClick={() => setMenuOpen(false)}
        className={menuOpen ? "menu-open" : ""}
      />
    </div>
  );
};

export default Nav;
