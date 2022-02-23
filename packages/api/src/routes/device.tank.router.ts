import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { FilterQuery } from 'mongoose';
import { isValidId } from '../lib/db';
import { FastifyBodyRequest } from '../types/types';
import DeviceTank, { iDeviceTank } from '../models/device-tank.models';

type DeviceTankQuery = {
  device_id?: string
  tank_id?: string
};

type FastifyQueryRequest = FastifyRequest<{
  Querystring: DeviceTankQuery
}>;

const get_device_tank = async (request: FastifyQueryRequest, reply: FastifyReply) => {
  const { query }: FilterQuery<iDeviceTank> = request;
  if (!query.device_id && !query.tank_id) {
    reply.code(400).send({ message: 'One param of \'device_id\' or \'tank_id\' required' });
  }
  if (!isValidId(query.device_id) && query.device_id) {
    reply.code(400).send({ message: `Device Id: ${query.device_id} is not a valid Id` });
  }
  if (!isValidId(query.tank_id) && query.tank_id) {
    reply.code(400).send({ message: `Tank Id: ${query.tank_id} is not a valid Id` });
  }
  DeviceTank.findOne(query).lean()
    .then((data) => {
      if (data) {
        reply.code(200).send(data);
      } else {
        reply.code(404).send({ message: `Not link found for ${query.device_id ? `Device Id: ${query.device_id}` : `Tank Id: ${query.tank_id}`}` });
      }
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
};

const link_device_tank = async (request: FastifyBodyRequest<any>, reply: FastifyReply) => {
  if (!isValidId(request.body.device_id)) {
    reply.code(400).send({ message: `Device Id: ${request.body.device_id} is not a valid Id` });
  }
  if (!isValidId(request.body.tank_id)) {
    reply.code(400).send({ message: `Tank Id: ${request.body.tank_id} is not a valid Id` });
  }

  DeviceTank.create(request.body).then((data) => {
    reply.code(200).send(data);
    console.log(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
    console.log(error);
  });
};

const unlink_device_tank = async (request: FastifyQueryRequest, reply: FastifyReply) => {
  const { query }: FilterQuery<iDeviceTank> = request;
  if (!query.device_id || !query.tank_id) {
    reply.code(400).send({ message: 'Both params \'device_id\' or \'tank_id\' are required' });
  }
  if (!isValidId(query.device_id)) {
    reply.code(400).send({ message: `Device Id: ${query.device_id} is not a valid Id` });
  }
  if (!isValidId(query.tank_id)) {
    reply.code(400).send({ message: `Tank Id: ${query.tank_id} is not a valid Id` });
  }
  DeviceTank.deleteOne(query).lean()
    .then((data) => {
      if (data) {
        reply.code(200).send(data);
      } else {
        reply.code(404).send({ message: `Not link found for ${query.device_id ? `Device Id: ${query.device_id}` : `Tank Id: ${query.tank_id}`}` });
      }
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
};

const device_tank_router: FastifyPluginAsync = async (app) => {
  app.get<{ Querystring: DeviceTankQuery }>('/', get_device_tank);
  app.put('/', link_device_tank);
  app.delete('/', unlink_device_tank);
};

export default device_tank_router;
