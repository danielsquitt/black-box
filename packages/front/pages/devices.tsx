import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '../componets/Button';
import Table from '../componets/Table';
import { H2, OptionsWrapper, TableWrapper } from '../componets/PageElements';

const devices = [
  {
    _id: '6215ed3bb7b2f4feff986c94',
    name: 'CPCTRL_0722_0001',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3ab7b2f4feff986c8d',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c96',
    name: 'CPCTRL_0722_0002',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3ab7b2f4feff986c8d',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c98',
    name: 'CPCTRL_0722_0003',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3ab7b2f4feff986c8d',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c9a',
    name: 'CPCTRL_0722_0004',
    type: 'Type 2',
    version: '1.1.0',
    sw_v: '0.1.0',
    client_id: '6215ed3ab7b2f4feff986c8d',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c9c',
    name: 'CPCTRL_0722_0005',
    type: 'Type 2',
    version: '1.1.0',
    sw_v: '0.1.0',
    client_id: '6215ed3ab7b2f4feff986c8d',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986c9f',
    name: 'CPCTRL_0722_0006',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3bb7b2f4feff986c90',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986ca1',
    name: 'CPCTRL_0722_0007',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3bb7b2f4feff986c92',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986ca3',
    name: 'CPCTRL_0722_0008',
    type: 'Type 2',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3bb7b2f4feff986c92',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986ca5',
    name: 'CPCTRL_0722_0009',
    type: 'Type 2',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3bb7b2f4feff986c92',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
  {
    _id: '6215ed3bb7b2f4feff986ca7',
    name: 'CPCTRL_0722_0010',
    type: 'Type 2',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: '6215ed3bb7b2f4feff986c92',
    created_at: '2022-02-23T08:15:55.871Z',
    updated_at: '2022-02-23T08:15:55.871Z',
  },
];

const PlusIcon = styled(FaPlus)`
  margin: 0 0.5em 0 0;
`;

function Devices() {
  const router = useRouter();

  const Delete = (id: string) => {
    console.log('Delete:', id);
  };

  return (
    <div>
      <H2>Devices</H2>
      <OptionsWrapper>
        <Link href="devices/add">
          <Button className="success">
            <PlusIcon />
            Add device
          </Button>
        </Link>
      </OptionsWrapper>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Client</th>
              <th>Type</th>
              <th>SW Version</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((e) => (
              <tr key={e.name}>
                <td>{e.name}</td>
                <td>{e.client_id}</td>
                <td>{`${e.type} (${e.version})`}</td>
                <td>{e.sw_v}</td>
                <td>
                  <MdEdit className="button" onClick={() => router.push(`/devices/edit/${e._id}`)} />
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

export default Devices;
