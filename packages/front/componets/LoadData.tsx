import React, { useEffect } from 'react';
import useClient from '../lib/state/clients';
import useDevice from '../lib/state/devices';

function LoadData() {
  const [, { load: load_client }] = useClient();
  const [, { load: load_device }] = useDevice();

  useEffect(() => {
    load_client(true);
    load_device(true);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

export default LoadData;
