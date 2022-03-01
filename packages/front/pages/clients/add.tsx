/* eslint-disable  */
import React from 'react';
import { useRouter } from 'next/router'
import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form';
import Button from '../../componets/Button';
import { FormWrapper, H2, OptionsWrapper } from '../../componets/PageElements';
import Form from '../../componets/Form';
import useClient from '../../lib/state/clients';
import { ClientData } from '../../lib/state/types';

function AddClient() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ClientData>();
  
  const [{ }, { add }] = useClient();
  const onSubmit = (data: ClientData) => {
    console.log("Submit", data)
    add(data)
  };

  return (
    <div>
      <H2>Add Client</H2>
      <OptionsWrapper></OptionsWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input className="input" type="text" id="name" placeholder="Company name" {...register('name')} />
          {errors.name && <span>This field is required</span>}

          <label htmlFor="address">Address</label>
          <input className="input" type="text" id="address" placeholder="Company address" {...register('address')} />
          {errors.address && <span>This field is required</span>}

          <label htmlFor="zip">Zip code</label>
          <input className="input" type="text" id="zip" placeholder="Company zip code" {...register('zip')} />
          {errors.zip && <span>This field is required</span>}

          <label htmlFor="country">Country</label>
          <input className="input" type="text" id="country" placeholder="Company country" {...register('country')} />
          {errors.country && <span>This field is required</span>}

          <label htmlFor="img">Logo</label>
          <input className="input" type="text" id="img" {...register('img')} />
          {errors.img && <span>This field is required</span>}

          <div className="button-wrapper">
            <Button className="success" type='submit'>Add</Button>
            <Button className="warning" onClick={()=>{router.push('/clients')}}>Cancel</Button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
}

export default AddClient;
