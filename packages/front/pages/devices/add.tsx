import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Button from '../../componets/Button';
import { FormWrapper, H2, OptionsWrapper } from '../../componets/PageElements';
import Form from '../../componets/Form';
import useDevice from '../../lib/state/devices';
import { DeviceData } from '../../lib/types';
import useClient from '../../lib/state/clients';

function AddDevice() {
  const router = useRouter();
  const [, { add }] = useDevice();
  const [{ data }] = useClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeviceData>();

  const onSubmit = (device_data: DeviceData) => {
    add(device_data);
    router.push('/devices');
  };

  return (
    <>
      <H2>Add Device</H2>
      <OptionsWrapper />
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

          <label htmlFor="client_id">Client</label>
          <select className="input" id="client_id" {...register('client_id')}>
            <option value="">Select...</option>
            {data.map((e) => (
              <option value={e._id}>{e.name}</option>
            ))}
          </select>

          <div className="button-wrapper">
            <Button className="success" type="submit">
              Add
            </Button>
            <Button
              className="warning"
              onClick={() => {
                router.push('/devices');
              }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </FormWrapper>
    </>
  );
}

export default AddDevice;
