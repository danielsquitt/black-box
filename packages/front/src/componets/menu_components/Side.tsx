import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineDeviceTablet, HiUsers } from 'react-icons/hi';
import { GiWaterTank } from 'react-icons/gi';
import { FaBuilding } from 'react-icons/fa';
import {
  Aside,
  AsideWrapper,
  Logout,
  NavItem,
  NavItemIcon,
  NavLink,
  NavSide,
  NavText,
  UserImg,
  UserText,
  UserWrapper,
} from './styled.elements';

function Side({ collapse, setCollapse }:
{ collapse: Boolean, setCollapse: (state: Boolean) => void }) {
  return (
    <Aside
      className={cx({ collapse })}
      onMouseEnter={() => setCollapse(false)}
      onMouseLeave={() => setCollapse(true)}
    >
      <AsideWrapper>
        <UserWrapper>
          <UserImg src="https://media-exp1.licdn.com/dms/image/C5603AQHL16fDhzVTCQ/profile-displayphoto-shrink_200_200/0/1516828914548?e=1648684800&v=beta&t=b7PAWOoKy8pWEYT6FfYFdAlq4At95hSp_jSQmiguzSU" />
          <UserText>Daniel Squittieri Gomez</UserText>
          <Logout className={cx({ collapse })} />
        </UserWrapper>
        <NavSide>
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
        </NavSide>
      </AsideWrapper>
    </Aside>
  );
}

export default Side;
