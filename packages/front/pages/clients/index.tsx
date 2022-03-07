import dynamic from 'next/dynamic';
import React from 'react';

const Clients = dynamic(() => import('../../componets/pages/Clients'), { ssr: false });

function ClientsPage() {
  return (
    <Clients />
  );
}

export default ClientsPage;
