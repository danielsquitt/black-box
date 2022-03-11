import React, { useState } from 'react';
import NavBar from './menu_components/NavBar';
import Side from './menu_components/Side';

function Menu({ nav, side }:{ nav:boolean, side: boolean }) {
  const [collapse, setCollapse] = useState<Boolean>(true);
  return (
    <>
      {nav && <NavBar setCollapse={setCollapse} />}
      {side && <Side collapse={collapse} setCollapse={setCollapse} />}
    </>
  );
}
export default Menu;
