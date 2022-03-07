import React, { useState } from 'react';
import NavBar from './menu_components/NavBar';
import Side from './menu_components/Side';

function Menu() {
  const [collapse, setCollapse] = useState<Boolean>(true);
  return (
    <>
      <NavBar setCollapse={setCollapse} />
      <Side collapse={collapse} setCollapse={setCollapse} />
    </>
  );
}
export default Menu;
