import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '../componets/Button';

const clients = [
  {
    _id: '6215ed3ab7b2f4feff986c8d',
    name: 'Cervezas Arriaca SL',
    address: 'Avda De La Industria 3 A - Nave 6',
    city: 'Yunquera de Henares, Guadalajara',
    zip: 19210,
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
    zip: 28108,
    country: 'España',
    img: 'https://cdn.shopify.com/s/files/1/0072/8419/5401/files/Logo_Peninsula-03_300x300.png',
    created_at: '2022-02-23T08:15:55.868Z',
    updated_at: '2022-02-23T08:15:55.868Z',
  },
];

const TableWrapper = styled.div`
  display: flex;
`;

const Table = styled.table`
  padding: 1rem 1rem;
  margin: 1rem 2rem;
  width: 100%;
  background-color: #343a40;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  tr {
    border: 2px solid red;
    height: 60px;
  }
  th {
    text-align: left;
    font-size: 1.2em;
  }
  td {
    height: 30px;
    vertical-align: middle;
    padding: 0.1rem 1rem;
    font-size: 1.1em;
  }
  img {
    max-height: 100%;
    max-width: 40px;
    object-fit: contain;
  }
  .img {
    filter: invert(100%) sepia(0%) saturate(7486%) hue-rotate(185deg) brightness(112%)
      contrast(100%);
  }
  .button {
    cursor: pointer;
  }
  .button:hover {
    color: #ffffffcc;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 2rem 0.5rem 2rem;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  margin: 0.5em 0.5em 0.5em 0.5em;
  padding: 0 0 0.2em 0.2em;
  border-bottom: 1px solid #4f5962;
  letter-spacing: 2px;
  font-weight: 500;
`;

const PlusIcon = styled(FaPlus)`
  margin: 0 0.5em 0 0;
`;

function IndexPage() {
  const Edit = (id: string) => {
    console.log('Edit:', id);
  };

  const Delete = (id: string) => {
    console.log('Delete:', id);
  };

  return (
    <div>
      <H2>Clients</H2>
      <OptionsWrapper>
        <Button>
          <PlusIcon />
          Add client
        </Button>
      </OptionsWrapper>
      <TableWrapper>
        <Table>
          <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Adress</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {clients.map((e) => (
            <tr>
              <td className="img">
                <img src={e.img} alt="" />
              </td>
              <td>{e.name}</td>
              <td>{`${e.address} ${e.city}`}</td>
              <td>{e.country}</td>
              <td>
                <MdEdit className="button" onClick={() => Edit(e._id)} />
              </td>
              <td>
                <MdDelete className="button" onClick={() => Delete(e._id)} />
              </td>
            </tr>
          ))}
        </Table>
      </TableWrapper>
    </div>
  );
}

export default IndexPage;
