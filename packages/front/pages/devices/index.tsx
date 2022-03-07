import React from 'react';
import dynamic from 'next/dynamic';

const Devices = dynamic(() => import('../../componets/pages/Devices'), { ssr: false });

function DevicesPages() {
  return (
    <Devices />
  );
}

export default DevicesPages;
