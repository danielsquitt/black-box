import React from 'react';
import Clock from './Clock';
import FullScreenButton from './FullScreenButton';
import {
  BrandLogo,
  BrandText,
  BrandWrapper,
  Nav,
  NavMenu,
} from './styled.elements';// (state: Boolean) => Boolean

function NavBar({ setCollapse }:
{ setCollapse: (fn: (state: Boolean) => Boolean) => void }) {
  return (
    <Nav>
      <NavMenu>
        <BrandWrapper onClick={() => { setCollapse((state: Boolean) => !state); }}>
          <BrandLogo src="https://brand.corecode.school/logos/logo_ball.svg" />
          <BrandText>Brand Text</BrandText>
        </BrandWrapper>
      </NavMenu>
      <NavMenu className="right">
        <FullScreenButton />
        <Clock />
      </NavMenu>
    </Nav>
  );
}

export default NavBar;
