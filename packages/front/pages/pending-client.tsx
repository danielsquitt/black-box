import React from 'react';
import styled from 'styled-components';
import { H2, OptionsWrapper } from '../componets/PageElements';
import useUsers from '../lib/state/users';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    text-align: center
  }
  .black{
    font-weight: bold ;
    color: #ff7b00;
  }
`;

function pendingClient() {
  const [{ current }] = useUsers();
  return (
    <>
      <H2>Welcome</H2>
      <OptionsWrapper />
      <Wrapper>
        <p>Your request has been send to:</p>
        <p className="black">{current?.client_id}</p>
        <p>Contact your administrador to get access </p>
      </Wrapper>
    </>
  );
}

export default pendingClient;
