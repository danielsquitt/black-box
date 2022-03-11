import React, { useState, useEffect } from 'react';
import {
  MdDelete, MdDone, MdClear,
} from 'react-icons/md';
import {
  IoMdArrowRoundDown, IoMdArrowRoundUp,
} from 'react-icons/io';
import cx from 'classnames';
import useUsers from '../../lib/state/users';
import { H2, OptionsWrapper, TableWrapper } from '../PageElements';
import Table from '../Table';
import { UserRoleEnum, UserStateEnum } from '../../lib/types';
import useClient from '../../lib/state/clients';

function Role({ id, role, onClick }:
{ id:string, role:UserRoleEnum, onClick: (id: string, new_role: UserRoleEnum) => void }) {
  const [next, setNext] = useState<UserRoleEnum | undefined>(undefined);
  const [prev, setPrev] = useState<UserRoleEnum | undefined>(undefined);
  const [{ current }] = useUsers();

  useEffect(() => {
    switch (role) {
      case UserRoleEnum.SUPERADMIN:
        setNext(undefined);
        setPrev(UserRoleEnum.ADMIN);
        break;
      case UserRoleEnum.ADMIN:
        if (current?.role === UserRoleEnum.SUPERADMIN) {
          setNext(UserRoleEnum.SUPERADMIN);
          setPrev(UserRoleEnum.PROD);
        } else {
          setNext(undefined);
          setPrev(UserRoleEnum.PROD);
        }
        break;
      case UserRoleEnum.PROD:
        setNext(UserRoleEnum.ADMIN);
        setPrev(undefined);
        break;
      default:
        setNext(undefined);
        setPrev(undefined);
        break;
    }
  }, [role]);

  return (
    <>
      <div style={{
        textTransform: 'uppercase', display: 'inline', marginRight: '0.5rem',
      }}
      >
        {role.substr(0, 5)}
      </div>
      <div style={{ display: 'inline-flex', flexWrap: 'nowrap' }}>
        {prev && (
        <button className="no-button" type="button" onClick={() => onClick(id, prev)}>
          <IoMdArrowRoundDown className="button success-light" />
        </button>
        )}
        {next && (
        <button className="no-button" type="button" onClick={() => onClick(id, next)}>
          <IoMdArrowRoundUp className="button success-light" />
        </button>
        )}
      </div>
    </>
  );
}

function Users() {
  const [{ data: data_user }, { edit, remove }] = useUsers();
  const [{ data: data_client }] = useClient();
  const [{ current }] = useUsers();

  const onClick = (id:string, new_role: UserRoleEnum) => {
    if (!new_role) return;
    edit(id, { role: new_role });
  };
  return (
    <>
      <H2>Users</H2>
      <OptionsWrapper />
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              {(current?.role === UserRoleEnum.SUPERADMIN && <th>Client</th>)}
              <th>Role</th>
              <th>State</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data_user.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                {current?.role === UserRoleEnum.SUPERADMIN && (
                  <td>{data_client.find((client) => client._id === user.client_id)?.name}</td>
                )}
                <td><Role id={user._id} role={user.role} onClick={onClick} /></td>
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
                  <button className="no-button" type="button" title="Confirm user">
                    <MdDone
                      className="button success"
                      onClick={() => { edit(user._id, { state: UserStateEnum.CONFIRMED }); }}
                    />
                  </button>
                  )}
                </td>
                <td>
                  {user.state !== UserStateEnum.DENY && (
                  <button className="no-button" type="button" title="Deny user">
                    <MdClear
                      className="button danger-light"
                      onClick={() => { edit(user._id, { state: UserStateEnum.DENY }); }}
                    />
                  </button>
                  )}
                </td>
                <td>
                  <button className="no-button" type="button" title="Delete user">
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
