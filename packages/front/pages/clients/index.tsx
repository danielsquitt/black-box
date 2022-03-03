import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from '../../componets/Button';
import Table from '../../componets/Table';
import { H2, OptionsWrapper, TableWrapper } from '../../componets/PageElements';
import useClient from '../../lib/state/clients';

const PlusIcon = styled(FaPlus)`
  margin: 0 0.5em 0 0;
`;

function Clients() {
  const router = useRouter();

  const [{ data }, { remove }] = useClient();

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
              <th>State/Province</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.name}>
                <td className="img">
                  <img src={e.img} alt="" />
                </td>
                <td>{e.name}</td>
                <td>{e.state}</td>
                <td>{e.country}</td>
                <td>
                  <MdEdit className="button" onClick={() => router.push(`/clients/edit/${e._id}`)} />
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

export default Clients;
