import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '../../componets/Button';
import Table from '../../componets/Table';
import { H2, OptionsWrapper, TableWrapper } from '../../componets/PageElements';
import useDevice from '../../lib/state/devices';

const PlusIcon = styled(FaPlus)`
  margin: 0 0.5em 0 0;
`;

function Devices() {
  const router = useRouter();

  const [{ data }, { load, remove }] = useDevice();

  useEffect(() => { load(true); }, []);

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
            {data.map((e) => (
              <tr key={e.alias}>
                <td>{e.alias}</td>
                <td>{e.client_id}</td>
                <td>{`${e.type} (${e.version})`}</td>
                <td>{e.sw_v}</td>
                <td>
                  <MdEdit className="button" onClick={() => router.push(`/devices/edit/${e._id}`)} />
                </td>
                <td>
                  <MdDelete className="button" onClick={() => remove(e._id)} />
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
