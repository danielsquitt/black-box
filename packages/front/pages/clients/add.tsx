/* eslint-disable  */
import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Button from '../../componets/Button';
import { FormWrapper, H2, OptionsWrapper } from '../../componets/PageElements';
import Form from '../../componets/Form';
import { client } from '../../lib/fetcher';
import useClient from '../../lib/state/clients';
import { ClientData } from '../../lib/types';

function AddClient() {
  const router = useRouter();
  const [{}, { add }] = useClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ClientData>();
  const onSubmit = (data: ClientData) => {
    add(data);
  };

  return (
    <div>
      <H2>Add Client</H2>
      <OptionsWrapper></OptionsWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Company name"
            {...register('name')}
          />
          {errors.name && <span>This field is required</span>}

          <label htmlFor="address">Address</label>
          <input
            className="input"
            type="text"
            id="address"
            placeholder="Company address"
            {...register('address')}
          />
          {errors.address && <span>This field is required</span>}

          <label htmlFor="city">City</label>
          <input
            className="input"
            type="text"
            id="city"
            placeholder="Company city"
            {...register('city')}
          />
          {errors.zip && <span>This field is required</span>}

          <label htmlFor="state">State/Province</label>
          <input
            className="input"
            type="text"
            id="state"
            placeholder="Company state/province"
            {...register('state')}
          />
          {errors.zip && <span>This field is required</span>}

          <label htmlFor="zip">Zip code</label>
          <input
            className="input"
            type="text"
            id="zip"
            placeholder="Company zip code"
            {...register('zip')}
          />
          {errors.zip && <span>This field is required</span>}

          <label htmlFor="country">Country</label>
          <input
            className="input"
            type="text"
            id="country"
            placeholder="Company country"
            {...register('country')}
          />
          {errors.country && <span>This field is required</span>}

          <label htmlFor="CIF">CIF</label>
          <input
            className="input"
            type="text"
            id="cif"
            placeholder="Company cif"
            {...register('cif')}
          />
          {errors.country && <span>This field is required</span>}

          <label htmlFor="img">Logo</label>
          <input
            className="input"
            type="text"
            id="img"
            placeholder="Company logo url"
            {...register('img')}
          />
          {errors.img && <span>This field is required</span>}

          <div className="button-wrapper">
            <Button className="success" type="submit">
              Add
            </Button>
            <Button
              className="warning"
              onClick={() => {
                router.push('/clients');
              }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
}

export default AddClient;
