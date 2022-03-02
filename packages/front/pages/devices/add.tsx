/* eslint-disable  */
import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import Button from '../../componets/Button';
import { FormWrapper, H2, OptionsWrapper } from '../../componets/PageElements';
import Form from '../../componets/Form';
import useDevice from '../../lib/state/devices';
import { DeviceData } from '../../lib/types';

function AddDevice() {
  const router = useRouter()
  const [{}, { add }] = useDevice();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DeviceData>();
  const onSubmit = (data: DeviceData) => {
    add(data);
  };

  return (
    <div>
      <H2>Add Device</H2>
      <OptionsWrapper></OptionsWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="alias">Alias</label>
          <input
            className="input"
            type="text"
            id="alias"
            placeholder="Device name"
            {...register('alias')}
          />
          {errors.alias && <span>This field is required</span>}

          <label htmlFor="type">Type</label>
          <input
            className="input"
            type="text"
            id="type"
            placeholder="Device type"
            {...register('type')}
          />
          {errors.type && <span>This field is required</span>}

          <label htmlFor="version">Version</label>
          <input
            className="input"
            type="text"                                                   
            id="version"
            placeholder="Company zip code"
            {...register('version')}
          />
          {errors.version && <span>This field is required</span>}

          <label htmlFor="sw_v">Software version</label>
          <input
            className="input"
            type="text"
            id="sw_v"
            placeholder="Device software version"
            {...register('sw_v')}
          />
          {errors.sw_v && <span>This field is required</span>}

          <label htmlFor="client_id">Client Id</label>
          <input
            className="input"
            type="text"
            id="client_id"
            placeholder="Client Id"
            {...register('client_id')}
          />
          {errors.client_id && <span>This field is required</span>}

          <div className="button-wrapper">
            <Button className="success" type='submit'>Add</Button>
            <Button className="warning" onClick={()=>{router.push(`/devices`)}}>Cancel</Button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
}

export default AddDevice;
