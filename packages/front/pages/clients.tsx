import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '../componets/Button';
import Table from '../componets/Table';
import { H2, OptionsWrapper, TableWrapper } from '../componets/PageElements';

const clients = [
  {
    _id: '6215ed3ab7b2f4feff986c8d',
    name: 'Cervezas Arriaca SL',
    address: 'Avda De La Industria 3 A - Nave 6',
    city: 'Yunquera de Henares, Guadalajara',
    zip: '19210',
    country: 'España',
    img: 'https://arriaca.es/wp-content/uploads/2021/01/Arriaca-Favicon.png',
    created_at: '2022-02-23T08:15:54.197Z',
    updated_at: '2022-02-23T08:15:54.197Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c90',
    name: 'Maresme Brewery Sl.',
    address: 'Calle Empedrat del Marxant, 1 - P 2 PTA. 3',
    city: 'Alella, Barcelona',
    zip: '08328',
    country: 'España',
    img: 'https://cdn.shopify.com/s/files/1/0254/8852/3345/files/MB_Logo_LLetres_300x300.png',
    created_at: '2022-02-23T08:15:55.863Z',
    updated_at: '2022-02-23T08:15:55.863Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c92',
    name: 'Cervecera Peninsula SL',
    address: 'Calle de la Granja, 5',
    city: 'Alcobendas, Madrid',
    zip: '28108',
    country: 'España',
    img: 'https://cdn.shopify.com/s/files/1/0072/8419/5401/files/Logo_Peninsula-03_300x300.png',
    created_at: '2022-02-23T08:15:55.868Z',
    updated_at: '2022-02-23T08:15:55.868Z',
  },
];

const PlusIcon = styled(FaPlus)`
  margin: 0 0.5em 0 0;
`;

function Clients() {
  const router = useRouter();

  const Delete = (id: string) => {
    console.log('Delete:', id);
  };

  return (
    <div>
      <H2>Clients</H2>
      <OptionsWrapper>
        <Link href="clients/add">
          <Button className="success">
            <PlusIcon />
            Add client
          </Button>
        </Link>
      </OptionsWrapper>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th>Adress</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((e) => (
              <tr key={e.name}>
                <td className="img">
                  <img src={e.img} alt="" />
                </td>
                <td>{e.name}</td>
                <td>{`${e.address} ${e.city}`}</td>
                <td>{e.country}</td>
                <td>
                  <MdEdit className="button" onClick={() => router.push(`/clients/edit/${e._id}`)} />
                </td>
                <td>
                  <MdDelete className="button" onClick={() => Delete(e._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default Clients;
