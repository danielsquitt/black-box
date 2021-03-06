import React from 'react';
import styled from 'styled-components';

import { MdLogout } from 'react-icons/md';
import { IconType } from 'react-icons/lib';

export const Nav = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.size.navbar};
  background-color: ${(props) => props.theme.color.navbar.background};
  color: ${(props) => props.theme.color.navbar.color};
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

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-inline-start: 0;
  &.right {
    margin-left: auto;
  }
`;

export const BrandWrapper = styled.a`
  display: flex;
  align-items: center;
`;

export const BrandLogo = styled.img`
  max-height: 48px;
  max-width: 48px;
  border-radius: 50%;
`;

export const BrandText = styled.div`
margin: auto;
padding: 0.1em 0.5em;
font-size: 30px;
font-family: "Segoe UI";
font-weight: 400 ;
text-shadow: 0px 0px 2px white;
letter-spacing: -1px;
`;

export const Aside = styled.aside`
  height: 100%;
  width: ${(props) => props.theme.size.sidebar};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.sidebar.background};
  color: ${(props) => props.theme.color.sidebar.color};
  overflow-x: hidden;
  transition: width 0.3s ease-in-out 0.1s;

  &.collapse {
    width: ${(props) => props.theme.size.sidebar_collapse};
  }
`;

export const AsideWrapper = styled.div`
  position: relative;
  top: ${(props) => props.theme.size.navbar};
  padding: 0 5px;
`;
export const NavSide = styled.ul`
  padding: 1em 0;
`;

export const NavItem = styled.li``;
export const NavLink = styled.a`
  /* margin-bottom: 0.2rem; */
  display: flex;
  align-items: center;
  /* border-radius: 0.25rem; */
  text-decoration: none;
  background-color: transparent;
  &:visited {
    color: ${(props) => props.theme.color.sidebar.color};
  }
  &:hover {
    background-color: ${(props) => props.theme.color.sidebar.hover};
  }
  &.active {
    color: ${(props) => props.theme.color.sidebar.background};
    background-color: ${(props) => props.theme.color.sidebar.color};
  }
`;

export const NavText = styled.p`
  font-family: "Segoe UI";
  font-weight: 300;
  font-size: 20px;
  white-space: nowrap;
  display: inline;
  transition-property: display;
  transition-delay: 0.5s;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export function NavItemIcon({ icon }:
{ icon: IconType }) {
  const IconElemnt = styled(icon)`
    display: inline-block;
    height: 30px;
    width: 30px;
    margin: 10px 20px;
    flex-shrink: 0;
  `;
  return <IconElemnt />;
}

export const UserWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px solid #4f5962;
`;

export const UserImg = styled.img`
  max-height: 50px;
  max-width: 50px;
  margin: 7px;
  border-radius: 50%;
`;

export const UserText = styled.div`
  position: relative;
  margin: auto;
  padding: 0.1em 0.5em;
  font-size: 20px;
  font-family: 'Segoe UI';
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: -1px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Logout = styled(MdLogout)`
  color: #ad0606;
  width: 50px;
  display: block;
  flex-shrink: 1;
  font-size: 1.8rem;
  cursor: pointer;
  &.collapse {
    visibility: hidden;
  }
`;
