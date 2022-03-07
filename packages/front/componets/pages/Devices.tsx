import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '../Button';
import Table from '../Table';
import { H2, OptionsWrapper, TableWrapper } from '../PageElements';
import useDevice from '../../lib/state/devices';
import useClient from '../../lib/state/clients';

const PlusIcon = styled(FaPlus)`
  margin: 0 0.5em 0 0;
`;

function Devices() {
  const router = useRouter();

  const [{ data: data_device }, { remove }] = useDevice();
  const [{ data: data_client }] = useClient();

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
            {data_device.map((device) => (
              <tr key={device.alias}>
                <td>{device.alias}</td>
                <td>{data_client.find((client) => client._id === device.client_id)?.name}</td>
                <td>{`${device.type} (${device.version})`}</td>
                <td>{device.sw_v}</td>
                <td>
                  <MdEdit
                    className="button"
                    onClick={() => router.push(`/devices/edit/${device._id}`)}
                  />
                </td>
                <td>
                  <MdDelete className="button" onClick={() => remove(device._id)} />
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
