import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineDeviceTablet, HiUsers } from 'react-icons/hi';
import { GiWaterTank } from 'react-icons/gi';
import { FaBuilding } from 'react-icons/fa';
import User from './User';

const Aside = styled.aside`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  transition: width 0.3s ease-in-out 0.1s;

  &.collapse {
    width: 80px;
  }
`;

const AsideWrapper = styled.div`
  position: relative;
  top: 66px;
  padding: 0 5px;
`;
const Nav = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  padding: 1em 0;
`;

const NavItem = styled.li``;
const NavLink = styled.a`
  color: #fffafa;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  text-decoration: none;
  background-color: transparent;
  &:visited {
    color: #fffafa;
  }
  &:hover {
    background-color: #ffffff2b;
  }
  &.active {
    color: #000000;
    background-color: #fcfcfcf9;
  }
`;

const NavText = styled.p`
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

function NavItemIcon({ icon }) {
  const Iconelemnt = styled(icon)`
    display: inline-block;
    height: 30px;
    width: 30px;
    margin: 10px 20px;
    flex-shrink: 0;
  `;
  return <Iconelemnt />;
}

function Side({ collapse, setCollapse }) {
  return (
    <Aside
      className={cx({ collapse })}
      onMouseEnter={() => setCollapse(false)}
      onMouseLeave={() => setCollapse(true)}
    >
      <AsideWrapper>
        <User collapse={collapse} />
        <Nav>
          <NavItem>
            <Link href="/dashboard" passHref>
              <NavLink className="active">
                <NavItemIcon icon={MdDashboard} />
                <NavText>Dashboard</NavText>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/tanks" passHref>
              <NavLink>
                <NavItemIcon icon={GiWaterTank} />
                <NavText>Tanks</NavText>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/devices" passHref>
              <NavLink>
                <NavItemIcon icon={HiOutlineDeviceTablet} />
                <NavText>Devices</NavText>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/clients" passHref>
              <NavLink>
                <NavItemIcon icon={FaBuilding} />
                <NavText>Clients</NavText>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/users" passHref>
              <NavLink>
                <NavItemIcon icon={HiUsers} />
                <NavText>Users</NavText>
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </AsideWrapper>
    </Aside>
  );
}

export default Side;
