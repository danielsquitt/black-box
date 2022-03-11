import React, { ReactNode, useEffect, useState } from 'react';
import { Claims, useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useClient from '../lib/state/clients';
import useDevice from '../lib/state/devices';
import useUsers from '../lib/state/users';
import { UserRoleEnum, UserStateEnum } from '../lib/types';
import NavBar from './menu_components/NavBar';
import Side from './menu_components/Side';

const menu_init = {
  dasboard: false,
  tanks: false,
  devices: false,
  clients: false,
  users: false,
};

function LoadData({
  initialUser,
  children,
}: {
  initialUser: Claims | undefined;
  children: ReactNode;
}) {
  const router = useRouter();
  const [, { load: load_client }] = useClient();
  const [, { load: load_device }] = useDevice();
  const [{ current, loading, data_loaded }, { load: load_user, clear: clear_user }] = useUsers();

  const { user } = useUser();

  const [collapse, setCollapse] = useState<Boolean>(true);
  const [nav, setNav] = useState<Boolean>(false);
  const [side, setSide] = useState<Boolean>(false);
  const [menu, setMenu] = useState(menu_init);

  useEffect(() => {
    console.log('CURRENT:', current);

    if (!initialUser && !user) {
      setNav(false);
      setSide(false);
      setMenu(menu_init);
      clear_user();
      router.push({
        pathname: '/api/auth/login',
        query: { returnUrl: router.asPath },
      });
    } else if (data_loaded) {
      console.log('loading', loading, 'current', current);

      // if (current?.state) {
      console.log('User state', current?.state);
      switch (current?.state) {
        case UserStateEnum.PENDING:
          console.log('Case', UserStateEnum.PENDING);
          setNav(true);
          setSide(true);
          setMenu(menu_init);
          router.push({
            pathname: '/pending-client',
          });
          break;
        case UserStateEnum.CONFIRMED:
          console.log('Case', UserStateEnum.CONFIRMED);
          if (current.role === UserRoleEnum.SUPERADMIN) {
            load_client();
          }
          load_device();
          setNav(true);
          setSide(true);
          setMenu({
            dasboard: current.role !== UserRoleEnum.SUPERADMIN,
            tanks: current.role !== UserRoleEnum.SUPERADMIN,
            devices: true,
            clients: current.role === UserRoleEnum.SUPERADMIN,
            users: current.role !== UserRoleEnum.PROD,
          });
          router.push({
            pathname: '/',
          });
          break;
        case UserStateEnum.DENY:
          console.log('Case', UserStateEnum.DENY);
          setNav(false);
          setSide(false);
          setMenu(menu_init);
          break;
        default:
          console.log('Case', 'default');
          setNav(true);
          setSide(true);
          setMenu(menu_init);
          router.push({
            pathname: '/set-client',
          });
          break;
      }
    } else {
      console.log('Load data');
      setNav(false);
      setSide(false);
      setMenu(menu_init);

      load_user(user?.sub);
    }
  }, [current?.state, data_loaded]);

  return (
    <>
      {nav && <NavBar setCollapse={setCollapse} />}
      {side && <Side menu={menu} collapse={collapse} setCollapse={setCollapse} />}
      <main>{children}</main>
    </>
  );
}

export default LoadData;
