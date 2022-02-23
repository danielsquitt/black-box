import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { FastifyParamIdRequest } from '../../types/types';

const list_devices = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'get devices: status OK' });
  reply.code(200);
};

const get_device_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'get devices by id: status OK',
    id,
  });
  reply.code(200);
};

const new_device = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'new devices: status OK' });
  reply.code(200);
};

const update_device_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'get devices by id: status OK',
    id,
  });
  reply.code(200);
};

const delete_device_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'delete devices by id: status OK',
    id,
  });
  reply.code(200);
};

const device_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_devices);
  app.get('/:id', get_device_byId);
  app.post('/', new_device);
  app.post('/:id', update_device_by_id);
  app.delete('/:id', delete_device_by_id);
};

export default device_router;
