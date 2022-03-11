import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineDeviceTablet, HiUsers } from 'react-icons/hi';
import { GiWaterTank } from 'react-icons/gi';
import { FaBuilding } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { useUser } from '@auth0/nextjs-auth0';
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
  active,
  href,
  icon,
  text,
}: {
  active: Boolean;
  href: string;
  icon: IconType;
  text: String;
}) {
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

function Side({
  collapse,
  setCollapse,
  menu,
}: {
  collapse: Boolean;
  setCollapse: (state: Boolean) => void;
  menu: { dasboard: Boolean; tanks: Boolean; devices: Boolean; clients: Boolean; users: Boolean };
}) {
  const router = useRouter();
  const { user } = useUser();

  return (
    <Aside
      className={cx({ collapse })}
      onMouseEnter={() => setCollapse(false)}
      onMouseLeave={() => setCollapse(true)}
    >
      <AsideWrapper>
        <UserWrapper>
          <UserImg src={user?.picture ?? ''} />
          <UserText>{user?.name ?? ''}</UserText>
          <Logout className={cx({ collapse })} onClick={() => router.push('/api/auth/logout')} />
        </UserWrapper>
        <NavSide>
          {menu.dasboard && (
            <NavListItem
              active={router.pathname.includes('/dashboard')}
              href="/dashboard"
              icon={MdDashboard}
              text="Dashboard"
            />
          )}
          {menu.tanks && (
          <NavListItem
            active={router.pathname.includes('/tanks')}
            href="/tanks"
            icon={GiWaterTank}
            text="Tanks"
          />
          )}
          {menu.devices && (
          <NavListItem
            active={router.pathname.includes('/devices')}
            href="/devices"
            icon={HiOutlineDeviceTablet}
            text="Devices"
          />
          )}
          {menu.clients && (
          <NavListItem
            active={router.pathname.includes('/clients')}
            href="/clients"
            icon={FaBuilding}
            text="Clients"
          />
          )}
          {menu.users && (
          <NavListItem
            active={router.pathname.includes('/users')}
            href="/users"
            icon={HiUsers}
            text="Users"
          />
          )}
        </NavSide>
      </AsideWrapper>
    </Aside>
  );
}

export default Side;
