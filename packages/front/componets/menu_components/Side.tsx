import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineDeviceTablet, HiUsers } from 'react-icons/hi';
import { GiWaterTank } from 'react-icons/gi';
import { FaBuilding } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
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

function NavListItem({
  active, href, icon, text,
}:
{ active: Boolean, href: string, icon: IconType, text: String }) {
  return (
    <NavItem>
      <Link href={href} passHref>
        <NavLink className={cx({ active })}>
          <NavItemIcon icon={icon} />
          <NavText>{text}</NavText>
        </NavLink>
      </Link>
    </NavItem>
  );
}

function Side({ collapse, setCollapse }:
{ collapse: Boolean, setCollapse: (state: Boolean) => void }) {
  const router = useRouter();

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
          <NavListItem active={router.pathname.includes('/dashboard')} href="/dashboard" icon={MdDashboard} text="Dashboard" />
          <NavListItem active={router.pathname.includes('/tanks')} href="/tanks" icon={GiWaterTank} text="Tanks" />
          <NavListItem active={router.pathname.includes('/devices')} href="/devices" icon={HiOutlineDeviceTablet} text="Devices" />
          <NavListItem active={router.pathname.includes('/clients')} href="/clients" icon={FaBuilding} text="Clients" />
          <NavListItem active={router.pathname.includes('/users')} href="/users" icon={HiUsers} text="Users" />
        </NavSide>
      </AsideWrapper>
    </Aside>
  );
}

export default Side;
