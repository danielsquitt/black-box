import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import { useForm } from 'react-hook-form';
import useUsers from '../../lib/state/users';
import { UserData } from '../../lib/types';
import Button from '../Button';
import Form from '../Form';
import { FormWrapper, H2, OptionsWrapper } from '../PageElements';

function SetClient() {
  const [, { add }] = useUsers();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = (user_data: UserData) => {
    add({
      ...user_data,
      name: user?.name as string,
    });
  };

  return (
    <>
      <H2>Welcome</H2>
      <OptionsWrapper />
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="company_id">Company Id</label>
          <input
            className="input"
            type="text"
            id="company_id"
            placeholder="Company Id"
            {...register('client_id')}
          />
          {errors.client_id && <span>This field is required</span>}
          <div className="button-wrapper">
            <Button className="success" type="submit">
              Add
            </Button>
          </div>
        </Form>
      </FormWrapper>
    </>
  );
}

export default SetClient;
