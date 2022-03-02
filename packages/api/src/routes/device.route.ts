import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { isValidId } from '../lib/db';
import Device from '../models/device.model';
import { FastifyParamIdRequest, FastifyPrmIdBodyRequest } from '../types/types';

const list_devices = async (request: FastifyRequest, reply: FastifyReply) => {
  Device.find().lean().then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
  return reply;
};

const get_device_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  }
  Device.findById(id).lean()
    .then((data) => {
      if (data) {
        reply.code(200).send(data);
      } else {
        reply.code(404).send({ message: `device with id ${id} not found` });
      }
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
  return reply;
};

const new_device = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  Device.create(request.body).then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
  return reply;
};

const update_device_by_id = async (request: FastifyPrmIdBodyRequest<any>, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    Device.findByIdAndUpdate(id, request.body).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `user with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
  return reply;
};

const delete_device_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    Device.findByIdAndDelete(id).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `user with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
  return reply;
};

const device_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_devices);
  app.get('/:id', get_device_byId);
  app.post('/', new_device);
  app.post('/:id', update_device_by_id);
  app.delete('/:id', delete_device_by_id);
};

export default device_router;
