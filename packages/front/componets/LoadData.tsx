import { Claims, useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import useClient from '../lib/state/clients';
import useDevice from '../lib/state/devices';
import useUsers from '../lib/state/users';
import { UserStateEnum } from '../lib/types';

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
  const [{ current, loading }, { load: load_user }] = useUsers();

  const { user } = useUser();

  useEffect(() => {
    console.log('USER', initialUser);
    if (!initialUser && !user) {
      router.push({
        pathname: '/api/auth/login',
        query: { returnUrl: router.asPath },
      });
    } else {
      load_user(true, user?.sub);
      if (!loading) {
        console.log('User state', current?.state);
        switch (current?.state) {
          case UserStateEnum.PENDING:
            break;
          case UserStateEnum.CONFIRMED:
            load_client(true);
            load_device(true);
            break;
          case UserStateEnum.DENY:
            break;
          default:
            break;
        }
      }
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (initialUser || user) return children;
  return null;
}

export default LoadData;
