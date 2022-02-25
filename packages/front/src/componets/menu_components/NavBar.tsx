import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 66px;
  background-color: grey;
  color: #1f2d3d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  &.right {
    margin-left: auto;
  }
`;

const BrandWrapper = styled.a`
  display: flex;
  align-items: center;
`;

const BrandLogo = styled.img`
  max-height: 45px;
  max-width: 45px;
`;

const BrandText = styled.div`
margin: auto;
padding: 0.1em 0.5em;
font-size: 30px;
font-family: "Segoe UI";
font-weight: 400 ;
color: white;
letter-spacing: -1px;
`;

function NavBar({ setCollapse }) {
  return (
    <Nav>
      <NavMenu>
        <BrandWrapper onClick={() => { setCollapse((state) => !state); }}>
          <BrandLogo src="https://brand.corecode.school/logos/logo_ball.svg" />
          <BrandText>Brand Text</BrandText>
        </BrandWrapper>
      </NavMenu>
      <NavMenu className="right" />
    </Nav>
  );
}

export default NavBar;
