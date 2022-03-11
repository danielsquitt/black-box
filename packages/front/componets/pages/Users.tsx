import React from 'react';
import { MdDelete, MdDone, MdClear } from 'react-icons/md';
import cx from 'classnames';
import useUsers from '../../lib/state/users';
import { H2, OptionsWrapper, TableWrapper } from '../PageElements';
import Table from '../Table';
import { UserStateEnum } from '../../lib/types';

function Users() {
  const [{ data: data_user }, { edit, remove }] = useUsers();
  return (
    <>
      <H2>Users</H2>
      <OptionsWrapper />
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Client</th>
              <th>State</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data_user.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.client_id}</td>
                <td
                  className={cx(
                    { success: user.state === UserStateEnum.CONFIRMED },
                    { 'warning-light': user.state === UserStateEnum.PENDING },
                    { danger: user.state === UserStateEnum.DENY },
                  )}
                  style={{ textTransform: 'uppercase' }}
                >
                  {user.state}

                </td>
                <td>
                  {user.state !== UserStateEnum.CONFIRMED && (
                  <button className="no-button" type="button">
                    <MdDone
                      className="button success"
                      onClick={() => { edit(user._id, { state: UserStateEnum.CONFIRMED }); }}
                    />
                  </button>
                  )}
                </td>
                <td>
                  {user.state !== UserStateEnum.DENY && (
                  <button className="no-button" type="button">
                    <MdClear
                      className="button danger"
                      onClick={() => { edit(user._id, { state: UserStateEnum.DENY }); }}
                    />
                  </button>
                  )}
                </td>
                <td>
                  <button className="no-button" type="button">
                    <MdDelete className="button danger" onClick={() => { remove(user._id); }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
}

export default Users;
