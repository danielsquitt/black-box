/* eslint-disable  */
import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import Button from '../../../componets/Button';
import { FormWrapper, H2, OptionsWrapper } from '../../../componets/PageElements';
import Form from '../../../componets/Form';

function AddDevice() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => console.log('Submit');

  return (
    <div>
      <H2>Add Device</H2>
      <OptionsWrapper></OptionsWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Device name"
            {...register('name')}
          />
          {errors.name && <span>This field is required</span>}

          <label htmlFor="type">Type</label>
          <input
            className="input"
            type="text"
            id="type"
            placeholder="Device type"
            {...register('type')}
          />
          {errors.address && <span>This field is required</span>}

          <label htmlFor="version">Version</label>
          <input
            className="input"
            type="text"                                                   
            id="version"
            placeholder="Company zip code"
            {...register('version')}
          />
          {errors.zip && <span>This field is required</span>}

          <label htmlFor="sw_v">Software version</label>
          <input
            className="input"
            type="text"
            id="sw_v"
            placeholder="Device software version"
            {...register('sw_v')}
          />
          {errors.country && <span>This field is required</span>}

          <label htmlFor="client_id">Client Id</label>
          <input
            className="input"
            type="text"
            id="client_id"
            placeholder="Client Id"
            {...register('Device client_id')}
          />
          {errors.country && <span>This field is required</span>}

          <div className="button-wrapper">
            <Button className="success" type='submit'>Save</Button>
            <Button className="warning" onClick={()=>{router.push(`/devices`)}}>Cancel</Button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
}

export default AddDevice;
